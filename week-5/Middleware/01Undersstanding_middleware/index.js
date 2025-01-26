const express = require("express"); //this library gives us a fucniton

const app = express();//calling that funciton to get the app instance

//count no of time the request have beend made
let reqcount = 0;
//this funciton act as a middleware
function countReq(){
    reqcount++;
    console.log(`Total no of time the req has made = ${reqcount}`)
}
app.get("/add", function(req,res){
    countReq(req,res);
    const a = req.query.a;
    const b = req.query.b;

    const ans = Number(a)+Number(b); // parsing string to integer
    return res.json({status:200, data:ans});
})


app.get("/sub", (req,res)=>{
    countReq(req,res);
    const a = req.query.a;
    const b = req.query.b;

    const ans = a-b;
    return res.json({status:200, data:ans});
})


app.listen(3000, ()=>{
    console.log("server is listing on prot 3000")
})