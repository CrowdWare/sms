package at.crowdware.roulettestrategiesimulator.scripting

import at.crowdware.roulettestrategiesimulator.BetTarget
import at.crowdware.roulettestrategiesimulator.RouletteEngine
import at.crowdware.roulettestrategiesimulator.RoundResult

class ScriptingEngine(val rouletteEngine: RouletteEngine) {
    private var interpreter = Interpreter()
    private var scriptState = ScriptState()
    private var currentScript: String = ""
    private var isScriptLoaded = false
    private var currentBets = mutableMapOf<String, Int>()
    private var statusMessage: String = ""
    
    // Callbacks for UI updates
    var onStateChanged: (() -> Unit)? = null
    var onError: ((String) -> Unit)? = null
    var onLog: ((String) -> Unit)? = null
    var onFreeSpinNumber: ((Int) -> Unit)? = null // --- NEU: Callback für freeSpins Zahlen ---
    
    fun getStatusMessage(): String = statusMessage
    
    fun setStatusMessage(message: String) {
        statusMessage = message
    }
    
    fun loadScript(script: String): Boolean {
        return try {
            val isNewScript = currentScript != script
            currentScript = script
            
            // Only create new interpreter if this is a new script
            if (isNewScript) {
                interpreter = Interpreter() // Create new interpreter instance only for new scripts
                
                // Parse the script
                val ast = parseWithFriendlyErrors(script)
                
                // Set up script API functions in interpreter
                setupScriptAPI()
                
                // Load function definitions but don't execute them
                loadFunctionDefinitions(ast)
                
                // Don't auto-execute init() - let user explicitly start the script
                // This prevents double init() calls
            }
            
            isScriptLoaded = true
            onStateChanged?.invoke()
            true
        } catch (e: Exception) {
            onError?.invoke("Script loading failed: ${e.message}")
            isScriptLoaded = false
            false
        }
    }
    
    fun executeInit(): Boolean {
        if (!isScriptLoaded) {
            onError?.invoke("No script loaded")
            return false
        }
        
        return try {
            // Reset state
            scriptState.reset()
            currentBets.clear()
            rouletteEngine.clear()
            
            // Call init() function if it exists
            if (interpreter.functions.containsKey("init")) {
                interpreter.executeFunction("init", emptyList())
            }
            
            onStateChanged?.invoke()
            // onLog?.invoke("Script initialized") // Removed - unnecessary
            true
        } catch (e: Exception) {
            onError?.invoke("Init failed: ${e.message}")
            false
        }
    }
    
    fun executeBet(): Boolean {
        if (!isScriptLoaded) {
            onError?.invoke("No script loaded")
            return false
        }
        
        return try {
            // Clear previous bets
            currentBets.clear()
            rouletteEngine.clear()
            
            // Create context for bet() function
            val context = scriptState.toContext()
            
            // Set context in interpreter variables
            setContextInInterpreter(context)
            
            // Call bet() function
            if (interpreter.functions.containsKey("bet")) {
                interpreter.executeFunction("bet", listOf(context))
            } else {
                onError?.invoke("No bet() function found in script")
                return false
            }
            
            onStateChanged?.invoke()
            // onLog?.invoke("Bet executed - Total: ${currentBets.values.sum()}") // Removed - scripts can log if needed
            
            // Status message is now set by scripts using setStatus() API
            onStateChanged?.invoke()
            
            true
        } catch (e: Exception) {
            onError?.invoke("Bet execution failed: ${e.message}")
            false
        }
    }
    
    fun processSpinResult(result: RoundResult) {
        // Calculate net win in cents (engine uses units, we need cents)
        val netWinCents = result.net * 100
        
        // Update script state FIRST
        scriptState.addSpinResult(result.number, netWinCents, currentBets.toMap())
        
        // Clear bets for next round - bet() will be called from executeBet() for next spin
        currentBets.clear()
        rouletteEngine.clear()
        
        // Check if session should end
        if (!scriptState.sessionActive) {
            onLog?.invoke("Session ended: ${scriptState.sessionStopReason}")
            onLog?.invoke("Session profit: €${scriptState.sessionStats.currentSessionProfit / 100.0}")
        }
        
        onStateChanged?.invoke()
    }
    
    fun isSessionActive(): Boolean = scriptState.sessionActive
    
    fun startNewSession() {
        scriptState.startNewSession()
        onLog?.invoke("New session started - Balance reset to €${scriptState.balance / 100.0}")
        onStateChanged?.invoke()
    }
    
    fun getState(): ScriptState = scriptState
    
    fun setBalance(amount: Int) {
        scriptState.balance = amount
        // Also update session start balance when balance is set explicitly
        scriptState.sessionStats.currentSessionStartBalance = amount
        scriptState.sessionConfig.sessionStartBalance = amount
        
        // NEW: Send balance update to UI via callback
        onBalanceChanged?.invoke(amount)
    }
    
    // NEW: Callback for balance changes to sync with UI
    var onBalanceChanged: ((Int) -> Unit)? = null
    
    fun reset() {
        scriptState.reset()
        currentBets.clear()
        rouletteEngine.clear()
        onStateChanged?.invoke()
    }
    
    private fun setupScriptAPI() {
        // Set reference to this engine in the interpreter
        interpreter.scriptingEngine = this
    }
    
    private fun setContextInInterpreter(context: ScriptContext) {
        interpreter.setVariable("ctx", context)
    }
    
    fun placeBetInternal(target: String, amount: Int) {
        if (amount <= 0) return
        
        // Convert script target to BetTarget
        val betTarget = when (target.lowercase()) {
            "red" -> BetTarget.RedBlack(true)
            "black" -> BetTarget.RedBlack(false)
            "odd" -> BetTarget.EvenOdd(false)
            "even" -> BetTarget.EvenOdd(true)
            "1-18" -> BetTarget.Range(1, 18)
            "19-36" -> BetTarget.Range(19, 36)
            "dozen1" -> BetTarget.Dozen(1)
            "dozen2" -> BetTarget.Dozen(2)
            "dozen3" -> BetTarget.Dozen(3)
            "column1" -> BetTarget.Column(1)
            "column2" -> BetTarget.Column(2)
            "column3" -> BetTarget.Column(3)
            else -> {
                // Try to parse as number
                val number = target.toIntOrNull()
                if (number != null && number in 0..36) {
                    BetTarget.Single(number)
                } else if (target.startsWith("street")) {
                    // Handle street1-street12
                    val streetNum = target.removePrefix("street").toIntOrNull()
                    if (streetNum != null && streetNum in 1..12) {
                        val startNum = (streetNum - 1) * 3 + 1
                        BetTarget.Street(setOf(startNum, startNum + 1, startNum + 2))
                    } else null
                } else null
            }
        }
        
        if (betTarget != null) {
            // Convert amount from cents to units (divide by 100)
            val amountInUnits = amount / 100
            if (amountInUnits > 0) {
                rouletteEngine.place(betTarget, amountInUnits)
                currentBets[target] = amount
                // No log message - bet placement is internal operation
            }
        } else {
            onError?.invoke("Invalid bet target: '$target'")
        }
    }
    
    fun clearBetsInternal() {
        rouletteEngine.clear()
        currentBets.clear()
    }
    
    fun freeSpinsInternal(count: Int) {
        if (!isScriptLoaded) {
            onError?.invoke("No script loaded")
            return
        }
        
        if (count <= 0) {
            onLog?.invoke("freeSpins called with invalid count: $count")
            return
        }
        
        for (i in 1..count) {
            // Check if session is still active
            if (!isSessionActive()) {
                onLog?.invoke("Free spins stopped at spin $i - session ended: ${scriptState.sessionStopReason}")
                break
            }
            
            // Increment spinCount for each observation spin
            scriptState.spinCount++
            
            // Execute spin to get a random number
            val result = rouletteEngine.spin()
            
            // --- NEU: Callback für UI-Zahlenanzeige aufrufen ---
            onFreeSpinNumber?.invoke(result.number)
            
            // Call bet() function with observation number for script logic (updating coldNumbers etc.)
            try {
                val observationContext = ScriptContext(
                    lastNumber = result.number,
                    balance = scriptState.balance,
                    spinCount = scriptState.spinCount,
                    lastWin = 0,  // No win/loss during observation
                    lastBets = emptyMap(),
                    sessionConfig = scriptState.sessionConfig,
                    sessionStats = scriptState.sessionStats,
                    sessionActive = scriptState.sessionActive,
                    sessionStopReason = scriptState.sessionStopReason
                )
                setContextInInterpreter(observationContext)
                
                if (interpreter.functions.containsKey("bet")) {
                    interpreter.executeFunction("bet", listOf(observationContext))
                    // Keep bets that were placed - freeSpins should work like normal spins
                    // Don't clear bets anymore - let the script logic decide when to bet
                }
            } catch (e: Exception) {
                onLog?.invoke("Observation spin $i: Script logic failed: ${e.message}")
            }
        }
        
        // Reset lastWin for clean betting start - scripts manage their own data
        scriptState.lastWin = 0
        onStateChanged?.invoke()
    }
    
    private fun loadFunctionDefinitions(statements: List<Statement>) {
        statements.forEach { statement ->
            when (statement) {
                is FunctionDeclaration -> interpreter.functions[statement.name] = statement
                is DataClassDeclaration -> {
                    // Handle data class declarations if needed
                }
                is VarDeclaration -> {
                    // Initialize Top-Level variables during loadFunctionDefinitions (only once)
                    // But preserve existing values to maintain persistence
                    val existingValue = interpreter.variables[statement.name]
                    if (existingValue == null) {
                        val value = interpreter.evaluateExpression(statement.value)
                        interpreter.variables[statement.name] = value ?: Unit
                        // No debug log - variables are internal interpreter state
                    } else {
                        // Variable preserved - no debug needed
                    }
                }
                else -> {
                    // Skip other statements (assignments, function calls, etc.) during load
                }
            }
        }
    }
}

/**
 * Auto-test simulation data
 */
data class SimulationStats(
    val totalSpins: Int = 0,
    val completedSpins: Int = 0,
    val startBalance: Int = 0,
    val currentBalance: Int = 0,
    val minBalance: Int = 0,
    val maxBalance: Int = 0,
    val totalWagered: Int = 0,
    val balanceHistory: List<Int> = emptyList(),
    val isRunning: Boolean = false
)

/**
 * Auto-test simulation engine
 */
class AutoTestEngine(private val scriptingEngine: ScriptingEngine) {
    private var stats = SimulationStats()
    private var isRunning = false
    
    var onStatsUpdate: ((SimulationStats) -> Unit)? = null
    var onComplete: ((SimulationStats) -> Unit)? = null
    
    suspend fun runSimulation(totalSpins: Int) {
        if (isRunning) return
        
        isRunning = true
        val startBalance = scriptingEngine.getState().balance
        stats = SimulationStats(
            totalSpins = totalSpins,
            completedSpins = 0,
            startBalance = startBalance,
            currentBalance = startBalance,
            minBalance = startBalance,
            maxBalance = startBalance,
            isRunning = true
        )
        
        // Initialize script
        scriptingEngine.executeInit()
        
        try {
            for (spin in 1..totalSpins) {
                // Check if session is still active
                if (!scriptingEngine.isSessionActive()) {
                    // Auto-restart session if target reached or stop loss hit
                    scriptingEngine.startNewSession()
                }
                
                // Execute bet only if session is active
                if (!scriptingEngine.executeBet()) {
                    break
                }
                
                // Spin using RNG
                val result = scriptingEngine.rouletteEngine.spin()
                
                // Process result
                scriptingEngine.processSpinResult(result)
                
                // Update stats
                val currentBalance = scriptingEngine.getState().balance
                stats = stats.copy(
                    completedSpins = spin,
                    currentBalance = currentBalance,
                    minBalance = minOf(stats.minBalance, currentBalance),
                    maxBalance = maxOf(stats.maxBalance, currentBalance),
                    balanceHistory = stats.balanceHistory + currentBalance
                )
                
                onStatsUpdate?.invoke(stats)
                
                // Small delay for UI responsiveness
                kotlinx.coroutines.delay(1)
            }
        } finally {
            isRunning = false
            stats = stats.copy(isRunning = false)
            onComplete?.invoke(stats)
        }
    }
    
    fun stop() {
        isRunning = false
    }
    
    fun getStats(): SimulationStats = stats
}
