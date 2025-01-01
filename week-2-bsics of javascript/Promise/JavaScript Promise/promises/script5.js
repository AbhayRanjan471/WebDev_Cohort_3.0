///////////////// Check Script3.js for the brief discription of all these promise/////////////
//2nd Promise API : Prmoise.allSetteled([p1,p2,p3])

const p1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("P1 success");
    },3000)
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("P2 rejected");
    },1000)
})

const p3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("P3 success");
    }, 2000);
})

Promise.allSettled([p1,p2,p3]).then(function(data){
    console.log(data);
})
.catch(function(err){
    console.error(err);
})

