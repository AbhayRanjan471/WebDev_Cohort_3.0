function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve, duration);
    })
}

function callback(){
    console.log("5 sec has passed");
}

//when the promise will resolve after that it will call the callback funciton
setTimeoutPromisified(5000).then(callback);