// function in js

function singHappyBirthday(){
    console.log("happy birthday to you ... ");
}


function sum(x,y){
    return x+y;
}

let s = sum(4,5);
console.log(s);

console.log(undefined+undefined);

function sum3(x, y, z){
    return x+y+z;
}
console.log(sum3(5,6,8));

// check odd even function
function isEven(n){
    // if(n%2 === 0){
    //     return true;
    // }
    // else{
    //     return false;
    // }

    return n % 2 === 0 ? "even" : "odd";
}

console.log(isEven(5));
console.log(isEven(8));

function firstChar(str){
    return str[0];
}
console.log(firstChar("tyeiwow"));


// linear search

function linearSearch(arr, target){

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target)return i;
    }
    return -1;
}

const arr = [6,7,4,9,2];
let target = 6;
console.log(linearSearch(arr, target));