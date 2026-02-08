// Create an object for a student with name, age, and isEnrolled.
let student = {
  name: "Heer",
  age: 23,
  isEnrolled: true,
};

// can an object key be a number or boolean? try this
const obj = {
  true: "yes",
  42: "answer",
};
obj[42]; //yes

// Access the value of "firs-tName" from this object:
const user = {
  "first-name": "Shakhawat Hossain",
};
user["first-name"];

// Destructure the key "first-name" as a variable called firstName.
let { "first-name": firstName } = user;

// Given a dynamic key let key = "age", how will you access user[key]?
let key = "age";

const user2 = {
  age: 26,
};
user2[key];

// from the object below, print the latitude:
const locations = {
  city: "Dhaka",
  coordinates: {
    lat: 29.78,
    lng: 85.25,
  },
};
locations.coordinates.lat;

// what will happen if coordinates is missing? how you will prevent errors?
// Ans: Optional chaining.
locations?.coordinates?.lat;

// Destructure the city and lat from the location object above.
let { city } = locations;
let { lat } = locations.coordinates;

// use for-in loop to log all keys in this objects:

const course = {
  title: "JavaScript",
  duration: "4 weeks",
};

for (let key in course) {
  console.log(key);
}

// use Object.entries() to print all key-value pairs as:
// title: JavaScript
// duration: 4 weeks

Object.entries(course).forEach(function (val) {
  console.log(val[0] + ": " + val[1]);
});

// copy this object using spread operator.
const original = {
  a: 1,
  b: 2,
};

const copy = {...original}

// then what is the problem with this?
const obj1 = { info: { score: 80 } };
const clone = {...obj1};
clone.info.score = 100;
console.log(obj1.info.score); // ?

// Answer
let newobj = JSON.parse(JSON.stringify(obj1));

// Rewrite this safely using option chaining: 
const person = {};
console.log(person?.profile?.name); // ❌

// use a variable to dynamically assign a property
const keys = 'role';

let obj3 = {
  name: 'bijoy',
  [keys]: 'admin',
};