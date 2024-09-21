// for of loop in array

const fruits = ["apple", "banana", "mango", "lichi"];

for(let fruit of fruits){
    console.log(fruit);
}

// for in loop in array

for(let i in fruits){
    console.log(fruits[i].toUpperCase());
}


// array destructuring

const myArray = ["value1", "value2","value3", "value4"];

let [myval1, myval2] = myArray;
console.log(myval1);
console.log(myval2);

let[v1,,v2] = myArray;
console.log(v1);
console.log(v2);



let[a,b, ...arr] = myArray;
console.log(a);
console.log(b);
console.log(arr);