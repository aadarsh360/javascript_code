// lexical environment, scope chain

const lastName = "Pandey";

const printName = function(){
    const firstName = "Aadarsh";
    console.log(firstName);
    console.log(lastName);
}

printName();