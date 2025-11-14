// loops
// for loop
// while loop
// do while loop

/*

pattern of for loop

for(start; end; change)


pattern of while loop

start
while(end){
    code
    change
}


pattern of sum of numbers 

let sum = 0;
for(let i = 1; i <= 100; i++){
    sum = sum + something
}


*/



// for loop

for(let i = 1; i < 10; i++){
    console.log();
}





// While loop

let i = 1;
while(i<32){
    //code
    console.log();
    i++
}




// do while

let j = 1;
do{
    console.log(j);
    j++
}
while(j<20)



//breaks in loops
for (let i = 1; i < 201; i++) {
  console.log(i);
  if (i === 32) break;
}

//continue in loops
for(let i = 1; i < 201; i++){
    if(i === 32){
    continue;
    }
    console.log(i);
}

