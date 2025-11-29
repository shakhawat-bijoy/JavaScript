// Pure Function vs Impure Function

// Pure Function: The function is completely independent of the outside world. It does not have any side effects.
// Impure Function: The function has side effects. It can modify the outside world.

// Pure Function:

let a = 12;

function pure() {
  console.log("Pure Function");
}
pure();

// Impure Function:

function impure() {
  a++;
  console.log(a);
}
impure();

// Clousers Scope:
// A closure is a function having access to the parent scope, even after the function is closed.

function clousers() {
  let c = 10;
  return function () {
    console.log(c);
  };
}
clousers();

// Lexical Scope:
// The scope of a variable is determined by where it is defined.

function lexical() {
  let x = 15;
  function defg() {
    let y = 12;
    function ghij() {
      let z = 11;
    }
  }
}

// IIFE (Immediately Invoked Function Expressions)

(function () {
  console.log("IIFE (Immediately Invoked Function Expressions)");
})();


// Hoistig difference between declaration expressions


Hoistig();

// funtion statement
function Hoistig() {
  console.log('Hoistig difference between declaration expressions');
}



// Expression

/*  Expression();       */

// Funtion Expression; Where we can not initialize the funtion before it's creation.
let Expression = function () {
  console.log('Hoistig difference between declaration expressions');
}


