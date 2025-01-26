const express = require("express");

const app = express();

//Creating the middleware funciotn
let count = 0;
function requestIncrement(req,res,next){
    count++;
    req.name = "avi";
    req.query.a = 2; // modifying the value send in the query parameter
    next(); // calling the next funciton 

    //if we don't want to call the next() funciton we can just remove the next() function call and return , this will stop the execution of the next funciton
    // return res.json("stop the function here, will not call the next funciton")
}

app.get("/mult",requestIncrement, function(req,res){
    const a = req.query.a;
    const b = req.query.b;
    console.log(req.name)
    const ans = a*b;
    return res.json({status:200, data:ans})
})

app.listen(3000, ()=>{
    console.log("server is listing to 3000");
})