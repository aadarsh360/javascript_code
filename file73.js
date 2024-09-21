// understand callback

// function myFunc(callback){
//     console.log("Function is doing some task");
//     callback();
// }

// myFunc(()=>{
//     console.log("function is doing task 2");
// })



function getTwoNumbersAndAdd(number1, number2, onSuccess, onFail){

    if(typeof number1 === "number" && typeof number2 === "number"){
        onSuccess(number1, number2);
    }
    else{
        onFail();
    }
}

function addTwoNumbers(num1, num2){
    console.log(num1+num2);
}

function onFail(){
    console.log("Wrong data type");
    console.log("please pass numbers only");
}

getTwoNumbersAndAdd(4,5, addTwoNumbers,onFail);