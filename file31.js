// param destructuring

const person = {
    firstName: "aadarsh",
    gender : "male"
};

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }

function printDetails({firstName, gender,age}){
    console.log(firstName);
    console.log(gender);
    console.log(age); // undefined
}

printDetails(person);