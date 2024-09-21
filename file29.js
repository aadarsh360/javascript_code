// default parameters

function addTwo(a, b){
    return a+b;
}
function add(a, b){
    if(typeof b === "undefined"){
        b = 0;
    }
    return a+b;
}

const ans = addTwo(4,5);
console.log(ans);
console.log(add(4,9));


                  //this is default parameter
function addfun(a, b=0){
    return a+b;
}
console.log(addfun(8));
console.log(addfun(6,7));