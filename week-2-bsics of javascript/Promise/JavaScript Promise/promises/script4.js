///////////////// Check Script3.js for the brief discription of all these promise/////////////
//1st Promise API : Prmoise.all([p1,p2,p3])

// CASE1: when all promise is successful
const p1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("P1 Success")
    }, 3000);
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("P2 Success");
    }, 1000)
})

const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("P3 success");
    }, 2000)
})

Promise.all([p1,p2,p3]).then(function(data){
    console.log(data); //OP: [ 'P1 Success', 'P2 Success', 'P3 success' ]
})

//CASE 2: when one of the promise got rejected
const p4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("P4 success");
    },3000);
})

const p5 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Error promise p5 got rejected")
    },1000);
})

const p6 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("p6 Success");
    }, 2000);
})

Promise.all([p4,p5,p6]).then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.error(err);
})
