# JavaScript Functions Guide

## Why, What, and How

- **Why**: To reuse code
- **What**: Function
- **How**: Function declaration, Function expression, Arrow function

---

## Types of Functions

### 1. Function Declaration

```javascript
function abc() {
  // Function declaration & Statement
}

// Function call
abc();
```

### 2. Function Expression

```javascript
let xyz = function () {
  // Function expression
};
```

### 3. Arrow Function

```javascript
let pqr = () => {
  // Arrow function
};
```

---

## Parameters and Arguments

```javascript
function abc(/* Parameter */) {
  // Function declaration & Statement
}

abc(/* Arguments */);
```

### Example of Parameters and Arguments

```javascript
function dance(v1) {
  console.log(`${v1} is Dancing`);
}
dance(prompt('Who?'));

// Function for addition of numbers by user input
function add(v1, v2) {
  console.log(`${v1} + ${v2} = ${v1 + v2}`);
}

let num1 = Number(prompt('Put the first value'));
let num2 = Number(prompt('Put the second value'));

add(num1, num2);
```

---

## Default, Rest and Spread Parameters

### Default Parameter

```javascript
function add(v1 = 0, v2 = 0 /* Default Parameter */) {
  console.log(v1 + v2);
}

add(); // Output: 0
```

### Rest Parameter

**Explanation**: যখন argument অনেক বেশি হয়ে যায়, তখন প্রতিটা argument-এর জন্য আলাদা করে parameter বানাতে অসুবিধা হয়। এই সমস্যার সমাধান হিসেবে আমরা Rest Parameter ব্যবহার করি, যাতে অনেকগুলো value একসাথে একটি parameter-এই ধরে ফেলা যায়।

**`(...)` — এই তিনটি ডটকে বলা হয় Rest অথবা Spread।**

- **Rest Operator**: যখন `(...)` function-এর parameter হিসেবে ব্যবহার করা হয়, তখন একে বলা হয় Rest Operator। এটি অনেক argument-কে একসাথে একটি array-এর মতো সংগ্রহ করে।

- **Spread Operator**: আর যখন `(...)` array বা object-এর ভেতরে ব্যবহার করা হয়, তখন একে বলা হয় Spread Operator। এটি array/object-এর ভেতরের মানগুলোকে ছড়িয়ে (expand করে) বাইরে এনে ব্যবহার করতে দেয়।

#### Examples

**Example 1**: All arguments as rest parameter

```javascript
function abcd(...value) {
  console.log(value);
}

abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

**Example 2**: Mixed regular and rest parameters

```javascript
function abc(a, b, c, ...value) {
  console.log(a, b, c, value);
}

abc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// Output: 1 2 3 [4, 5, 6, 7, 8, 9, 10]
```