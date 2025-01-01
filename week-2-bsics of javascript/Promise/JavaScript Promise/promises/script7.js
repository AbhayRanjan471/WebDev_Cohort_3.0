///////////////// Check Script3.js for the brief discription of all these promise/////////////
// 4th Promise API 
// [' Promise.any(array of promises) '] :

const p1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("P1 success");
    },3000);
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(function(){
        reject("P2 success");
    }, 1000)
})

const p3 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("p3 success");
    }, 2000);
})

Promise.any([p1,p2,p3]).then((res)=>{
    console.log(res);
})
.catch(function(err){
    console.error(err);
    console.log(err.errors)// this will give the lidt of the error in form of list
})

// CASE2 : when all promise are rejected
const p4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        reject("P1 success");
    },3000);
})

const p5 = new Promise((resolve,reject)=>{
    setTimeout(function(){
        reject("P2 success");
    }, 1000)
})

const p6 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        reject("p3 success");
    }, 2000);
})

Promise.any([p4,p5,p6]).then((res)=>{
    console.log(res);
})
.catch(function(err){
    console.error(err);
})