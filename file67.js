// closures

// function can return functions


// function outerFunction(){

//     function innerFunction(){
//         console.log("hello world");
//     }
//     return innerFunction;
// }

// const ans = outerFunction();
// ans();


function printFullName(firstName, lastName){

    function printName(){
        console.log(firstName, lastName);
    }
    return printName;
}

const ans = printFullName("aadarsh", "pandey");
ans();

// printName function jha present tha usek local variable ko sath lekar return hoga



function hello(x){
    const a = "varA";
    const b = "varB";
    return function(){
        console.log(a, b, x);
    }
}

const retval = hello("args");
retval();