# JavaScript Learning Journey

A comprehensive documentation of JavaScript fundamentals, from basics to advanced concepts.

---

## Table of Contents

1. [Day 1 - Getting Started](#day-1---getting-started)
2. [Day 2 - Control Flow](#day-2---control-flow)
3. [Day 3 - Loops](#day-3---loops)
4. [Day 4 - Functions Basics](#day-4---functions-basics)
5. [Day 5 - Advanced Functions](#day-5---advanced-functions)
6. [Function Practice - Q&A](#function-practice---qa)

---

## Day 1 - Getting Started

### Basic Concepts Covered

- **Console Logging**: Using `console.log()` to output data
- **Alerts and Confirms**: User interaction with `alert()` and `confirm()`
- **Variables**: `let`, `const`, and `var`
- **Data Types**: Strings, Numbers, Booleans
- **Template Literals**: String interpolation with backticks
- **Basic Operators**: Addition, Subtraction, Multiplication, Division

### Project: User Information Collector

Created an interactive web application that:
- Collects user's name, age, and favorite color
- Calculates birth year
- Determines adult status
- Calculates approximate days lived
- Displays personalized results with styling

### Arithmetic Operations

```javascript
// Addition
let sum = a + b;

// Subtraction
let difference = a - b;

// Multiplication
let product = a * b;

// Division (with zero check)
if (b !== 0) {
    let div = a / b;
}

// Modulo (remainder)
let reminder = a % b;

// Exponentiation
let power = a ** b;

// Increment & Decrement
x++  // Post-increment
++x  // Pre-increment
x--  // Post-decrement
--x  // Pre-decrement
```

---

## Day 2 - Control Flow

### If-Else Statements

```javascript
if (condition) {
    // code
} else if (anotherCondition) {
    // code
} else {
    // code
}
```

### Practical Examples

**Grade Calculator:**
```javascript
function getGrade(score) {
    if (score >= 90 && score <= 100) return "A+";
    else if (score >= 80 && score <= 89) return "A";
    else if (score >= 70 && score <= 79) return "B";
    else if (score >= 60 && score <= 69) return "C";
    else if (score >= 33 && score <= 59) return "D";
    else if (score >= 0 && score <= 32) return "Fail";
    else return "Invalid Marks";
}
```

**Rock Paper Scissors Logic:**
```javascript
function rps(user, computer) {
    if (user === computer) return 'draw';
    if (user === 'rock' && computer === 'scissor') return 'user';
    if (user === 'paper' && computer === 'rock') return 'user';
    if (user === 'scissor' && computer === 'paper') return 'user';
    return 'computer';
}
```

---

## Day 3 - Loops

### Loop Types

**For Loop Pattern:**
```javascript
for (start; end; change) {
    // code
}
```

**While Loop Pattern:**
```javascript
start
while (end) {
    // code
    change
}
```

**Do-While Loop:**
```javascript
do {
    // code
} while (condition);
```

### Loop Control Statements

**Break Statement:**
```javascript
for (let i = 1; i < 201; i++) {
    console.log(i);
    if (i === 32) break;  // Exit loop completely
}
```

**Continue Statement:**
```javascript
for (let i = 1; i < 201; i++) {
    if (i === 32) continue;  // Skip this iteration
    console.log(i);
}
```

### Common Loop Patterns

**Sum Pattern:**
```javascript
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum);
```

**Array Sum:**
```javascript
let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
```

**String Iteration:**
```javascript
let word = "JavaScript";
for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
}
```

**Counting Digits:**
```javascript
let num = 123456780;
let count = 0;
while (num > 0) {
    count++;
    num = Math.floor(num / 10);
}
console.log(count);
```

---

## Day 4 - Functions Basics

### Why, What, and How

- **Why**: To reuse code
- **What**: Functions
- **How**: Function declaration, Function expression, Arrow function

### Function Types

**1. Function Declaration:**
```javascript
function abc() {
    // code
}
abc();  // Function call
```

**2. Function Expression:**
```javascript
let xyz = function() {
    // code
};
```

**3. Arrow Function:**
```javascript
let pqr = () => {
    // code
};
```

### Parameters and Arguments

```javascript
function welcome(name) {      // "name" is the Parameter
    console.log(name);
}
welcome("Bijoy");            // "Bijoy" is the Argument
```

### Default Parameters

```javascript
function add(v1 = 0, v2 = 0) {
    console.log(v1 + v2);
}
add();  // Output: 0
```

### Rest Parameters

The rest operator `(...)` collects remaining arguments into an array:

```javascript
function abcd(...value) {
    console.log(value);
}
abcd(1, 2, 3, 4, 5);
// Output: [1, 2, 3, 4, 5]

function mixed(a, b, c, ...value) {
    console.log(a, b, c, value);
}
mixed(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// Output: 1 2 3 [4, 5, 6, 7, 8, 9, 10]
```

### Return Values

```javascript
function ret() {
    return 72;
}
let val = ret();
console.log(val);  // Output: 72
```

### Early Returns

Stop function execution early when a condition is met:

```javascript
function checkAge(age) {
    if (age < 18) {
        return "Not allowed";  // Early return
    }
    return "Welcome!";
}
console.log(checkAge(22));  // Output: Welcome!
```

---

## Day 5 - Advanced Functions

### Pure vs Impure Functions

**Pure Function:**
- Independent of the outside world
- No side effects
- Same input always produces same output

```javascript
function pure(x) {
    return x * 2;
}
```

**Impure Function:**
- Has side effects
- Modifies external state

```javascript
let a = 12;
function impure() {
    a++;
    console.log(a);
}
```

### Closures

A closure is a function having access to the parent scope, even after the parent function has closed:

```javascript
function closures() {
    let c = 10;
    return function() {
        console.log(c);
    };
}
```

### Lexical Scope

The scope of a variable is determined by where it is defined in the code:

```javascript
function lexical() {
    let x = 15;
    function defg() {
        let y = 12;
        function ghij() {
            let z = 11;
            // Can access x, y, and z here
        }
    }
}
```

### IIFE (Immediately Invoked Function Expression)

A function that runs immediately after it's defined:

```javascript
(function() {
    console.log("IIFE");
})();
```

**Real-world use case (Data Privacy):**
```javascript
let sher = (function() {
    let score = 0;
    return {
        getScore: function() {
            console.log(score);
        },
        setScore: function(val) {
            score = val;
        }
    }
})();
```

### Hoisting

**Function Declaration (Hoisted):**
```javascript
greet();  // ✅ Works!

function greet() {
    console.log("Hi");
}
```

**Function Expression (Not Hoisted):**
```javascript
greet();  // ❌ Error!

let greet = function() {
    console.log("Hi");
};
```

---

## Function Practice - Q&A

### Key Concepts Summary

1. **Hoisting**: Function declarations are hoisted; function expressions are not
2. **First-Class Citizens**: Functions can be treated like any other value
3. **Higher-Order Functions**: Functions that accept or return other functions
4. **Arrow Functions**: Concise syntax for function expressions
5. **Closures**: Functions with access to parent scope
6. **Pure Functions**: No side effects, predictable output

### Common Interview Questions

**Q: What's the output?**
```javascript
greet();
var greet = function() {
    console.log("Hi");
};
// Answer: Error - greet is not a function
```

**Q: Convert to pure function:**
```javascript
// Impure
let total = 0;
function addToTotal(num) {
    total += num;
}

// Pure
function addToTotal(num) {
    let newTotal = total;
    newTotal += num;
    return newTotal;
}
```

**Q: Identify higher-order function:**
```javascript
[1, 2, 3].map(function(x) {
    return x * 2;
});
// Answer: map is the higher-order function
```

---

## Best Practices Learned

1. **Use `const` by default**, `let` when reassignment is needed
2. **Prefer early returns** for cleaner code
3. **Use template literals** for string interpolation
4. **Validate input** before processing
5. **Handle edge cases** (division by zero, empty inputs, etc.)
6. **Use meaningful variable names**
7. **Keep functions small and focused**
8. **Prefer pure functions** when possible
9. **Use arrow functions** for concise syntax
10. **Comment complex logic**

---

## Projects Completed

### Project 1: User Information Collector
- Interactive form with validation
- Dynamic result display
- Age category determination
- Days lived calculation
- Styled with gradient backgrounds and animations

---

## Next Steps

- Learn about Arrays and Array Methods
- Study Objects and Object-Oriented Programming
- Explore Asynchronous JavaScript (Promises, Async/Await)
- Practice DOM Manipulation
- Build more complex projects

---

**Repository Structure:**
```
├── day-1/
│   ├── Project One/
│   ├── arithmetic.js
│   └── main.js
├── day-2/
│   └── script.js
├── day-3/
│   └── script.js
├── day-4/
│   ├── Function.md
│   └── function.js
├── day-5/
│   ├── Readme.md
│   └── script.js
└── Function Practice/
    ├── README.md
    └── script.js
```

---

*This documentation represents a structured journey through JavaScript fundamentals, from basic syntax to advanced function concepts.*