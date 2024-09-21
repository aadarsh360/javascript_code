// this keyword

const btn = document.querySelector(".btn-headline");

// btn.addEventListener("click", function(){
//     console.log("you clicked me !!!");
//     console.log("value of this");
//     console.log(this);  // this button ko hi point karega
// })

btn.addEventListener("click", ()=>{
    console.log("you clicked me !!!");
    console.log("value of this");
    console.log(this);   // arrow function ke case me this window ko point karega
});
