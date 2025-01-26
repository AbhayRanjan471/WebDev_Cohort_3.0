const express =  require("express");
// const cors = require('cors');

const app = express();

app.use(express.json());//middleware to parse JSON
// / Enable CORS, this will enable all the website making request
// app.use(cors());

/*
app.use(cors({
    //if we want some specific website to stop requesting , we can add it here
    domains: ["http://google.com", "http://employe.google.com"]
}))
*/

//Hosting the frontend in the same port 3000 , so that we don't have to use CORS
//when the request will come "http://localhost/3000" we will send the inde.html , file this way we can host the frontend and backend in same port
app.get("/", function(req,res){
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/sum", function(req,res){
    console.log("backend")
    //these are the value paased from the frontend
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    const ans = a + b;
    console.log(ans);
    return res.json({data:ans})
})

app.listen(3000, ()=>{
    console.log("server is listing on port 3000")
})