// concept __proto__

const obj1 = {
    key1 : "value1",
    key2: "value2"
}

// there is one more way to create empty object

const obj2 = Object.create(obj1); // {}
obj2.key3 = "value3";
obj2.key2 = "unique";
console.log(obj2);
console.log(obj2.key2);
console.log(obj2.__proto__);

// obj2 ka __proto__ obj1 hai
// __ proto__
// offical ecmascript documentation
//[[prototype]], __proto__