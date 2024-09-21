// some() method

const arr = [3,5,8,9];
// kya ek bhi number aisa hai jo even hai
let ans = arr.some(n => n%2 === 0);
console.log(ans);


const products = [
    {productId: 1, productName: "p1", price : 400},
    {productId: 2, productName: "p2", price : 100},
    {productId: 3, productName: "p3", price : 300},
    {productId: 4, productName: "p4", price : 10000},
    {productId: 5, productName: "p5", price : 700},
];

let result = products.some(product => product.price > 50000);
console.log(result);


// fill() method
// value, start, end
const myarr = new Array(10).fill(-1);
console.log(myarr);


const arr2 = [4,5,3,6,7,8,2,3,4,5,6];
arr2.fill(0,3,6);
console.log(arr2);


// splice method
// start, delete, insert

const myArray = ["item1", "item2", "item3","item4"];
const deleteItem = myArray.splice(1,1);
console.log(myArray);
console.log(deleteItem);
myArray.splice(1, 0, "inserted item");
console.log(myArray);


const arr3 = [10, 20, 30, 40, 50, 60,70];

const delItem = arr3.splice(1,2,90,100,110);
console.log(delItem);
console.log(arr3);
