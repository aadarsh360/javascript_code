// how to access dom tree

const rootNode = document.getRootNode();
// console.log(rootNode);

const htmlElementNode = rootNode.childNodes[0];
console.log(htmlElementNode);
// console.log(htmlElementNode.childNodes); // NodeList(3) [head, text, body]

const headElementNode = htmlElementNode.childNodes[0];
const textNode = htmlElementNode.childNodes[1];
const bodyElementNode = htmlElementNode.childNodes[2];

// console.log(headElementNode);
// console.log(textNode);
// console.log(bodyElementNode);

console.log(headElementNode.parentElement);

// sibling relation
console.log(headElementNode.nextSibling);
console.log(headElementNode.nextElementSibling);

console.log(headElementNode.childNodes);//NodeList(5) [text, title, text, script, text]


// const h1 = document.querySelector("h1");
// console.log(h1);
// const div = h1.parentNode;
// div.style.color = "#efefef";
// div.style.backgroundColor = "#333";


// const body = document.body;
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333";


const head = document.querySelector("head");
// console.log(head);
const title = head.querySelector("title");
console.log(title);
console.log(title.childNodes);

const container = document.querySelector(".container");
console.log(container.childNodes); // NodeList(5) [text, h1, text, p, text]
console.log(container.children); // HTMLCollection(2) [h1, p]