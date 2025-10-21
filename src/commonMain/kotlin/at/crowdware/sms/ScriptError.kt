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
