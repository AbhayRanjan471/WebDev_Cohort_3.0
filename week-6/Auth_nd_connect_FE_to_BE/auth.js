const jwt = require("jsonwebtoken");
const JWT_SECRET = "fgh56cvbghjbn";

function auth (req,res,next) {
    //1st: find the token from the headers
    const token = req.headers.token;
    //2nd: verify the token
    const decodeInformation = jwt.verify(token, JWT_SECRET);
    //3rd: extract username from the token
    const username = decodeInformation.userName;

    //4th: if username is present call the next funciton
    if(username){
        //5th: modify the req , so that the next function will get the username in its req parameter
        req.userName = username;
        next();
    }else{
        res.json({message:"User not logged in"})
    }

}

module.exports ={
    auth, JWT_SECRET
}