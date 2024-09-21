// closure in arrow function

const myFun2 = power => number => number ** power;

const fun2 = myFun2(3);
const ans = fun2(5);
console.log(ans);