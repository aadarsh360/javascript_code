// appendChild
// insertBefore
// replaceChild
// removeChild

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "new todo";
// ul.appendChild(li);

const referenceNode = document.querySelector(".first-todo");
// ul.insertBefore(li, referenceNode);

// ul.replaceChild(li, referenceNode);

// ul.remove(referenceNode);