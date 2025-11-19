/* Function */

// Why What and How...
// Why - To reuse code
// What - Function
// How - Function declaration, Function expression, Arrow function.

// Function declaration
function abc() {
  // Function declaration & Statement
}
// function call
abc();

//Function Expression
let xyz = function () {
  // Function expression
};

//Arrow Function
let pqr = () => {
  //arrow funtion
};

/* -------Parameter and Arguments-------- */

function abc(/* Parameter */) {
  // Function declaration & Statement
}
abc(/* Arguements */);
 

/* --Example of Parameter and Arguments-------- */

/*
function dance(v1){
    console.log(`${v1} is Dancing`);
    
}
dance(prompt('Who?'));


// Function of addition of numbers by user input
function add(v1, v2){
    console.log(`${v1} + ${v2} = ${v1 + v2}`);
    
}

let num1 = Number(prompt('Put the first value'));
let num2 = Number(prompt('Put the second value'));

add(num1, num2);
*/

/* Default, Rest and Spread Parameter*/

// Default Parameter
function add(v1 = 0, v2 = 0 /* Default Parameter */) {
  console.log(v1 + v2);
}
add();

// Rest Parameter

/*
 Explanation: যখন argument অনেক বেশি হয়ে যায়, তখন প্রতিটা argument-এর জন্য আলাদা করে parameter বানাতে অসুবিধা হয়। এই সমস্যার সমাধান হিসেবে আমরা Rest Parameter ব্যবহার করি, যাতে অনেকগুলো value একসাথে একটি parameter-এই ধরে ফেলা যায়।

    (...) — এই তিনটি ডটকে বলা হয় Rest অথবা Spread।

    •   যখন (...) function-এর parameter হিসেবে ব্যবহার করা হয়, তখন একে বলা হয় Rest Operator।
        এটি অনেক argument-কে একসাথে একটি array-এর মতো সংগ্রহ করে। 
    •   আর যখন (...) array বা object-এর ভেতরে ব্যবহার করা হয়, তখন একে বলা হয় Spread Operator।
        এটি array/object-এর ভেতরের মানগুলোকে ছড়িয়ে (expand করে) বাইরে এনে ব্যবহার করতে দেয়।
*/

/* Example: */
// 1.
function abcd(...value) {
  console.log(value);
}
abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// 2.
function abc(a, b, c, ...value) {
  console.log(a, b, c, value);
}
abc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
