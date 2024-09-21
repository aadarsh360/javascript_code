// static methods and static properties

class Person{

    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // static properties
    static desc = "static property";

    // static method
    static classInfo(){
        return "this is person class";
    }
}

console.log(Person.desc);
console.log(Person.classInfo());