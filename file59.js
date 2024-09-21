// getter and setters

class Person{

    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name){
        const [firstName, lastName] =name.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person("aadarsh", "pandey", 22);
// console.log(person1.fullName());
console.log(person1.fullName);
person1.fullName = "ritik gupta";
console.log(person1.fullName);
