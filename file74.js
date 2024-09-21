// callbacks, callback hell, pyramid of doom
// asynchronous programming

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");


// setTimeout(()=>{
//     heading1.textContent = "Heading 1";
//     heading1.style.color = "violet";
// }, 1000);

// setTimeout(()=>{
//     heading2.textContent = "Heading 2";
//     heading2.style.color = "purple";
// }, 2000);]


// best method

// setTimeout(()=>{
//     heading1.textContent = "Heading 1";
//     heading1.style.color = "violet";

//     setTimeout(()=>{
//         heading2.textContent = "Heading 2";
//         heading2.style.color = "red";
//     }, 1000);
// }, 1000);


// callback hell

/*
setTimeout(()=>{
    heading1.textContent = "one";
    heading1.style.color = "violet";

    setTimeout(()=>{
        heading2.textContent = "two";
        heading2.style.color = "red";

        setTimeout(()=>{
            heading3.textContent = "three";
            heading3.style.color = "yellow";

            setTimeout(()=>{
                heading4.textContent = "four";
                heading4.style.color = "green";

                setTimeout(()=>{
                    heading5.textContent = "five";
                    heading5.style.color = "blue";

                    setTimeout(()=>{
                        heading6.textContent = "six";
                        heading6.style.color = "purple";

                        setTimeout(()=>{
                            heading7.textContent = "seven";
                            heading7.style.color = "orange";
                            
                        },1000);
                        
                    },1000);
                    
                },1000);
                
            },1000);
            
        },1000);
        
    },1000);

},1000);

*/



function changeText(element, text, color, time, onSuccessCallback, onFailureCallback){

    setTimeout(()=>{
        if(element){
            element.textContent = text;
            element.style.color = color;

            if(onSuccessCallback){
                onSuccessCallback();
            }

        }
        else{
            if(onFailureCallback){
                onFailureCallback();
            }
        }
    },time);

}


// pyramid of doom

changeText(heading1, "one", "violet", 1000, ()=>{
    changeText(heading2, "two", "red", 1000, ()=>{
        changeText(heading3, "three", "green", 1000, ()=>{
            changeText(heading4, "four", "yellow", 1000, ()=>{
                changeText(heading5, "five", "pink", 1000, ()=>{
                    changeText(heading6, "six", "brown", 1000, ()=>{
                        changeText(heading7, "seven", "orange", 1000, ()=>{

                        }, ()=>{console.log("heading7 does not exist")});
                    }, ()=>{console.log("heading6 does not exist")});
                }, ()=>{console.log("heading5 does not exist")});
            }, ()=>{console.log("heading4 does not exist")});
        }, ()=>{console.log("heading3 does not exist")});
    }, ()=>{console.log("heading2 does not exist")});
}, ()=>{console.log("heading1 does not exist")});