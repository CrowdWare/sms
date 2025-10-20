package at.crowdware.sms.interpreter

import at.crowdware.sms.Position
import at.crowdware.sms.RuntimeError
import at.crowdware.sms.ast.*
import at.crowdware.sms.runtime.*

/**
 * Control flow exceptions
 */
class BreakException : Exception()
class ContinueException : Exception()
class ReturnException(val value: Value) : Exception()

/**
 * Variable and function scope
 */
class Scope(private val parent: Scope? = null) {
    private val variables = mutableMapOf<String, Value>()
    private val functions = mutableMapOf<String, FunctionDeclaration>()
    private val dataClasses = mutableMapOf<String, DataClassDeclaration>()
    
    fun defineVariable(name: String, value: Value) {
        variables[name] = value
    }
    
    fun getVariable(name: String): Value? {
        return variables[name] ?: parent?.getVariable(name)
    }
    
    fun setVariable(name: String, value: Value): Boolean {
        if (variables.containsKey(name)) {
            variables[name] = value
            return true
        }
        return parent?.setVariable(name, value) ?: false
    }
    
    fun defineFunction(name: String, function: FunctionDeclaration) {
        functions[name] = function
    }
    
    fun getFunction(name: String): FunctionDeclaration? {
        return functions[name] ?: parent?.getFunction(name)
    }
    
    fun defineDataClass(name: String, dataClass: DataClassDeclaration) {
        dataClasses[name] = dataClass
    }
    
    fun getDataClass(name: String): DataClassDeclaration? {
        return dataClasses[name] ?: parent?.getDataClass(name)
    }
}

/**
 * SMS Script Interpreter
 */
class Interpreter(private val nativeFunctions: NativeFunctionRegistry = NativeFunctionRegistry()) {
    private var currentScope = Scope()
    
    init {
        nativeFunctions.registerBuiltins()
    }
    
    /**
     * Execute a program
     */
    fun execute(program: Program): Value {
        var lastValue: Value = NullValue
        
        // First pass: collect function and data class declarations
        for (statement in program.statements) {
            when (statement) {
                is FunctionDeclaration -> currentScope.defineFunction(statement.name, statement)
                is DataClassDeclaration -> currentScope.defineDataClass(statement.name, statement)
                is VarDeclaration, is Assignment, is ExpressionStatement, is IfStatement, 
                is WhileStatement, is ForStatement, is ForInStatement, is BreakStatement, 
                is ContinueStatement, is ReturnStatement -> { /* Skip other statements in first pass */ }
                else -> throw RuntimeError("Unknown statement type in first pass", statement.position)
            }
        }
        
        // Second pass: execute all statements
        for (statement in program.statements) {
            when (statement) {
                is FunctionDeclaration, is DataClassDeclaration -> { /* Already processed */ }
                is VarDeclaration, is Assignment, is ExpressionStatement, is IfStatement,
                is WhileStatement, is ForStatement, is ForInStatement, is BreakStatement,
                is ContinueStatement, is ReturnStatement -> lastValue = executeStatement(statement)
                else -> throw RuntimeError("Unknown statement type", statement.position)
            }
        }
        
        return lastValue
    }
    
    /**
     * Execute a single statement
     */
    private fun executeStatement(statement: Statement): Value {
        try {
            return when (statement) {
                is VarDeclaration -> {
                    val value = evaluateExpression(statement.value)
                    currentScope.defineVariable(statement.name, value)
                    NullValue
                }
                
                is Assignment -> {
                    val value = evaluateExpression(statement.value)
                    when (val target = statement.target) {
                        is Identifier -> {
                            if (!currentScope.setVariable(target.name, value)) {
                                throw RuntimeError("Undefined variable '${target.name}'", statement.position)
                            }
                        }
                        is MemberAccess -> {
                            val obj = evaluateExpression(target.receiver)
                            if (obj is ObjectValue) {
                                obj.setField(target.member, value)
                            } else {
                                throw RuntimeError("Cannot set field on non-object", statement.position)
                            }
                        }
                        is ArrayAccess -> {
                            val array = evaluateExpression(target.receiver)
                            val index = evaluateExpression(target.index)
                            if (array is ArrayValue && index is NumberValue) {
                                array.set(index.toInt(), value)
                            } else {
                                throw RuntimeError("Invalid array assignment", statement.position)
                            }
                        }
                        else -> throw RuntimeError("Invalid assignment target", statement.position)
                    }
                    NullValue
                }
                
                is ExpressionStatement -> evaluateExpression(statement.expression)
                
                is IfStatement -> {
                    val condition = evaluateExpression(statement.condition)
                    if (ValueUtils.isTruthy(condition)) {
                        executeBlock(statement.thenBranch)
                    } else if (statement.elseBranch != null) {
                        executeBlock(statement.elseBranch)
                    } else {
                        NullValue
                    }
                }
                
                is WhileStatement -> {
                    var lastValue: Value = NullValue
                    try {
                        while (true) {
                            val condition = evaluateExpression(statement.condition)
                            if (!ValueUtils.isTruthy(condition)) break
                            
                            try {
                                lastValue = executeBlock(statement.body)
                            } catch (e: ContinueException) {
                                continue
                            }
                        }
                    } catch (e: BreakException) {
                        // Break out of loop
                    }
                    lastValue
                }
                
                is ForStatement -> {
                    var lastValue: Value = NullValue
                    val forScope = Scope(currentScope)
                    val prevScope = currentScope
                    currentScope = forScope
                    
                    try {
                        // Execute init
                        statement.init?.let { executeStatement(it) }
                        
                        try {
                            while (true) {
                                // Check condition
                                if (statement.condition != null) {
                                    val condition = evaluateExpression(statement.condition)
                                    if (!ValueUtils.isTruthy(condition)) break
                                }
                                
                                // Execute body
                                try {
                                    lastValue = executeBlock(statement.body)
                                } catch (e: ContinueException) {
                                    // Continue to update
                                }
                                
                                // Execute update
                                statement.update?.let { executeStatement(it) }
                            }
                        } catch (e: BreakException) {
                            // Break out of loop
                        }
                    } finally {
                        currentScope = prevScope
                    }
                    
                    lastValue
                }
                
                is ForInStatement -> {
                    var lastValue: Value = NullValue
                    val forScope = Scope(currentScope)
                    val prevScope = currentScope
                    currentScope = forScope
                    
                    try {
                        val iterable = evaluateExpression(statement.iterable)
                        if (iterable is ArrayValue) {
                            try {
                                for (element in iterable.elements) {
                                    currentScope.defineVariable(statement.variable, element)
                                    try {
                                        lastValue = executeBlock(statement.body)
                                    } catch (e: ContinueException) {
                                        continue
                                    }
                                }
                            } catch (e: BreakException) {
                                // Break out of loop
                            }
                        } else {
                            throw RuntimeError("for-in requires an array", statement.position)
                        }
                    } finally {
                        currentScope = prevScope
                    }
                    
                    lastValue
                }
                
                is BreakStatement -> throw BreakException()
                is ContinueStatement -> throw ContinueException()
                is ReturnStatement -> {
                    val value = statement.value?.let { evaluateExpression(it) } ?: NullValue
                    throw ReturnException(value)
                }
                
                is FunctionDeclaration -> NullValue // Already processed
                is DataClassDeclaration -> NullValue // Already processed
                else -> throw RuntimeError("Unknown statement type in execution", statement.position)
            }
        } catch (e: RuntimeError) {
            throw e
        } catch (e: BreakException) {
            throw e
        } catch (e: ContinueException) {
            throw e
        } catch (e: ReturnException) {
            throw e
        } catch (e: Exception) {
            throw RuntimeError("Runtime error: ${e.message}", statement.position, e)
        }
    }
    
    /**
     * Execute a block of statements
     */
    private fun executeBlock(statements: List<Statement>): Value {
        val blockScope = Scope(currentScope)
        val prevScope = currentScope
        currentScope = blockScope
        
        return try {
            var lastValue: Value = NullValue
            for (statement in statements) {
                lastValue = executeStatement(statement)
            }
            lastValue
        } finally {
            currentScope = prevScope
        }
    }
    
    /**
     * Evaluate an expression
     */
    private fun evaluateExpression(expression: Expression): Value {
        return try {
            when (expression) {
                is NumberLiteral -> NumberValue(expression.value)
                is StringLiteral -> StringValue(expression.value)
                is InterpolatedStringLiteral -> evaluateInterpolatedString(expression)
                is BooleanLiteral -> BooleanValue(expression.value)
                is NullLiteral -> NullValue
                
                is Identifier -> {
                    currentScope.getVariable(expression.name)
                        ?: throw RuntimeError("Undefined variable '${expression.name}'", expression.position)
                }
                
                is BinaryExpression -> evaluateBinaryExpression(expression)
                is UnaryExpression -> evaluateUnaryExpression(expression)
                is PostfixExpression -> evaluatePostfixExpression(expression)
                
                is FunctionCall -> {
                    val args = expression.arguments.map { evaluateExpression(it) }
                    
                    // Check for native function first
                    val nativeFunc = nativeFunctions.get(expression.name)
                    if (nativeFunc != null) {
                        return nativeFunc.call(args)
                    }
                    
                    // Check for user-defined function
                    val func = currentScope.getFunction(expression.name)
                        ?: throw RuntimeError("Undefined function '${expression.name}'", expression.position)
                    
                    callFunction(func, args, expression.position)
                }
                
                is MethodCall -> {
                    val receiver = evaluateExpression(expression.receiver)
                    val args = expression.arguments.map { evaluateExpression(it) }
                    
                    when (receiver) {
                        is ArrayValue -> callArrayMethod(receiver, expression.method, args, expression.position)
                        is StringValue -> callStringMethod(receiver, expression.method, args, expression.position)
                        else -> throw RuntimeError("Cannot call method '${expression.method}' on ${receiver::class.simpleName}", expression.position)
                    }
                }
                
                is MemberAccess -> {
                    val receiver = evaluateExpression(expression.receiver)
                    when (receiver) {
                        is ObjectValue -> receiver.getField(expression.member)
                        is ArrayValue -> when (expression.member) {
                            "size" -> NumberValue(receiver.size())
                            else -> throw RuntimeError("Unknown array property '${expression.member}'", expression.position)
                        }
                        else -> throw RuntimeError("Cannot access member '${expression.member}' on ${receiver::class.simpleName}", expression.position)
                    }
                }
                
                is ArrayAccess -> {
                    val receiver = evaluateExpression(expression.receiver)
                    val index = evaluateExpression(expression.index)
                    
                    if (receiver is ArrayValue && index is NumberValue) {
                        receiver.get(index.toInt())
                    } else {
                        throw RuntimeError("Invalid array access", expression.position)
                    }
                }
                
                is ArrayLiteral -> {
                    val elements = expression.elements.map { evaluateExpression(it) }.toMutableList()
                    ArrayValue(elements)
                }
                
                else -> throw RuntimeError("Unknown expression type", expression.position)
            }
        } catch (e: RuntimeError) {
            throw e
        } catch (e: Exception) {
            throw RuntimeError("Expression evaluation error: ${e.message}", expression.position, e)
        }
    }
    
    // Helper methods for specific operations
    private fun evaluateBinaryExpression(expr: BinaryExpression): Value {
        val left = evaluateExpression(expr.left)
        val right = evaluateExpression(expr.right)
        
        return when (expr.operator) {
            "+" -> when {
                left is NumberValue && right is NumberValue -> NumberValue(left.value + right.value)
                left is StringValue || right is StringValue -> {
                    val leftStr = when (left) {
                        is StringValue -> left.value
                        else -> left.toString()
                    }
                    val rightStr = when (right) {
                        is StringValue -> right.value
                        else -> right.toString()
                    }
                    StringValue(leftStr + rightStr)
                }
                else -> throw RuntimeError("Invalid operands for '+'", expr.position)
            }
            "-" -> when {
                left is NumberValue && right is NumberValue -> NumberValue(left.value - right.value)
                else -> throw RuntimeError("Invalid operands for '-'", expr.position)
            }
            "*" -> when {
                left is NumberValue && right is NumberValue -> NumberValue(left.value * right.value)
                else -> throw RuntimeError("Invalid operands for '*'", expr.position)
            }
            "/" -> when {
                left is NumberValue && right is NumberValue -> {
                    if (right.value == 0.0) throw RuntimeError("Division by zero", expr.position)
                    NumberValue(left.value / right.value)
                }
                else -> throw RuntimeError("Invalid operands for '/'", expr.position)
            }
            "==" -> BooleanValue(ValueUtils.equals(left, right))
            "!=" -> BooleanValue(!ValueUtils.equals(left, right))
            "<" -> when {
                left is NumberValue && right is NumberValue -> BooleanValue(left.value < right.value)
                else -> throw RuntimeError("Invalid operands for '<'", expr.position)
            }
            ">" -> when {
                left is NumberValue && right is NumberValue -> BooleanValue(left.value > right.value)
                else -> throw RuntimeError("Invalid operands for '>'", expr.position)
            }
            "<=" -> when {
                left is NumberValue && right is NumberValue -> BooleanValue(left.value <= right.value)
                else -> throw RuntimeError("Invalid operands for '<='", expr.position)
            }
            ">=" -> when {
                left is NumberValue && right is NumberValue -> BooleanValue(left.value >= right.value)
                else -> throw RuntimeError("Invalid operands for '>='", expr.position)
            }
            "&&" -> BooleanValue(ValueUtils.isTruthy(left) && ValueUtils.isTruthy(right))
            "||" -> BooleanValue(ValueUtils.isTruthy(left) || ValueUtils.isTruthy(right))
            else -> throw RuntimeError("Unknown binary operator '${expr.operator}'", expr.position)
        }
    }
    
    private fun evaluateUnaryExpression(expr: UnaryExpression): Value {
        val operand = evaluateExpression(expr.operand)
        
        return when (expr.operator) {
            "-" -> when (operand) {
                is NumberValue -> NumberValue(-operand.value)
                else -> throw RuntimeError("Invalid operand for unary '-'", expr.position)
            }
            "+" -> when (operand) {
                is NumberValue -> operand
                else -> throw RuntimeError("Invalid operand for unary '+'", expr.position)
            }
            "!" -> BooleanValue(!ValueUtils.isTruthy(operand))
            else -> throw RuntimeError("Unknown unary operator '${expr.operator}'", expr.position)
        }
    }
    
    private fun evaluatePostfixExpression(expr: PostfixExpression): Value {
        when (val operand = expr.operand) {
            is Identifier -> {
                val current = currentScope.getVariable(operand.name)
                    ?: throw RuntimeError("Undefined variable '${operand.name}'", expr.position)
                
                if (current is NumberValue) {
                    val newValue = when (expr.operator) {
                        "++" -> NumberValue(current.value + 1)
                        "--" -> NumberValue(current.value - 1)
                        else -> throw RuntimeError("Unknown postfix operator '${expr.operator}'", expr.position)
                    }
                    currentScope.setVariable(operand.name, newValue)
                    return current // Return old value
                } else {
                    throw RuntimeError("Postfix operators only work on numbers", expr.position)
                }
            }
            else -> throw RuntimeError("Postfix operators only work on variables", expr.position)
        }
    }
    
    private fun callFunction(func: FunctionDeclaration, args: List<Value>, position: Position?): Value {
        if (args.size != func.parameters.size) {
            throw RuntimeError("Expected ${func.parameters.size} arguments, got ${args.size}", position)
        }
        
        val funcScope = Scope(currentScope)
        val prevScope = currentScope
        currentScope = funcScope
        
        return try {
            // Bind parameters
            for (i in func.parameters.indices) {
                currentScope.defineVariable(func.parameters[i], args[i])
            }
            
            // Execute function body
            executeBlock(func.body)
        } catch (e: ReturnException) {
            e.value
        } finally {
            currentScope = prevScope
        }
    }
    
    private fun callArrayMethod(array: ArrayValue, method: String, args: List<Value>, position: Position?): Value {
        return when (method) {
            "add" -> {
                if (args.size == 1) {
                    array.add(args[0])
                    NullValue
                } else {
                    throw RuntimeError("add() expects 1 argument", position)
                }
            }
            "remove" -> {
                if (args.size == 1) {
                    BooleanValue(array.remove(args[0]))
                } else {
                    throw RuntimeError("remove() expects 1 argument", position)
                }
            }
            "removeAt" -> {
                if (args.size == 1 && args[0] is NumberValue) {
                    array.removeAt((args[0] as NumberValue).toInt()) ?: NullValue
                } else {
                    throw RuntimeError("removeAt() expects 1 number argument", position)
                }
            }
            "contains" -> {
                if (args.size == 1) {
                    BooleanValue(array.contains(args[0]))
                } else {
                    throw RuntimeError("contains() expects 1 argument", position)
                }
            }
            else -> throw RuntimeError("Unknown array method '$method'", position)
        }
    }
    
    private fun callStringMethod(string: StringValue, method: String, args: List<Value>, position: Position?): Value {
        return when (method) {
            "length" -> NumberValue(string.value.length)
            "toUpperCase" -> StringValue(string.value.uppercase())
            "toLowerCase" -> StringValue(string.value.lowercase())
            else -> throw RuntimeError("Unknown string method '$method'", position)
        }
    }
    
    private fun evaluateInterpolatedString(expr: InterpolatedStringLiteral): Value {
        val result = StringBuilder()
        
        for (part in expr.parts) {
            when (part) {
                is StringPart.Text -> result.append(part.value)
                is StringPart.Expression -> {
                    val value = evaluateExpression(part.expr)
                    val str = when (value) {
                        is StringValue -> value.value
                        is NumberValue -> {
                            if (value.value == value.value.toInt().toDouble()) {
                                value.value.toInt().toString()
                            } else {
                                value.value.toString()
                            }
                        }
                        is BooleanValue -> value.value.toString()
                        is NullValue -> "null"
                        else -> value.toString()
                    }
                    result.append(str)
                }
            }
        }
        
        return StringValue(result.toString())
    }
    
    /**
     * Get the native function registry for external function registration
     */
    fun getNativeFunctions(): NativeFunctionRegistry = nativeFunctions
}
