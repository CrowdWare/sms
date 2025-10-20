package at.crowdware.sms.ast

import at.crowdware.sms.Position

/**
 * Base class for all AST nodes with position information
 */
abstract class ASTNode(val position: Position?)

/**
 * Base class for all statements
 */
abstract class Statement(position: Position?) : ASTNode(position)

/**
 * Base class for all expressions
 */
abstract class Expression(position: Position?) : ASTNode(position)

// ===== STATEMENTS =====

/**
 * Variable declaration: var name = value
 */
data class VarDeclaration(
    val name: String,
    val value: Expression,
    val pos: Position? = null
) : Statement(pos)

/**
 * Assignment: name = value or obj.field = value
 */
data class Assignment(
    val target: Expression, // Identifier or MemberAccess
    val value: Expression,
    val pos: Position? = null
) : Statement(pos)

/**
 * Expression statement: expr;
 */
data class ExpressionStatement(
    val expression: Expression,
    val pos: Position? = null
) : Statement(pos)

/**
 * If statement: if (condition) { thenBranch } else { elseBranch }
 */
data class IfStatement(
    val condition: Expression,
    val thenBranch: List<Statement>,
    val elseBranch: List<Statement>? = null,
    val pos: Position? = null
) : Statement(pos)

/**
 * While loop: while (condition) { body }
 */
data class WhileStatement(
    val condition: Expression,
    val body: List<Statement>,
    val pos: Position? = null
) : Statement(pos)

/**
 * For loop: for (init; condition; update) { body }
 */
data class ForStatement(
    val init: Statement?,
    val condition: Expression?,
    val update: Statement?,
    val body: List<Statement>,
    val pos: Position? = null
) : Statement(pos)

/**
 * For-in loop: for (variable in iterable) { body }
 */
data class ForInStatement(
    val variable: String,
    val iterable: Expression,
    val body: List<Statement>,
    val pos: Position? = null
) : Statement(pos)

/**
 * Break statement
 */
data class BreakStatement(
    val pos: Position? = null
) : Statement(pos)

/**
 * Continue statement
 */
data class ContinueStatement(
    val pos: Position? = null
) : Statement(pos)

/**
 * Return statement: return value?
 */
data class ReturnStatement(
    val value: Expression?,
    val pos: Position? = null
) : Statement(pos)

/**
 * Function declaration: fun name(params) { body }
 */
data class FunctionDeclaration(
    val name: String,
    val parameters: List<String>,
    val body: List<Statement>,
    val pos: Position? = null
) : Statement(pos)

/**
 * Data class declaration: data class Name(fields)
 */
data class DataClassDeclaration(
    val name: String,
    val fields: List<String>,
    val pos: Position? = null
) : Statement(pos)

// ===== EXPRESSIONS =====

/**
 * Number literal: 123, 123.45
 */
data class NumberLiteral(
    val value: Double,
    val pos: Position? = null
) : Expression(pos)

/**
 * String literal: "hello"
 */
data class StringLiteral(
    val value: String,
    val pos: Position? = null
) : Expression(pos)

/**
 * Boolean literal: true, false
 */
data class BooleanLiteral(
    val value: Boolean,
    val pos: Position? = null
) : Expression(pos)

/**
 * Null literal: null
 */
data class NullLiteral(
    val pos: Position? = null
) : Expression(pos)

/**
 * Identifier: variableName, functionName
 */
data class Identifier(
    val name: String,
    val pos: Position? = null
) : Expression(pos)

/**
 * Binary expression: left op right
 */
data class BinaryExpression(
    val left: Expression,
    val operator: String,
    val right: Expression,
    val pos: Position? = null
) : Expression(pos)

/**
 * Unary expression: op expr
 */
data class UnaryExpression(
    val operator: String,
    val operand: Expression,
    val pos: Position? = null
) : Expression(pos)

/**
 * Postfix expression: expr++, expr--
 */
data class PostfixExpression(
    val operand: Expression,
    val operator: String,
    val pos: Position? = null
) : Expression(pos)

/**
 * Function call: name(args)
 */
data class FunctionCall(
    val name: String,
    val arguments: List<Expression>,
    val pos: Position? = null
) : Expression(pos)

/**
 * Method call: receiver.method(args)
 */
data class MethodCall(
    val receiver: Expression,
    val method: String,
    val arguments: List<Expression>,
    val pos: Position? = null
) : Expression(pos)

/**
 * Member access: receiver.member
 */
data class MemberAccess(
    val receiver: Expression,
    val member: String,
    val pos: Position? = null
) : Expression(pos)

/**
 * Array access: receiver[index]
 */
data class ArrayAccess(
    val receiver: Expression,
    val index: Expression,
    val pos: Position? = null
) : Expression(pos)

/**
 * Array literal: [elem1, elem2, ...]
 */
data class ArrayLiteral(
    val elements: List<Expression>,
    val pos: Position? = null
) : Expression(pos)

/**
 * Program - root AST node containing all statements
 */
data class Program(
    val statements: List<Statement>,
    val pos: Position? = null
) : ASTNode(pos)
