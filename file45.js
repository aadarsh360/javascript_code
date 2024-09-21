// arrow functions

const user1 = {

    firstName : "aadarsh",
    age : 8,
    about:()=>{
        console.log(this);
        console.log(this.firstName, this.age);
    }
}

user1.about();

// arrow function me this nhi hota hai 
// arrow function this appne srrownding se leta hai


// short syntax

const user2 = {
    firstName : "harshit",
    age: 8,
    // this is method
    about(){
        console.log(this.firstName, this.age);
    }
}

user2.about();
