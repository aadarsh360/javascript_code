console.log("hello world");

// Event Bubbling

const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// // event bubbling (not capture)
// child.addEventListener("click", ()=>{
//     console.log("bubble child");
// })

// parent.addEventListener("click", ()=>{
//     console.log("bubble parent");
// })

// grandparent.addEventListener("click", ()=>{
//     console.log("bubble grandparent");
// })

// document.body.addEventListener("click", ()=>{
//     console.log("bubble body");
// })


// // event capturing
// child.addEventListener("click", ()=>{
//     console.log("capture on child");
// }, true);

// parent.addEventListener("click", ()=>{
//     console.log("capture on parent");
// }, true);

// grandparent.addEventListener("click", ()=>{
//     console.log("capture on grandparent");
// }, true);

// document.body.addEventListener("click", ()=>{
//     console.log("capture on body");
// }, true);


// grandparent.addEventListener("click", ()=>{
//     console.log("You clicked something!!!");
// });

grandparent.addEventListener("click", (e)=>{
    console.log(e.target);
})
