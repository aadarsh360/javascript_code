// solution using Object.create

const userMthods = {

    about : function(){
        return `${this.firstName} is ${this.age} year old`;
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing : function(){
        return "toon na na na la la";
    }
};
function createUser(firstName, lastName, email,age, address){

    // const user = {};
    const user = Object.create(userMthods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    // user.about = userMthods.about;
    // user.is18 =userMthods.is18;
    return user;
}

const user1 = createUser("aadarsh", "pandey", "aadarsh@gmail.com", 19, "prayagraj");
const user2 = createUser("ritik ", "gupta", "ritik@gmail.com", 23, "kanpur");

console.log(user1);
const about = user2.about();
console.log(about);
const is18 = user2.is18();
console.log(is18);
console.log(user2.sing());