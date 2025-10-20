package at.crowdware.sms.lexer

import at.crowdware.sms.LexError
import at.crowdware.sms.Position

/**
 * Lexical analyzer that converts source code text into tokens with position tracking.
 */
class Lexer(private val input: String) {
    private var current = 0
    private var line = 1
    private var column = 1
    
    /**
     * Tokenize the input source code into a list of tokens.
     */
    fun tokenize(): List<Token> {
        val tokens = mutableListOf<Token>()
        
        while (!isAtEnd()) {
            skipWhitespace()
            
            if (isAtEnd()) break
            
            val token = nextToken()
            tokens.add(token)
        }
        
        tokens.add(Token(TokenType.EOF, "", currentPosition()))
        return tokens
    }
    
    private fun nextToken(): Token {
        val start = current
        val startPos = currentPosition()
        val c = advance()
        
        return when (c) {
            // Single character tokens
            '(' -> Token(TokenType.LEFT_PAREN, "(", startPos)
            ')' -> Token(TokenType.RIGHT_PAREN, ")", startPos)
            '{' -> Token(TokenType.LEFT_BRACE, "{", startPos)
            '}' -> Token(TokenType.RIGHT_BRACE, "}", startPos)
            '[' -> Token(TokenType.LEFT_BRACKET, "[", startPos)
            ']' -> Token(TokenType.RIGHT_BRACKET, "]", startPos)
            ',' -> Token(TokenType.COMMA, ",", startPos)
            '.' -> Token(TokenType.DOT, ".", startPos)
            ';' -> Token(TokenType.SEMICOLON, ";", startPos)
            '+' -> {
                if (match('+')) {
                    Token(TokenType.INCREMENT, "++", startPos)
                } else {
                    Token(TokenType.PLUS, "+", startPos)
                }
            }
            '-' -> {
                if (match('-')) {
                    Token(TokenType.DECREMENT, "--", startPos)
                } else {
                    Token(TokenType.MINUS, "-", startPos)
                }
            }
            '*' -> Token(TokenType.MULTIPLY, "*", startPos)
            '/' -> {
                if (match('/')) {
                    // Line comment - skip to end of line
                    while (peek() != '\n' && !isAtEnd()) advance()
                    return nextToken() // Skip this comment and get next token
                } else {
                    Token(TokenType.DIVIDE, "/", startPos)
                }
            }
            '=' -> {
                if (match('=')) {
                    Token(TokenType.EQUALS, "==", startPos)
                } else {
                    Token(TokenType.ASSIGN, "=", startPos)
                }
            }
            '!' -> {
                if (match('=')) {
                    Token(TokenType.NOT_EQUALS, "!=", startPos)
                } else {
                    Token(TokenType.NOT, "!", startPos)
                }
            }
            '<' -> {
                if (match('=')) {
                    Token(TokenType.LESS_EQUAL, "<=", startPos)
                } else {
                    Token(TokenType.LESS, "<", startPos)
                }
            }
            '>' -> {
                if (match('=')) {
                    Token(TokenType.GREATER_EQUAL, ">=", startPos)
                } else {
                    Token(TokenType.GREATER, ">", startPos)
                }
            }
            '&' -> {
                if (match('&')) {
                    Token(TokenType.AND, "&&", startPos)
                } else {
                    throw LexError("Unexpected character '&' - did you mean '&&'?", startPos)
                }
            }
            '|' -> {
                if (match('|')) {
                    Token(TokenType.OR, "||", startPos)
                } else {
                    throw LexError("Unexpected character '|' - did you mean '||'?", startPos)
                }
            }
            '\n' -> {
                line++
                column = 1
                Token(TokenType.NEWLINE, "\n", startPos)
            }
            '"' -> string(startPos)
            else -> {
                when {
                    c.isDigit() -> number(start, startPos)
                    c.isLetter() || c == '_' -> identifier(start, startPos)
                    else -> throw LexError("Unexpected character '$c'", startPos)
                }
            }
        }
    }
    
    private fun string(startPos: Position): Token {
        val parts = mutableListOf<String>()
        val hasInterpolation = scanStringForInterpolation(parts)
        
        if (hasInterpolation) {
            // Return interpolated string token with encoded parts
            return Token(TokenType.INTERPOLATED_STRING, parts.joinToString("\u0001"), startPos)
        } else {
            // Return simple string token
            return Token(TokenType.STRING, parts.firstOrNull() ?: "", startPos)
        }
    }
    
    private fun scanStringForInterpolation(parts: MutableList<String>): Boolean {
        val currentPart = StringBuilder()
        var hasInterpolation = false
        
        while (peek() != '"' && !isAtEnd()) {
            if (peek() == '\n') {
                line++
                column = 1
                currentPart.append(advance())
            } else if (peek() == '\\') {
                advance() // consume backslash
                if (isAtEnd()) {
                    throw LexError("Unterminated string literal - missing closing quote", currentPosition())
                }
                when (val escaped = advance()) {
                    'n' -> currentPart.append('\n')
                    't' -> currentPart.append('\t')
                    'r' -> currentPart.append('\r')
                    '\\' -> currentPart.append('\\')
                    '"' -> currentPart.append('"')
                    '$' -> currentPart.append('$') // Escaped $
                    else -> {
                        currentPart.append('\\')
                        currentPart.append(escaped)
                    }
                }
            } else if (peek() == '$') {
                if (peekNext() == '{') {
                    // Found ${expression} interpolation
                    hasInterpolation = true
                    
                    // Add text part if any
                    if (currentPart.isNotEmpty()) {
                        parts.add("TEXT:${currentPart}")
                        currentPart.clear()
                    }
                    
                    // Skip ${
                    advance() // $
                    advance() // {
                    
                    // Collect expression tokens until }
                    val exprStart = current
                    var braceCount = 1
                    
                    while (braceCount > 0 && !isAtEnd()) {
                        when (peek()) {
                            '{' -> braceCount++
                            '}' -> braceCount--
                        }
                        advance()
                    }
                    
                    if (braceCount > 0) {
                        throw LexError("Unterminated string interpolation - missing }", currentPosition())
                    }
                    
                    // Extract expression text (without the closing })
                    val exprText = input.substring(exprStart, current - 1)
                    parts.add("EXPR:$exprText")
                    
                } else if (peekNext().isLetter() || peekNext() == '_') {
                    // Found $identifier interpolation
                    hasInterpolation = true
                    
                    // Add text part if any
                    if (currentPart.isNotEmpty()) {
                        parts.add("TEXT:${currentPart}")
                        currentPart.clear()
                    }
                    
                    // Skip $
                    advance() // $
                    
                    // Collect identifier
                    val identStart = current
                    while (peek().isLetterOrDigit() || peek() == '_') {
                        advance()
                    }
                    
                    val identifier = input.substring(identStart, current)
                    if (identifier.isEmpty()) {
                        throw LexError("Invalid interpolation - expected identifier after $", currentPosition())
                    }
                    
                    parts.add("EXPR:$identifier")
                    
                } else {
                    // Just a regular $ character
                    currentPart.append(advance())
                }
                
            } else {
                currentPart.append(advance())
            }
        }
        
        if (isAtEnd()) {
            throw LexError("Unterminated string literal - missing closing quote", currentPosition())
        }
        
        // Add final text part if any
        if (currentPart.isNotEmpty()) {
            parts.add("TEXT:${currentPart}")
        }
        
        advance() // consume closing quote
        
        // If no interpolation, just add the text as first part without prefix
        if (!hasInterpolation) {
            if (parts.isEmpty()) {
                parts.add("")
            } else {
                // Remove TEXT: prefix from single text part
                val singlePart = parts.first()
                if (singlePart.startsWith("TEXT:")) {
                    parts[0] = singlePart.substring(5)
                }
            }
        }
        
        return hasInterpolation
    }
    
    private fun number(start: Int, startPos: Position): Token {
        while (peek().isDigit()) advance()
        
        // Check for decimal point
        if (peek() == '.' && peekNext().isDigit()) {
            advance() // consume '.'
            while (peek().isDigit()) advance()
        }
        
        val text = input.substring(start, current)
        return Token(TokenType.NUMBER, text, startPos)
    }
    
    private fun identifier(start: Int, startPos: Position): Token {
        while (peek().isLetterOrDigit() || peek() == '_') advance()
        
        val text = input.substring(start, current)
        val type = KEYWORDS[text] ?: TokenType.IDENTIFIER
        return Token(type, text, startPos)
    }
    
    private fun skipWhitespace() {
        while (!isAtEnd()) {
            when (peek()) {
                ' ', '\t', '\r' -> advance()
                else -> break
            }
        }
    }
    
    private fun advance(): Char {
        if (isAtEnd()) return '\u0000'
        val c = input[current++]
        if (c != '\n') column++
        return c
    }
    
    private fun match(expected: Char): Boolean {
        if (isAtEnd() || input[current] != expected) return false
        current++
        column++
        return true
    }
    
    private fun peek(): Char {
        if (isAtEnd()) return '\u0000'
        return input[current]
    }
    
    private fun peekNext(): Char {
        if (current + 1 >= input.length) return '\u0000'
        return input[current + 1]
    }
    
    private fun isAtEnd(): Boolean = current >= input.length
    
    private fun currentPosition(): Position = Position(line, column)
}
