// block scope vs function scope
// let and const are block scope
// var is function scope

{
    let firstName = "aadarsh";
    console.log(firstName);
}


{
    var firstName = "rahul";
}
console.log(firstName);

{
    var name = "aadarsh";
    console.log(name);
}

{
    console.log(name);
}