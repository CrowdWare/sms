package at.crowdware.roulettestrategiesimulator.scripting

/**
 * Context object that gets passed to the bet() function in scripts
 * Contains current game state and history for strategy decisions
 */
data class ScriptContext(
    val lastNumber: Int?,              // Last spun number (null before first spin)
    val balance: Int,                  // Current balance in cents
    val spinCount: Int,                // Number of spins executed so far
    val lastWin: Int,                  // Net win/loss from last round in cents
    val lastBets: Map<String, Int>,    // What was bet in the last round
    val sessionConfig: SessionConfig,  // Session configuration (stopLoss, target)
    val sessionStats: SessionStats,    // Session statistics
    val sessionActive: Boolean,        // Is current session active
    val sessionStopReason: String      // Why session was stopped
)

/**
 * State maintained by the scripting engine
 */
data class SessionConfig(
    var stopLoss: Int = 0, // Stop loss in cents (0 = disabled)
    var sessionTarget: Int = 0, // Session target in cents (0 = disabled)
    var sessionStartBalance: Int = 1_000_000 // Starting balance for new sessions
)

data class SessionStats(
    var totalSessions: Int = 0,
    var wonSessions: Int = 0,
    var lostSessions: Int = 0,
    var currentSessionStartBalance: Int = 1_000_000,
    var currentSessionProfit: Int = 0,
    var bestSessionProfit: Int = 0,
    var worstSessionLoss: Int = 0
) {
    fun getWinRate(): Int = if (totalSessions > 0) (wonSessions.toDouble() / totalSessions * 100).toInt() else 0
}

data class ScriptState(
    var balance: Int = 1_000_000, // Balance in cents (10.000,00 €)
    var spinCount: Int = 0,
    var lastNumber: Int? = null, // Last spun number
    var lastWin: Int = 0, // Last win/loss in cents
    var lastBets: Map<String, Int> = emptyMap(), // Last bets placed
    var sessionConfig: SessionConfig = SessionConfig(),
    var sessionStats: SessionStats = SessionStats(),
    var sessionActive: Boolean = true,
    var sessionStopReason: String = ""
) {
    fun reset() {
        balance = sessionConfig.sessionStartBalance
        spinCount = 0
        lastNumber = null
        lastWin = 0
        lastBets = emptyMap()
        sessionStats = SessionStats(currentSessionStartBalance = sessionConfig.sessionStartBalance)
        sessionActive = true
        sessionStopReason = ""
    }
    
    fun startNewSession() {
        // Record current session result
        val currentProfit = balance - sessionStats.currentSessionStartBalance
        if (currentProfit > 0) {
            sessionStats.wonSessions++
        } else {
            sessionStats.lostSessions++
        }
        sessionStats.totalSessions++
        
        // Update best/worst session records
        if (currentProfit > sessionStats.bestSessionProfit) {
            sessionStats.bestSessionProfit = currentProfit
        }
        if (currentProfit < sessionStats.worstSessionLoss) {
            sessionStats.worstSessionLoss = currentProfit
        }
        
        // Start new session
        sessionStats.currentSessionStartBalance = sessionConfig.sessionStartBalance
        balance = sessionConfig.sessionStartBalance
        sessionActive = true
        sessionStopReason = ""
        sessionStats.currentSessionProfit = 0
    }
    
    fun checkSessionConditions(): Boolean {
        val currentProfit = balance - sessionStats.currentSessionStartBalance
        sessionStats.currentSessionProfit = currentProfit
        
        // Check StopLoss
        if (sessionConfig.stopLoss > 0 && currentProfit <= -sessionConfig.stopLoss) {
            sessionActive = false
            sessionStopReason = "StopLoss reached: €${sessionConfig.stopLoss / 100.0}"
            return true
        }
        
        // Check SessionTarget
        if (sessionConfig.sessionTarget > 0 && currentProfit >= sessionConfig.sessionTarget) {
            sessionActive = false
            sessionStopReason = "SessionTarget reached: €${sessionConfig.sessionTarget / 100.0}"
            return true
        }
        
        return false
    }
    
    fun addSpinResult(number: Int, netWinCents: Int, bets: Map<String, Int>) {
        balance += netWinCents
        lastNumber = number
        lastWin = netWinCents
        lastBets = bets
        spinCount++
        
        // Check session conditions after each spin
        checkSessionConditions()
    }
    
    fun toContext(): ScriptContext {
        return ScriptContext(
            lastNumber = lastNumber,
            balance = balance,
            spinCount = spinCount,
            lastWin = lastWin,
            lastBets = lastBets,
            sessionConfig = sessionConfig,
            sessionStats = sessionStats,
            sessionActive = sessionActive,
            sessionStopReason = sessionStopReason
        )
    }
}

/**
 * Helper functions available to scripts for number analysis
 */
object ScriptHelpers {
    private val RED_NUMBERS = setOf(
        1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36
    )
    
    fun isRed(number: Int): Boolean = number in RED_NUMBERS
    
    fun isBlack(number: Int): Boolean = number in 1..36 && number !in RED_NUMBERS
    
    fun isEven(number: Int): Boolean = number > 0 && number % 2 == 0
    
    fun isOdd(number: Int): Boolean = number > 0 && number % 2 == 1
    
    fun getColumn(number: Int): Int = when {
        number <= 0 || number > 36 -> 0
        number % 3 == 1 -> 1
        number % 3 == 2 -> 2 
        else -> 3
    }
    
    fun getDozen(number: Int): Int = when {
        number in 1..12 -> 1
        number in 13..24 -> 2
        number in 25..36 -> 3
        else -> 0
    }
    
    fun getStreet(number: Int): Int = when {
        number <= 0 || number > 36 -> 0
        else -> ((number - 1) / 3) + 1
    }
}
