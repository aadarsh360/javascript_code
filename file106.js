// promise pratice

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");


function changeText(element, text, color, time, onSuccessCallback, onFailureCallback){

    return new Promise((resolve, reject) => {

        setTimeout(()=>{
            if(element){
                element.textContent = text;
                element.style.color = color;
                
                resolve();
            }
            else{
               reject();
            }
        },time);
    })

}

changeText(heading1, "one", "red", 1000)
.then(()=>{
    return changeText(heading2, "two", "green", 1000)
})
.then(()=>{
    return changeText(heading3, "three", "pink", 1000)
})
.then(()=>{
    return changeText(heading4, "four", "yellow", 1000)
})
.then(()=>{
    return changeText(heading5, "five", "brown", 1000)
})
.then(()=>{
    return changeText(heading6, "six", "purple", 1000)
})
.then(()=>{
    return changeText(heading7, "seven", "orange", 1000)
})
.catch((error)=>{
    alert(error);
})