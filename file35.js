// sort method

const arr = [44,11,4,5,19,222];

arr.sort();

console.log(arr); // output [11, 19, 222, 4, 44, 5]

arr.sort((a,b)=>a-b);
console.log(arr);  // output [4, 5, 11, 19, 44, 222]

const users = ["rahul", "harshit", "raj", "shivam"];
users.sort();
console.log(users);

const products = [
    {productId: 1, productName: "p1", price : 400},
    {productId: 2, productName: "p2", price : 100},
    {productId: 3, productName: "p3", price : 300},
    {productId: 4, productName: "p4", price : 900},
    {productId: 5, productName: "p5", price : 700},
]


const lowToHigh = products.slice(0).sort((a,b)=>a.price-b.price);
const highToLow = products.slice(0).sort((a,b)=>b.price-a.price);

console.log(products);
console.log(lowToHigh);
console.log(highToLow);