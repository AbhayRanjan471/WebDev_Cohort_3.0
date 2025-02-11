const axios = require("axios")

// <-------------------------- GET data ------------------------>
// 1. using PROMISE
// function fetchAPI(){
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){
//         console.log(data);
//     })
// }
// fetchAPI()

// 2. fetch using (GET) request
async function fetchGET() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
}
// fetchGET()

//Axios using GET request
async function AxiosGET() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    console.log(response.data)
}
// AxiosGET();

// < ------------------------------- POST data -------------------->
// NOTE: in GET request we can never send the 'body' parameter , we can send the header but never the body, In POST,DELETE,PUT we can send the body

//Fetch using POST request
async function fetchPOST(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify({
          userId: 1,
          title: "Fix my bugs",
          completed: false
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          
        }
      });

      console.log(await response.json())
}
// fetchPOST()

//Axios using POST request
async function axiosPOST(){
    const response = await axios.post("https://jsonplaceholder.typicode.com/todos", {
        body:{ //1st argument we are sending is the 'body'
            userId: 1,
            title: "Fix my bugs",
            completed: false
        },
        headers: { //2nd argument is the 'header'
          "Content-type": "application/json; charset=UTF-8"
        }
    })
    console.log(response.data);
}
// axiosPOST();

// http dum api , check this website 
async function axiosServerPOST(){
    const response = await axios.post(" https://httpdump.app/dumps/556bef32-6297-4e21-a023-5b37240220da", {
        data:{ //1st argument we are sending is the 'body'
            username: "abhay",
            title: "Fix my bugs",
            password: "@123456"
        },
        headers: { //2nd argument is the 'header'
          "Content-type": "application/json; charset=UTF-8",
          "Authorization": "123456"
        }
    })
    console.log(response.data);
}
axiosServerPOST();