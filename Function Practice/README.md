# JavaScript Functions: Questions & Answers

A comprehensive guide covering function declarations, expressions, closures, and more.

---

## Q1: Function Declaration vs Expression - Hoisting Behavior

**Question:** What's the difference between function declaration and expression in terms of hoisting?

**Answer:** Function declaration is hoisted but function expression is not hoisted.

### Function Statement
Can be called before declaration; **Can be hoisted**

```javascript
abc();
function abc(){
    console.log('Function Declaration');
}
```

### Function Expression
Can't be called before declaration; **Can't be hoisted**

```javascript
xyz();
let xyz = function(){
    console.log('Function Expression');
}
```

### Demonstration

```javascript
abc();
function abc(){
    console.log('Function Declaration');
}
```

---

## Q2: Predicting Output

**Question:** What will be the output?

```javascript
abc();
function abc(){
    console.log('Function Declaration');
}
```

**Answer:** `Function Declaration`

---

## Q3: Converting to Arrow Function

**Question:** Convert the following function into an arrow function.

```javascript
function multiply(a, b){
    return a * b;
}
```

**Answer:**

```javascript
let multiply = (a, b) => {
    return a * b;
}
console.log(multiply(20, 20));
```

---

## Q4: Parameters vs Arguments

**Question:** Identify the Parameters and Arguments from the following code:

```javascript
function welcome(name) {
    console.log(name); 
}
welcome("Bijoy")
```

**Answer:**

```javascript
function welcome(name) {  // "name" is the Parameter
    console.log(name); 
}
welcome("Bijoy")  // "Bijoy" is the Argument
```

---

## Q5: Counting Parameters and Arguments

**Question:** How many parameters does this function have and how many arguments are passed?

```javascript
function demo(a, b, c){
    
}
demo(1, 2);
```

**Answer:** 
- **3 Parameters** and **2 Arguments**
- `1` will be in `a`
- `2` will be in `b`
- There's no argument for parameter `c`, so `c` is **undefined**

---

## Q6: Default Parameters

**Question:** What will be the output of this code?

```javascript
function sayHi(name = "Guest"){
    console.log("Hi", name);
}
sayHi();
```

**Answer:** `Hi, Guest`

---

## Q7: Rest Operator (...)

**Question:** What does the `...` operator mean in parameters?

**Answer:**

```javascript
function abcd(a, b, c, ...val){
    console.log(a, b, c, val);   
}
abcd(1, 2, 3, 4, 5)
```

The rest operator `...` collects remaining arguments into an array.

---

## Q8: Using Rest Parameters

**Question:** Use rest parameters to accept any number of scores and return the total.

**Answer:**

```javascript
function getScore(...scores) {
    let total = 0;

    scores.forEach(function (val) {
        total = total + val;
    })
    return total;
}

console.log(getScore(10, 12, 14, 18));
```

---

## Q9: Early Return Pattern

**Question:** Fix this function using early return.

```javascript
function checkAge(age) {
    if (age < 18) {
        console.log("Too Young");
    } else {
        console.log("Allowed");
    }
}

checkAge(prompt("What's your age?"));
```

**Answer:**

```javascript
function checkAge(age) {
    if (age < 18) return "Too Young";
    return "Allowed";
}

console.log(checkAge(prompt("What's your age?")));
```

---

## Q10: Empty Return Statement

**Question:** What's the return value of this function?

```javascript
function f() {
    return;
}
```

**Answer:**

```javascript
function f() {
    return;
}

console.log(f());
```

Output: `undefined`

---

## Q11: First-Class Citizens

**Question:** What does it mean when we say "functions are first-class citizens"?

**Answer:** Functions are first-class citizens means that functions can be treated like any other value in JavaScript.

---

## Q12: Assigning Functions to Variables

**Question:** Can you assign a function to a variable and then call it? Show how.

**Answer:**

```javascript
let a = function() {
    
}
a();
```

---

## Q13: Passing Functions as Arguments

**Question:** Pass a function into another function and execute it inside.

**Answer:**

```javascript
function abcd(val) {
    val();
}

abcd(function(){
    console.log("Hi");
});
```

---

## Q14: Higher-Order Functions

**Question:** What is a higher-order function?

**Answer:** A higher-order function is a function that accepts a function as an argument or returns a function as a result.

### Example 1: Returning a Function

```javascript
function abcd() {
    return function(){

    }
}
```

### Example 2: Accepting a Function

```javascript
function abcd(val) {
    val();           // This is a higher-order function
}

abcd(function(){
    console.log("Hi");
});
```

---

## Q15: Identifying Higher-Order Functions

**Question:** Identify which one is the higher-order function.

```javascript
[1, 2, 3].map(function (x) {
    return x * 2;
});
```

**Answer:** Here `map` is our higher-order function.

---

## Q16: Pure vs Impure Functions

**Question:** Identify Pure vs Impure function.

```javascript
let total = 0;
function addToTotal(num) {
    total += num;
}

addToTotal(25)
console.log(total);
```

**Explanation:** This is an **impure function** because it modifies the outside state (the `total` variable). Impure functions have side effects and can modify the outside world or external state.

---

## Q17: Converting to Pure Function

**Question:** Convert the below function into a pure function.

```javascript
let total = 0;
function addToTotal(num) {
    total += num;
}
```

**Answer:**

```javascript
let total = 0;
function addToTotal(num) {
    let newTotal = total;
    newTotal += num;
    return newTotal;
}
```

---

## Q18: Closures

**Question:** What is closure? When is it used?

**Answer:** A closure is a function having access to the parent scope, even after the function is closed.

### Example:

```javascript
function abcd(){
    let val = 0;
    return function(){
        console.log(val);
    };
}
```

---

## Q19: Closure Output Prediction

**Question:** What will be the output?

```javascript
function outer() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}

const counter = outer();
counter();
counter();
```

**Answer:**
```
1
2
```

---

## Q20: IIFE Conversion

**Question:** Convert this normal function into IIFE.

```javascript
function init() {
    console.log("Initialized");
}
```

**Answer:**

```javascript
(function init() {
    console.log("Initialized");
})();
```

---

## Q21: IIFE Real-World Use Case

**Question:** What is IIFE? Name one real-world use case.

**Answer:**

```javascript
let sher = (function () {
    let score = 0;
    return {
        getScore: function (){
            console.log(score);
        },
        setScore: function (Val) {
            score = Val;
        }
    }
})();
```

IIFE (Immediately Invoked Function Expression) is commonly used for data privacy and creating private variables.

---

## Q22: Hoisting with Function Expression

**Question:** What will be the output here and why?

```javascript
greet();

var greet = function (){
    console.log("Hi");
};
```

**Answer:** `undefined` (because the function `greet` is not yet defined when it is called)

---

## Q23: Hoisting with Function Declaration

**Question:** What will be the output here and why?

```javascript
greet();

function greet (){
    console.log("Hi");
};
```

**Answer:** `Hi` (because function declarations are hoisted, the function `greet` is moved to the top of its scope, so it can be called before it is defined)

---

*This guide covers essential JavaScript function concepts with practical examples and explanations.*