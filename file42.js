// create your own methods
// function inside objects

// const person = {
//     firstName : "aadarsh",
//     age :19,

//     about : function(){
//         console.log(`person name is ${this.firstName} and age is ${this.age}`);
//     }
// };

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}
const person1 = {
    firstName : "aadarsh",
    age :19,
    about : personInfo
};

const person2 = {
    firstName : "rahul",
    age :21,
    about : personInfo
};

const person3 = {
    firstName : "ritik gupta",
    age :23,
    about : personInfo
};

console.log(person1.about);
person1.about();
person2.about();
person3.about();

