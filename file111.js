// fetch 

const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL)
//    .then(response =>{
//     return response.json();
//    })
//    .then( data =>{
//     console.log(data);
//    })


// GET request
/*
fetch(URL)
   .then( response =>{
    if(response.ok){
        return response.json();
    }
    else{
        throw new Error("Something went wrong !!!");
    }
   })
   .then(data=>{
    console.log(data);
   })
   .catch(error =>{
    console.log("inside catch");
    console.log(error);
   })

   */


// Post request
fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
   .then( response =>{
    if(response.ok){
        return response.json();
    }
    else{
        throw new Error("Something went wrong !!!");
    }
   })
   .then(data=>{
    console.log(data);
   })
   .catch(error =>{
    console.log("inside catch");
    console.log(error);
   })