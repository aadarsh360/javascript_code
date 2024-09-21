// filter method

//filter method return true or false
// filter method as a input callback function

const arr = [4,5,6,7,7,2,3];

// const isEven = function(n){
//     return n%2 === 0;
// }

// const evenNumbers = arr.filter(isEven);
// console.log(evenNumbers);

const evenNumbers = arr.filter(n =>{
    return n%2 === 0;
})
console.log(evenNumbers);


// reduce method

const arr2 = [3,4,5,7,8,2];

const sum = arr2.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
},0);
console.log(sum);

const userCart = [
    {productId:1, productName:"mobile", price:13000},
    {productId:2, productName:"laptop", price:32000},
    {productId:3, productName:"tv", price:15000}
];

const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
    return totalPrice + currentProduct.price;
}, 0);

console.log(totalAmount);
