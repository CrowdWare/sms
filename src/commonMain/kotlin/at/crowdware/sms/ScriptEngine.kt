package at.crowdware.sms

import at.crowdware.sms.interpreter.Interpreter
import at.crowdware.sms.lexer.Lexer
import at.crowdware.sms.parser.Parser
import at.crowdware.sms.runtime.*

/**
 * Simple Markup Script (SMS) Engine - Main public API
 * 
 * Example usage:
 * ```kotlin
 * val engine = ScriptEngine()
 * 
 * // Register native functions
 * engine.registerFunction("println") { args ->
 *     println(args.firstOrNull()?.toString() ?: "")
 *     NullValue
 * }
 * 
 * // Execute script
 * try {
 *     val result = engine.execute("""
 *         fun greet(name) {
 *             println("Hello " + name + "!")
 *         }
 *         greet("World")
 *     """)
 * } catch (e: ScriptError) {
 *     println("Error at ${e.position}: ${e.message}")
 * }
 * ```
 */
class ScriptEngine {
    private val interpreter = Interpreter()
    
    /**
     * Execute a script from source code
     * @param source The SMS script source code
     * @return The result value of the script execution
     * @throws ScriptError if lexing, parsing, or runtime error occurs
     */
    fun execute(source: String): Value {
        try {
            // Tokenize
            val lexer = Lexer(source)
            val tokens = lexer.tokenize()
            
            // Parse
            val parser = Parser(tokens)
            val program = parser.parse()
            
            // Execute
            return interpreter.execute(program)
            
        } catch (e: ScriptError) {
            throw e
        } catch (e: Exception) {
            throw ScriptError("Unexpected error during script execution: ${e.message}", null, e)
        }
    }
    
    /**
     * Execute a script and return the result as a Kotlin value
     * @param source The SMS script source code
     * @return The result value converted to Kotlin types
     * @throws ScriptError if lexing, parsing, or runtime error occurs
     */
    fun executeAndGetKotlin(source: String): Any? {
        val result = execute(source)
        return ValueUtils.toKotlin(result)
    }
    
    /**
     * Register a native function that can be called from scripts
     * @param name The function name as it appears in scripts
     * @param function The function implementation
     */
    fun registerFunction(name: String, function: NativeFunction) {
        interpreter.getNativeFunctions().register(name, function)
    }
    
    /**
     * Register a native function with lambda syntax
     * @param name The function name as it appears in scripts
     * @param function The function implementation as lambda
     */
    fun registerFunction(name: String, function: (List<Value>) -> Value) {
        interpreter.getNativeFunctions().register(name, function)
    }
    
    /**
     * Register a native function that works with Kotlin values
     * @param name The function name as it appears in scripts
     * @param function The function implementation that works with Kotlin types
     */
    fun registerKotlinFunction(name: String, function: (List<Any?>) -> Any?) {
        interpreter.getNativeFunctions().register(name) { args ->
            val kotlinArgs = args.map { ValueUtils.toKotlin(it) }
            val result = function(kotlinArgs)
            ValueUtils.fromKotlin(result)
        }
    }
    
    /**
     * Check if a native function is registered
     * @param name The function name
     * @return true if the function is registered
     */
    fun hasFunction(name: String): Boolean {
        return interpreter.getNativeFunctions().has(name)
    }
    
    /**
     * Get all registered function names
     * @return Set of all registered function names
     */
    fun getFunctionNames(): Set<String> {
        return interpreter.getNativeFunctions().getNames()
    }
    
    /**
     * Clear all registered native functions (built-ins will be re-registered)
     */
    fun clearFunctions() {
        interpreter.getNativeFunctions().clear()
        interpreter.getNativeFunctions().registerBuiltins()
    }
    
    /**
     * Parse a script without executing it (for syntax validation)
     * @param source The SMS script source code
     * @throws ScriptError if lexing or parsing error occurs
     */
    fun validateSyntax(source: String) {
        try {
            val lexer = Lexer(source)
            val tokens = lexer.tokenize()
            val parser = Parser(tokens)
            parser.parse()
        } catch (e: ScriptError) {
            throw e
        } catch (e: Exception) {
            throw ScriptError("Unexpected error during syntax validation: ${e.message}", null, e)
        }
    }
    
    /**
     * Get version information
     */
    fun getVersion(): String = "SMS Engine 1.1.0"
    
    companion object {
        /**
         * Create a new ScriptEngine with commonly used functions pre-registered
         */
        fun withStandardLibrary(): ScriptEngine {
            val engine = ScriptEngine()
            
            // Enhanced println that accepts multiple arguments
            engine.registerFunction("println") { args ->
                if (args.isNotEmpty()) {
                    val message = args.joinToString(" ") { 
                        when (it) {
                            is StringValue -> it.value
                            is NumberValue -> if (it.value == it.value.toInt().toDouble()) it.value.toInt().toString() else it.value.toString()
                            is BooleanValue -> it.value.toString()
                            is NullValue -> "null"
                            else -> it.toString()
                        }
                    }
                    println(message)
                } else {
                    println()
                }
                NullValue
            }
            
            // Simple input function (platform-specific implementation may be needed)
            engine.registerFunction("readLine") { _ ->
                StringValue(readlnOrNull() ?: "")
            }
            
            // Random number generator
            engine.registerFunction("random") { args ->
                when (args.size) {
                    0 -> NumberValue(kotlin.random.Random.nextDouble())
                    1 -> {
                        val max = (args[0] as? NumberValue)?.toInt() ?: 1
                        NumberValue(kotlin.random.Random.nextInt(max))
                    }
                    2 -> {
                        val min = (args[0] as? NumberValue)?.toInt() ?: 0
                        val max = (args[1] as? NumberValue)?.toInt() ?: 1
                        NumberValue(kotlin.random.Random.nextInt(min, max))
                    }
                    else -> NumberValue(0)
                }
            }
            
            // String operations
            engine.registerFunction("split") { args ->
                if (args.size >= 2 && args[0] is StringValue && args[1] is StringValue) {
                    val string = (args[0] as StringValue).value
                    val delimiter = (args[1] as StringValue).value
                    val parts = string.split(delimiter)
                    ArrayValue(parts.map { StringValue(it) }.toMutableList())
                } else {
                    ArrayValue()
                }
            }
            
            engine.registerFunction("join") { args ->
                if (args.size >= 2 && args[0] is ArrayValue && args[1] is StringValue) {
                    val array = args[0] as ArrayValue
                    val delimiter = (args[1] as StringValue).value
                    val joined = array.elements.joinToString(delimiter) { ValueUtils.toString(it) }
                    StringValue(joined)
                } else {
                    StringValue("")
                }
            }
            
            return engine
        }
    }
}

/**
 * Utility functions for working with SMS
 */
object SMS {
    
    /**
     * Quick execute function for simple scripts
     */
    fun execute(source: String): Any? {
        val engine = ScriptEngine.withStandardLibrary()
        return engine.executeAndGetKotlin(source)
    }
    
    /**
     * Quick execute with custom native functions
     */
    fun execute(source: String, functions: Map<String, (List<Any?>) -> Any?>): Any? {
        val engine = ScriptEngine.withStandardLibrary()
        functions.forEach { (name, func) ->
            engine.registerKotlinFunction(name, func)
        }
        return engine.executeAndGetKotlin(source)
    }
    
    /**
     * Validate script syntax
     */
    fun validate(source: String): Boolean {
        return try {
            val engine = ScriptEngine()
            engine.validateSyntax(source)
            true
        } catch (e: ScriptError) {
            false
        }
    }
}
