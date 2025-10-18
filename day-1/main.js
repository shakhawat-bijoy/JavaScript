console.log("Hello World");
console.log("First Line of Code");

alert("Welcome to JavaScript!");

// Confirm Box Example
if (confirm("Press a button!")) {
   txt = "You pressed OK!";
} else {
   txt = "You pressed Cancel!";
}
// Prompt Box Example
let person = prompt("Please enter your name", "Harry Potter");
if (person != null) {
   txt = "Hello " + person + "! How are you today?";
}