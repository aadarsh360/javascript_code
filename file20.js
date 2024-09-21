// computed properties

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// const demoOjb = {};

// demoOjb[key1] = value1;
// demoOjb[key2] = value2;
// console.log(demoOjb);

const demoOjb = {
    [key1] : value1,
    [key2] : value2
};

console.log(demoOjb);

// spread operator in objects

const obj1 = {
    k1 : "v1",
    k2 : "v2"
}
const obj2 = {
    k3 : "v3",
    k4 : "v4",
    k1 : "v5"
};

const newObj = {...obj1};

console.log(newObj);

const newObj2 = {...obj1, ...obj2};
console.log(newObj2);

const newObj3 = {...obj1, key45:"v45"};
console.log(newObj3);

const newObj4 = {..."abcdef"};
console.log(newObj4);

const newObj5 = {...["item1", "item2"]};
console.log(newObj5);

const newObj6 = {..."abcdefghijklmnopqrstuvwxyz"};
console.log(newObj6);

