// map data structure
// map is an iterable

// store data in ordered fashion

// store key value pair(like object)
// duplicate keys are not allowed like objects

// objects can only have string or symbol as key

// in maps you can use anything as key like array, number, string


// const person = new Map();

// person.set("firstName", "aadarsh");
// person.set("age", 17);
// person.set(1, "one");
// console.log(person);

// // console.log(person.get("firstName"));
// // console.log(person.keys());

// for(let key of person.keys()){
//     console.log(key, typeof key);
// }

// for(let [key, value] of person){
//     console.log(key, value);
// }

// const person1 = new Map([["firstName", "aadarsh"], ["age", 23]]);
// console.log(person1);

const person2 = {
    id:1,
    firstName: "harshit"
};

const person3 = {
    id:2,
    firstName:"rahul"
};

const extraInfo = new Map();
extraInfo.set(person2, {age:12, gender:"male"});
extraInfo.set(person3, {age:24, gender:"male"})

console.log(extraInfo);
console.log(person2.id);
console.log(extraInfo.get(person2));
console.log(extraInfo.get(person2).age);
console.log(extraInfo.get(person3));
