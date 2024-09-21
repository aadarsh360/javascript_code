// classList, add and remove toggle classes

const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo);
console.log(sectionTodo.classList); // DOMTokenList(2) ['section-todo', 'container', value: 'section-todo container']

// sectionTodo.classList.add("bg-dark");
// sectionTodo.classList.remove("container");

const ans = sectionTodo.classList.contains("container");
console.log(ans);

// sectionTodo.classList.toggle("bg-dark");

const header = document.querySelector(".header");
// console.log(header.classList);
// header.classList.add("bg-dark");
// console.log(header.classList);