// closure example

function func(){
    let count = 0;
    return function(){
        if(count < 1){
            console.log("First time call");
            
        }
        else{
            console.log(count+" time call");
        }
        count++;
    }
}

const ans = func();
ans();
ans();
ans();
ans();
ans();

const val = func();
val();