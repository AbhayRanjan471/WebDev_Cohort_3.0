const express = require("express");

const app = express();

//In Express, if you want to send JSON data you need to first parse the JSON data
//If we don't use this middleware the "req.body" will be 'undefine'
app.use(express.json());//Middleware to parse JSON data

function sumHandler(req,res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    const ans = a+b;
    return res.json({data:ans});
}

app.post("/sum", sumHandler);

app.listen(3000, ()=>{
    console.log("server is listing to port 3000")
})