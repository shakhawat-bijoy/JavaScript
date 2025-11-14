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



*/