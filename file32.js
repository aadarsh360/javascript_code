// callback function

// function myfun(){
//     console.log("hello world");
// }

// function myfun2(a){
//     a();
// }

// myfun2(myfun);


function fun(name){
    console.log("hello world");
    console.log(`Your name is ${name}`);
}

function fun2(callback){
    console.log("hello there I am a function fun2");
    callback("aadarsh");
}
fun2(fun);


// function returning function

// function myFunc(){
//     return "a";
// }
// const ans = myFunc();
// console.log(ans);



function myfun3(){

    function hello(){
        console.log("hello world");
    }
    return hello;
}


const ret = myfun3();
console.log(ret);
// ret();
console.log(ret());

function myfun4(){
    return myfun5 = () => "hello myfun5";
}
let a = myfun4();
console.log(a);
console.log(a());