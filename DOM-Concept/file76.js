// get and set attributes

const link = document.querySelector("a");
// console.log(link);
console.log(link.getAttribute("href"));
console.log(link.getAttribute("href").slice(1));

// link.setAttribute("href", "https://facebook.com");
// console.log(link.getAttribute("href"));

const inputElement = document.querySelector(".form-todo input");
console.log(inputElement.getAttribute("type"));