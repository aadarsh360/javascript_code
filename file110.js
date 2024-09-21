// XHR using Promise

const URL = "https://jsonplaceholder.typicode.com/posts";


function sendRequest(methdod, url){

    return new Promise((resolve, reject)=>{

        const xhr = new XMLHttpRequest();
        xhr.open(methdod, url);

        xhr.onload = function(){
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.response);
            }
            else{
                reject(new Error("Something went wrong!!!"));
            }
        }

        xhr.onerror = function(){
            reject(new Error("Something went wrong!!"));
        }
        xhr.send();
    })
}

sendRequest("GET", URL)
   .then( response =>{
    const data = JSON.parse(response);
    // console.log(data);
    return data;
   })
   .then(data =>{
    // console.log(data);
    return data[8].id;
   })
   .then(id =>{
    const url = `${URL}/${id}`;
    return sendRequest("GET", url);
   })
   .then( newResponse =>{
    const newData = JSON.parse(newResponse);
    console.log(newData);
   })
   .catch(error =>{
    console.log(error);
   })