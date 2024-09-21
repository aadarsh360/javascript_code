// Arrays
// array is ordered collection of items
// array is reference type

let fruits = ["apple", "mango", "grapes"];

console.log(fruits);
console.log(fruits[0]);

fruits[1] = "banana";
console.log(fruits);

let numbers = [2,4,5,6,7,8];
console.log(numbers[4]);

console.log(Array.isArray(fruits)); // trre
let obj = {};
console.log(Array.isArray(obj));// false