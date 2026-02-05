// Create, Access, Modify Array
//create
let marks = [90, 88, 70, 80, 92, 86];

//access
marks[2];

//modify
marks[5] = 96;

// Array methods: push, pop, shift, unshift, splice, slice, reverse, sort

let arr = [1, 2, 3, 4, 5, 6];
arr.push(7000); //it insert the value in the array, it will be in the last number of an array.
arr.pop(); //it delete the last number of an array.
arr.shift(); //it delete the first number of an array.
arr.unshift(22); //it add value at the Beginning.
arr.splice(3, 2); //you can remove val from anywhere.
let newarr = arr.slice(0, 4); //জাভাস্ক্রিপ্টে slice() মেথড মূলত একটি অ্যারের নির্দিষ্ট অংশ কেটে নিয়ে একটি নতুন অ্যারে তৈরি করতে ব্যবহার করা হয়। এটি আসল অ্যারেতে কোনো পরিবর্তন করে না।
arr.reverse(); //it reverse the entire array.

let sortArray = [68, 85, 44, 58, 38, 96];
let as = sortArray.sort(function (a, b) {
  return a - b; // ascending order
});

let srtArray = [68, 85, 44, 58, 38, 96];
let ds = srtArray.sort(function (x, y) {
  return y - x;
}); //sort always accepts a function.
// Ekdom shohoj bhabey bolte geley, sort() method diye array-er element-gulo serial onujayi sajano jay. Kintu, eta original array-ke change kore fele (in-place modification).

arr.sort((c, d) => c - d);


// foreach, sort, map, filter, reduce they accept an function 

/*******Next Part is in the Advanced Array*******/