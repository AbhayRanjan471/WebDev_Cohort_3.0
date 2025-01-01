// quote: TIME, TIED & JAVAsCRIPT WAIT FOR NONE

//why 'async' 'await' is SPECIAL
//How async-await is speacial then handling a promise in different way

// 1st normal Promise
const p = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve("Promise resolved value!!")
    }, 5000);
 })

 function getData(){
    //NOte: JS Engine doesn't wait for the Promise to resolved and will move to the next line.
    // saf saf bat itne hai ki agr hum normal promise ka use kr rahe hai to ye JS Engine wait nai kre ga promise ka resolve hone ka or wo next
    // line of code ko check krna start kr de ga, isiye isme pahle "Namaste JavaScript" print ho raha hai fir 10sec k bad jb promise resolve ho 
    //raha hai tb wo uske value ko print kr raha hai
    p.then(function(res){
        console.log(res);
    })

    console.log("Namaste JavaScript")
 }

//  getData();

 /*************2nd:using async await *********/
 const p2 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve("Promise 2 resolved value!!")
    }, 10000);
 })

 async function handlePromise() {
    console.log("Inside handlePromise funciton");
    //Note: Js Engine waiting for the promise to resolve..? "NO IT IS NOT TRUE"
    //saf saf bat itne hai ki 'async-await' ek VIP person ka tag hai tag, jb tk promise resolve nai ho ga tb tk , next line of code ko exicute nai kre ga 
    const val = await p2; // jb tk 'val' k andar value nai ayega hum age nai badhe ge or wait kre ge promise resolve hone ka
    console.log("Namsate 2 javaScript")
    console.log(val)

    //Watch akshay saini video at 30min
    //NOte: call-stack  doesn't block, it continue it's exicution, thta's why both the above and below promise will be exicuted simultaneously 
    const val2 = await p2; 
    console.log("Namsate 3 javaScript")
    console.log(val2)

}

handlePromise();

/*WHOLE CRUCKS
• Async/await used for handling promises
• Async always return a promise
° Await can only used inside an async function
° Can only write await keyword infront of a promise
° While awaiting JS Engine does not actually wait rather the function is suspended and call stack is free for other stuffs but it looks like program is waiting at that point
° Use try catch for Error handling and can also use  . Catch() method
*/