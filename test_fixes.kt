import at.crowdware.sms.ScriptEngine
import at.crowdware.sms.ParseError
import at.crowdware.sms.LexError

fun main() {
    val engine = ScriptEngine()
    
    println("Testing block comments...")
    
    // Test 1: Block comments should work
    try {
        val result = engine.executeAndGetKotlin("""
            /* This is a block comment */
            var x = 5
            x + 3
        """)
        println("✓ Block comments work! Result: $result")
    } catch (e: Exception) {
        println("✗ Block comments failed: ${e.message}")
    }
    
    // Test 2: Unterminated block comment should throw LexError
    try {
        engine.execute("""
            var x = 5
            /* This comment is not closed
            var y = 10
        """)
        println("✗ Unterminated block comment should have failed!")
    } catch (e: LexError) {
        println("✓ Unterminated block comment correctly throws LexError: ${e.message}")
    } catch (e: Exception) {
        println("✗ Unexpected exception for unterminated comment: ${e.message}")
    }
    
    println("\nTesting double literal rejection...")
    
    // Test 3: Double literals should be rejected with ParseError
    try {
        engine.execute("var name = 1.0")
        println("✗ Double literal should have been rejected!")
    } catch (e: ParseError) {
        println("✓ Double literal correctly rejected with ParseError: ${e.message}")
    } catch (e: Exception) {
        println("✗ Unexpected exception for double literal: ${e.message}")
    }
    
    // Test 4: Integer literals should still work
    try {
        val result = engine.executeAndGetKotlin("var x = 42; x")
        println("✓ Integer literals still work! Result: $result")
    } catch (e: Exception) {
        println("✗ Integer literals failed: ${e.message}")
    }
}
