package at.crowdware.sms.parser

import at.crowdware.sms.ParseError
import at.crowdware.sms.Position
import at.crowdware.sms.ast.*
import at.crowdware.sms.lexer.Token
import at.crowdware.sms.lexer.TokenType

/**
 * Recursive descent parser that converts tokens into an AST.
 */
class Parser(private val tokens: List<Token>) {
    private var current = 0
    
    /**
     * Parse tokens into a Program AST node.
     */
    fun parse(): Program {
        val statements = mutableListOf<Statement>()
        
        while (!isAtEnd()) {
            // Skip newlines at top level
            if (check(TokenType.NEWLINE)) {
                advance()
                continue
            }
            
            val stmt = statement()
            statements.add(stmt)
        }
        
        return Program(statements)
    }
    
    // ===== STATEMENTS =====
    
    private fun statement(): Statement {
        return when {
            match(TokenType.VAR) -> varDeclaration()
            match(TokenType.FUN) -> functionDeclaration()
            match(TokenType.DATA) -> dataClassDeclaration()
            match(TokenType.IF) -> ifStatement()
            match(TokenType.WHILE) -> whileStatement()
            match(TokenType.FOR) -> forStatement()
            match(TokenType.BREAK) -> breakStatement()
            match(TokenType.CONTINUE) -> continueStatement()
            match(TokenType.RETURN) -> returnStatement()
            else -> {
                // Try assignment or expression statement
                val checkpoint = current
                try {
                    assignment()
                } catch (e: ParseError) {
                    // Rollback and try expression statement
                    current = checkpoint
                    expressionStatement()
                }
            }
        }
    }
    
    private fun varDeclaration(): Statement {
        val name = consume(TokenType.IDENTIFIER, "Expected variable name").text
        consume(TokenType.ASSIGN, "Expected '=' after variable name")
        val value = expression()
        skipNewlines()
        return VarDeclaration(name, value, previous().position)
    }
    
    private fun functionDeclaration(): Statement {
        val pos = previous().position
        val name = consume(TokenType.IDENTIFIER, "Expected function name").text
        
        consume(TokenType.LEFT_PAREN, "Expected '(' after function name")
        val parameters = mutableListOf<String>()
        if (!check(TokenType.RIGHT_PAREN)) {
            do {
                parameters.add(consume(TokenType.IDENTIFIER, "Expected parameter name").text)
            } while (match(TokenType.COMMA))
        }
        consume(TokenType.RIGHT_PAREN, "Expected ')' after parameters")
        
        consume(TokenType.LEFT_BRACE, "Expected '{' before function body")
        val body = block()
        
        return FunctionDeclaration(name, parameters, body, pos)
    }
    
    private fun dataClassDeclaration(): Statement {
        val pos = previous().position
        consume(TokenType.CLASS, "Expected 'class' after 'data'")
        val name = consume(TokenType.IDENTIFIER, "Expected class name").text
        
        consume(TokenType.LEFT_PAREN, "Expected '(' after class name")
        val fields = mutableListOf<String>()
        if (!check(TokenType.RIGHT_PAREN)) {
            do {
                fields.add(consume(TokenType.IDENTIFIER, "Expected field name").text)
            } while (match(TokenType.COMMA))
        }
        consume(TokenType.RIGHT_PAREN, "Expected ')' after fields")
        skipNewlines()
        
        return DataClassDeclaration(name, fields, pos)
    }
    
    private fun ifStatement(): Statement {
        val pos = previous().position
        consume(TokenType.LEFT_PAREN, "Expected '(' after 'if'")
        val condition = expression()
        consume(TokenType.RIGHT_PAREN, "Expected ')' after if condition")
        
        consume(TokenType.LEFT_BRACE, "Expected '{' after if condition")
        val thenBranch = block()
        
        val elseBranch = if (match(TokenType.ELSE)) {
            consume(TokenType.LEFT_BRACE, "Expected '{' after 'else'")
            block()
        } else null
        
        return IfStatement(condition, thenBranch, elseBranch, pos)
    }
    
    private fun whileStatement(): Statement {
        val pos = previous().position
        consume(TokenType.LEFT_PAREN, "Expected '(' after 'while'")
        val condition = expression()
        consume(TokenType.RIGHT_PAREN, "Expected ')' after while condition")
        
        consume(TokenType.LEFT_BRACE, "Expected '{' after while condition")
        val body = block()
        
        return WhileStatement(condition, body, pos)
    }
    
    private fun forStatement(): Statement {
        val pos = previous().position
        consume(TokenType.LEFT_PAREN, "Expected '(' after 'for'")
        
        // Check for for-in loop: for (variable in iterable)
        if (check(TokenType.IDENTIFIER)) {
            val checkpoint = current
            val variable = advance().text
            if (match(TokenType.IN)) {
                // This is a for-in loop
                val iterable = expression()
                consume(TokenType.RIGHT_PAREN, "Expected ')' after for-in")
                consume(TokenType.LEFT_BRACE, "Expected '{' after for-in")
                val body = block()
                return ForInStatement(variable, iterable, body, pos)
            } else {
                // Reset and parse as regular for loop
                current = checkpoint
            }
        }
        
        // Regular for loop: for (init; condition; update)
        val init = if (match(TokenType.SEMICOLON)) null else {
            val stmt = if (match(TokenType.VAR)) varDeclaration() else assignment()
            consume(TokenType.SEMICOLON, "Expected ';' after for loop initializer")
            stmt
        }
        
        val condition = if (check(TokenType.SEMICOLON)) null else expression()
        consume(TokenType.SEMICOLON, "Expected ';' after for loop condition")
        
        val update = if (check(TokenType.RIGHT_PAREN)) null else assignment()
        consume(TokenType.RIGHT_PAREN, "Expected ')' after for clauses")
        
        consume(TokenType.LEFT_BRACE, "Expected '{' after for")
        val body = block()
        
        return ForStatement(init, condition, update, body, pos)
    }
    
    private fun breakStatement(): Statement {
        val pos = previous().position
        skipNewlines()
        return BreakStatement(pos)
    }
    
    private fun continueStatement(): Statement {
        val pos = previous().position
        skipNewlines()
        return ContinueStatement(pos)
    }
    
    private fun returnStatement(): Statement {
        val pos = previous().position
        val value = if (check(TokenType.NEWLINE) || isAtEnd()) null else expression()
        skipNewlines()
        return ReturnStatement(value, pos)
    }
    
    private fun assignment(): Statement {
        val expr = expression()
        
        if (match(TokenType.ASSIGN)) {
            val value = expression()
            skipNewlines()
            return Assignment(expr, value, expr.position)
        }
        
        throw ParseError("Expected assignment", peek().position)
    }
    
    private fun expressionStatement(): Statement {
        val expr = expression()
        skipNewlines()
        return ExpressionStatement(expr, expr.position)
    }
    
    private fun block(): List<Statement> {
        val statements = mutableListOf<Statement>()
        
        skipNewlines()
        while (!check(TokenType.RIGHT_BRACE) && !isAtEnd()) {
            if (match(TokenType.NEWLINE)) continue
            statements.add(statement())
        }
        
        consume(TokenType.RIGHT_BRACE, "Expected '}' after block")
        return statements
    }
    
    // ===== EXPRESSIONS =====
    
    private fun expression(): Expression = or()
    
    private fun or(): Expression {
        var expr = and()
        
        while (match(TokenType.OR)) {
            val operator = previous().text
            val right = and()
            expr = BinaryExpression(expr, operator, right, expr.position)
        }
        
        return expr
    }
    
    private fun and(): Expression {
        var expr = equality()
        
        while (match(TokenType.AND)) {
            val operator = previous().text
            val right = equality()
            expr = BinaryExpression(expr, operator, right, expr.position)
        }
        
        return expr
    }
    
    private fun equality(): Expression {
        var expr = comparison()
        
        while (match(TokenType.EQUALS, TokenType.NOT_EQUALS)) {
            val operator = previous().text
            val right = comparison()
            expr = BinaryExpression(expr, operator, right, expr.position)
        }
        
        return expr
    }
    
    private fun comparison(): Expression {
        var expr = term()
        
        while (match(TokenType.GREATER, TokenType.GREATER_EQUAL, TokenType.LESS, TokenType.LESS_EQUAL)) {
            val operator = previous().text
            val right = term()
            expr = BinaryExpression(expr, operator, right, expr.position)
        }
        
        return expr
    }
    
    private fun term(): Expression {
        var expr = factor()
        
        while (match(TokenType.MINUS, TokenType.PLUS)) {
            val operator = previous().text
            val right = factor()
            expr = BinaryExpression(expr, operator, right, expr.position)
        }
        
        return expr
    }
    
    private fun factor(): Expression {
        var expr = unary()
        
        while (match(TokenType.DIVIDE, TokenType.MULTIPLY)) {
            val operator = previous().text
            val right = unary()
            expr = BinaryExpression(expr, operator, right, expr.position)
        }
        
        return expr
    }
    
    private fun unary(): Expression {
        if (match(TokenType.NOT, TokenType.MINUS, TokenType.PLUS)) {
            val operator = previous().text
            val right = unary()
            return UnaryExpression(operator, right, previous().position)
        }
        
        return postfix()
    }
    
    private fun postfix(): Expression {
        var expr = call()
        
        if (match(TokenType.INCREMENT, TokenType.DECREMENT)) {
            val operator = previous().text
            return PostfixExpression(expr, operator, expr.position)
        }
        
        return expr
    }
    
    private fun call(): Expression {
        var expr = primary()
        
        while (true) {
            expr = when {
                match(TokenType.LEFT_PAREN) -> {
                    val args = arguments()
                    when (expr) {
                        is Identifier -> FunctionCall(expr.name, args, expr.position)
                        else -> throw ParseError("Invalid function call", expr.position)
                    }
                }
                match(TokenType.DOT) -> {
                    val name = consume(TokenType.IDENTIFIER, "Expected property name after '.'").text
                    if (match(TokenType.LEFT_PAREN)) {
                        val args = arguments()
                        MethodCall(expr, name, args, expr.position)
                    } else {
                        MemberAccess(expr, name, expr.position)
                    }
                }
                match(TokenType.LEFT_BRACKET) -> {
                    val index = expression()
                    consume(TokenType.RIGHT_BRACKET, "Expected ']' after array index")
                    ArrayAccess(expr, index, expr.position)
                }
                else -> break
            }
        }
        
        return expr
    }
    
    private fun primary(): Expression {
        return when {
            match(TokenType.BOOLEAN) -> BooleanLiteral(previous().text.toBoolean(), previous().position)
            match(TokenType.NULL) -> NullLiteral(previous().position)
            match(TokenType.NUMBER) -> NumberLiteral(previous().text.toDouble(), previous().position)
            match(TokenType.STRING) -> StringLiteral(previous().text, previous().position)
            match(TokenType.IDENTIFIER) -> Identifier(previous().text, previous().position)
            
            match(TokenType.LEFT_PAREN) -> {
                val expr = expression()
                consume(TokenType.RIGHT_PAREN, "Expected ')' after expression")
                expr
            }
            
            match(TokenType.LEFT_BRACKET) -> {
                val elements = mutableListOf<Expression>()
                if (!check(TokenType.RIGHT_BRACKET)) {
                    do {
                        elements.add(expression())
                    } while (match(TokenType.COMMA))
                }
                consume(TokenType.RIGHT_BRACKET, "Expected ']' after array elements")
                ArrayLiteral(elements, previous().position)
            }
            
            else -> throw ParseError("Expected expression", peek().position)
        }
    }
    
    private fun arguments(): List<Expression> {
        val args = mutableListOf<Expression>()
        
        if (!check(TokenType.RIGHT_PAREN)) {
            do {
                args.add(expression())
            } while (match(TokenType.COMMA))
        }
        
        consume(TokenType.RIGHT_PAREN, "Expected ')' after arguments")
        return args
    }
    
    // ===== UTILITY METHODS =====
    
    private fun match(vararg types: TokenType): Boolean {
        for (type in types) {
            if (check(type)) {
                advance()
                return true
            }
        }
        return false
    }
    
    private fun check(type: TokenType): Boolean {
        if (isAtEnd()) return false
        return peek().type == type
    }
    
    private fun advance(): Token {
        if (!isAtEnd()) current++
        return previous()
    }
    
    private fun isAtEnd(): Boolean = peek().type == TokenType.EOF
    
    private fun peek(): Token = tokens[current]
    
    private fun previous(): Token = tokens[current - 1]
    
    private fun consume(type: TokenType, message: String): Token {
        if (check(type)) return advance()
        throw ParseError(message, peek().position)
    }
    
    private fun skipNewlines() {
        while (match(TokenType.NEWLINE)) {
            // Skip newlines
        }
    }
}
