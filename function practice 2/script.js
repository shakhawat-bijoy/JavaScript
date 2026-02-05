// Write a BMI calculator

function bmi(weight, height){
    return weight / (height * height)
}
 
console.log(bmi(92, 1.7).toFixed(2));


// A resuable discount calculator (HOF, High order function)

function discountCalculator(discount){
    return function(price){
        return price - price * (discount / 100)
    }
}

let ten = discountCalculator(10);
let twenty = discountCalculator(20);

console.log(twenty(200));
console.log(ten(200));


// Counter 

function counter() {
    let count = 0;

    return function () {
        count ++;
        return count;
    }
}

let c = counter();

console.log(c());
console.log(c());
console.log(c());
console.log(c());

let d = counter();
console.log(d());
console.log(c());


// Create a Pure finction to transform a value

function double(val){
    return val * 2;
}

console.log(double(200));


// use IIFE to isolate variable
// using iife we can craete a secret variable

(function () {
    const password = "secret password";
    console.log(password);
    
})();

