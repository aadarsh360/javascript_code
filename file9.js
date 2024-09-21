// Conditional statement

// if else statement

let n = 13;

if(n%2 === 0){
    console.log(n+" is even");
}
else{
    console.log(n+" is odd");
}


// ternary operator
// (condition) ? value1:value2;
let age=18;

let drink = age >= 5 ? "coffee" :"milk";

console.log(drink);


// nested if else

let a = 100;
let b = 20;
let c = 30;

if(a > b){
    if(a > c){
        console.log(a+" is greater");
    }
    else{
        console.log(b+" is greater");
    }
}
else{
    if(b > c){
        console.log(b+" is greater");
    }
    else{
        console.log(c+" is greater");
    }
}

let tempInDegree = 25;

if(tempInDegree > 40){
    console.log("too hot");
}
else if(tempInDegree > 30){
    console.log("lets go for swim");
}
else if(tempInDegree > 20){
    console.log("weather is cool");
}
else if(tempInDegree > 10){
    console.log("It is very cold outside");
}
else{
    console.log("extremely cold");
}

console.log("hello");