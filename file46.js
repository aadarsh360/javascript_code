// object oriented programming
// function create to multiple objects


function createUser(firstName, lastName, email,age, address){

    const user = {};

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;

    user.about = function(){
        return `${this.firstName} is ${this.age} year old`;
    }
    user.is18 = function(){
        return this.age >= 18;
    }

    return user;
}

const user1 = createUser("aadarsh", "pandey", "aadrsh@gmail.com", 15, "delhi");
console.log(user1);
const is18 = user1.is18();
const about = user1.about();
console.log(about);