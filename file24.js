// function expression

const isEven = function(n){
    return n % 2===0 ?"even":"odd";
}

console.log(isEven(34));


// linear search
const linearSearch = function(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([5,6,8,4],4));

// factorial programe

const fact = function(n){
    let fact = 1;
    for(let i = 1; i <= n; i++){
        fact *= i;
    }
    return fact;
}
console.log(fact(5));