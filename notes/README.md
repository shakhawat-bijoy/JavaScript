# JavaScript Notes for Beginners

Welcome to your JavaScript learning journey! This document breaks down every file in your project, explaining the code line-by-line in simple terms.

## Day 1

**Concept: Variables & Output**  
*Imagine a variable as a labeled box where you can store things (numbers, text). `console.log()` is how you ask the computer to "say" or "show" something on the screen.*

### `day-1/main.js`

This file covers basic output and variable declarations.

```javascript
// print "Hello World" to the console/terminal
console.log("Hello World");
// print "First Line of Code" to the console/terminal
console.log("First Line of Code");

// alert("Welcome to JavaScript!"); // This line is commented out, so it won't run. It would show a popup alert.


// Declare a variable named 'name' using 'let' (can be changed later) and assign string 'Alice'
let name = 'Alice';
// Declare a constant named 'age' using 'const' (cannot be changed) and assign number 22
const age = 22;
// Declare a variable named 'city' using 'var' (older way, function scoped) and assign string 'New York'
var city = 'New York'

// Print the values of name, age, and city to the console separated by spaces
console.log(name, age, city);

// key comparison: check if age is less than or equal to 23. Result is a boolean (true/false)
let isAdult = age <= 23;
// Print the boolean result (true)
console.log(isAdult);

// Create a string using template literals (backticks `) to embed the variable 'name' inside the string
let gretting = `Hi, ${name}`
// Print the greeting string
console.log(gretting);


// Perform addition: 10 + 5
let sum = 10 + 5;
// Print the result (15)
console.log(sum);

// Perform subtraction: 25 - 5
let sub = 25 - 5;

// Print the result (20)
console.log(sub);
```

### `day-1/arithmetic.js`

This file demonstrates arithmetic operations in JavaScript.

```javascript
// JavaScript Arithmetic Examples - A comment describing the file

// Addition
// Declare variable 'a' with value 50
let a = 50;
// Declare variable 'b' with value 20
let b = 20;

// Add 'a' and 'b' and store resulting value in 'sum'
let sum = a + b;
// Print the equation and result using template literals for formatting
console.log(`${a} + ${b} = ${sum}`);


//substraction
// Subtract 'b' from 'a' and store in 'difference'
let difference = a - b;
// Print the equation and result
console.log(`${a} - ${b} = ${difference}`);


//Multiplication
// Multiply 'a' by 'b' and store in 'product'
let product = a * b;
// Print just the product result
console.log(product);


//Division (With Zero Check)
// Check if 'b' is NOT equal to 0 before dividing to avoid errors or Infinity
if (b !== 0) {
    // Divide 'a' by 'b' and store in 'div'
    let div = a / b;
    // Print the division result
    console.log(`${a} / ${b} = ${div}`);
}else{
    // If 'b' was 0, print an error message instead of dividing
    console.log("Division By Zero Is Not Allowed");
    
}


//Module (Reminder)

// Check if 'b' is not 0
if( b!==0){
    // Calculate the remainder of 'a' divided by 'b' using % (modulus operator)
    let reminder = a % b;
    // Print the remainder
    console.log(`${a} % ${b} = ${reminder}`);
}else{
    // Handle division by zero case for modulus
    console.log("Module By Zero Is Not Allowed.");
    
}


//Exponentiation
// Calculate 'a' to the power of 'b' (50^20) using ** operator.
let power = a ** b //same as Math.pow(a,b)
// Print the result
console.log(`${a} ** ${b} = ${power}`);


//Increment & Decrement
// Set 'x' to 5
let x = 5;
// Print initial value
console.log(`Initial x: ${x}`);
// Post-increment: x++ returns the CURRENT value (5), then increases x to 6.
console.log(`Post-increment: ${x++}`); //return old value, then increments
// x is now 6
console.log(`After Post-increment: ${x}`);
// Pre-increment: ++x increases x to 7 FIRST, then returns the new value (7).
console.log(`Pre-increment: ${++x}`); //Increment first, then returns
// Post-decrement: x-- returns CURRENT value (7), then decreases x to 6.
console.log(`Post-decrement: ${x--}`);
// x is now 6
console.log(`After Post-decrement: ${x}`);
// Pre-decrement: --x decreases x to 5 FIRST, then returns new value (5).
console.log(`Pre-decrement: ${--x}`);
```

### `day-1/Project One/script.js`

A project that collects user info and displays statistics.

```javascript
// Console log - check your browser console!
// Print a startup message
console.log("JavaScript Program Started!");
// Print the current date. new Date() creates a date object, .toLocaleDateString() formats it as a readable string.
console.log("Current date:", new Date().toLocaleDateString());


//function to process userInfo
// Define a function named 'userInfo' that will be called (e.g., usually by a button click in HTML)
function userInfo() {
    //get values from input feilds
    // Get the DOM element with ID "userName" and extract its current .value property (what user typed)
    const name = document.getElementById("userName").value;
    // Get the value of element with ID "userAge"
    const age = document.getElementById("userAge").value;
    // Get the value of element with ID "favoriteColor"
    const color = document.getElementById("favoriteColor").value;

    //log to console

    // Debugging logs to verify what was captured
    console.log("User submitted data: ");
    console.log("Name: ", name);
    console.log("Age: ", age);
    console.log("Favorite Color: ", color);

    //validation
    // Check if name OR age OR color is empty/falsy (! operator checks for false/empty)
    if (!name || !age || !color) {
        // If any field is missing, show an alert
        alert("Please Fill The Feilds!");
        // Stop the function execution immediately so we don't process incomplete data
        return
    }

    //convert age to Number
    // Input values are always strings. Convert 'age' string to an integer number.
    const ageNumber = parseInt(age);

    //calculate Birth Year Apporximate
    // Get the current full year (e.g., 2024) from a new Date object
    const currentYear = new Date().getFullYear();
    // Calculate birth year by subtracting age from current year
    const birthYear = currentYear - ageNumber;

    //is user is adult or not
    // Check if age is 18 or greater. isAdult will be true or false.
    const isAdult = ageNumber >= 18;

    //calculate days lived (approximate)
    // Multiply age by 365 days
    const daysLived = ageNumber * 365;

    //Create Personalized Message
    // Declare a variable for the age category string
    let ageCategory;
    // Logic chain to determine category based on age range
    if (ageNumber < 13) {
        ageCategory = "a Child";
    } else if (ageNumber < 18) {
        ageCategory = "a teenager";
    } else if (ageNumber < 60) {
        ageCategory = "an Adult";
    } else {
        // If age is 60 or more
        ageCategory = "a senior"
    }


    //display results

    // Get the HTML element where we want to show results (it has ID "result")
    const resultDiv = document.getElementById("result");
    // specific formatting using template literals to inject HTML content dynamically
    // We insert the variables (name, ageNumber, etc.) into the HTML string
    resultDiv.innerHTML = `
    <h2>Hello, <span class="highlight">${name}</span>! 👋</h2>
    <p class="result-text">You are <span class="highlight">${ageNumber}</span> years old, which makes you <span class="highlight">${ageCategory}</span>.</p>
    <p class="result-text">You were born around <span class="highlight">${birthYear}</span>.</p>
    <p class="result-text">You've lived approximately <span class="highlight">${daysLived.toLocaleString()}</span> days!</p>
    <p class="result-text">Your favorite color is <span class="highlight" style="color: ${color}">${color}</span>. Great choice!</p>
    <p class="result-text">Adult status: <span class="highlight">${isAdult ? "Yes ✓" : "Not yet ✗"}</span></p>
    `;
    // Change the class of the resultDiv to "show" (likely to trigger CSS animations or visibility)
    resultDiv.className = "show";

    //show alert with greeting
    // Pop up a final success message
    alert(`Welcome, ${name}! Your information has been processed.`);

    // Log completion
    console.log("Processing Complete");
    
}

// Welcome message when page loads
// This runs immediately when the script loads, instructing the user.
console.log("Welcome! Fill in the form and click submit to see the JavaScript in action");
```

## Day 2

**Concept: Control Flow (Making Decisions)**  
*Just like a traffic light controls cars, `if-else` statements control your code. They check a condition (True or False). If True, do one thing; if False, do another.*

### `day-2/script.js`

Introduces `if-else` control flow and a Rock-Paper-Scissors game logic.

```javascript
//if else else-if statement

// Define a function that takes a numeric score and returns a grade
function getGrade(score) {
  // Check if score is between 90 and 100
  if (score >= 90 && score <= 100) {
    // Return "A+" if condition is true
    return "A+";
  } else if (score >= 80 && score <= 89) {
    // If not A+, check if between 80 and 89
    return "A";
  } else if (score >= 70 && score <= 79) {
    // Check for B range
    return "B";
  } else if (score >= 60 && score <= 69) {
    // Check for C range
    return "C";
  } else if (score >= 33 && score <= 59) {
    // Check for D range
    return "D";
  } else if (score >= 0 && score <= 32) {
    // Check for Fail range
    return "Fail";
  } else return "Invalid Marks"; // If none of the above (e.g., negative or >100), return this error
}

// Call the function with 90 and print the result
console.log(getGrade(90));



// Rock paper scissors logic

// Function taking two inputs: user's choice and computer's choice
function rps(user, computer){

    // If both chose the same thing, it's a draw
    if(user === computer) return 'draw';

    // Conditions where User wins
    // Rock beats Scissor
    if(user === 'rock' && computer === 'scissor') return 'user';
    // Paper beats Rock
    if(user === 'paper' && computer === 'rock') return 'user';   
    // Scissor beats Paper
    if(user === 'scissor' && computer === 'paper') return 'user';

    // If it's not a draw and user didn't win, Computer must have won
    return 'computer';
}

// Test the function with "paper" vs "paper" (should be 'draw')
console.log(rps("paper", "paper"));
```

## Day 3

**Concept: Loops (Repetition)**  
*Loops allow you to repeat an action multiple times without writing the same code over and over. A `for` loop is good when you know how many times to repeat. A `while` loop is good when you want to repeat UNTIL something happens.*

### `day-3/index.js`

Basic structures and usage of loops.

```javascript
// loops
// for loop
// while loop
// do while loop

/*

pattern of for loop
start; end; change refers to initialization; condition; increment/decrement
for(start; end; change)


pattern of while loop

start
while(end){
    code
    change
}
...
*/



// for loop

// Initialize i=1; Run while i < 10; Increment i by 1 each time
for(let i = 1; i < 10; i++){
    // Empty console log (will just print newlines)
    console.log();
}





// While loop

// Initialize i=1
let i = 1;
// Run loop as long as i is less than 32
while(i<32){
    //code
    console.log(); // print something
    i++ // Increment i manually
}




// do while

// Initialize j=1
let j = 1;
// 'do' block executes AT LEAST ONCE before checking condition
do{
    console.log(j); // print j
    j++ // increment j
}
while(j<20) // Check condition after execution



//breaks in loops
// Loop from 1 to 200
for (let i = 1; i < 201; i++) {
  console.log(i);
  // If i reaches 32, exit the loop immediately using 'break'
  if (i === 32) break;
}

//continue in loops
// Loop from 1 to 200
for(let i = 1; i < 201; i++){
    // If i is 32
    if(i === 32){
    // Skip the rest of this iteration and jump to the next one (i becomes 33)
    continue;
    }
    // Print i (will print 1-31, skip 32, then 33-200)
    console.log(i);
}
```

### `day-3/script.js` (Selected Exercises)

Various loop exercises and solutions.

```javascript
// 1. Print 1 to 10 using for loop.

// Loop from i=1 to i=10
for(let i = 1; i <= 10; i++){
    // Print current number
    console.log(i);
}

// 2. Print numbers from 10 to 1 using while loop.

// Using for loop (countdown)
for(let i = 10; i > 0; i--){
    console.log(i);

}

// Using while loop (same logic)
let i = 10;
while(i > 0){
    console.log(i);
    i--;
}

// 3. Print even numbers from 1 to 20 using a for loop.

for(let i = 1; i <= 20; i++){
    // Check if number is divisible by 2 (even)
    if( i%2 === 0 )
        console.log(i);
}

// 4. Print odd number from 1 to 15 using a while loop.

// Re-using 'i' (ensure it is declared in correct scope or use fresh variable)
let k = 1; // Renaming for clarity here, though source uses 'i'
while( k <= 15){
    // Check if remainder is 1 (odd)
    if( k%2 === 1){
        console.log(k);
    }
    k++;
}

// 5. Print the multiplication table of 5

for(let i = 1; i <= 10; i++){
    // Template literal works well here: 5 * 1 = 5
    console.log(`5 * ${i} = ${i * 5}`);

}

// 6. Find the sum of numbers from 1 to 100 using a loop.

// Initialize accumulator 'sum' to 0
let sum = 0;
for(let i = 1; i <= 100; i++){
    // Add current number 'i' to 'sum'
    sum = sum + i;
}
// Print final total
console.log(sum);


// 7. Print all number between 1 to 50 that are divisible by 3.

for(let i = 1; i <= 50; i++){
    // Check divisibility by 3
    if(i%3 === 0){
        console.log(i);
    }
}

// Q1. Stop at first Multiple of 7.

for(let i = 1; i <= 100; i++){
    // If divisible by 7
    if(i%7 === 0){
        // Stop the loop
        break;
    }
    console.log(i);
}

// Q2. Skip Multiples of 3

for(let i = 1; i <= 20; i++){
    // If divisible by 3
    if(i%3 === 0){
        // Skip this iteration
        continue;
    }
    console.log(i);  
}
```

## Day 4

**Concept: Functions (Reusable Recipes)**  
*Functions are small factories or recipes. You put ingredients in (parameters), the function does some work, and often gives you a finished product back (return value).*

### `day-4/function.js`

Basic to intermediate function concepts.

```javascript
// Why What and How...
// Why - To reuse code
// What - Function
// How - Function declaration, Function expression, Arrow function.

// 1. Function declaration
// 'function' keyword + name + () + {}
function abc() {
  // Function declaration & Statement
}
// function call
abc();

// 2. Function Expression
// Assigning an anonymous function to a variable 'xyz'
let xyz = function () {
  // Function expression
};

// 3. Arrow Function
// Modern syntax: () => {}
let pqr = () => {
  //arrow function logic
};

/* -------Parameter and Arguments-------- */

// Parameters are variables listed in function definition
function abc(/* Parameter */) {
  // ...
}
// Arguments are actual values passed during call
abc(/* Arguements */);


/* Default, Rest and Spread Parameter */

// Default Parameter: If v1 or v2 are not provided, they default to 0
function add(v1 = 0, v2 = 0 /* Default Parameter */) {
  console.log(v1 + v2);
}
// Call without arguments -> 0 + 0 = 0
add();

// Rest Parameter (...) to handle infinite arguments as an array
function abcd(...value) {
  // 'value' is an array of all passed arguments
  console.log(value);
}
// Pass 10 numbers; they become an array [1, 2, ... 10]
abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

/
// Mixed parameters: first three go to a, b, c. The REST go into 'value' array.
function mixed(a, b, c, ...value) {
  console.log(a, b, c, value);
}
mixed(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// a=1, b=2, c=3, value=[4,5,6,7,8,9,10]


/* Return values and Early Returns */

// Example 1. Basic return
function ret() {
  // Function stops here and sends 72 back to the caller
  return 72;
}
```

## Day 5

**Concept: Scope & Context**  
*Scope is simply "visibility"—where can you see a variable? `Global` means everyone can see it. `Local` (inside a function) means only that function can see it. `Hoisting` is JavaScript's behavior of moving declarations to the top before running.*

### `day-5/script.js`

Advanced function concepts: Pure functions, Closures, IIFE.

```javascript
// Pure Function vs Impure Function

// Pure Function: No side effects, always returns same output for same input.

let a = 12; // Global variable

function pure() {
  console.log("Pure Function");
  // Doesn't modify 'a'
}
pure();

// Impure Function: Modifies external state ('a')

function impure() {
  // Side effect: changing global variable a
  a++;
  console.log(a);
}
impure();

// Closures:
// A closure gives you access to an outer function's scope from an inner function.

function clousers() {
  let c = 10; // Variable in outer scope
  // Return an inner function
  return function () {
    // This inner function "remembers" c even after clousers() has finished executing
    console.log(c);
  };
}
clousers(); // This would return the function. To run it: clousers()()

// Lexical Scope:
// Inner functions can access variables of outer functions.

function lexical() {
  let x = 15;
  function defg() {
    let y = 12;
    // can access x here
    function ghij() {
      let z = 11;
      // can access x and y here
    }
  }
}

// IIFE (Immediately Invoked Function Expressions)
// A function that runs as soon as it is defined.

(function () {
  console.log("IIFE (Immediately Invoked Function Expressions)");
})(); // The () at the end invokes it immediately.


// Hoisting difference between declaration and expressions

// Function declarations ARE hoisted. You can call them before defining them.
Hoistig();

function Hoistig() {
  console.log('Hoistig difference between declaration expressions');
}


// Function Expressions are NOT hoisted.
// If you uncomment the line below, it throws an error (Expression is not a function/undefined)
/*  Expression();       */

let Expression = function () {
  console.log('Hoistig difference between declaration expressions');
}
```

## Day 6

**Concept: Arrays (Lists of Data)**  
*An Array is a single variable that can hold a list of items (like a shopping list). You can access items by their position (index), starting at 0. Methods like `map` and `filter` help you transform or search through these lists easily.*

### `day-6/Arrays/script.js`

Introduction to Arrays: Creation, Modification, and Basic Methods.

```javascript
// Create, Access, Modify Array
//create
// Declare an array named 'marks' with 6 numbers
let marks = [90, 88, 70, 80, 92, 86];

//access
// Access the 3rd element (index 2) of the array. (90 is index 0, 88 is 1, 70 is 2)
marks[2]; // returns 70

//modify
// Change the value at index 5 (the last one, 86) to 96
marks[5] = 96;

// Array methods: push, pop, shift, unshift, splice, slice, reverse, sort

let arr = [1, 2, 3, 4, 5, 6];
arr.push(7000); // insert 7000 at the end. arr becomes [1, 2, 3, 4, 5, 6, 7000]
arr.pop(); // remove the last element (7000). arr returns to [1, 2, 3, 4, 5, 6]
arr.shift(); // remove the first element (1). arr becomes [2, 3, 4, 5, 6]
arr.unshift(22); // add 22 to the beginning. arr becomes [22, 2, 3, 4, 5, 6]
arr.splice(3, 2); // starting at index 3, remove 2 items. Removes corresponding values.
let newarr = arr.slice(0, 4); // Create a new array from index 0 up to (but not including) 4.
arr.reverse(); // Reverse the order of elements in 'arr' in-place.

// Sorting
let sortArray = [68, 85, 44, 58, 38, 96];
// .sort() takes a comparison function. 'a - b' sorts numbers in Ascending order.
let as = sortArray.sort(function (a, b) {
  return a - b; // result < 0 means a comes first, result > 0 means b comes first
});

let srtArray = [68, 85, 44, 58, 38, 96];
// 'y - x' sorts numbers in Descending order (Big to Small).
let ds = srtArray.sort(function (x, y) {
  return y - x;
}); 

// Arrow function version of sort
arr.sort((c, d) => c - d);
```

### `day-6/Advance/script.js`

High-Order Array Methods: `forEach`, `map`, `filter`, `reduce`, `find`, `some`, `every`.

```javascript
//forEach
let arr = [11, 68, 38, 86, 26];

// The function inside forEach runs for EVERY element in the array.
arr.forEach(function (val) {
  console.log(val + 5); // Print current element + 5
}); 


//Map
// map() creates a NEW array by transforming every element of the original array.
// Note: It does NOT change the original array.

let array = [11, 68, 38, 86, 26];

// Return a new array where every element is replaced by 12 (silly example, usually you'd return val * 2 etc)
let newarr = array.map(function(val){
    return 12;
})


// filter
// filter() creates a NEW array containing only elements that pass the test (return true).

let filarr = [12, 8, 48, 68, 76]

let newfarr = filarr.filter(function (val) {
    // Keep the element if it is greater than 10
    if(val > 10) return true;
})


// reduce
// reduce() takes all elements and reduces them to a SINGLE value (like a sum).

let rarr = [12, 8, 48, 68, 76]

// accumulator starts at 0 (the second arg). val is the current item.
let ans = rarr.reduce(function(accumulator, val){
    // return new accumulator value (old sum + current value)
    return accumulator + val;
}, 0);


// find
// find() returns the FIRST element that matches the condition.

let findarr = [11, 68, 38, 11, 86, 26];

let farr = findarr.find(function (val){
    // Return the value if it equals 11. (returns the first 11 found)
    return val === 11;
});


// some
// some() returns TRUE if at least ONE element matches the condition.

let sarr = [12, 8, 48, 68, 76, 96];

let any = sarr.some(function (val) {
    // Is any value greater than 85? (Yes, 96 is). returns true.
    return val > 85;
})


// every 
// every() returns TRUE only if ALL elements match the condition.

let earr = [11, 68, 38, 86, 26];

let eve = earr.every(function(val){
    // Are ALL values greater than 20? (No, 11 is not). returns false.
    return val > 20;
})
```

## Function Practice

### `function practice 2/index.js`

Practical applications of functions: Calculators, HOF, IIFE.

```javascript
// 1. BMI Calculator

// Function to calculate Body Mass Index
function bmi (weight, height){
    // Formula: weight in kg / (height in meters squared)
    return weight / (height * height);
}

// Calculate for 92kg, 1.7m. .toFixed(2) limits output to 2 decimal places.
console.log(bmi(92, 1.7).toFixed(2));


// 2. Reusable Discount Calculator (Higher Order Function)

// This function returns ANOTHER function.
// It sets ("remembers") the discount rate.
function discountCalculator(discount){
    return function (price){
        // Calculates price after discount
        return price - price * (discount /100);
    }
}

// Create a generic function 'ten' that calculates 10% discount
let ten = discountCalculator(10);
// Create a generic function 'twenty' that calculates 20% discount
let twenty = discountCalculator(20);

// Use the specialized functions
console.log(ten(300)); // 300 - 10% = 270
console.log(twenty(20000)); // 20000 - 20% = 16000


// 3. Counter (Closure Example)

function counter (){
    let count = 0; // Private variable, inaccessible from outside
    
    // Return a function that has access to 'count'
    return function(){
        count ++; // Increment count
        return count; // Return new value
    }
}

// Create a new independent counter
let c = counter();

console.log(c()); // 1
console.log(c()); // 2
console.log(c()); // 3... it remembers the state.


// 4. Pure Function Example

function double(val){
    // Always returns same output for same input, no side effects -> Pure
    return val * 2;
}

console.log(double(200));


// 5. IIFE for Data Privacy

// The function runs immediately. 'password' cannot be accessed outside this block.
(function (){
    const password = "Secret Password"
    console.log(password);
})();
```

### `Function Practice/script.js` (Q&A Snippets)

```javascript
// Q1: Hoisting Demonstration

    abc(); // Works! Function declaration is hoisted.
    function abc(){
        console.log('Function Declaration');
    }; 

// Q3: Arrow Function Conversion

    // Define 'multiply' as an arrow function
    let multiply = (a, b) => {
        return a * b; // explicit return
    }
    // Call it
    console.log(multiply(20 , 20)); // 400
    
    
// Q4: Parameter vs Argument

    function welcome(name) {  // "name" is the Parameter (placeholder)
        console.log(name); 
    }
    welcome("Bijoy")  // "Bijoy" is the Argument (actual value passed)
```



