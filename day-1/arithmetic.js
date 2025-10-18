// JavaScript Arithmetic Examples

// Addition
let a = 50;
let b = 20;

let sum = a + b;
console.log(`${a} + ${b} = ${sum}`);


//substraction
let difference = a - b;
console.log(`${a} - ${b} = ${difference}`);


//Multiplication
let product = a * b;
console.log(product);


//Division (With Zero Check)
if (b !== 0) {
    let div = a / b;
    console.log(`${a} / ${b} = ${div}`);
}else{
    console.log("Division By Zero Is Not Allowed");
    
}


//Module (Reminder)

if( b!==0){
    let reminder = a % b;
    console.log(`${a} % ${b} = ${reminder}`);
}else{
    console.log("Module By Zero Is Not Allowed.");
    
}


//Exponentiation
let power = a ** b //same as Math.pow(a,b)
console.log(`${a} ** ${b} = ${power}`);


//Increment & Decrement
let x = 5;
console.log(`Initial x: ${x}`);
console.log(`Post-increment: ${x++}`); //return old value, then increments
console.log(`After Post-increment: ${x}`);
console.log(`Pre-increment: ${++x}`); //Increment first, then returns
console.log(`Post-decrement: ${x--}`);
console.log(`After Post-decrement: ${x}`);
console.log(`Pre-decrement: ${--x}`);





