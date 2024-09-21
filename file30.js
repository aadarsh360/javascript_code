// rest parameter

function fun(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}
fun(5,3,6);

function myFun(a, b, ...c){
    console.log(a);
    console.log(b);
    console.log(c);
}
myFun(4,6,8,5,6,77,4,33,32);


// add all element
function addAll(...arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

let sum = addAll(5,6,4,8,4,3);
console.log(sum);