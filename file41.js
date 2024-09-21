// clone using Object.assign

// const obj = {
//     key1 : "value1",
//     key2 : "value2"
// }

// const obj2 = obj;
// obj.key3 = "value3";
// console.log(obj);
// console.log(obj2);

const obj = {
    key1 : "value1",
    key2 : "value2"
}

const obj2 = Object.assign({}, obj);
obj.key3 = "value3";
console.log(obj);
console.log(obj2);


//------ Optional Chaining ---------

const user = {
    firstName : "rahul",
    // address: {houseNumber: "1234"}
};

// console.log(user.firstName);
// console.log(user.address.houseNumber);

console.log(user?.firstName);
console.log(user?.address?.houseNumber);

