/*
 * Copyright (C) 2025 CrowdWare
 *
 * This file is part of SMS.
 *
 *  SMS is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  SMS is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with SMS.  If not, see <http://www.gnu.org/licenses/>.
 */

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
    val getter: PropertyAccessor? = null,
    val setter: PropertyAccessor? = null,
    val pos: Position? = null
) : Statement(pos)

/**
 * Property accessor definition for getters and setters
 */
data class PropertyAccessor(
    val parameterName: String? = null,
    val body: Expression,
    val pos: Position? = null
) : ASTNode(pos)

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
 * If expression: if (condition) expr else expr
 */
data class IfExpression(
    val condition: Expression,
    val thenBranch: Expression,
    val elseBranch: Expression,
    val pos: Position? = null
) : Expression(pos)

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
 * Interpolated string literal: "hello ${name}!"
 */
data class InterpolatedStringLiteral(
    val parts: List<StringPart>,
    val pos: Position? = null
) : Expression(pos)

/**
 * Part of an interpolated string - either text or expression
 */
sealed class StringPart {
    data class Text(val value: String) : StringPart()
    data class Expression(val expr: at.crowdware.sms.ast.Expression) : StringPart()
}

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
 * Assignment used in expression contexts (e.g., property setters)
 */
data class AssignmentExpression(
    val target: Expression,
    val value: Expression,
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
 * When expression with optional subject and multiple branches
 */
data class WhenExpression(
    val subject: Expression?,
    val branches: List<WhenBranch>,
    val pos: Position? = null
) : Expression(pos)

/**
 * Single branch within a when expression
 */
data class WhenBranch(
    val condition: Expression?,
    val result: Expression,
    val isElse: Boolean = false,
    val pos: Position? = null
) : ASTNode(pos)

/**
 * Program - root AST node containing all statements
 */
data class Program(
    val statements: List<Statement>,
    val pos: Position? = null
) : ASTNode(pos)
