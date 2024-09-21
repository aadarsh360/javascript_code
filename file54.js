// hasOwnProperty

function CreateUser(firstName, lastName, email,age, address){

    this.lastName = lastName;
    this.email = email;
    this.firstName = firstName;
    this.age = age;
    this.address = address;

}

CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} year old`;
}
CreateUser.prototype.is18 = function(){
    return this.age >= 18;
}
CreateUser.prototype.sing = function(){
    return "la la la la";
}

const user1 = new CreateUser("aadarsh", "pandey", "aadarsh@gmail.com", 19, "prayagraj");
const user2 = new CreateUser("ritik ", "gupta", "ritik@gmail.com", 13, "kanpur");

for(let key in user1){
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}

// more about proto

let numbers = [1,2,3,4];
console.log(numbers);


function hello(){
    console.log("hello");
}

console.log(hello.prototype);
hello.prototype = [];
console.log(hello.prototype);
hello.prototype.push("1");
console.log(hello.prototype);