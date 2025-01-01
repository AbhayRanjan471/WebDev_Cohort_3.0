///////////////// Check Script3.js for the brief discription of all these promise/////////////

// 3rd Promise API 
// [' Promise.race(array of promises) '] :

//CASE1 : when the 1st setteled promise is success
const p1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("P1 success");
    },3000);
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("P2 success");
    }, 1000)
})

const p3 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("p3 success");
    }, 2000);
})

Promise.race([p1,p2,p3]).then((res)=>{
    console.log(res);
})
.catch(function(err){
    console.error(err);
})


//CASE2 : when the 1st setteled promise is rejected
const p4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("P1 success");
    },3000);
})

const p5 = new Promise((resolve,reject)=>{
    setTimeout(function(){
        reject("P2 Fail");
    }, 1000)
})

const p6 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("p3 success");
    }, 2000);
})

Promise.race([p4,p5,p6]).then((res)=>{
    console.log(res);
})
.catch(function(err){
    console.error(err);
})