// 1. Write a BMI calculator

// 2. A resuable discount calculator (HOF, High order function)

// 3. Make a counter (Which will incrase the number)

// 4. Create a Pure finction to transform a value (multiply by 2)

// 5. use IIFE to isulate variable


// 1. Answer---------

function bmi (weight, height){
    return weight / (height * height);
}

console.log(bmi(92, 1.7).toFixed(2));



// 2. Answer---------

function discountCalculator(discount){
    return function (price){
        return price - price * (discount /100);
    }
}

let ten = discountCalculator(10);
let twenty = discountCalculator(20);

console.log(ten(300));
console.log(twenty(20000));


// 3. Answer---------

function counter (){
    let count = 0;
    
    return function(){
        count ++;
        return count;
    }
}

let c = counter();

console.log(c());
console.log(c());
console.log(c());
console.log(c());
console.log(c());
console.log(c());



// 4. Answer---------

function double(val){
    return val * 2;
}

console.log(double(200));


// 5. Answer---------

(function (){
    const password = "Secret Password"
    console.log(password);
    
})();