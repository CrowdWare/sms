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
 * Represents a position in source code with line and column information.
 * Lines and columns are 1-based (first line is 1, first column is 1).
 */
data class Position(
    val line: Int,
    val column: Int
) {
    override fun toString(): String = "line $line, column $column"
}
