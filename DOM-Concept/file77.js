// get multiple element using getElements by class name
// get multiple element items using querySelectorAll

const navItems = document.getElementsByClassName("nav-item");
console.log(navItems);  // html collection array like object

const navItems2 = document.querySelectorAll(".nav-item");
console.log(navItems2); // NodeList