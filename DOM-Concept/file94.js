// little practice with click event

const allButtons = document.querySelectorAll(".my-buttons button");

allButtons.forEach( (button) =>{
    button.addEventListener("click", (e)=>{
        // console.log(e.target);
        e.currentTarget.style.color = "#333";
        e.currentTarget.style.backgroundColor = "yellow";
    })
})

console.log("dfs");