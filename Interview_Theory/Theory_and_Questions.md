# JavaScript Theory & Interview Questions

A comprehensive guide covering core JavaScript concepts, ordered by question sequence.

---

## Unit 1: Fundamentals (Q1 - Q6)

### Q1 & Q2: Function Declaration vs Expression (Hoisting)
**Question:** What's the difference between function declaration and expression regarding hoisting?

**Answer:** 
- **Function Declaration:** Hoisted. Can be called *before* it is typically defined in the code flow.
- **Function Expression:** Not hoisted. Must be defined before usage.

```javascript
// 1. Declaration (Works)
greet(); 
function greet() { console.log("Hi"); }

// 2. Expression (Error/Undefined)
sayHi(); 
var sayHi = function() { console.log("Hi"); }
```

### Q3: Arrow Functions
**Question:** Convert `function multiply(a, b) { return a * b; }` into an arrow function.

**Answer:**
```javascript
let multiply = (a, b) => a * b;
```

### Q4: var vs let vs const
**Question:** What are the differences between var, let, and const?

**Answer:**
- **var:** Function-scoped, hoisted, can be redeclared.
- **let:** Block-scoped, hoisted (but in TDZ), cannot be redeclared in same scope.
- **const:** Block-scoped, must be initialized immediately, cannot be reassigned.

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
**Question:** What does `this` refer to?

**Answer:** It refers to the object executing the current function.
- In a method: The object itself.
- In a global ordinary function: Global object (window) or `undefined` (in strict mode).
- In an arrow function: Inherits `this` from the parent scope.

### Q8: call, apply, and bind
**Question:** What is the difference between call, apply, and bind?

**Answer:**
- **call(thisArg, arg1, arg2):** Invokes the function immediately. Arguments passed individually.
- **apply(thisArg, [args]):** Invokes the function immediately. Arguments passed as an array.
- **bind(thisArg):** Returns a *new function* with the context bound. Does not invoke immediately.

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

**Answer:** Use **map** when you want to transform elements and *return a new array*. Use **forEach** when you just want to loop through elements for side effects (like logging) and don't need a return value.

---

## Unit 4: Functional Programming (Q16 - Q21)

### Q16 & Q17: Pure vs Impure Functions
**Question:** Define Pure and Impure functions.

**Answer:**
- **Impure:** Modifies external state or relies on external variables (side effects).
- **Pure:** Return value is determined *only* by its input arguments. No side effects.

### Q18 & Q19: Closures
**Question:** What is a closure?

**Answer:** A closure is a function that remembers its outer variables (lexical environment) even after the outer function has finished executing.

```javascript
function outer() {
    let count = 0;
    return () => ++count; // Inner function remembers 'count'
}
```

### Q20 & Q21: IIFE (Immediately Invoked Function Expression)
**Question:** What is an IIFE and why/when is it used?

**Answer:** It is a function that runs as soon as it is defined. It is commonly used for **Data Privacy** to avoid polluting the global scope.

```javascript
(function() {
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
- **some:** Returns `true` if *at least one* element passes the test.
- **every:** Returns `true` only if *all* elements pass the test.

### Q24: Coding - Private Counter
**Question:** Implement a private counter using closures.

**Answer:**
```javascript
function counter() {
    let count = 0;
    return function() {
        return ++count;
    }
}
const c = counter();
console.log(c()); // 1
console.log(c()); // 2
```

### Q25: Coding - Discount HOF
**Question:** Create a reusable discount calculator.

**Answer:**
```javascript
function discount(d) {
    return function(price) {
        return price - (price * d / 100);
    }
}
const tenPercentOff = discount(10);
console.log(tenPercentOff(100)); // 90
```
