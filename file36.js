// find method

const myarr = ["Hello", "cat", "dog", "lion"];

const ans = myarr.find((str)=>str.length === 3);
console.log(ans);


const users = [
    {userId:1, userName:"aadarsh"},
    {userId:2, userName:"vaishnavi"},
    {userId:3, userName:"raj"},
    {userId:4, userName:"laxmi"},
];

const user = users.find((user)=>user.userId === 2);
console.log(user);


// every() method

const arr = [2,4,6,8,10];

//every() method return true or false

let flag = arr.every(n=>n%2===0);
console.log(flag);

const products = [
    {productId: 1, productName: "p1", price : 400},
    {productId: 2, productName: "p2", price : 100},
    {productId: 3, productName: "p3", price : 3000},
    {productId: 4, productName: "p4", price : 900},
    {productId: 5, productName: "p5", price : 700},
]

let result = products.every( product => product.price < 3000);
console.log(result);