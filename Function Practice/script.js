/* 
    Q1: What's the diffrence between function declaration and expression in terms of Hoistion?
    
    Answer: Function declaration is hoisted but function expression is not hoisted.

    Example:

    function statement: Can be called before declaration; Can be hoisted

    abc();
    function abc(){
        console.log('Function Declaration');
    }


    function expression: Can't be called before declaration; Can't be hoisted

    xyz();
    let xyz = function(){
        console.log('Function Expression');
    }

*/

    abc();
    function abc(){
        console.log('Function Declaration');
    }; 

/* 
    Q2: 
    abc();
    function abc(){
        console.log('Function Declaration');
    }; 
    What will be the output?

    Answer: Function declaration

*/

/*
    Q3: Convert the following funtion into an arrow function.

    function multiply(a, b){
        return a * b;
    };  

    Answer:
    
    let multiply = (a, b) => {
        return a * b;
    }
    console.log(multiply(20 , 20));
*/

    let multiply = (a, b) => {
        return a * b;
    }
    console.log(multiply(20 , 20));
    
    

/* 
    Q4: Identify the Parameters and Agrument from the following code: 

    function welcome(name) {
        console.log(name); 
    }
    welcome("Bijoy")

    Answer: 
    
    function welcome(name) {  // "name" is the Parameter
        console.log(name); 
    }
    welcome("Bijoy")  // "Bijoy" is the Argument

*/


/*
    Q5: How many parameters does this function have and how many arguments are passed?

    function demo(a, b, c){
    
    }
    demo(1, 2);

    Answer: 3 Parameters and 2 Arguments
    1 Will be in a;
    2 will be in b;
    and there no argument for parameter c;
    so, c is undefined.
    
 */         




/*
    Q6: What will be the output of this code?

    function sayHi(name = "Guest"){
        console.log("Hi", name);
    }
    sayHi();

    Answer: Hi, Guest
*/


/* 
    Q7: What does the ... operator mean in parameters?

    Answer: 
    
    function abcd(a, b, c, ...val){
        console.log(a, b, c, val);   
    }
    abcd(1, 2, 3, 4, 5)

*/

/*
    Q8: Use rest parameters to accept any number of scores and return the total.

    Answer:  
    
    function getScore(...scores) {
        let total = 0;
    
        scores.forEach(function (val) {
            total = total + val;
        })
        return total;
    }
    
    console.log(getScore(10 ,12, 14, 18));

*/


/*
    Q9: Fix this function using early return.

    function checkAge(age) {
        if (age < 18) {
            console.log("Too Young");
        } else {
            console.log("Allowed");
        }
    }

    checkAge(prompt("What's your age?"));

    Answer:
    
    function checkAge(age) {
        if (age < 18) return "Too Young";
        return "Allowed";
    }
    
    console.log(checkAge(prompt("What's your age?")));

*/

/*
    Q10: What's the return value of this function?
    
    function f() {
        return;
    }

    Answer: 
    function f() {
        return;
    }
    
    console.log(f());

    undefined
*/


/*
    Q11: What does it mean when we say ‟functions are first-class citizens”?

    Answer: Functions are first-class citizens means that functions can be treated like any other value in JavaScript.

*/

/*
    Q12: can you assign a function to a variable and then call it?
    show how.

    Answer: 
    
    let a = function() {
        
    }
    a();

*/

/*
    Q13: Pass a funnction into another function and execute it inside
    
    Answer:

    function abcd(val) {
        val();
    }
    
    abcd(function(){
        console.log("Hi");
    });

*/

/*
    Q14: What is the higher order function?

    Answer: A higher-order function is a function that accepts a function as an argument or returns a function as a result.

    Example1: 
    
    function abcd() {
        return function(){
    
        }
    }

    Example2: 

    function abcd(val) {
        val();           //This is a higher order function
    }
    
    abcd(function(){
        console.log("Hi");
    });

*/



/*
    Q15: Identify which one is the higher order function.

    [1, 2, 3].map(function (x) {
        return x * 2;
    });


    Answer: Here ‟Map” is our higher order function
*/

/*
    Q16: Identify Pure vs Impure function
    
    let total = 0;
    function addToTotal(num) {
        total += num;
    }
    
    addToTotal(25)
    console.log(total);
    
    // Explanation: This is an impure function because it modifies the outside state (the 'total' variable). Impure functions have side effects and can modify the outside world or external state.

*/


/*
    Q17: Convert the below function into pure function.

    let total = 0;
    function addToTotal(num) {
        total += num;
    }
    
    Answer: 
    
        let total = 0;
        function addToTotal(num) {
            let newTotal = total;
            newTotal += num;
        }       

*/

/*
    Q18: What is the closure?  When is it used?

    Answer: A closure is a function having access to the parent scope, even after the function is closed.

    Example: 

    function abcd(){
        let val = 0;
        return function(){
            console.log(val);
        };
    }

*/

/*
    Q19: What will be the output?
    
    function outer() {
        let count = 0;
        return function () {
            count++;
            console.log(count);
        };
    }
    
    const counter = outer();
    counter();
    counter();

    Answer: 
    1
    2
*/

/*
    Q20: Convert this normal function into IIFE.

    function init() {
    console.log("Initialized");
    }

    Answer:

    (function init() {
        console.log("Initialized");
    })();

*/

/*
    Q21: what is the IIFE? Name one real-world use case.

    let sher = (function () {
        let score = 0;
        return {
            getScore: function (){
                console.log(score);
            },
            setScore: function (Val) {
                score = Val;
            }
        }
    })();

*/


/* 
    Q22: what will be the output here and why?
    
    greet();
    
    var greet = function (){
        console.log("Hi");
    };

    Answer: undefined (because the function greet is not yet defined when it is called)

*/


/* 
    Q22: what will be the output here and why?
    
    greet();
    
    function greet (){
        console.log("Hi");
    };

    Answer: Hi (because function declarations are hoisted, the function greet is moved to the top of its scope, so it can be called before it is defined)

*/


