# JavaScript Functions: Pure vs Impure, Closures, Scope, and Hoisting

## Pure Function vs Impure Function

### Pure Function
A pure function is completely independent of the outside world and has no side effects. It always returns the same output for the same input and doesn't modify any external state.

```javascript
let a = 12;

function pure() {
  console.log("Pure Function");
}
pure();
```

**Note:** While this function doesn't modify external state, a truly pure function should also avoid side effects like `console.log()`. A better example would return a value instead.

### Impure Function
An impure function has side effects and can modify the outside world or external state.

```javascript
function impure() {
  a++;
  console.log(a);
}
impure();
```

This function modifies the external variable `a`, making it impure.

---

## Closures

A **closure** is a function that has access to its parent scope, even after the parent function has finished executing.

```javascript
function closures() {
  let c = 10;
  return function () {
    console.log(c);
  };
}
closures();
```

The inner function retains access to the variable `c` from its parent scope, demonstrating closure behavior.

---

## Lexical Scope

**Lexical scope** means that the scope of a variable is determined by its position in the source code. Inner functions have access to variables in their outer functions.

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

In this example:
- `ghij()` can access `x`, `y`, and `z`
- `defg()` can access `x` and `y`
- `lexical()` can only access `x`

---

## IIFE (Immediately Invoked Function Expression)

An **IIFE** is a function that runs immediately after it's defined. It's useful for creating a private scope and avoiding global namespace pollution.

```javascript
(function () {
  console.log("IIFE (Immediately Invoked Function Expressions)");
})();
```

---

## Hoisting: Function Declaration vs Function Expression

### Function Declaration (Hoisted)

Function declarations are hoisted to the top of their scope, meaning you can call them before they're defined in the code.

```javascript
Hoisting(); // This works!

function Hoisting() {
  console.log('Hoisting difference between declaration expressions');
}
```

### Function Expression (Not Hoisted)

Function expressions are **not hoisted**. You cannot call them before they're defined.

```javascript
// Expression(); // ❌ This would cause an error!

let Expression = function () {
  console.log('Hoisting difference between declaration expressions');
}

Expression(); // ✅ This works!
```

---

## Summary

| Concept | Description |
|---------|-------------|
| **Pure Function** | No side effects, doesn't modify external state |
| **Impure Function** | Has side effects, can modify external state |
| **Closure** | Function with access to parent scope after parent has executed |
| **Lexical Scope** | Scope determined by code structure/position |
| **IIFE** | Function that executes immediately upon definition |
| **Hoisting** | Function declarations are hoisted; expressions are not |