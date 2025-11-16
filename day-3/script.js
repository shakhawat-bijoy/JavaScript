/*



// 1. Print 1 to 10 using for loop.

for(let i = 1; i <= 10; i++){
    console.log(i);
}

// 2. Print numbers from 10 to 1 using while loop.

for(let i = 10; i > 0; i--){
    console.log(i);

}

let i = 10;
while(i > 0){
    console.log(i);
    i--;
}

// 3. Print even numbers from 1 to 20 using a for loop.

for(let i = 1; i <= 20; i++){
    if( i%2 === 0 )
        console.log(i);
}

// 4. Print odd number from 1 to 15 using a while loop.

let i = 1;
while( i <= 15){
    if( i%2 === 1){
        console.log(i);
    }
    i++;
}

// 5. Print the multiplication table of 5 (i.e., 5x1 = 5 ..... 5x10 = 50)

for(let i = 1; i <= 10; i++){
    console.log(`5 * ${i} = ${i * 5}`);

}

// 6. Find the sum of numbers from 1 to 100 using a loop.

let sum = 0;
for(let i = 1; i <= 100; i++){
    sum = sum + i;
}
console.log(sum);

let sum = 0;
for(let i = 1; i <= 500; i++){
    sum = sum + i;
}
console.log(sum);

// 7. Print all number between 1 to 50 that are divisible by 3.

for(let i = 1; i <= 50; i++){
    if(i%3 === 0){
        console.log(i);
    }
}

// 8. Ask the user for a number and print weather each number 1 to that number is even or odd.

// (e.g., "1 is odd", "2 is even", .....)

let val = prompt("Give a number");

for (let i = 1; i <= val; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}


// 9. Count how many number between 1 to 100 are divisible by both 3 and 5.

for(let i = 1; i <= 100; i++){
    if(i%3 ===0 && i%5 ===0){
        console.log(i);
    }
}

let count = 0;
for(let i = 1; i <= 100; i++){
    if(i%3 === 0 && i%5 ===0){
        count++
    }
}
console.log(count);




// Q1. Stop at first Multiple of 7.

// Write a loop from 1 to 100 that:
// •    Prints each number
// •    Stop completely when it finds the first number divisible by 7.


for(let i = 1; i <= 100; i++){
    if(i%7 === 0){
        break;
    }
    console.log(i);
}


// Q2. Skip Multiples of 3

// Write a loop from 1 to 20 that:
// •    Skips numbers divisible by 3
// •    Print all others 
// 💡Use continue

// Expected output:
// 1 2 4 5 6 7 8 9 ... (no 3, 6, 9, etc.)

for(let i = 1; i <= 20; i++){
    if(i%3 === 0){
        continue;
    }
    console.log(i);
    
}


// Q3. Print First 5 Odd numbers only 

// Write a loop from 1 to 100 that:
// •    Prints only 5 odd numbers
// •    Then stops the loop

// 💡Use both if, continue, and a counter + break

// Expected output:
// 1 3 5 7 9


let count = 0;
for(let i = 1; i <= 100; i++){
    if(i%2 === 1){
        count++
        console.log(i); 
    }
    
    if(count === 5){
        break;
    }
}


// Q4. Print First 5 Even numbers only 

// Write a loop from 1 to 100 that:
// •    Prints only 20 Even numbers
// •    Then stops the loop

// 💡Use both if, continue, and a counter + break

// Expected output:
// 2 4 6 8 10

let count = 0;
for(let i = 1; i <= 100; i++){
    if(i%2 === 0){
        console.log(i)
        count++
    }
    
    if(count === 20) break;
}
console.log(count);




//ChatGpt Questions and Answers
// 1. Print numbers 1 to 10
//      Write a loop that prints the numbers from 1 to 10.

for(let i = 1; i <= 10; i++){
    console.log(i);
    
}

// 2. Print even numbers from 2 to 20
//      Use a loop to print even numbers between 2 and 20.

for(let i = 1; i <= 20; i++){
    if(i%2 === 0){
        console.log(i);
        
    }
}


// Additional Question: Print Odd and even number between 1 to 50.

for(let i = 1; i <= 50; i++){
    if(i%2 === 0){
        console.log(`${i} is Even number`);   
    }else console.log(`${i} is odd number`);
}


// 3. Sum of numbers 1 to 100  
//      Use a loop to calculate and print the sum of numbers from 1 to 100.

let sum = 0;
for(let i = 1; i <= 100; i++){
    sum = sum + i;
}
console.log(sum);

//4. Print each character in a string

// Given:
//       let word = "JavaScript"; 
// Use a loop to print each character on a new line.
// Count how many letters are there.

let word = "JavaScript"; 
for( let i = 0; i <= word.length; i++){
    console.log(word[i]);
}

let name = "Shakhawat Hossain Bijoy"
for(let i = 0; i <= name.length; i++){
    console.log(name[i]);
}

let count = 0;
let text = 'Hey It is Moon'
for(let i = 0; i <= text.length; i++){
    console.log(text[i]);
    count++
}
console.log(count);


// 5. Count how many times a letter appears

//Given:
//      let message = "hello world";
// Count how many times the letter "l" appears using a loop.

let count = 0;
let message = "hello world";
for(let i = 0; i <= message.length; i++){
    console.log(message);
    if(message[i] === 'l'){
        count++
    }
}
console.log(count);


let counter = 0;
let name = "Shakhawat Hossain Bijoy";

for(let i = 0; i <= name.length; i++){
    if(name[i] === 'a')
    counter++
}

console.log(counter);


// Q6. Count how many times a letter appears.

//Given:  
//      let message = "hello world";

// Count how many times the letter "l" appears using a loop.
// Print only 'l'

let count = 0;
let message = "hello world";
for(let i = 0; i <= message.length; i++){
    if(message[i] === 'l')
    console.log(message[i]);
    count++
    
}
console.log(count);


// 7. Print numbers backwards.

// Print numbers from 10 down to 1 using a loop.

for(let i = 10; i > 0; i--){
    console.log(i); 
}

for(let i = 20; i > 0; i--){
    console.log(i);
}



// 8. Multiplication table

// Ask the user for a number (you can assume it's stored in a variable) and print its multiplication table from 1 to 10.

// Print only 10 times

let value = prompt("Enter a Number:")
for(let i = 1; i <= value; i++){
    console.log(`${value} x ${i} = ${value * i}`);
}


let value = prompt("Give a Value");
for(let i = 1; i <= value; i++){
    console.log(`${value} x ${i} = ${value * i}`);
    if(i === 10) break;
}


// 9. Find the largest number in an array
//Given:
//      let nums = [3, 7, 2, 9, 4];

// Use a loop to find the largest number.

let nums = [3, 7, 2, 9, 4];
let largest = nums[0];

for(let i = 1; i < nums.length; i++){
    
if(nums[i] > largest)
largest = nums[i];

}
console.log(largest);


// 9. Reverse a string manually (using a loop)

// Without using built-in functions, reverse the string: "hello"

let str = "hello";
let reversed = '';

for(let i = str.length - 1; i >= 0; i--){
    reversed += str[i];
}

console.log(reversed);


// 10. FizzBuzz (classic beginner loop challenge)

// Loop from 1 to 20:
// Print "Fizz" if the number is divisible by 3
// Print "Buzz" if it’s divisible by 5
// Print "FizzBuzz" if divisible by both
// Otherwise print the number


for(let i = 1; i <= 20; i++){
    
if(i%3 ===0 && i%5 === 0){
    console.log('FizzBuzz');
}else if(i%5 === 0){
    console.log('Buzz');
}else if(i%3 ===0){
    console.log('Fizz');
}else
    console.log(i);

}

*/
