// String 

// String indexing

let firstName = "aadarsh";

// a a d a r s h
// 0 1 2 3 4 5 6

console.log(firstName);

console.log(firstName[3]);
console.log(firstName[2]);
console.log(firstName[5]);

console.log("length is- "+firstName.length);

console.log(firstName[firstName.length-1]);

// stirng method

let name = "  rahul  ";
console.log(name);
// trim() method
console.log(name.trim())

// toUpperCase() method
let name1 = "Rajdeep";
name1 = name1.toUpperCase();
console.log(name1);

// toLowerCase() method
name1 = name1.toLowerCase();
console.log(name1);

// slice() method
// start index -> include
// end index  -> exclude

let newStr = "thequickbrownfox";
console.log(newStr);

let newStr2 = newStr.slice(1,5);
console.log(newStr2);