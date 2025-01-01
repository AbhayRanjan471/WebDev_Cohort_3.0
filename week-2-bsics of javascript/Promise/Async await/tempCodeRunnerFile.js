const API_URL = "https://api.github.com/users/AbhayRanjan471";

async function handlePromise1(){
   const data = await fetch(API_URL);
   const jsonValue = await data.json();
   console.log(jsonValue);

}

handlePromise1();