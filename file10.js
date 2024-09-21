// and or operator

let firstName = "Aadarsh";
let age = 23;

if(firstName[0] === 'A'){
    console.log("Your name start with A");
}

// and operator
if(firstName[0] === 'A' && age > 18){
    console.log("Your name start with A and age is above 18");
}
else{
    console.log("inside else part");
}

// or operator
if(firstName[0] === 'A' || age > 18){
    console.log("inside if");
}
else{
    console.log("inside else");
}

