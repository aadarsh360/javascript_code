// objects inside array
// very useful in real world applications

const users = [
    {userId: 1, firstName:"aadarsh", gender:"male"},
    {userId: 2, firstName:"mohit", gender:"male"},
    {userId: 3, firstName:"rahul", gender:"male"}
];

console.log(users);

for(let user of users){
    console.log(user.firstName);
}

// nested destructuring

// const[user1, user2, user3] = users;
// console.log(user1);

// const[{firstName},,{gender}] = users;
// console.log(firstName);
// console.log(gender);

const [{firstName:user1Name, userId}] = users;
console.log(user1Name);
console.log(userId);

console.log("sdfa");

