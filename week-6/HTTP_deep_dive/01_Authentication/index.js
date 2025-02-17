const express = require("express");

const app = express();
app.use(express.json()); //help to parse the body

//The token which is stored is the the most recent token 
/* [{
    username: Avbhay, password:12345 , token:"abhy3452gr"
}] */
let Users = [];

function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        //Math.random() - gives random value between 0 to 1 
        token+= options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

app.post('/signUp', function(req,res){
    const {userName, password} = req.body;

    Users.push({
        userName,
        password
    });

    return res.status(200).json({status:true, message:"user created successfully"})
})

app.post('/signIn', (req,res)=>{
    const {userName,password} = req.body;
    
    let foundUser = null;//creating an object
    for(let i = 0 ; i < Users.length; i++){
        if(Users[i].userName == userName && Users[i].password == password ){
            foundUser = Users[i];//found usr is an object means it will refer to the addres of Users data
        }
    }
    /* 2nd way to find the user
    const foundUser = Users.find(function(u){
        if(u.userName == userName && u.password == password){
            return true;
        }else{
            return false
        }
    })
    */

        if(foundUser){
        const token = generateToken(); //generating the token
        foundUser.token = token;//storing the token in the "in memory" varibale for that user means([{username: Avbhay, password:12345 , token:"abhy3452gr"}])
        console.log(Users, 'check User')
        res.json({
            token: token
        })
    }else{
        res.status(403).json({message: "Invalid usernam or password"})
    }
    
})

app.get('/get', function(req,res){
    //User will send the token in the header, using that token we will search that the token to whom it belongs, and we will send that user details
    const token = req.headers.token;
    // console.log(token, "printtokemn")

    //seraching the user using the token
    let foundUser = null;
    for(let i = 0 ; i < Users.length ; i++){
        if(Users[i].token == token){
            foundUser = Users[i];
        }
    }

    if(foundUser){
        res.json({data:foundUser})
    }else{
        res.json({message:"User not found"})
    }
})

app.listen(3000, ()=>{
    console.log("server is listing to PORT 3000")
})