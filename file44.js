// call, apply, bind

// function hello(){
//     console.log("hello world");
// }

// hello.call();

/*
const user1 = {

    firstName : "harshit",
    age : 17,
    about : function(){
        console.log(this.firstName, this.age);
    }
};

const user2 = {
    firstName : "mohit",
    age : 21,
};


user1.about.call(user2);
user1.about.call(user1);
user1.about.call();

*/


function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}

const user1 = {
    firstName : "harshit",
    age : 17,
};

const user2 = {
    firstName : "mohit",
    age : 21,
};

about.call(user2, "guitar", "moazrt");
about.call(user1, "guitar", "moazrt");
about.apply(user1, ["abcd", "defg"]);

const func = about.bind(user2, "mohithobby", "mohitfavMusicain");
func();


// don't do this mistake
const user3={
    firstName : "ankit",
    age : 14,
    about : function(){
        console.log(this.firstName, this.age);
    }
};

const myFunc = user3.about;
myFunc();

const myFunc2 = user3.about.bind(user3);
myFunc2();
