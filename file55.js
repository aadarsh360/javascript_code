// class keyword
// class are fake

class CreateUser{

    constructor(firstName, lastName, email, age, address){

        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    about(){
        return `${this.firstName} is ${this.age} year`;
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return "la la la laa ";
    }
}

const user1 = new CreateUser("aadarsh", "pandey", "aadarsh@gmail.com", 19, "prayagraj");
const user2 = new CreateUser("ritik ", "gupta", "ritik@gmail.com", 13, "kanpur");

console.log(user1.about());
console.log(user2.about());
console.log(user2.is18());
