// function inside function

// const app = () =>{

//     const myFunc = ()=>{
//         console.log("hello from myFunc");
//     }

//     const addTwo = (num1, num2) =>{
//         return num1+num2;
//     }

//     const mul = (num1, num2)=>num1*num2;

//     console.log("inside app");
//     myFunc();
//     console.log(addTwo(4,6));
//     console.log(mul(3,5));
// }

// app();

//================================================
// lexical scope

function myApp(){

    const myVar = "value1";

    function myFunc(){

        const myVar = "value59";
        console.log("inside myFunc", myVar);

        const myFunc2=()=>{
            const myVar = "value69";
            console.log("inside myFunc2", myVar);
        }

        myFunc2();
    }

    console.log(myVar);
    myFunc();
}

myApp();