package at.crowdware.sms

/**
 * Represents a position in source code with line and column information.
 * Lines and columns are 1-based (first line is 1, first column is 1).
 */
data class Position(
    val line: Int,
    val column: Int
) {
    override fun toString(): String = "line $line, column $column"
}
