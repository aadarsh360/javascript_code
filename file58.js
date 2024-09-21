// same method in base calss

class Animal{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

// const animal1 = new Animal("tom", 1);
// console.log(animal1);
// console.log(animal1.eat());
// console.log(animal1.isSuperCute());

class Dog extends Animal{

    constructor(name, age, speed){
        super(name, age);
        this.speed = speed;
    }

    eat(){
        return `Modified eat : ${this.name}`;
    }

    run(){
        return `${this.name} speed is ${this.speed}`;
    }
}

const dog1 = new Dog("tommy", 2,56);
console.log(dog1);
console.log(dog1.eat());
console.log(dog1.run());