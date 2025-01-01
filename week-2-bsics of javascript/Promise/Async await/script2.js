// Notes: async & await combo is used to handle promises

//HOW DO WE used to handle PROMISES before async-await
 const p = new Promise(function(resolve,reject){
    resolve("Promise resolved value!!")
 })

 function getData(){
    p.then(function(res){
        console.log(res);
    })
 }

 getData();

//  ******************* WHY we need async await *************************

const p1 = new Promise(function(resolve,reject){
    resolve("Promise 2 resolved value!!")
 })

//CREATE
// Note: 'await' is a keyword which can only be used inside a 'async' funciton
async function handlePromise() {
    // we will use the keyword 'await' infront of promise
    //here the variable 'val' cotians the value of the resolved/reject promise
    const val = await p1;
    console.log(val)
}

handlePromise();

