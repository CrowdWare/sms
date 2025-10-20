package at.crowdware.sms.lexer

import at.crowdware.sms.Position

/**
 * Token types for the SMS language
 */
enum class TokenType {
    // Literals
    NUMBER,        // 123
    STRING,        // "hello"
    BOOLEAN,       // true, false
    NULL,          // null
    
    // Identifiers
    IDENTIFIER,    // variable names, function names
    
    // Keywords
    VAR,           // var
    FUN,           // fun
    IF,            // if
    ELSE,          // else
    WHILE,         // while
    FOR,           // for
    IN,            // in
    BREAK,         // break
    CONTINUE,      // continue
    RETURN,        // return
    DATA,          // data
    CLASS,         // class
    
    // Operators
    PLUS,          // +
    MINUS,         // -
    MULTIPLY,      // *
    DIVIDE,        // /
    ASSIGN,        // =
    EQUALS,        // ==
    NOT_EQUALS,    // !=
    LESS,          // <
    LESS_EQUAL,    // <=
    GREATER,       // >
    GREATER_EQUAL, // >=
    NOT,           // !
    AND,           // &&
    OR,            // ||
    INCREMENT,     // ++
    DECREMENT,     // --
    
    // Delimiters
    LEFT_PAREN,    // (
    RIGHT_PAREN,   // )
    LEFT_BRACE,    // {
    RIGHT_BRACE,   // }
    LEFT_BRACKET,  // [
    RIGHT_BRACKET, // ]
    COMMA,         // ,
    DOT,           // .
    SEMICOLON,     // ;
    
    // Special
    NEWLINE,       // \n (for statement separation)
    EOF,           // End of file
    UNKNOWN        // Unknown/invalid token
}

/**
 * A token with its type, text value, and position in source code
 */
data class Token(
    val type: TokenType,
    val text: String,
    val position: Position
) {
    override fun toString(): String = "$type('$text') at $position"
}

/**
 * Keywords mapping for identifier classification
 */
internal val KEYWORDS = mapOf(
    "var" to TokenType.VAR,
    "fun" to TokenType.FUN,
    "if" to TokenType.IF,
    "else" to TokenType.ELSE,
    "while" to TokenType.WHILE,
    "for" to TokenType.FOR,
    "in" to TokenType.IN,
    "break" to TokenType.BREAK,
    "continue" to TokenType.CONTINUE,
    "return" to TokenType.RETURN,
    "data" to TokenType.DATA,
    "class" to TokenType.CLASS,
    "true" to TokenType.BOOLEAN,
    "false" to TokenType.BOOLEAN,
    "null" to TokenType.NULL
)
