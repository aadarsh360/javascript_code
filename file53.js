// new keyword

// this is also called as constructor function
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

console.log(user1);
const about = user2.about();
console.log(about);
const is18 = user2.is18();
console.log(is18);
console.log(user2.sing());