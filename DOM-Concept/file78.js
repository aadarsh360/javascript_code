// iterate element

// we can't use forEach method to iterate through HTMLCollection

// simple for loop
// for of loop
// forEach

let navItems = document.getElementsByTagName("a");

// for(let i = 0; i < navItems.length; i++){

//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";

// }


// navItems = Array.from(navItems);
// navItems.forEach((navItem) => {
//     navItem.style.backgroundColor = '#fff';
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })


// queryselectorAll NodeList return krta hai

let navItems2 = document.querySelectorAll("a");
// simple for loop
// for of loop
// forEach
// all loop use for nodeList


// for(let i = 0; i < navItems2.length; i++){

//     const navItem = navItems2[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

