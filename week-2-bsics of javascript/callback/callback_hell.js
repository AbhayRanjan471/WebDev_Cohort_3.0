 setTimeout(function(){
    console.log("hi")
    setTimeout(function(){
        console.log("hello");
        setTimeout(function(){
            console.log("finaly")
        }, 3000)
    }, 4000)
 }, 2000)

 console.log("its a static")