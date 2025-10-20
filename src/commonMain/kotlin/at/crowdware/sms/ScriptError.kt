package at.crowdware.sms

/**
 * Exception thrown during script parsing or execution with precise position information.
 */
open class ScriptError(
    message: String,
    val position: Position? = null,
    cause: Throwable? = null
) : Exception(
    if (position != null) "Error at $position: $message" else message,
    cause
) {
    val line: Int get() = position?.line ?: 0
    val column: Int get() = position?.column ?: 0
}

/**
 * Exception thrown during lexing (tokenization) phase.
 */
class LexError(
    message: String,
    position: Position,
    cause: Throwable? = null
) : ScriptError(message, position, cause)

/**
 * Exception thrown during parsing phase.
 */
class ParseError(
    message: String,
    position: Position? = null,
    cause: Throwable? = null
) : ScriptError(message, position, cause)

/**
 * Exception thrown during script execution.
 */
class RuntimeError(
    message: String,
    position: Position? = null,
    cause: Throwable? = null
) : ScriptError(message, position, cause)
