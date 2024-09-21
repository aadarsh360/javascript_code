// new keyword

function createUser(firstName, age){
    this.firstName = firstName;
    this.age = age;
}

const user1 = new createUser("aadarsh", 6);
console.log(user1);

//new keyword
// 1. create empty object this = {}
// 2. return this

createUser.prototype.about = function(){
    console.log(this.firstName, this.age);
}
user1.about();