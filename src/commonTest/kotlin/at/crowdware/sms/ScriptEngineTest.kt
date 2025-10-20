package at.crowdware.sms

import at.crowdware.sms.runtime.*
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertTrue

class ScriptEngineTest {
    
    @Test
    fun testBasicArithmetic() {
        val engine = ScriptEngine()
        
        val result = engine.executeAndGetKotlin("2 + 3 * 4")
        assertEquals(14.0, result)
    }
    
    @Test
    fun testVariables() {
        val engine = ScriptEngine()
        
        val result = engine.executeAndGetKotlin("""
            var x = 10
            var y = 5
            x + y
        """)
        assertEquals(15.0, result)
    }
    
    @Test
    fun testFunctions() {
        val engine = ScriptEngine()
        
        val result = engine.executeAndGetKotlin("""
            fun add(a, b) {
                return a + b
            }
            add(3, 7)
        """)
        assertEquals(10.0, result)
    }
    
    @Test
    fun testArrays() {
        val engine = ScriptEngine()
        
        val result = engine.executeAndGetKotlin("""
            var arr = [1, 2, 3]
            arr.add(4)
            arr.size
        """)
        assertEquals(4.0, result)
    }
    
    @Test
    fun testNativeFunctions() {
        val engine = ScriptEngine()
        
        // Register a custom function
        engine.registerFunction("multiply") { args ->
            if (args.size >= 2 && args[0] is NumberValue && args[1] is NumberValue) {
                val a = (args[0] as NumberValue).value
                val b = (args[1] as NumberValue).value
                NumberValue(a * b)
            } else {
                NumberValue(0)
            }
        }
        
        val result = engine.executeAndGetKotlin("multiply(6, 7)")
        assertEquals(42.0, result)
    }
    
    @Test
    fun testKotlinFunction() {
        val engine = ScriptEngine()
        
        // Register function that works with Kotlin types
        engine.registerKotlinFunction("square") { args ->
            val num = (args.firstOrNull() as? Double) ?: 0.0
            num * num
        }
        
        val result = engine.executeAndGetKotlin("square(5)")
        assertEquals(25.0, result)
    }
    
    @Test
    fun testControlFlow() {
        val engine = ScriptEngine()
        
        val result = engine.executeAndGetKotlin("""
            fun factorial(n) {
                if (n <= 1) {
                    return 1
                } else {
                    return n * factorial(n - 1)
                }
            }
            factorial(5)
        """)
        assertEquals(120.0, result)
    }
    
    @Test
    fun testLoops() {
        val engine = ScriptEngine()
        
        val result = engine.executeAndGetKotlin("""
            var sum = 0
            for (var i = 1; i <= 10; i = i + 1) {
                sum = sum + i
            }
            sum
        """)
        assertEquals(55.0, result)
    }
    
    @Test
    fun testForInLoop() {
        val engine = ScriptEngine()
        
        val result = engine.executeAndGetKotlin("""
            var numbers = [1, 2, 3, 4, 5]
            var sum = 0
            for (num in numbers) {
                sum = sum + num
            }
            sum
        """)
        assertEquals(15.0, result)
    }
    
    @Test
    fun testSyntaxError() {
        val engine = ScriptEngine()
        
        assertFailsWith<ParseError> {
            engine.execute("var x = ")
        }
    }
    
    @Test
    fun testRuntimeError() {
        val engine = ScriptEngine()
        
        assertFailsWith<RuntimeError> {
            engine.execute("unknownVariable + 1")
        }
    }
    
    @Test
    fun testSyntaxValidation() {
        val engine = ScriptEngine()
        
        // Valid syntax
        engine.validateSyntax("var x = 42")
        
        // Invalid syntax should throw
        assertFailsWith<ScriptError> {
            engine.validateSyntax("var x =")
        }
    }
    
    @Test
    fun testSMSUtility() {
        // Test quick execute
        val result = SMS.execute("2 + 2")
        assertEquals(4.0, result)
        
        // Test with custom functions
        val result2 = SMS.execute(
            "greet(\"World\")",
            mapOf("greet" to { args ->
                "Hello ${args.firstOrNull()}!"
            })
        )
        assertEquals("Hello World!", result2)
        
        // Test validation
        assertTrue(SMS.validate("var x = 10"))
    }
    
    @Test
    fun testStandardLibrary() {
        val engine = ScriptEngine.withStandardLibrary()
        
        // Test random function
        val result = engine.executeAndGetKotlin("random(10)")
        assertTrue((result as Double) >= 0.0 && result < 10.0)
        
        // Test string operations
        val splitResult = engine.executeAndGetKotlin("""
            var parts = split("a,b,c", ",")
            parts.size
        """)
        assertEquals(3.0, splitResult)
    }
}
