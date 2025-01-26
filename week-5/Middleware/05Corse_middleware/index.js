const express =  require("express");
const cors = require('cors');

const app = express();

app.use(express.json());//middleware to parse JSON
// / Enable CORS, this will enable all the website making request
app.use(cors());

/*
app.use(cors({
    //if we want some specific website to stop requesting , we can add it here
    domains: ["http://google.com", "http://employe.google.com"]
}))
*/

app.post("/sum", function(req,res){
    console.log("backend")
    //these are the value paased from the frontend
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    const ans = a + b;
    return res.json({data:ans})
})

app.listen(3000, ()=>{
    console.log("server is listing on port 3000")
})