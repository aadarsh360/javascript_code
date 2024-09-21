// objects
// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects don't have index

// how to create object

// const person = {name:"aadarsh", age:22};

// console.log(person);

// // how to access data from objects
// console.log(person.name);
// console.log(person.age);

const person = {
    name: "aadarsh", // key is by default string
    age: 22,
    hobbies: ["guitar", "sleeping", "listening music"]
}

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.hobbies);

// how to add key value pair to objects
person.gender = "male";
console.log(person);
console.log(person["name"]);

person["address"] = "Kanpur";
console.log(person);