 setTimeout(function(){
    console.log("hi")
    setTimeout(function(){
        console.log("hello");
        setTimeout(function(){
            console.log("finaly")
        }, 4000)
    }, 3000)
 }, 2000)

 console.log("its a static")