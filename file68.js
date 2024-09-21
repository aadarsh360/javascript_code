// closures example

// find sqaure programe
function myFunction(n){
    return function(m){
        console.log(n**m);
    }
}

const square = myFunction(6)
square(2);


// find cube programe

function myFun(power){
    return function(number){
        return number**power;
    }
}

const cube = myFun(3);
const ans = cube(4);
console.log(ans);


