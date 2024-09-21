// Promissse.resolve
// Promise chaining


// const myPromise = Promise.resolve(5);
// myPromise.then((value)=>{
//     console.log(value);
// })

// then method() humesha promise return krta hai

function myPromise(){

    return new Promise( (resolve, reject)=>{
        resolve("foo");
    })
}

myPromise()
.then( value=>{
    console.log(value);
    value += "bar";
    return value;
})
.then((value) =>{
    console.log(value);
    value += "baaz";
    return value;
})
.then((value) =>{
    console.log(value);
})