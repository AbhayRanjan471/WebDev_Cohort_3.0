const express = require("express"); //this library gives us a fucniton

const app = express();//calling that funciton to get the app instance

//http://localhost:3000/add?a=10&b=2 //passing the value in query
app.get("/add", function(req,res){
    const a = req.query.a;
    const b = req.query.b;

    const ans = Number(a)+Number(b); // parsing string to integer
    return res.json({status:200, data:ans});
})

//http://localhost:3000/addition/2/3  //passing the value in params
app.get("/addition/:firts/:sec", function(req,res){
    const a = parseInt(req.params.firts);
    const b = req.params.sec;

    const ans = a+Number(b); // parsing string to integer
    return res.json({status:200, data:ans});
})

app.get("/sub", (req,res)=>{
    const a = req.query.a;
    const b = req.query.b;

    const ans = a-b;
    return res.json({status:200, data:ans});
})

app.get("/mult", (req,res)=>{
    const a = req.query.a;
    const b = req.query.b;

    const ans = a*b;
    return res.json({status:200, data:ans});
})

app.get("/div", (req,res)=>{
    const a = req.query.a;
    const b = req.query.b;

    const ans = a/b;
    return res.json({status:200, data:ans});
})

app.listen(3000, ()=>{
    console.log("server is listing on prot 3000")
})