// what is hoisting

console.log(this);
console.log(window);
console.log(myFunction);
console.log(fullName);

myFunction();
function myFunction(){
    console.log("this is my function");
}

var firstName = "Aadarsh";
var lastName = "Pandey";
var fullName = firstName+" "+lastName;

console.log(fullName);