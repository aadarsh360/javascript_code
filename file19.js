// different between dot and bracket notation

const key = "email";
const person={
    name: "aadarsh",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening"]
}

console.log(person["person hobbies"]);
person[key] = "aadarshpadney@gmail.com";
console.log(person);

// how to iterate object

for(let key in person){
    console.log(key);
}
for(let key in person){
    console.log(`${key} : ${person[key]}`);
}

console.log(Object.keys(person));
const val = Array.isArray(Object.keys(person));
console.log(val);

for(let key of Object.keys(person)){
    console.log(person[key]);
}