/********  Real world example of Async-await **********/
/* How to make a fetch() call and handle with async-await */
// making an API call using fetch() funciton, it is the function which is given by the browser and not by the JavaScript

//API taken from : https://api.github.com/     
//take the url of urser , and wirte your github name in place of user name, it will show ur profile
// https://api.github.com/users/AbhayRanjan471

const API_URL = "https://api.github.com/users/AbhayRanjan471";

async function handlePromise1(){
    // fetch(), function returns a promise, and we handle promise using await keyword
    //fetch() => returns a Response object | the response object is in readable formate
   const data = await fetch(API_URL);
   // .json() is also a promise that's why we have used await in front of it. And this gives us the Result
   // fatch() => Response.json() => jsonValue
   const jsonValue = await data.json();

   console.log(jsonValue);//check the output in the browser console

}

handlePromise1();