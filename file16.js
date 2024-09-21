// how to clone array

let arr1 = ["item1", "item2"];
let arr2 = arr1;

console.log(arr1 === arr2);

// type 1
let arr3 = arr1.slice(0);
console.log(arr3);
console.log(arr1 === arr3);

// type 2
let arr4 = [].concat(arr1);
console.log(arr4);
let arr7  = [].concat(arr1, "item4", "item6");
console.log(arr7);


// type 3
// spread operator 
let arr5 = [...arr1];
console.log("arr5 is ", arr5);

let arr6 = [...arr1].concat(["item5", "item6"]);
console.log(arr6);
let arr8 = [...arr1,"item8", "item9", "item10"];
console.log(arr8);



// for loop in array
let fruits = ["apple", "mango", "grapes", "banana"];
const fruits2 =[];
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
    fruits2.push(fruits[i].toUpperCase());
}

console.log(fruits2);

// use const for creating array

const arr = [5,6,7,4,3,7];
console.log(arr);
console.log("sdfasdf");



