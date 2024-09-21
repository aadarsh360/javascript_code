// Sets (it is iterable)
// store data
// sets also have its own methods
// No index-based access
// Order is not guaranteed
// unique items only (no duplicates allowed)


/*
const numbers = new Set([4,5,6,4,3]);
console.log(numbers);

const s = new Set();
s.add(10);
s.add(20);
s.add(30);
s.add(30);
s.add(40);
console.log(s);
console.log(s.has(20));
console.log(s.has(50));

for(let n of s){
    console.log(n);
}
console.log(s.has(80));

const arr = [2,2,3,4,5,1,7,8,5,5,9];

const brr = new Set(arr);
let length = 0;
for(let elemenet of brr){
    length++;
}
console.log(length);

*/

const s = new Set();
s.add(10);
s.add(20);
s.add([10,20]);
s.add([10,20]);
console.log(s);
