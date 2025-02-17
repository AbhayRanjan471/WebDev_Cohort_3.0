const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "dfgh567jcvbn67nbn";

const app = express();
app.use(express.json());

let Users =[];

app.post("/signUp", function(req,res){
    const {userName, password} = req.body;

    Users.push({
        userName,
        password
    })

    return res.json({message:"SignUp successfully"})
})

app.post("/signIn", function(req,res){
    const {userName,password} = req.body;

    let foundUser = null;
    //searching for the user in the array
    for(let i = 0 ; i < Users.length; i++){
        if(Users[i].userName == userName && Users[i].password == password){
            foundUser = Users[i];
            console.log(foundUser)
        }
    }

    if(foundUser){
        //generating atoken 
        const token = jwt.sign({
            userName:userName
        }, JWT_SECRET)

        res.json({token:token})
    }else{
        res.json({message:"User not found"})
    }
})

app.get("/get", function(req,res){
    const token = req.header.token;
    //veryifying the token send by the client using the JWT_SECRET
    const decodeInformation = jwt.verify(token,JWT_SECRET);
    const username = decodeInformation.userName;
    //seraching the user 
    let foundUser = null;
    for (let i = 0; i < Users.length; i++) {
        if (Users[i].userName == username) {
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