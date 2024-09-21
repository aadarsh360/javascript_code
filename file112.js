// async await
// consume promise using async await

const URL = "https://jsonplaceholder.typicode.com/posts";


// fetch(URL)
//   .then(response =>{
//     return response.json();
//   })
//   .then(data =>{
//     console.log(data);
//   })
//   .catch( error =>{
//     console.log(error);
//   })



// async function getPosts(){

//     const response = await fetch(URL);
//     // console.log(response);
//     if(!response.ok){
//         throw new Error("Something went wrong");
//     }
//     const data = await response.json();
//     return data;
// }


// with arrow function
const getPosts = async()=>{

    const response = await fetch(URL);
    // console.log(response);
    if(!response.ok){
        throw new Error("Something went wrong");
    }
    const data = await response.json();
    return data;
}

// const myData = getPosts();
// console.log(myData);// promise

getPosts()
   .then( myData =>{
    console.log(myData);
   })
   .catch( error => {
    console.log(error);
   })

