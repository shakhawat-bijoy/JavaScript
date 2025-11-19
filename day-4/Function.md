# JavaScript Functions

## Why, What, and How

- **Why** - To reuse code
- **What** - Function
- **How** - Function declaration, Function expression, Arrow function

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

// Function of addition of numbers by user input
function add(v1, v2) {
  console.log(`${v1} + ${v2} = ${v1 + v2}`);
}

let num1 = Number(prompt('Put the first value'));
let num2 = Number(prompt('Put the second value'));

add(num1, num2);
```

---

## Default, Rest and Spread Parameter

### Default Parameter

```javascript
function add(v1 = 0, v2 = 0 /* Default Parameter */) {
  console.log(v1 + v2);
}
add(); // Output: 0
```

### Rest Parameter

**Explanation:**

যখন argument অনেক বেশি হয়ে যায়, তখন প্রতিটা argument-এর জন্য আলাদা করে parameter বানাতে অসুবিধা হয়। এই সমস্যার সমাধান হিসেবে আমরা Rest Parameter ব্যবহার করি, যাতে অনেকগুলো value একসাথে একটি parameter-এই ধরে ফেলা যায়।

**`(...)` — এই তিনটি ডটকে বলা হয় Rest অথবা Spread।**

- **Rest Operator:** যখন `(...)` function-এর parameter হিসেবে ব্যবহার করা হয়, তখন একে বলা হয় Rest Operator। এটি অনেক argument-কে একসাথে একটি array-এর মতো সংগ্রহ করে।

- **Spread Operator:** আর যখন `(...)` array বা object-এর ভেতরে ব্যবহার করা হয়, তখন একে বলা হয় Spread Operator। এটি array/object-এর ভেতরের মানগুলোকে ছড়িয়ে (expand করে) বাইরে এনে ব্যবহার করতে দেয়। Spread Operator আমরা তখনই ভালোভাবে শিখব, যখন array এবং object পড়ব।

### Examples

**Example 1:**

```javascript
function abcd(...value) {
  console.log(value);
}
abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

**Example 2:** Mixed regular and rest parameters

```javascript
function mixed(a, b, c, ...value) {
  console.log(a, b, c, value);
}
mixed(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// Output: 1 2 3 [4, 5, 6, 7, 8, 9, 10]
```

---

## Return Values and Early Returns

### Return Values

**Return মানে হলো**: jeikhane theke function ke call kora hoy, return likhe dile function oi jaigai result niye fire jabe.

#### Example 1: Simple return

```javascript
function ret() {
  return 72;
}

let val = ret();
console.log(val); // Output: 72
```

#### Example 2: Return with calculation

```javascript
function ret2(v) {
  return 23 + v;
}

let value = ret2(12);
console.log(value); // Output: 35
```

### Early Returns

**Early return মানে** function-এর কাজ মাঝখানে থামিয়ে ফেলা। কোনো condition মিলে গেলে আমরা চাই function আর সামনে এগোবে না। তখন return ব্যবহার করে function-কে আগেভাগেই থামিয়ে দিই।

#### Example 1: Age check with early return

```javascript
function checkAge(age) {
  if (age < 18) {
    return "Not allowed"; // Early return
  }

  return "Welcome!"; // রান করবে যখন age >= 18
}

console.log(checkAge(22)); // Output: Welcome!
```

#### Example 2: Adult verification

```javascript
function isAdult(age) {
  if (age > 18) {
    return "You're an adult";
  }
  return "You're Teenage";
}

console.log(isAdult(prompt("What's your age?")));
```