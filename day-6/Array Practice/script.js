// Create an array with 3 fruitss and print the second fruit.

let fruits = ["Apple", "Banana", "Mango"];
fruits[1];

// Add "Guava" at the end "Pineapple" at the beginning of the array.

fruits.push("Guava");
fruits.unshift("Pineapple");

// Replace "Banana" with "Kiwi" in the above array.

fruits[2] = "Kiwi";

// what's the difference between .push() and .unshift()?

/* 
In array .push() method push an element/object in the array's at the end. 

.unshift() method push an element/object in the array's at the beginning.
*/

// Remove the last and second item from this array using a method.

let num = [1, 2, 3, 4];
num.pop();
num.splice(1, 1);

// Insert "Red" and "Blue" at the index 1 in this array:

let colors = ["Green", "Yellow"];
colors.splice(1, 0, "Red", "Blue");

//Extract only the middle 3 elements from this array.

let item = [1, 2, 3, 4, 5, 6, 7];
let items = item.slice(2, 5);

// Sort this array alphabetically and then reverse it:

let names = ["Moon", "Heer", "Mikasa"];
names.sort();
names.sort().reverse();

// Use .map() to square each number.

let arr = [1, 2, 3, 4];

let newarr = arr.map(function (val) {
  return val * val;
});

// Use .filter() to keep numbers greater than 10.

let number = [9, 8, 21, 15, 25];

let newnum = number.filter((val) => {
  return val > 10;
});

// Use .reduce() to find the sum of this array.

let array = [54, 25, 65];

let ans = array.reduce((accumulator, val) => {
  return accumulator + val;
});

// Use .find() to get the first number less than 10.

let nums = [26, 46, 33, 8, 24, 56];

let find = nums.find((val) => {
  return val < 10;
});

// use .some() to check if any student has scored below 35.

let score = [88, 92, 72, 33, 65, 78];

let check = score.some((val) => {
  return val < 35;
});

// Use .every() to check if all numbers are even.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

let even = numbers.every((val) => {
  return val % 2 === 0;
});

// Destructure this array to get firstName and lastName.

let fullName = ["Shakhawat", "Hossain", "Bijoy"];

let [firstName, , lastName] = fullName;

// Merge two arrays using spread operator.

let a = [1, 2, 3, 4, 5];
let b = [1, 2, 3, 4, 5, 6];

let c = [...a, ...b];

// Add "BD" to the start of this array using spread.

let countries = ["Palestine", "Saudi Arabia"];

countries = ["BD", ...countries];

// Clone this array properly (not by reference).

let x = [1, 2, 3, 4, 5];

let clone = [...x];
