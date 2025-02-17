const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "sdfgcvbertyvbfgvbg";

const app = express();
app.use(express.json()); //help to parse the body

//The token which is stored is the the most recent token
/* [{
    username: Avbhay, password:12345 , token:"abhy3452gr"
}] */
let Users = [];

app.post("/signUp", function (req, res) {
  const { userName, password } = req.body;

  Users.push({
    userName,
    password,
  });

  return res
    .status(200)
    .json({ status: true, message: "user created successfully" });
});

app.post("/signIn", (req, res) => {
  const { userName, password } = req.body;

  let foundUser = null; //creating an object
  for (let i = 0; i < Users.length; i++) {
    if (Users[i].userName == userName && Users[i].password == password) {
      foundUser = Users[i]; //found usr is an object means it will refer to the addres of Users data
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

  if (foundUser) {
    //converting username to token using JWT_SECRET
    const token = jwt.sign(
      {
        userName: userName,//here we provide what we want to code, encode, encrypt
      },
      JWT_SECRET
    );
    res.json({
      token: token,
    });
  } else {
    res.status(403).json({ message: "Invalid usernam or password" });
  }
});

app.get("/get", function (req, res) {
  //User will send the token in the header, using that token we will search that the token to whom it belongs, and we will send that user details
  const token = req.headers.token;
  // Verify the JWT token using the secret key and decode the payload
  const decodedInformation = jwt.verify(token, JWT_SECRET);
  const username = decodedInformation.userName

  //seraching the user using the token
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
