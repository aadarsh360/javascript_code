// typeof operator

let age = 22;
let firstName = "aadarsh";
let val = null;
console.log(typeof age);
console.log(typeof firstName);
console.log(typeof val);

// convert number to string

let num = 56;
let str = num+"";
console.log(str);
console.log(typeof num);
console.log(typeof str);

let a = 23;
console.log(String(a));

// convert string to number

let numstr = "50";
let n = +numstr;
console.log(n);
console.log(typeof n);


// String concatenation

let string1 = "aadarsh";
let string2 = "pandey";

let fullName = string1+" "+string2;
console.log(fullName);

let str1 = "24";
let str2 = "17";

let addNum = +str1 + +str2;
console.log(addNum);


// template string

let age2 = 23;
let name2 = "aadarsh";
let aboutMe = `My name is ${name2} and my age is ${age2}`;
console.log(aboutMe);
