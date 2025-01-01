/**
 * What is async ?
 * What is await ?
 * How async await works behind the scenes ?
 * Examples of using async/await 
 * Error handling
 * Interviews
 * Async await Vs Promise,then/catch
 */

// Async : it is  a keyword that is used before a funciton to create a async funciton
//NOTE: Async functions always return a promise. Suppose we are not returning a promise, instead we are returning a value(string,int, boolean ect )
// then what this async funciton will do is, it will take the value and wrap it inside a promise and then it will return, that's why we say that
// async fun always return a promise.

//Creating a promise
const p = new Promise(function(resolve, reject){
    resolve("Promised resolved value")
})

//CRETAE async fun
async function getData() {
    // return "Hello async" // it's not returning a promise so the async fun will wrap the value inside a promise and then it will return the value

    return p; // returning an actual promise, Note: if we are already returning a promise, then it will not wrap inside another promise, istead it will directly return that promise.
}

const dataPromise = getData();
console.log(dataPromise)// it will print the Promise

//Get the actual data present inside the Promise
dataPromise.then(function(res){
    console.log(res);
})



