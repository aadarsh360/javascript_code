// important array methods
// forEach
// map
// filter
// reduce


const arr = [5,6,7,4,3];

function multiplyBy2(num, index){
    console.log("index is",index);
    console.log(`${num}*2 = ${num*2}`);
}

// for(let i = 0; i < arr.length; i++){
//     multiplyBy2(arr[i], i);
// }

// forEach method as a input callback
/*
arr.forEach(multiplyBy2);

const arr2 = [6,7,3,7,8];
arr2.forEach((n)=>{
    console.log(`${n}*2 = ${n*2}`);
});

const users = [
    {firstName : "aadarsh", age :23},
    {firstName : "vaishnavi", age :22},
    {firstName : "raj", age :24},
    {firstName : "ankit", age :18}
];

users.forEach((user)=>{
    console.log(user.firstName);
});

*/

// map method
const brr = [5,6,8,4,2,8];
const square = function(n){
    return n*n;
}
const brr2 = brr.map(square);// map method return new array
console.log(brr2);

const brr3 = brr.map(n=>n*n);
console.log(brr3);

const brr4 = brr.map(n =>{
    return `square of ${n} is ${n*n}`;
})
console.log(brr4);

const users = [
    {firstName : "aadarsh", age :23},
    {firstName : "vaishnavi", age :22},
    {firstName : "raj", age :24},
    {firstName : "ankit", age :18}
];

const usersName = users.map(user => user.firstName);
console.log(usersName);