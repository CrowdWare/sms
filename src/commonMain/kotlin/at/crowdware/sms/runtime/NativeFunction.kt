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

package at.crowdware.sms.runtime

/**
 * Interface for native functions that can be called from SMS scripts
 */
fun interface NativeFunction {
    /**
     * Execute the native function with given arguments and return a value
     * @param args The arguments passed to the function as SMS Values
     * @return The return value as SMS Value (use NullValue if no return value)
     */
    fun call(args: List<Value>): Value
}

/**
 * Registry for native functions
 */
class NativeFunctionRegistry {
    private val functions = mutableMapOf<String, NativeFunction>()
    
    /**
     * Register a native function by name
     */
    fun register(name: String, function: NativeFunction) {
        functions[name] = function
    }
    
    /**
     * Register a native function with lambda
     */
    fun register(name: String, function: (List<Value>) -> Value) {
        functions[name] = NativeFunction(function)
    }
    
    /**
     * Get a registered function by name
     */
    fun get(name: String): NativeFunction? = functions[name]
    
    /**
     * Check if a function is registered
     */
    fun has(name: String): Boolean = functions.containsKey(name)
    
    /**
     * Get all registered function names
     */
    fun getNames(): Set<String> = functions.keys.toSet()
    
    /**
     * Clear all registered functions
     */
    fun clear() = functions.clear()
    
    /**
     * Register standard built-in functions
     */
    fun registerBuiltins() {
        // String conversion
        register("toString") { args ->
            if (args.isNotEmpty()) {
                StringValue(ValueUtils.toString(args[0]))
            } else {
                StringValue("")
            }
        }
        
        // Array operations
        register("size") { args ->
            if (args.isNotEmpty() && args[0] is ArrayValue) {
                NumberValue((args[0] as ArrayValue).size())
            } else {
                NumberValue(0)
            }
        }
        
        // Type checking
        register("isNumber") { args ->
            BooleanValue(args.isNotEmpty() && args[0] is NumberValue)
        }
        
        register("isString") { args ->
            BooleanValue(args.isNotEmpty() && args[0] is StringValue)
        }
        
        register("isBoolean") { args ->
            BooleanValue(args.isNotEmpty() && args[0] is BooleanValue)
        }
        
        register("isNull") { args ->
            BooleanValue(args.isNotEmpty() && args[0] is NullValue)
        }
        
        register("isArray") { args ->
            BooleanValue(args.isNotEmpty() && args[0] is ArrayValue)
        }
        
        // Math functions
        register("abs") { args ->
            if (args.isNotEmpty() && args[0] is NumberValue) {
                val num = (args[0] as NumberValue).value
                NumberValue(kotlin.math.abs(num))
            } else {
                NumberValue(0.0)
            }
        }
        
        register("min") { args ->
            if (args.size >= 2 && args[0] is NumberValue && args[1] is NumberValue) {
                val a = (args[0] as NumberValue).value
                val b = (args[1] as NumberValue).value
                NumberValue(kotlin.math.min(a, b))
            } else {
                NumberValue(0.0)
            }
        }
        
        register("max") { args ->
            if (args.size >= 2 && args[0] is NumberValue && args[1] is NumberValue) {
                val a = (args[0] as NumberValue).value
                val b = (args[1] as NumberValue).value
                NumberValue(kotlin.math.max(a, b))
            } else {
                NumberValue(0.0)
            }
        }
        
        // Simple print function (can be overridden by host application)
        register("print") { args ->
            if (args.isNotEmpty()) {
                print(ValueUtils.toString(args[0]))
            }
            NullValue
        }
        
        // println removed from builtins - should be registered by withStandardLibrary() if needed
    }
}
