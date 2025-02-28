const express = require("express");
var cors = require('cors')
const jwt = require("jsonwebtoken");
const {JWT_SECRET, auth} = require('./auth.js');

// const JWT_SECRET = "dfgh567jcvbn67nbn";
const app = express();
app.use(express.json());
app.use(cors())

let Users =[];

//localhost:3000
//This approach is commonly used to serve static frontend files in an Express application.
app.get('/', function(req,res){
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/signUp", function(req,res){
    const {userName, password} = req.body;
    console.log(password,userName , "signupdetails")

    Users.push({
        userName,
        password
    })

    return res.json({message:"SignUp successfully"})
})

app.post("/signIn", function(req,res){
    const {userName,password} = req.body;
    console.log(password,userName,"signindetails")

    let foundUser = null;
    //searching for the user in the array
    for(let i = 0 ; i < Users.length; i++){
        if(Users[i].userName == userName && Users[i].password == password){
            foundUser = Users[i];
            console.log(foundUser)
        }
    }

    if(foundUser){
        //generating token 
        const token = jwt.sign({
            userName:foundUser.userName
        }, JWT_SECRET)

        res.json({token:token})
    }else{
        res.json({message:"User not found"})
    }
})

app.get("/get", auth, function(req,res){
    const currentUser = req.userName
  
    let foundUser = null;
    for (let i = 0; i < Users.length; i++) {
        if (Users[i].userName == currentUser) {
        foundUser = Users[i];
        }
    }

    if (foundUser) {
        res.json({ data: foundUser });
    } else {
        res.json({ message: "User not found" });
    }
});

app.listen(3000, () => {
  console.log("server is listing to PORT 3000");
});