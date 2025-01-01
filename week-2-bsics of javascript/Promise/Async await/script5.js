/**********  How to handle the ERROR ? *****************/

const API_URL = "https://api.github.com/users/AbhayRanjan471";

async function handlePromise() {
    //wrap the Api call inside the try catch block
    try {
        //fecthing the API
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);
    }
     catch (error) {
        console.log(error);
    }
}

handlePromise();

/** Another way to Handle the ERROR but its a older way */
async function handlePromise1() {
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
}

//since Async fucnction returns a Promise, so we can directly use .catch() , when we have received the Response
handlePromise1().catch((err)=> console.log(err));

/* Interview QUESTIOnS */

/* Q1. What is Async Await?
Ans: async is a keyword which is used with a function and await can only be used inside async funciton , to handle Promises and these promises are asynchronous -> then explain with an example
*/

