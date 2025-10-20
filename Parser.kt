package at.crowdware.roulettestrategiesimulator.scripting

import com.github.h0tk3y.betterParse.combinators.*
import com.github.h0tk3y.betterParse.grammar.Grammar
import com.github.h0tk3y.betterParse.grammar.parseToEnd
import com.github.h0tk3y.betterParse.grammar.parser
import com.github.h0tk3y.betterParse.lexer.literalToken
import com.github.h0tk3y.betterParse.lexer.regexToken
import com.github.h0tk3y.betterParse.parser.Parser

// Position information for better error messages
data class Position(val line: Int, val column: Int) {
    override fun toString(): String = "Zeile $line, Spalte $column"
}

// User-friendly error class
class InterpreterError(
    message: String,
    val position: Position? = null,
    cause: Throwable? = null
) : RuntimeException(
    if (position != null) "Fehler bei $position: $message" else "Fehler: $message",
    cause
)

// AST-Knoten
sealed class ASTNode(val position: Position? = null)

sealed class Statement(position: Position? = null) : ASTNode(position)

// Statements
data class IfStatement(
    val condition: Expression,
    val thenBranch: List<Statement>,
    val elseBranch: List<Statement>?
) : Statement()

data class VarDeclaration(
    val name: String,
    val value: Expression
) : Statement()

data class Assignment(
    val name: String,
    val value: Expression
) : Statement()

// CHG: Assignment to a member (e.g., obj.field = expr)
data class MemberAssignment(
    val target: MemberAccess,
    val value: Expression
) : Statement()

data class ExpressionStatement(
    val expression: Expression
) : Statement()

data class WhileStatement(
    val condition: Expression,
    val body: List<Statement>
) : Statement()

data class ForStatement(
    val init: Statement?,
    val condition: Expression?,
    val update: Statement?,
    val body: List<Statement>
) : Statement()

data class ForInStatement(
    val variable: String,
    val iterable: Expression,
    val body: List<Statement>
) : Statement()

data class BreakStatement(
    val dummy: Unit = Unit
) : Statement()

data class ContinueStatement(
    val dummy: Unit = Unit
) : Statement()

data class ReturnStatement(
    val value: Expression?
) : Statement()

data class DataClassDeclaration(
    val name: String,
    val fields: List<String>
) : Statement()

data class FunctionDeclaration(
    val name: String,
    val parameters: List<String>,
    val body: List<Statement>
) : Statement()

class BreakException : Exception()
class ContinueException : Exception()
class ReturnException(val value: Any?) : Exception()

sealed class Expression(position: Position? = null) : ASTNode(position)

data class UnaryExpression(
    val operator: String,
    val expr: Expression
) : Expression()

data class BinaryExpression(
    val left: Expression,
    val operator: String,
    val right: Expression
) : Expression()

data class FunctionCall(
    val name: String,
    val arguments: List<Expression>
) : Expression()

data class StringLiteral(
    val value: String
) : Expression()

data class NumberLiteral(
    val value: Int
) : Expression()

data class BooleanLiteral(
    val value: Boolean
) : Expression()

data class NullLiteral(
    val dummy: Unit = Unit
) : Expression()

data class Identifier(
    val name: String
) : Expression()

data class MemberAccess(
    val receiver: Expression,
    val member: String
) : Expression()

data class ArrayAccess(
    val receiver: Expression,
    val index: Expression
) : Expression()

data class MethodCall(
    val receiver: Expression,
    val method: String,
    val arguments: List<Expression>
) : Expression()

data class ArrayLiteral(
    val elements: List<Expression>
) : Expression()

data class PostfixExpression(
    val expr: Expression,
    val operator: String
) : Expression()

object MiniLanguageGrammar : Grammar<List<Statement>>() {
    val WS by regexToken("\\s+", ignore = true)
    val LINE_COMMENT by regexToken("//[^\\r\\n]*", ignore = true)
    val BLOCK_COMMENT by regexToken("/\\*[\\s\\S]*?\\*/", ignore = true)

    val EQUALS by literalToken("==")
    val NOT_EQUALS by literalToken("!=")
    val LE by literalToken("<=")
    val GE by literalToken(">=")
    val PP by literalToken("++")
    val MM by literalToken("--")
    val AND by literalToken("&&")
    val OR by literalToken("||")
    val VAR by literalToken("var")
    val IF by literalToken("if")
    val ELSE by literalToken("else")
    val WHILE by literalToken("while")
    val FOR by literalToken("for")
    val BREAK by literalToken("break")
    val CONTINUE by literalToken("continue")
    val FUN by literalToken("fun")
    val RETURN by literalToken("return")
    val TRUE by literalToken("true")
    val FALSE by literalToken("false")
    val NULL by literalToken("null")
    val DATA by literalToken("data")
    val CLASS by literalToken("class")
    val LT by literalToken("<")
    val GT by literalToken(">")
    val ASSIGN by literalToken("=")
    val PLUS by literalToken("+")
    val MINUS by literalToken("-")
    val MULT by literalToken("*")
    val DIV by literalToken("/")
    val NOT by literalToken("!")
    val LBRACE by literalToken("{")
    val RBRACE by literalToken("}")
    val LPAREN by literalToken("(")
    val RPAREN by literalToken(")")
    val COMMA by literalToken(",")
    val DOT by literalToken(".")
    val SEMICOLON by literalToken(";")
    val LBRACKET by literalToken("[")
    val RBRACKET by literalToken("]")
    val STRING by regexToken("\"[^\"]*\"")
    val NUMBER by regexToken("\\d+")
    val IN by regexToken("\\bin\\b")
    val IDENTIFIER by regexToken("[a-zA-Z_][a-zA-Z0-9_]*")
    val expression: Parser<Expression> by parser { logicalExpression }
    val identifier by IDENTIFIER use { Identifier(text) }
    val stringLiteral by STRING use { StringLiteral(text.substring(1, text.length - 1)) }
    val numberLiteral by NUMBER use { NumberLiteral(text.toInt()) }
    val booleanLiteral by (TRUE or FALSE) use { BooleanLiteral(text.toBoolean()) }
    val nullLiteral by NULL use { NullLiteral() }
    val parenthesizedExpression by (-LPAREN and expression and -RPAREN)
    val argumentList by separatedTerms(expression, COMMA, acceptZero = true)
    val functionCall by (IDENTIFIER and -LPAREN and argumentList and -RPAREN) use { FunctionCall(t1.text, t2) }
    val arrayLiteral by (-LBRACKET and argumentList and -RBRACKET) use { ArrayLiteral(this) }
    val primaryExpression by (
            functionCall or arrayLiteral or stringLiteral or numberLiteral or booleanLiteral or nullLiteral or identifier or parenthesizedExpression
            )
    val postfixExpression: Parser<Expression> by parser {
        primaryExpression and optional(PP or MM)
    }.map { (expr, op) ->
        if (op != null) PostfixExpression(expr, op.text) else expr
    }
    val methodCall: Parser<Expression> = parser {
        (postfixExpression and -DOT and IDENTIFIER and -LPAREN and argumentList and -RPAREN).map { (expr, method, args) ->
            MethodCall(expr, method.text, args)
        }
    }

    val arrayAccess: Parser<Expression> = parser {
        (postfixExpression and -LBRACKET and expression and -RBRACKET).map { (expr, index) ->
            ArrayAccess(expr, index)
        }
    }

    val memberAccess: Parser<Expression> = parser {
        (postfixExpression and -DOT and IDENTIFIER).map { (expr, member) ->
            MemberAccess(expr, member.text)
        }
    }

    val memberExpression: Parser<Expression> = parser {
        methodCall or arrayAccess or memberAccess or postfixExpression
    }

    val unaryExpression: Parser<Expression> by parser {
        ((NOT or PLUS or MINUS) and unaryExpression).map { (token, expr) ->
            UnaryExpression(token.text, expr)
        } or memberExpression
    }
    val multiplicativeExpression by leftAssociative(unaryExpression, MULT or DIV) { l, op, r ->
        BinaryExpression(l, op.text, r)
    }
    val additiveExpression by leftAssociative(multiplicativeExpression, PLUS or MINUS) { l, op, r ->
        BinaryExpression(l, op.text, r)
    }
    val relationalExpression by leftAssociative(additiveExpression, LE or GE or LT or GT) { l, op, r ->
        BinaryExpression(l, op.text, r)
    }
    val equalityExpression by leftAssociative(relationalExpression, EQUALS or NOT_EQUALS) { l, op, r ->
        BinaryExpression(l, op.text, r)
    }
    val andExpression by leftAssociative(equalityExpression, AND) { l, _, r ->
        BinaryExpression(l, "&&", r)
    }
    val logicalExpression by leftAssociative(andExpression, OR) { l, _, r ->
        BinaryExpression(l, "||", r)
    }

    val varDeclaration by (-VAR and IDENTIFIER and -ASSIGN and expression) use { VarDeclaration(t1.text, t2) }
    val assignment: Parser<Statement> by parser {
        (memberExpression and -ASSIGN and expression).map { (lhs, rhs) ->
            when (lhs) {
                is Identifier -> Assignment(lhs.name, rhs)
                is MemberAccess -> MemberAssignment(lhs, rhs)
                else -> error("Invalid assignment target")
            }
        }
    }
    val expressionStatement by expression use { ExpressionStatement(this) }
    val blockStatements: Parser<List<Statement>> by parser { separatedTerms(statement, WS, acceptZero = true) }
    val elseClause by (-ELSE and -LBRACE and blockStatements and -RBRACE)
    val ifWithParens by (
            -IF and -LPAREN and expression and -RPAREN and
                    -LBRACE and blockStatements and -RBRACE and optional(elseClause)
            ) use {
        val condition = t1
        val thenBranch = t2
        val elseBranch = t3
        IfStatement(condition, thenBranch, elseBranch)
    }
    val ifWithoutParens by (
            -IF and expression and -LBRACE and blockStatements and -RBRACE and
                    optional(elseClause)
            ) use {
        val condition = t1
        val thenBranch = t2
        val elseBranch = t3
        IfStatement(condition, thenBranch, elseBranch)
    }
    val ifStatement: Parser<Statement> by parser {
        ifWithParens or ifWithoutParens
    }
    val whileStatement: Parser<Statement> by parser {
        -WHILE and -LPAREN and expression and -RPAREN and
                -LBRACE and blockStatements and -RBRACE
    }.map { (cond, body) ->
        WhileStatement(cond, body)
    }

    val forStatement: Parser<Statement> by parser {
        -FOR and -LPAREN and
                optional(varDeclaration or assignment) and -SEMICOLON and
                optional(expression) and -SEMICOLON and
                optional(assignment or expressionStatement) and -RPAREN and
                -LBRACE and blockStatements and -RBRACE
    }.map { (init, condition, update, body) ->
        ForStatement(init, condition, update, body)
    }

    val forInStatement: Parser<Statement> by parser {
        -FOR and -LPAREN and IDENTIFIER and -IN and expression and -RPAREN and
                -LBRACE and blockStatements and -RBRACE
    }.map { (variable, iterable, body) ->
        ForInStatement(variable.text, iterable, body)
    }

    val breakStatement by BREAK use { BreakStatement() }
    val continueStatement by CONTINUE use { ContinueStatement() }

    val returnStatement by (RETURN and optional(expression)) use { ReturnStatement(t2) }

    val parameterList by separatedTerms(IDENTIFIER, COMMA, acceptZero = true)
    val functionDeclaration: Parser<Statement> by (
            -FUN and IDENTIFIER and -LPAREN and parameterList and -RPAREN and -LBRACE and blockStatements and -RBRACE
            ) use {
        FunctionDeclaration(t1.text, t2.map { it.text }, t3)
    }

    val dataClassDeclaration: Parser<Statement> by (
            -DATA and -CLASS and IDENTIFIER and -LPAREN and parameterList and -RPAREN
            ) use {
        DataClassDeclaration(t1.text, t2.map { it.text })
    }

    val statement: Parser<Statement> by functionDeclaration or dataClassDeclaration or varDeclaration or
            ifStatement or whileStatement or forInStatement or forStatement or
            breakStatement or continueStatement or returnStatement or
            assignment or expressionStatement
    override val rootParser by oneOrMore(statement)
}

class Interpreter {
    val variables = mutableMapOf<String, Any>()
    val functions = mutableMapOf<String, FunctionDeclaration>()
    private val dataClasses = mutableMapOf<String, DataClassDeclaration>()
    var scriptingEngine: Any? = null // Reference to ScriptingEngine

    data class DataInstance(val className: String, val fields: MutableMap<String, Any?>) {
        override fun toString(): String = "${'$'}className${'$'}fields"
    }

    init {
        variables["name"] = "Art"
    }

    fun interpret(statements: List<Statement>) {
        statements.forEach { statement ->
            when (statement) {
                is FunctionDeclaration -> functions[statement.name] = statement
                is DataClassDeclaration -> dataClasses[statement.name] = statement
                else -> {}
            }
        }

        statements.forEach { executeStatement(it) }
    }

    private fun executeStatement(statement: Statement) {
        try {
            when (statement) {
            is VarDeclaration -> {
                // Only initialize variables that don't exist yet to maintain persistence
                if (!variables.containsKey(statement.name)) {
                    val value = evaluateExpression(statement.value)
                    variables[statement.name] = value ?: Unit
                    // Debug removed - no internal interpreter messages in log
                } else {
                    // Variable preserved - debug removed
                }
            }
                is Assignment -> {
                    val value = evaluateExpression(statement.value)
                    variables[statement.name] = value ?: Unit
                    // Debug removed - no internal interpreter messages in log
                }
                is MemberAssignment -> {
                    val target = evaluateExpression(statement.target.receiver)
                    val value = evaluateExpression(statement.value)
                    val inst = target as? DataInstance ?: throw InterpreterError(
                        "Member-Zuweisung nur auf Objekten möglich",
                        statement.position
                    )
                    inst.fields[statement.target.member] = value
                }
                is IfStatement -> {
                    val conditionResult = evaluateExpression(statement.condition)
                    if (conditionResult == true) {
                        statement.thenBranch.forEach { executeStatement(it) }
                    } else {
                        statement.elseBranch?.forEach { executeStatement(it) }
                    }
                }
                is WhileStatement -> {
                    try {
                        while ((evaluateExpression(statement.condition) as Boolean)) {
                            try {
                                statement.body.forEach { executeStatement(it) }
                            } catch (e: ContinueException) {
                                continue
                            }
                        }
                    } catch (e: BreakException) {
                    }
                }
                is ForStatement -> {
                    try {
                        // Execute init statement - for var declarations, this should reset the variable
                        statement.init?.let { 
                            // If init is a VarDeclaration, always reset the variable (even if it exists)
                            if (it is VarDeclaration) {
                                val value = evaluateExpression(it.value)
                                variables[it.name] = value ?: Unit
                            } else {
                                executeStatement(it) 
                            }
                        }

                        while (true) {
                            if (statement.condition != null) {
                                val conditionResult = evaluateExpression(statement.condition)
                                if (conditionResult != true) break
                            }

                            try {
                                statement.body.forEach { executeStatement(it) }
                            } catch (e: ContinueException) {
                            }

                            // Update-Statement ausführen
                            statement.update?.let { executeStatement(it) }
                        }
                    } catch (e: BreakException) {
                    }
                }
                is ForInStatement -> {
                    try {
                        val iterable = evaluateExpression(statement.iterable)
                        val array = iterable as? MutableList<*> ?: throw InterpreterError(
                            "for-in-Schleife kann nur über Arrays iterieren",
                            statement.position
                        )

                        for (element in array) {
                            variables[statement.variable] = element ?: Unit
                            try {
                                statement.body.forEach { executeStatement(it) }
                            } catch (e: ContinueException) {
                                continue
                            }
                        }
                    } catch (e: BreakException) {
                    }
                }
                is BreakStatement -> {
                    throw BreakException()
                }
                is ContinueStatement -> {
                    throw ContinueException()
                }
                is ReturnStatement -> {
                    val value = statement.value?.let { evaluateExpression(it) }
                    throw ReturnException(value)
                }
                is FunctionDeclaration -> {

                }
                is DataClassDeclaration -> {

                }
                is ExpressionStatement -> {
                    evaluateExpression(statement.expression)
                }
            }
        } catch (e: InterpreterError) {
            throw e
        } catch (e: BreakException) {
            throw e  // Break-Exceptions sind normal für Schleifen
        } catch (e: ContinueException) {
            throw e  // Continue-Exceptions sind normal für Schleifen
        } catch (e: ReturnException) {
            throw e  // Return-Exceptions sind normal für Funktionen
        } catch (e: Exception) {
            throw InterpreterError("Unerwarteter Fehler beim Ausführen des Statements: ${e.message}", statement.position, e)
        }
    }

    fun evaluateExpression(expression: Expression): Any? {
        return when (expression) {
            is PostfixExpression -> {
                val id = expression.expr as? Identifier
                    ?: error("'++/--' only on identifiers")
                val old = (variables[id.name] as? Int)
                    ?: error("Cannot ++/-- non-int variable")
                when (expression.operator) {
                    "++" -> {
                        variables[id.name] = old + 1
                        old
                    }
                    "--" -> {
                        variables[id.name] = old - 1
                        old
                    }
                    else -> error("Unknown postfix operator: ${expression.operator}")
                }
            }
            is ArrayAccess -> {
                val recv = evaluateExpression(expression.receiver)
                val index = evaluateExpression(expression.index)
                val array = recv as? MutableList<*> ?: error("Array access on non-array")
                val i = index as? Int ?: error("Array index must be integer")
                if (i < 0 || i >= array.size) error("Array index $i out of bounds (size: ${array.size})")
                array[i]
            }
            is MemberAccess -> {
                val recv = evaluateExpression(expression.receiver)
                when (recv) {
                    is DataInstance -> recv.fields[expression.member]
                    is at.crowdware.roulettestrategiesimulator.scripting.ScriptContext -> {
                        when (expression.member) {
                            "lastNumber" -> recv.lastNumber ?: 0  // Convert null to 0 for numeric operations
                            // "history" removed - scripts manage their own data structures
                            "balance" -> recv.balance
                            "spinCount" -> recv.spinCount
                            "lastWin" -> recv.lastWin
                            "lastBets" -> recv.lastBets
                            else -> error("Unknown ScriptContext property: ${expression.member}")
                        }
                    }
                    is MutableList<*> -> {
                        // Handle array method calls without parentheses
                        when (expression.member) {
                            "size" -> recv.size
                            else -> error("Unknown array property: ${expression.member}")
                        }
                    }
                    else -> error("Member access on non-object/array: ${recv?.let { it::class.simpleName } ?: "null"}")
                }
            }
            is UnaryExpression -> {
                val v = evaluateExpression(expression.expr)
                when (expression.operator) {
                    "!" -> (v as? Boolean)?.not() ?: error("'!' only for booleans")
                    "+" -> (v as? Int) ?: error("'+' only for numbers")
                    "-" -> (v as? Int)?.let { -it } ?: error("'-' only for numbers")
                    else -> error("Unknown unary operator: ${expression.operator}")
                }
            }
            is BinaryExpression -> {
                val left = evaluateExpression(expression.left)
                val right = evaluateExpression(expression.right)
                when (expression.operator) {
                    "==" -> left == right
                    "!=" -> left != right
                    "<"  -> (left as? Int ?: error("'<' only for numbers")) < (right as? Int ?: error("'<' only for numbers"))
                    ">"  -> (left as? Int ?: error("'>' only for numbers")) > (right as? Int ?: error("'>' only for numbers"))
                    "<=" -> (left as? Int ?: error("'<=' only for numbers")) <= (right as? Int ?: error("'<=' only for numbers"))
                    ">=" -> (left as? Int ?: error("'>=' only for numbers")) >= (right as? Int ?: error("'>=' only for numbers"))
                    "*"  -> (left as? Int)?.let { l -> (right as? Int)?.let { r -> l * r } } ?: error("'*' only for numbers")
                    "/"  -> (left as? Int)?.let { l -> (right as? Int)?.let { r -> l / r } } ?: error("'/' only for numbers")
                    "+"  -> when {
                        left is String || right is String -> "$left$right"
                        left is Int && right is Int -> left + right
                        else -> error("'+' only for numbers or strings")
                    }
                    "-"  -> (left as? Int)?.let { l -> (right as? Int)?.let { r -> l - r } } ?: error("'-' only for numbers")
                    "&&" -> (left == true) && (right == true)
                    "||" -> (left == true) || (right == true)
                    else  -> error("Unknown operator: ${expression.operator}")
                }
            }
            is FunctionCall   -> {
                val args = expression.arguments.map { evaluateExpression(it) }
                executeFunction(expression.name, args)
            }
            is MethodCall -> {
                val receiver = evaluateExpression(expression.receiver)
                val args = expression.arguments.map { evaluateExpression(it) }
                executeArrayMethod(receiver, expression.method, args)
            }
            is ArrayLiteral -> {
                val elements = expression.elements.map { evaluateExpression(it) }
                elements.toMutableList()
            }
            is StringLiteral  -> {
                val s = expression.value
                if (!s.contains("\${")) return s
                val regex = Regex("\\$\\{([^}]*)}" )
                var out = StringBuilder()
                var lastIndex = 0
                for (m in regex.findAll(s)) {
                    out.append(s.substring(lastIndex, m.range.first))
                    val inside = m.groupValues[1].trim()
                    val value = evaluateTemplateExpr(inside) // CHG: removed selection artifacts
                    out.append(value?.toString() ?: "null")
                    lastIndex = m.range.last + 1
                }
                out.append(s.substring(lastIndex))
                out.toString()
            }
            is NumberLiteral  -> expression.value
            is BooleanLiteral -> expression.value
            is NullLiteral -> null
            is Identifier     -> {
                if (!variables.containsKey(expression.name)) {
                    throw InterpreterError(
                        "Variable '${expression.name}' ist nicht definiert",
                        expression.position
                    )
                }
                variables[expression.name]
            }
        }
    }

    private fun evaluateTemplateExpr(text: String): Any? {
        data class Tok(val type: String, val s: String)
        val src = text.trim()
        val toks = mutableListOf<Tok>()
        var i = 0
        fun isIdStart(c: Char) = c == '_' || c.isLetter()
        fun isIdPart(c: Char) = c == '_' || c.isLetterOrDigit()
        while (i < src.length) {
            val c = src[i]
            when {
                c.isWhitespace() -> { i++ }
                c.isDigit() -> {
                    val start = i
                    while (i < src.length && src[i].isDigit()) i++
                    toks += Tok("NUM", src.substring(start, i))
                }
                isIdStart(c) -> {
                    val start = i
                    i++
                    while (i < src.length && isIdPart(src[i])) i++
                    toks += Tok("ID", src.substring(start, i))
                }
                c == '"' -> {
                    val start = ++i
                    while (i < src.length && src[i] != '"') i++
                    val lit = src.substring(start, i)
                    if (i < src.length && src[i] == '"') i++
                    toks += Tok("STR", lit)
                }
                c == '.' -> { toks += Tok("DOT", "."); i++ }
                c == ',' -> { toks += Tok("COMMA", ","); i++ }
                c == '+' -> { toks += Tok("PLUS", "+"); i++ }
                c == '-' -> { toks += Tok("MINUS", "-"); i++ }
                c == '*' -> { toks += Tok("MUL", "*"); i++ }
                c == '/' -> { toks += Tok("DIV", "/"); i++ }
                c == '(' -> { toks += Tok("LP", "("); i++ }
                c == ')' -> { toks += Tok("RP", ")"); i++ }
                else -> {
                    return src
                }
            }
        }
        var p = 0
        fun peek(t: String) = p < toks.size && toks[p].type == t
        fun eat(t: String): Tok { val tok = toks.getOrNull(p); require(tok != null && tok.type == t) {"Expected ${'$'}t"}; p++; return tok }
        // Note: Legacy reflection-based method calling not supported in Kotlin/JS

        @Suppress("UNCHECKED_CAST", "UnsafeCastFromDynamic")
        fun callMethod(receiver: Any?, name: String, args: List<Any?>): Any? {
            if (receiver == null) return null
            val n = name.lowercase()

            // 1) Hand-crafted: häufige String-Methoden
            if (receiver is String) {
                return when (n) {
                    "toupper", "touppercase", "uppercase" -> receiver.uppercase()
                    "tolower", "tolowercase", "lowercase" -> receiver.lowercase()
                    "substring" -> when (args.size) {
                        1 -> receiver.substring((args[0] as Number).toInt())
                        2 -> receiver.substring((args[0] as Number).toInt(), (args[1] as Number).toInt())
                        else -> null
                    }
                    "startswith" -> receiver.startsWith(args.getOrNull(0)?.toString() ?: "")
                    "endswith"   -> receiver.endsWith(args.getOrNull(0)?.toString() ?: "")
                    "contains"   -> receiver.contains(args.getOrNull(0)?.toString() ?: "")
                    else -> null
                }
            }

            // 2) Optional: Liste (falls du Methodenaufrufe statt Natives brauchst)
            if (receiver is MutableList<*>) {
                val list = receiver as MutableList<Any?>
                return when (n) {
                    "push", "add" -> { list.add(args.getOrNull(0)); Unit }
                    "get"         -> list[(args.getOrNull(0) as Number).toInt()]
                    "set"         -> { val i = (args[0] as Number).toInt(); list[i] = args[1]; Unit }
                    "size", "length" -> list.size
                    "contains"    -> list.contains(args.getOrNull(0))
                    "remove"      -> list.remove(args.getOrNull(0))
                    else -> null
                }
            }

            // 3) No dynamic method calling on JVM/JS compatibility
            return null
        }

        fun parseExpr(): Any? {
            fun parseTerm(): Any? {
                fun parseFactor(): Any? {
                    when {
                        peek("NUM") -> return eat("NUM").s.toInt()
                        peek("STR") -> return eat("STR").s
                        peek("LP") -> { eat("LP"); val v = parseExpr(); eat("RP"); return v }
                        peek("ID") -> {
                            var cur: Any? = variables[eat("ID").s]
                            loop@ while (peek("DOT")) {
                                eat("DOT")
                                val member = eat("ID").s
                                if (peek("LP")) {
                                    eat("LP")
                                    val args = mutableListOf<Any?>()
                                    if (!peek("RP")) {
                                        args += parseExpr()
                                        while (peek("COMMA")) { eat("COMMA"); args += parseExpr() }
                                    }
                                    eat("RP")
                                    cur = callMethod(cur, member, args)
                                } else {
                                    cur = when (cur) {
                                        is DataInstance -> cur.fields[member]
                                        else -> null
                                    }
                                }
                            }
                            return cur
                        }
                        peek("MINUS") -> { eat("MINUS"); val v = parseFactor(); return when (v) { is Int -> -v; is String -> v; else -> null } }
                        peek("PLUS") -> { eat("PLUS"); return parseFactor() }
                        else -> return null
                    }
                }
                var left = parseFactor()
                while (peek("MUL") || peek("DIV")) {
                    val op = toks[p++].type
                    val right = parseFactor()
                    left = when (op) {
                        "MUL" -> (left as? Int)?.let { l -> (right as? Int)?.let { r -> l * r } } ?: return null
                        "DIV" -> (left as? Int)?.let { l -> (right as? Int)?.let { r -> if (r == 0) return null else l / r } } ?: return null
                        else -> left
                    }
                }
                return left
            }
            var left = parseTerm()
            while (peek("PLUS") || peek("MINUS")) {
                val op = toks[p++].type
                val right = parseTerm()
                left = when (op) {
                    "PLUS" -> when {
                        left is String || right is String -> "${'$'}left${'$'}right"
                        left is Int && right is Int -> left + right
                        else -> return null
                    }
                    "MINUS" -> (left as? Int)?.let { l -> (right as? Int)?.let { r -> l - r } } ?: return null
                    else -> left
                }
            }
            return left
        }

        return parseExpr()
    }

    fun executeFunction(name: String, args: List<Any?>): Any? {
        // Handle built-in API functions first
        when (name) {
            "placeBet" -> {
                if (scriptingEngine != null) {
                    val engine = scriptingEngine as at.crowdware.roulettestrategiesimulator.scripting.ScriptingEngine
                    if (args.size >= 2) {
                        val target = args[0]?.toString() ?: ""
                        val amount = (args[1] as? Int) ?: 0
                        engine.placeBetInternal(target, amount)
                    }
                }
                return Unit
            }
            "clearBets" -> {
                if (scriptingEngine != null) {
                    val engine = scriptingEngine as at.crowdware.roulettestrategiesimulator.scripting.ScriptingEngine
                    engine.clearBetsInternal()
                }
                return Unit
            }
            "getBalance" -> {
                return if (scriptingEngine != null) {
                    val engine = scriptingEngine as at.crowdware.roulettestrategiesimulator.scripting.ScriptingEngine
                    engine.getState().balance
                } else 0
            }
            "setBalance" -> {
                if (scriptingEngine != null && args.isNotEmpty()) {
                    val engine = scriptingEngine as at.crowdware.roulettestrategiesimulator.scripting.ScriptingEngine
                    val amount = (args[0] as? Int) ?: 0
                    engine.setBalance(amount)  // This now properly updates sessionStats too!
                }
                return Unit
            }
            "getSpinCount" -> {
                return if (scriptingEngine != null) {
                    val engine = scriptingEngine as at.crowdware.roulettestrategiesimulator.scripting.ScriptingEngine
                    engine.getState().spinCount
                } else 0
            }
            "println" -> {
                val message = args.firstOrNull()?.toString() ?: ""
                if (scriptingEngine != null) {
                    val engine = scriptingEngine as at.crowdware.roulettestrategiesimulator.scripting.ScriptingEngine
                    engine.onLog?.invoke(message)
                } else {
                    println(message)
                }
                return Unit
            }
            "isRed" -> {
                val number = (args.firstOrNull() as? Int) ?: 0
                return at.crowdware.roulettestrategiesimulator.scripting.ScriptHelpers.isRed(number)
            }
            "isBlack" -> {
                val number = (args.firstOrNull() as? Int) ?: 0
                return at.crowdware.roulettestrategiesimulator.scripting.ScriptHelpers.isBlack(number)
            }
            "isEven" -> {
                val number = (args.firstOrNull() as? Int) ?: 0
                return at.crowdware.roulettestrategiesimulator.scripting.ScriptHelpers.isEven(number)
            }
            "isOdd" -> {
                val number = (args.firstOrNull() as? Int) ?: 0
                return at.crowdware.roulettestrategiesimulator.scripting.ScriptHelpers.isOdd(number)
            }
            "getColumn" -> {
                val number = (args.firstOrNull() as? Int) ?: 0
                return at.crowdware.roulettestrategiesimulator.scripting.ScriptHelpers.getColumn(number)
            }
            "getDozen" -> {
                val number = (args.firstOrNull() as? Int) ?: 0
                return at.crowdware.roulettestrategiesimulator.scripting.ScriptHelpers.getDozen(number)
            }
            "getStreet" -> {
                val number = (args.firstOrNull() as? Int) ?: 0
                return at.crowdware.roulettestrategiesimulator.scripting.ScriptHelpers.getStreet(number)
            }
            "setStopLoss" -> {
                if (scriptingEngine != null && args.isNotEmpty()) {
                    val engine = scriptingEngine as at.crowdware.roulettestrategiesimulator.scripting.ScriptingEngine
                    val amountCents = (args[0] as? Int) ?: 0
                    engine.getState().sessionConfig.stopLoss = amountCents
                    engine.onLog?.invoke("StopLoss set to €${amountCents / 100.0}")
                }
                return Unit
            }
            "setSessionTarget" -> {
                if (scriptingEngine != null && args.isNotEmpty()) {
                    val engine = scriptingEngine as at.crowdware.roulettestrategiesimulator.scripting.ScriptingEngine
                    val amountCents = (args[0] as? Int) ?: 0
                    engine.getState().sessionConfig.sessionTarget = amountCents
                    engine.onLog?.invoke("SessionTarget set to €${amountCents / 100.0}")
                }
                return Unit
            }
            "setSessionStartBalance" -> {
                if (scriptingEngine != null && args.isNotEmpty()) {
                    val engine = scriptingEngine as at.crowdware.roulettestrategiesimulator.scripting.ScriptingEngine
                    val amountCents = (args[0] as? Int) ?: 0
                    engine.getState().sessionConfig.sessionStartBalance = amountCents
                    engine.onLog?.invoke("SessionStartBalance set to €${amountCents / 100.0}")
                }
                return Unit
            }
            "getSessionProfit" -> {
                return if (scriptingEngine != null) {
                    val engine = scriptingEngine as at.crowdware.roulettestrategiesimulator.scripting.ScriptingEngine
                    val state = engine.getState()
                    val profit = state.balance - state.sessionStats.currentSessionStartBalance
                    profit
                } else 0
            }
            "isSessionActive" -> {
                return if (scriptingEngine != null) {
                    val engine = scriptingEngine as at.crowdware.roulettestrategiesimulator.scripting.ScriptingEngine
                    engine.getState().sessionActive
                } else true
            }
            "startNewSession" -> {
                if (scriptingEngine != null) {
                    val engine = scriptingEngine as at.crowdware.roulettestrategiesimulator.scripting.ScriptingEngine
                    engine.startNewSession()
                }
                return Unit
            }
            "getTotalSessions" -> {
                return if (scriptingEngine != null) {
                    val engine = scriptingEngine as at.crowdware.roulettestrategiesimulator.scripting.ScriptingEngine
                    engine.getState().sessionStats.totalSessions
                } else 0
            }
            "getWonSessions" -> {
                return if (scriptingEngine != null) {
                    val engine = scriptingEngine as at.crowdware.roulettestrategiesimulator.scripting.ScriptingEngine
                    engine.getState().sessionStats.wonSessions
                } else 0
            }
            "getSessionWinRate" -> {
                return if (scriptingEngine != null) {
                    val engine = scriptingEngine as at.crowdware.roulettestrategiesimulator.scripting.ScriptingEngine
                    engine.getState().sessionStats.getWinRate()
                } else 0
            }
            "getVariable" -> {
                val varName = args.firstOrNull()?.toString() ?: ""
                return variables[varName]
            }
            "setVariable" -> {
                if (args.size >= 2) {
                    val varName = args[0]?.toString() ?: ""
                    val value = args[1]
                    variables[varName] = value ?: Unit
                }
                return Unit
            }
            "setStatus" -> {
                val message = args.firstOrNull()?.toString() ?: ""
                if (scriptingEngine != null) {
                    val engine = scriptingEngine as at.crowdware.roulettestrategiesimulator.scripting.ScriptingEngine
                    engine.setStatusMessage(message)
                    engine.onLog?.invoke("Status: $message")
                }
                return Unit
            }
            "freeSpins" -> {
                if (scriptingEngine != null && args.isNotEmpty()) {
                    val engine = scriptingEngine as at.crowdware.roulettestrategiesimulator.scripting.ScriptingEngine
                    val count = (args[0] as? Int) ?: 0
                    engine.freeSpinsInternal(count)
                }
                return Unit
            }
        }
        
        return when (name) {
            "submit"    -> { println("submit() wurde aufgerufen"); Unit }
            "showAlert" -> { println("Alert: ${args.firstOrNull() ?: "No message"}"); Unit }
            "println"   -> { println(args.firstOrNull()?.toString() ?: ""); Unit }
            else -> {
                dataClasses[name]?.let { dc ->
                    if (args.size != dc.fields.size) error("Data class '${'$'}name' expects ${'$'}{dc.fields.size} args, got ${'$'}{args.size}")
                    val fieldMap = mutableMapOf<String, Any?>()
                    dc.fields.forEachIndexed { idx, f -> fieldMap[f] = args[idx] }
                    return DataInstance(dc.name, fieldMap)
                }
                val function = functions[name] ?: error("Unknown function: ${'$'}name")

                if (args.size != function.parameters.size) {
                    error("Function '${'$'}name' expects ${'$'}{function.parameters.size} arguments, got ${'$'}{args.size}")
                }

                // Save ALL current variables (to detect new local scope vars)
                val variablesBeforeFunction = variables.keys.toSet()
                
                // Only save parameter values that already exist
                val savedParameters = mutableMapOf<String, Any?>()
                function.parameters.forEach { param ->
                    if (variables.containsKey(param)) {
                        savedParameters[param] = variables[param]
                    }
                }

                try {
                    // Set function parameters
                    function.parameters.forEachIndexed { index, param ->
                        variables[param] = args[index] ?: Unit
                    }

                    // Execute function body (may declare local vars with VarDeclaration)
                    function.body.forEach { executeStatement(it) }

                    null

                } catch (e: ReturnException) {
                    e.value
                } finally {
                    // Clean up: Remove ALL variables created during function execution
                    val currentVariables = variables.keys.toSet()
                    val newLocalVariables = currentVariables - variablesBeforeFunction - function.parameters.toSet()
                    
                    // Remove local scope variables
                    newLocalVariables.forEach { localVar ->
                        variables.remove(localVar)
                    }
                    
                    // Restore or remove parameters
                    function.parameters.forEach { param ->
                        if (savedParameters.containsKey(param)) {
                            variables[param] = savedParameters[param] ?: Unit
                        } else {
                            variables.remove(param)
                        }
                    }
                }
            }
        }
    }

    private fun executeArrayMethod(receiver: Any?, method: String, args: List<Any?>): Any? {
        val array = receiver as? MutableList<Any?> ?: error("Method '$method' can only be called on arrays")

        return when (method) {
            "add" -> {
                if (args.size != 1) error("add() expects exactly 1 argument")
                array.add(args[0])
                Unit
            }
            "removeAt" -> {
                if (args.size != 1) error("removeAt() expects exactly 1 argument")
                val index = args[0] as? Int ?: error("removeAt() index must be an integer")
                if (index < 0 || index >= array.size) error("Index $index out of bounds for array of size ${array.size}")
                array.removeAt(index)
            }
            "size" -> {
                if (args.isNotEmpty()) error("size() expects no arguments")
                array.size
            }
            "contains" -> {
                if (args.size != 1) error("contains() expects exactly 1 argument")
                array.contains(args[0])
            }
            "remove" -> {
                if (args.size != 1) error("remove() expects exactly 1 argument")
                array.remove(args[0])
            }
            else -> error("Unknown array method: $method")
        }
    }

    fun setVariable(name: String, value: Any) {
        variables[name] = value
    }

    fun getVariable(name: String): Any? = variables[name]
}


// Parse error handler for user-friendly messages
fun parseWithFriendlyErrors(code: String): List<Statement> {
    try {
        return MiniLanguageGrammar.parseToEnd(code)
    } catch (e: Exception) {
        // Convert technical parse errors to user-friendly messages
        val errorMessage = e.message ?: "Unbekannter Parsing-Fehler"
        val message = when {
            errorMessage.contains("MismatchedToken") -> {
                when {
                    errorMessage.contains("expected=RBRACE") -> "Fehlende schließende geschweifte Klammer '}'"
                    errorMessage.contains("expected=RPAREN") -> "Fehlende schließende runde Klammer ')'"
                    errorMessage.contains("expected=RBRACKET") -> "Fehlende schließende eckige Klammer ']'"
                    errorMessage.contains("expected=SEMICOLON") -> "Fehlende Semikolon ';'"
                    errorMessage.contains("expected=IDENTIFIER") -> "Erwarteter Bezeichner (Variablenname)"
                    errorMessage.contains("expected=NUMBER") -> "Erwartete Zahl"
                    errorMessage.contains("expected=STRING") -> "Erwarteter Text in Anführungszeichen"
                    errorMessage.contains("for \"for\"") -> "Syntaxfehler in for-Schleife - überprüfen Sie die Klammern und Syntax"
                    errorMessage.contains("for \"if\"") -> "Syntaxfehler in if-Statement - überprüfen Sie die Klammern und Syntax"
                    errorMessage.contains("for \"while\"") -> "Syntaxfehler in while-Schleife - überprüfen Sie die Klammern und Syntax"
                    else -> "Syntaxfehler im Code - überprüfen Sie Klammern, Semikolons und Bezeichner"
                }
            }
            errorMessage.contains("UnparsedRemainder") -> {
                "Unerwarteter Code-Teil - möglicherweise fehlt eine schließende Klammer oder ein Semikolon"
            }
            errorMessage.contains("AlternativesFailure") -> {
                "Code kann nicht geparst werden - überprüfen Sie die Syntax"
            }
            else -> "Parsing-Fehler: $errorMessage"
        }

        throw InterpreterError(message)
    }
}
