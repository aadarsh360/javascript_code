
const mainButton = document.querySelector("button");
const body = document.body;
const currentColor = document.querySelector(".current-color");

function randomColorGenerator(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let randomColor = `rgb(${r}, ${g}, ${b})`;
    return randomColor;
}
mainButton.addEventListener("click", ()=>{

    const randomColor = randomColorGenerator();
    body.style.backgroundColor = randomColor;
    currentColor.textContent = randomColor;
})