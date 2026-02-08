# JavaScript Theory & Interview Questions

A comprehensive guide covering **25+ essential JavaScript interview questions** with detailed explanations, code examples, and practical applications. This document serves as both a learning resource and interview preparation material.

## 📚 Overview

This guide is organized into **5 thematic units** covering everything from basic fundamentals to advanced functional programming concepts:

- **Unit 1**: Fundamentals (Q1-Q6) - Functions, variables, scope
- **Unit 2**: Objects & Context (Q7-Q9) - `this`, binding methods
- **Unit 3**: Async & ES6 Features (Q10-Q15) - Promises, destructuring, array methods
- **Unit 4**: Functional Programming (Q16-Q21) - Pure functions, closures, IIFE
- **Unit 5**: Practical & Advanced (Q22+) - Array methods, coding challenges

---

## Quick Reference

| Question Range | Topic                  | Key Concepts                                                                      |
| -------------- | ---------------------- | --------------------------------------------------------------------------------- |
| Q1-Q6          | Fundamentals           | Hoisting, Arrow Functions, var/let/const, TDZ, Scope                              |
| Q7-Q9          | Objects & Context      | this, call/apply/bind, Arrow vs Regular Functions                                 |
| Q10-Q15        | Async & ES6            | Promises, Async/Await, Destructuring, Spread/Rest, Template Literals, map/forEach |
| Q16-Q21        | Functional Programming | Pure/Impure Functions, Closures, IIFE                                             |
| Q22+           | Practical              | find/filter, some/every, Coding Challenges                                        |

---

## Unit 1: Fundamentals (Q1 - Q6)

### Q1 & Q2: Function Declaration vs Expression (Hoisting)

**Question:** What's the difference between function declaration and expression regarding hoisting?

**Answer:**

**Function Declaration:**

- Fully hoisted (both name and implementation)
- Can be called before it appears in code
- Creates a named function in the current scope

**Function Expression:**

- Variable is hoisted, but not the function assignment
- Must be defined before calling
- Can be named or anonymous

**Examples:**

```javascript
// ✅ DECLARATION - Works (fully hoisted)
greet(); // Output: "Hi"
function greet() {
  console.log("Hi");
}

// ❌ EXPRESSION - Error (variable hoisted, but undefined)
sayHi(); // TypeError: sayHi is not a function
var sayHi = function () {
  console.log("Hi");
};

// How hoisting actually works:
// Behind the scenes:
var sayHi; // Variable declaration hoisted
sayHi(); // Called here (but sayHi is undefined)
sayHi = function () {
  // Assignment happens here
  console.log("Hi");
};
```

**When to use each:**

- **Declaration**: When you need hoisting, or for top-level utility functions
- **Expression**: When you want to control when the function is available, or for callbacks

### Q3: Arrow Functions

**Question:** Convert `function multiply(a, b) { return a * b; }` into an arrow function.

**Answer:**

```javascript
let multiply = (a, b) => a * b;
```

### Q4: var vs let vs const

**Question:** What are the differences between var, let, and const?

**Answer:**

| Feature        | var                            | let              | const            |
| -------------- | ------------------------------ | ---------------- | ---------------- |
| Scope          | Function                       | Block            | Block            |
| Hoisting       | Yes (initialized as undefined) | Yes (but in TDZ) | Yes (but in TDZ) |
| Redeclaration  | Allowed                        | Not allowed      | Not allowed      |
| Reassignment   | Allowed                        | Allowed          | **Not allowed**  |
| Initialization | Optional                       | Optional         | **Required**     |

**Detailed Examples:**

```javascript
// 1. SCOPE DIFFERENCE
function scopeTest() {
  if (true) {
    var x = 1; // Function-scoped
    let y = 2; // Block-scoped
    const z = 3; // Block-scoped
  }
  console.log(x); // ✅ 1 (accessible)
  console.log(y); // ❌ ReferenceError
  console.log(z); // ❌ ReferenceError
}

// 2. HOISTING BEHAVIOR
console.log(a); // undefined (hoisted)
console.log(b); // ReferenceError (TDZ)
console.log(c); // ReferenceError (TDZ)

var a = 1;
let b = 2;
const c = 3;

// 3. REDECLARATION
var x = 1;
var x = 2; // ✅ Allowed

let y = 1;
let y = 2; // ❌ SyntaxError

// 4. REASSIGNMENT
let count = 0;
count = 1; // ✅ Allowed

const MAX = 100;
MAX = 200; // ❌ TypeError

// 5. OBJECTS with const (Important!)
const person = { name: "John" };
person.name = "Jane"; // ✅ Allowed (modifying property)
person.age = 30; // ✅ Allowed (adding property)
person = {}; // ❌ TypeError (reassigning variable)
```

**Best Practice:**

- Use `const` by default
- Use `let` when you need to reassign
- Avoid `var` in modern JavaScript

### Q5: Temporal Dead Zone (TDZ)

**Question:** What is the Temporal Dead Zone?

**Answer:** The period between the start of a scope and the line where a variable is declared (with `let` or `const`). Accessing the variable during this time throws a `ReferenceError`.

### Q6: Scope Types

**Question:** Explain the different types of scope in JavaScript.

**Answer:**

- **Global Scope:** Accessible everywhere.
- **Function Scope:** Accessible only inside the function (var).
- **Block Scope:** Accessible only inside `{}` block (let, const).
- **Lexical Scope:** Inner functions can access variables from their outer/parent functions.

---

## Unit 2: Objects & Context (Q7 - Q9)

### Q7: The 'this' Keyword

**Question:** What does `this` refer to in JavaScript?

**Answer:** The value of `this` depends on **how** a function is called, not where it's defined.

**Four Rules of `this` Binding:**

**1. Default Binding (Global Context):**

```javascript
function showThis() {
  console.log(this);
}
showThis(); // Window object (or undefined in strict mode)
```

**2. Implicit Binding (Method Call):**

```javascript
const person = {
  name: "Alice",
  greet: function () {
    console.log(this.name); // 'this' refers to person object
  },
};
person.greet(); // "Alice"
```

**3. Explicit Binding (call, apply, bind):**

```javascript
function introduce() {
  console.log(`I am ${this.name}`);
}

const user = { name: "Bob" };
introduce.call(user); // "I am Bob"
introduce.apply(user); // "I am Bob"
const boundFn = introduce.bind(user);
boundFn(); // "I am Bob"
```

**4. Arrow Functions (Lexical `this`):**

```javascript
const obj = {
  name: "Charlie",
  regularFn: function () {
    console.log(this.name); // "Charlie"
  },
  arrowFn: () => {
    console.log(this.name); // undefined (inherits from parent scope)
  },
};

obj.regularFn(); // "Charlie"
obj.arrowFn(); // undefined
```

**Common Gotcha:**

```javascript
const person = {
  name: "David",
  greet: function () {
    setTimeout(function () {
      console.log(this.name); // undefined (this is Window)
    }, 1000);
  },
};

// Solution 1: Arrow function
const person2 = {
  name: "David",
  greet: function () {
    setTimeout(() => {
      console.log(this.name); // "David" (lexical this)
    }, 1000);
  },
};

// Solution 2: bind
const person3 = {
  name: "David",
  greet: function () {
    setTimeout(
      function () {
        console.log(this.name); // "David"
      }.bind(this),
      1000,
    );
  },
};
```

### Q8: call, apply, and bind

**Question:** What is the difference between call, apply, and bind?

**Answer:**

- **call(thisArg, arg1, arg2):** Invokes the function immediately. Arguments passed individually.
- **apply(thisArg, [args]):** Invokes the function immediately. Arguments passed as an array.
- **bind(thisArg):** Returns a _new function_ with the context bound. Does not invoke immediately.

### Q9: Arrow Functions vs Regular Functions

**Question:** Why can't arrow functions be used as constructors?

**Answer:** Arrow functions do not have their own `this` binding (they leverage lexical scope) and do not have the `arguments` object.

---

## Unit 3: Async & ES6 Features (Q10 - Q15)

### Q10: Promises

**Question:** What is a Promise?

**Answer:** An object representing the eventual completion (or failure) of an asynchronous operation.

- **States:** Pending, Fulfilled, Rejected.

### Q11: Async/Await

**Question:** How does async/await relate to Promises?

**Answer:** It is syntactic sugar built on top of Promises. `async` functions return a Promise, and `await` pauses execution until the Promise resolves.

### Q12: Destructuring

**Question:** Show an example of object and array destructuring.

**Answer:**

```javascript
// Object
const { name, age } = person;
// Array
const [first, second] = numbers;
```

### Q13: Spread vs Rest Operators

**Question:** What is the difference between Spread and Rest syntax (`...`)?

**Answer:**

- **Spread:** Expands an array/object into individual elements (e.g., `[...arr, 4, 5]`).
- **Rest:** Collects multiple elements into a single array (e.g., `function sum(...nums) {}`).

### Q14: Template Literals

**Question:** What are the benefits of Template Literals?

**Answer:** Allowed by backticks (` `), they support multi-line strings and string interpolation (`${variable}`).

### Q15: map vs forEach

**Question:** When should you use map over forEach?

**Answer:** Use **map** when you want to transform elements and _return a new array_. Use **forEach** when you just want to loop through elements for side effects (like logging) and don't need a return value.

---

## Unit 4: Functional Programming (Q16 - Q21)

### Q16 & Q17: Pure vs Impure Functions

**Question:** Define Pure and Impure functions.

**Answer:**

- **Impure:** Modifies external state or relies on external variables (side effects).
- **Pure:** Return value is determined _only_ by its input arguments. No side effects.

### Q18 & Q19: Closures

**Question:** What is a closure and why is it useful?

**Answer:** A **closure** is a function that has access to variables from its outer (enclosing) function's scope, even after the outer function has finished executing.

**Simple Example:**

```javascript
function outer() {
  let count = 0; // Private variable

  return function inner() {
    count++; // Accesses outer variable
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
// 'count' is preserved between calls!
```

**How it Works:**

1. `outer()` creates a local variable `count`
2. `inner()` function references `count`
3. When `outer()` returns `inner()`, the function maintains a reference to `count`
4. Even though `outer()` has finished, `count` stays alive in memory

**Practical Use Cases:**

**1. Data Privacy (Encapsulation):**

```javascript
function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private variable

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        return balance;
      }
      return "Insufficient funds";
    },
    getBalance() {
      return balance; // Controlled access
    },
  };
}

const myAccount = createBankAccount(100);
console.log(myAccount.getBalance()); // 100
myAccount.deposit(50); // 150
myAccount.withdraw(30); // 120
// Can't directly access 'balance' from outside
```

**2. Function Factory:**

```javascript
function makeMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

**3. Event Handlers:**

```javascript
function setupClickCounter(buttonId) {
  let clicks = 0;

  document.getElementById(buttonId).addEventListener("click", function () {
    clicks++;
    console.log(`Button clicked ${clicks} times`);
  });
}
```

**Common Interview Question:**

```javascript
// Problem: What does this print?
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// Output: 3, 3, 3 (var is function-scoped)

// Solution 1: Use let (block-scoped)
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// Output: 0, 1, 2

// Solution 2: Use closure (IIFE)
for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, 1000);
  })(i);
}
// Output: 0, 1, 2
```

### Q20 & Q21: IIFE (Immediately Invoked Function Expression)

**Question:** What is an IIFE and why/when is it used?

**Answer:** It is a function that runs as soon as it is defined. It is commonly used for **Data Privacy** to avoid polluting the global scope.

```javascript
(function () {
  let secret = "123"; // Not accessible outside
})();
```

---

## Unit 5: Practical & Advanced (Q22+)

### Q22: Find vs Filter

**Question:** Difference between find() and filter()?

**Answer:**

- **find:** Returns the **first** single element that matches the condition.
- **filter:** Returns a **new array** containing **all** elements that match.

### Q23: Some vs Every

**Question:** Difference between some() and every()?

**Answer:**

- **some:** Returns `true` if _at least one_ element passes the test.
- **every:** Returns `true` only if _all_ elements pass the test.

### Q24: Coding - Private Counter

**Question:** Implement a private counter using closures.

**Answer:**

```javascript
function counter() {
  let count = 0;
  return function () {
    return ++count;
  };
}
const c = counter();
console.log(c()); // 1
console.log(c()); // 2
```

### Q25: Coding - Discount HOF (Higher-Order Function)

**Question:** Create a reusable discount calculator using higher-order functions.

**Answer:**

```javascript
function discount(percentage) {
  return function (price) {
    return price - (price * percentage) / 100;
  };
}

// Create specific discount functions
const tenPercentOff = discount(10);
const twentyPercentOff = discount(20);
const halfOff = discount(50);

// Use them
console.log(tenPercentOff(100)); // 90
console.log(twentyPercentOff(200)); // 160
console.log(halfOff(80)); // 40

// Arrow function version
const discountArrow = (percentage) => (price) => price * (1 - percentage / 100);

const studentDiscount = discountArrow(15);
console.log(studentDiscount(100)); // 85
```

**Why is this useful?**

- **Reusability**: Create discount functions once, use many times
- **Maintainability**: Discount logic in one place
- **Flexibility**: Easy to add new discount tiers
- **Closure**: Each function remembers its discount percentage

---

## Additional Important Interview Questions

### Q26: Event Loop & Call Stack

**Question:** Explain how the JavaScript event loop works.

**Answer:** JavaScript is **single-threaded** but can handle asynchronous operations through the event loop.

**Components:**

1. **Call Stack**: Stores function execution contexts
2. **Web APIs**: Browser-provided APIs (setTimeout, fetch, DOM events)
3. **Callback Queue**: Stores callbacks ready to execute
4. **Event Loop**: Moves callbacks from queue to call stack when stack is empty

**Example:**

```javascript
console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");

// Output: 1, 4, 3, 2
// Why?
// - Synchronous code runs first: 1, 4
// - Promises (microtasks) run before setTimeout (macrotasks): 3
// - setTimeout callback runs last: 2
```

### Q27: == vs ===

**Question:** What's the difference between `==` and `===`?

**Answer:**

- **`==` (Loose Equality)**: Compares values after type coercion
- **`===` (Strict Equality)**: Compares both value and type (no coercion)

```javascript
// Loose Equality (==)
5 == "5"; // true (string coerced to number)
0 == false; // true
null == undefined; // true

// Strict Equality (===)
5 === "5"; // false (different types)
0 === false; // false
null === undefined; // false

// Best Practice: Always use === unless you specifically need type coercion
```

### Q28: null vs undefined

**Question:** What's the difference between `null` and `undefined`?

**Answer:**

**undefined:**

- Default value for uninitialized variables
- Automatically assigned by JavaScript
- Means "variable exists but has no value"

**null:**

- Intentional absence of value
- Must be explicitly assigned
- Means "intentionally empty"

```javascript
let x;
console.log(x); // undefined (not initialized)

let y = null;
console.log(y); // null (intentionally empty)

function test() {}
console.log(test()); // undefined (no return statement)

const obj = { name: "John" };
console.log(obj.age); // undefined (property doesn't exist)

// Type checking
typeof undefined; // "undefined"
typeof null; // "object" (historical bug in JavaScript!)
```

### Q29: Deep Copy vs Shallow Copy

**Question:** How do you create a deep copy of an object?

**Answer:**

**Shallow Copy** (only copies first level):

```javascript
const original = { name: "John", address: { city: "NYC" } };

// Method 1: Spread operator
const copy1 = { ...original };

// Method 2: Object.assign()
const copy2 = Object.assign({}, original);

// Problem: Nested objects are still referenced
copy1.address.city = "LA";
console.log(original.address.city); // "LA" (modified original!)
```

**Deep Copy** (copies all levels):

```javascript
// Method 1: JSON (works for simple objects)
const deepCopy1 = JSON.parse(JSON.stringify(original));
// Limitations: Loses functions, undefined, symbols

// Method 2: Recursive function
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;

  const clone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}

// Method 3: structuredClone (modern browsers)
const deepCopy3 = structuredClone(original);
```

### Q30: Array Methods Comparison

**Question:** Compare and contrast `map`, `filter`, `reduce`, and `forEach`.

**Answer:**

```javascript
const numbers = [1, 2, 3, 4, 5];

// forEach: Iterate (no return value)
numbers.forEach((num) => console.log(num));
// Returns: undefined

// map: Transform each element (returns new array)
const doubled = numbers.map((num) => num * 2);
// Returns: [2, 4, 6, 8, 10]

// filter: Keep elements that pass test (returns new array)
const evens = numbers.filter((num) => num % 2 === 0);
// Returns: [2, 4]

// reduce: Reduce to single value
const sum = numbers.reduce((acc, num) => acc + num, 0);
// Returns: 15

// find: Return first match (or undefined)
const firstEven = numbers.find((num) => num % 2 === 0);
// Returns: 2

// some: Check if ANY element passes test
const hasEven = numbers.some((num) => num % 2 === 0);
// Returns: true

// every: Check if ALL elements pass test
const allPositive = numbers.every((num) => num > 0);
// Returns: true
```

---

## Tips for Interview Success

1. **Understand, don't memorize**: Focus on understanding concepts
2. **Practice examples**: Write code examples for each concept
3. **Think out loud**: Explain your reasoning during interviews
4. **Ask clarifying questions**: Ensure you understand what's being asked
5. **Consider edge cases**: Think about unusual inputs
6. **Know trade-offs**: Understand pros and cons of different approaches
7. **Stay updated**: JavaScript evolves - learn modern features

---

## Additional Resources

- **MDN Web Docs**: Comprehensive JavaScript reference
- **JavaScript.info**: Modern JavaScript tutorial
- **You Don't Know JS**: Deep dive book series
- **LeetCode/HackerRank**: Practice coding challenges

---

**Last Updated:** February 2026  
**Questions Covered:** 30+  
**Difficulty Range:** Beginner to Advanced
