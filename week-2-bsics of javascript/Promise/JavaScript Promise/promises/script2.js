///////////////// CREATING A PROMISE, CHANNING & ERROR HANDLING////////////

const cart = ["shoes","pants","kurta"];

//This is an Async operation, so this will return us a Promise
//this createOrder() function created a 'promise object'
const promisess = createOrder(cart);
console.log(promisess);

//attaching a callBack function to this Promise
//after 5sec the promise will get it's data, and then this call funciton will exicute
promisess.then(function(orderId){ //orderId: contains the "orderId" data which we have attach to thr resolve funciton
    console.log(orderId)
    return orderId //Notes: it's important to write the return statement in promise channing, & whatever we are returning will pass to the next promise in the chain
})
.then(function(orderId){
    return proceedToPaymet(orderId);
})
.then(function(paymetInfo){
    console.log(paymetInfo);
})
.catch(function(err){//We will use the .catch when our promise get's rejected, this is the best way to handle error
    console.log(err.message);
})
.then(function(orderId){
    console.log("No matter what happens above, I will denfinitly be called. bcz i m below the catch statement");
})

//How To CREATE a Promise ?
function createOrder(cart){

    //WAY to CREATE a promise
    //we will create a promise constructor using the 'new' keyword
    //this promise constructor takes a funciton  & this funciton will have two parameters which is 'resolve' & 'reject'
    //& these 'resolve & reject' are the funciton which are given by JavaScript to build promises
    const pr = new Promise(function(resolve,reject){
        //inside this promise we will write the logic to handle whatever we want to do, just like we do in normal function

        //createOrder
        //validateCart
        //orderId
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid");
            reject(err);
        }
        //logic for createOrder
        const orderId = "12345";
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            }, 5000)
            
        }
    })
    //returning the promise
    return pr;
}

function validateCart(){
    return true;
}

function proceedToPaymet(orderId){
     //now this proceesToPayment() will return a Promise
     return new Promise(function(resolve,reject){
        //instead of deep diving into the logic we are just resolving the promise
        resolve("Payemt sucessfull");
     })
}
