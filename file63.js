// what happens function expression

// in var case value set undefined before excute

console.log(myFunction);

var myFunction = function(){
    console.log("this is my function");
}

console.log(myFunction);