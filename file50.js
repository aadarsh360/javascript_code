// what is prototype

function hello(){
    console.log("hello world");
}
// javascript function === function + object
console.log(hello());
console.log(hello.name); // hello

// you can add your own properties
hello.myOwnProperty = "very unique value";
console.log(hello.myOwnProperty);

// name property --> tells function name;
// function provides more usefull properties

// function provides a free space

// console.log(hello.prototype); // {}

// only functions provides prototype property

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return "lalalaala";
};
console.log(hello.prototype);
console.log(hello.prototype.sing());