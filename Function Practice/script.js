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