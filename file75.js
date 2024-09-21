// Promise
// future


const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];

const friedRicePromise = new Promise((resolve, reject) => {

    if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
        resolve({value: "friedrice"});
    }
    else{
        // reject(new Error("something missing from bucket"));
        reject("could not do it");
    }
})

// produce


// consume
// how to consume

// friedRicePromise.then(
//     // jab promise resolve hoga
//     (myfriedRice)=>{
//     console.log("lets eat", myfriedRice);
// }, 
// // jab promise reject hoga
// (error)=>{console.log(error)}
// )

// then and catch

friedRicePromise.then((myfriedRice)=>{
    console.log("lets eat", myfriedRice);
})
.catch((error)=>{
    console.log(error);
})

