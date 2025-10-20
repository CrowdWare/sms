# SMS - Simple Markup Script

**A lightweight, multiplatform Kotlin script engine with native function integration**

SMS is a simple yet powerful scripting language and engine built specifically for Kotlin Multiplatform projects. It provides precise error reporting with line and column information, making it ideal for embedded scripting scenarios where you need reliable error feedback.

## ✨ Features

- 🎯 **Precise Error Reporting** - Line and column information for all errors
- 🔌 **Native Function Integration** - Easy registration of Kotlin functions
- 🌐 **Multiplatform** - Works on JVM, JS, and Native targets
- 📦 **Zero Dependencies** - Pure Kotlin implementation
- 🚀 **Performance** - Recursive descent parser with efficient interpretation
- 🛡️ **Type Safe** - Proper value system with type checking

## 🚀 Quick Start

### Basic Usage

```kotlin
import at.crowdware.sms.ScriptEngine

// Create engine
val engine = ScriptEngine.withStandardLibrary()

// Execute script
val result = engine.executeAndGetKotlin("""
    fun greet(name) {
        return "Hello " + name + "!"
    }
    greet("World")
""")

println(result) // "Hello World!"
```

### Register Native Functions

```kotlin
val engine = ScriptEngine()

// Register custom function
engine.registerKotlinFunction("multiply") { args ->
    val a = args.getOrNull(0) as? Double ?: 0.0
    val b = args.getOrNull(1) as? Double ?: 0.0
    a * b
}

// Use in script
val result = engine.executeAndGetKotlin("multiply(6, 7)")
println(result) // 42.0
```

### Error Handling

```kotlin
try {
    engine.execute("var x = ")
} catch (e: ScriptError) {
    println("Error at line ${e.line}, column ${e.column}: ${e.message}")
    // Error at line 1, column 9: Expected expression
}
```

## 📚 Language Features

### Variables and Types

```sms
var number = 42
var text = "Hello World"
var flag = true
var nothing = null
var list = [1, 2, 3]
```

### Functions

```sms
fun add(a, b) {
    return a + b
}

fun factorial(n) {
    if (n <= 1) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}
```

### Control Flow

```sms
// If statements
if (x > 0) {
    println("Positive")
} else {
    println("Zero or negative")
}

// While loops
var i = 0
while (i < 10) {
    println(i)
    i++
}

// For loops
for (var j = 0; j < 5; j++) {
    println(j)
}

// For-in loops
var numbers = [1, 2, 3, 4, 5]
for (num in numbers) {
    println(num)
}
```

### Arrays and Objects

```sms
var arr = [1, 2, 3]
arr.add(4)
println(arr.size) // 4

var item = arr[0]
arr[1] = 10
```

### Data Classes

```sms
data class Person(name, age)
var person = Person("Alice", 30)
println(person.name) // Alice
```

## 🔧 Integration Examples

### Roulette Game Integration

```kotlin
val engine = ScriptEngine()

// Register game-specific functions
engine.registerKotlinFunction("placeBet") { args ->
    val target = args[0] as String
    val amount = (args[1] as Double).toInt()
    myRouletteEngine.placeBet(target, amount)
    null
}

engine.registerKotlinFunction("getBalance") { _ ->
    myGameState.balance.toDouble()
}

// Execute betting strategy
engine.execute("""
    fun martingaleStrategy() {
        var bet = 100
        if (getBalance() >= bet) {
            placeBet("red", bet)
        }
    }
    
    martingaleStrategy()
""")
```

### Configuration Scripts

```kotlin
val engine = ScriptEngine()

engine.registerKotlinFunction("setProperty") { args ->
    val key = args[0] as String
    val value = args[1]
    myConfig[key] = value
    null
}

engine.execute("""
    // Configuration script
    setProperty("timeout", 5000)
    setProperty("retries", 3)
    setProperty("debug", true)
""")
```

## 🎯 API Reference

### ScriptEngine

```kotlin
class ScriptEngine {
    // Execute script and return SMS value
    fun execute(source: String): Value
    
    // Execute script and return Kotlin value
    fun executeAndGetKotlin(source: String): Any?
    
    // Register native function with SMS values
    fun registerFunction(name: String, function: (List<Value>) -> Value)
    
    // Register native function with Kotlin values
    fun registerKotlinFunction(name: String, function: (List<Any?>) -> Any?)
    
    // Validate script syntax
    fun validateSyntax(source: String)
    
    // Check if function exists
    fun hasFunction(name: String): Boolean
    
    // Get all function names
    fun getFunctionNames(): Set<String>
}
```

### Standard Library

```kotlin
// Create engine with built-in functions
val engine = ScriptEngine.withStandardLibrary()
```

Built-in functions:
- `println(message)` - Print message to console
- `readLine()` - Read line from input
- `random()` / `random(max)` / `random(min, max)` - Generate random numbers
- `split(string, delimiter)` - Split string into array
- `join(array, delimiter)` - Join array elements into string
- `toString(value)` - Convert value to string
- `size(array)` - Get array size
- Math functions: `abs(n)`, `min(a, b)`, `max(a, b)`
- Type checks: `isNumber(v)`, `isString(v)`, `isBoolean(v)`, `isNull(v)`, `isArray(v)`

### Utility Functions

```kotlin
object SMS {
    // Quick execute
    fun execute(source: String): Any?
    
    // Execute with custom functions
    fun execute(source: String, functions: Map<String, (List<Any?>) -> Any?>): Any?
    
    // Validate syntax
    fun validate(source: String): Boolean
}
```

## 🏗️ Architecture

SMS follows a clean three-phase architecture:

1. **Lexer** (`Lexer.kt`) - Tokenizes source code with position tracking
2. **Parser** (`Parser.kt`) - Recursive descent parser creating AST nodes
3. **Interpreter** (`Interpreter.kt`) - Tree-walking interpreter with scope management

### Key Components

- **Position Tracking** - Every token and AST node has line/column info
- **Value System** - Type-safe runtime values with Kotlin interop
- **Native Functions** - Easy registration of external functions
- **Scope Management** - Proper variable and function scoping
- **Error Handling** - Precise error reporting with context

## 📦 Setup

Da die SMS Engine noch nicht bei Maven Central veröffentlicht ist, gibt es verschiedene Möglichkeiten sie zu nutzen:

### Option 1: Local Maven Repository (Empfohlen)

1. **SMS Engine lokal publishen:**
```bash
git clone https://github.com/CrowdWare/sms.git
cd sms
./gradlew publishToMavenLocal
```

2. **In Ihrem Projekt verwenden:**
```kotlin
// build.gradle.kts
repositories {
    mavenLocal() // Wichtig: Local Maven Repository einbinden
    mavenCentral()
}

dependencies {
    implementation("at.crowdware:sms:1.0.0")
}
```

### Option 2: Composite Build

1. **SMS als Subprojekt einbinden:**
```kotlin
// settings.gradle.kts Ihres Projekts
includeBuild("../sms") // Pfad zum SMS Projekt
```

2. **Dependency hinzufügen:**
```kotlin
// build.gradle.kts
dependencies {
    implementation("at.crowdware:sms")
}
```

### Option 3: JAR File direkt verwenden

1. **SMS Engine bauen:**
```bash
cd sms
./gradlew build
```

2. **JAR Files kopieren:**
```bash
# JAR Files finden sich in:
# build/libs/sms-jvm-1.0.0.jar (für JVM)
# build/libs/sms-js-1.0.0.klib (für JS)
```

3. **Im Projekt einbinden:**
```kotlin
// build.gradle.kts
dependencies {
    implementation(files("libs/sms-jvm-1.0.0.jar"))
}
```

### Option 4: JitPack.io (Online)

Falls das Projekt auf GitHub veröffentlicht wird:

```kotlin
// build.gradle.kts
repositories {
    maven("https://jitpack.io")
}

dependencies {
    implementation("com.github.CrowdWare:sms:main-SNAPSHOT")
}
```

## 🧪 Testing

Run tests:
```bash
./gradlew test
```

The test suite covers:
- Basic language features
- Error handling with position info
- Native function integration
- Standard library functions
- Edge cases and error conditions

## 🤝 Contributing

Contributions are welcome! Areas for improvement:
- Additional built-in functions
- Performance optimizations
- Language features (classes, modules, etc.)
- Platform-specific integrations

## 📄 License

GPL3 License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

SMS was created to solve the problem of unreliable error reporting in existing script engines. It prioritizes:

1. **Developer Experience** - Clear error messages with exact positions
2. **Integration Simplicity** - Easy native function registration
3. **Multiplatform Support** - Works everywhere Kotlin does
4. **Maintainability** - Clean, understandable architecture

---

**Made with ❤️ by [CrowdWare](https://crowdware.info)**  
**Contact:** art@crowdware.info
