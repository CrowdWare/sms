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
 * Represents a value in the SMS runtime system
 */
sealed class Value {
    abstract fun toKotlin(): Any?
    abstract fun isTruthy(): Boolean
    
    override fun toString(): String = when (this) {
        is NumberValue -> if (value % 1.0 == 0.0) value.toLong().toString() else value.toString()
        is StringValue -> value
        is BooleanValue -> value.toString()
        is NullValue -> "null"
        is ArrayValue -> "[${elements.joinToString(", ")}]"
        is ObjectValue -> "${className}{${fields.entries.joinToString(", ") { "${it.key}=${it.value}" }}}"
    }
}

/**
 * Number value (Double internally for simplicity)
 */
data class NumberValue(val value: Double) : Value() {
    constructor(value: Int) : this(value.toDouble())
    constructor(value: Long) : this(value.toDouble())
    
    override fun toKotlin(): Double = value
    override fun isTruthy(): Boolean = value != 0.0
    
    fun toInt(): Int = value.toInt()
    fun toLong(): Long = value.toLong()
}

/**
 * String value
 */
data class StringValue(val value: String) : Value() {
    override fun toKotlin(): String = value
    override fun isTruthy(): Boolean = value.isNotEmpty()
}

/**
 * Boolean value
 */
data class BooleanValue(val value: Boolean) : Value() {
    override fun toKotlin(): Boolean = value
    override fun isTruthy(): Boolean = value
}

/**
 * Null value
 */
object NullValue : Value() {
    override fun toKotlin(): Any? = null
    override fun isTruthy(): Boolean = false
}

/**
 * Array value
 */
data class ArrayValue(val elements: MutableList<Value> = mutableListOf()) : Value() {
    override fun toKotlin(): List<Any?> = elements.map { it.toKotlin() }
    override fun isTruthy(): Boolean = elements.isNotEmpty()
    
    fun size(): Int = elements.size
    fun get(index: Int): Value = elements.getOrNull(index) ?: NullValue
    fun set(index: Int, value: Value) {
        if (index >= 0 && index < elements.size) {
            elements[index] = value
        }
    }
    fun add(value: Value) = elements.add(value)
    fun remove(value: Value) = elements.remove(value)
    fun removeAt(index: Int): Value? = if (index >= 0 && index < elements.size) elements.removeAt(index) else null
    fun contains(value: Value): Boolean = elements.contains(value)
}

/**
 * Object value (for data class instances)
 */
data class ObjectValue(
    val className: String,
    val fields: MutableMap<String, Value> = mutableMapOf()
) : Value() {
    override fun toKotlin(): Map<String, Any?> = fields.mapValues { it.value.toKotlin() }
    override fun isTruthy(): Boolean = true
    
    fun getField(name: String): Value = fields[name] ?: NullValue
    fun setField(name: String, value: Value) {
        fields[name] = value
    }
}

/**
 * Utility functions for converting between Kotlin values and SMS values
 */
object ValueUtils {
    
    /**
     * Convert a Kotlin value to an SMS Value
     */
    fun fromKotlin(value: Any?): Value = when (value) {
        null -> NullValue
        is Boolean -> BooleanValue(value)
        is Int -> NumberValue(value)
        is Long -> NumberValue(value)
        is Float -> NumberValue(value.toDouble())
        is Double -> NumberValue(value)
        is String -> StringValue(value)
        is List<*> -> ArrayValue(value.map { fromKotlin(it) }.toMutableList())
        is Array<*> -> ArrayValue(value.map { fromKotlin(it) }.toMutableList())
        is Map<*, *> -> {
            val fields = mutableMapOf<String, Value>()
            value.forEach { (k, v) ->
                if (k is String) {
                    fields[k] = fromKotlin(v)
                }
            }
            ObjectValue("Map", fields)
        }
        else -> StringValue(value.toString()) // Fallback to string representation
    }
    
    /**
     * Convert SMS Value to Kotlin value
     */
    fun toKotlin(value: Value): Any? = value.toKotlin()
    
    /**
     * Check if two values are equal
     */
    fun equals(left: Value, right: Value): Boolean = when {
        left is NumberValue && right is NumberValue -> left.value == right.value
        left is StringValue && right is StringValue -> left.value == right.value
        left is BooleanValue && right is BooleanValue -> left.value == right.value
        left is NullValue && right is NullValue -> true
        left is ArrayValue && right is ArrayValue -> left.elements == right.elements
        left is ObjectValue && right is ObjectValue -> left.fields == right.fields
        else -> false
    }
    
    /**
     * Convert value to string representation
     */
    fun toString(value: Value): String = value.toString()
    
    /**
     * Check if value is truthy
     */
    fun isTruthy(value: Value): Boolean = value.isTruthy()
}
