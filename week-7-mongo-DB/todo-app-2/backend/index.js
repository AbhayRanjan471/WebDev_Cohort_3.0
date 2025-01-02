const express = require('express');
// const bcrypt = require('bcrypt');
const {UserModel, TodoModel} = require('./db');
// jsonwebtoken: A Node.js library for generating and verifying JWTs.
const jwt = require('jsonwebtoken');
const {auth, JWT_SECRET} = require('./auth');
const { default: mongoose } = require("mongoose");
const bcrypt = require('bcrypt');


//connnecting to mongoDB
mongoose.connect("mongodb+srv://abhi:IVwn7ZiM4tIgBsgw@cluster0.eggrc.mongodb.net/todo-app-1")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Database connection error:", err));

const app = express();

app.use(express.json());// to parse the json body

/* 
1.app.post defines a POST route in your Express application.
2.The '/signup' parameter specifies the route endpoint. When a user sends a POST request to http://yourdomain.com/signup, this function is triggered.
3.req (request) and res (response) are provided by Express.
4.req: Represents the incoming HTTP request, including data sent by the user (form fields, JSON body, headers, etc.).
5.res: Represents the HTTP response that your server sends back to the client
6.app.post('route' , callback function) ## app.post takes two argument
 */ 
app.post('/signup' , async function(req, res){
    /* 
     Extracting Data from the Request Body
     When the user submits a form or sends data in the request body, it becomes available in req.body.
     You need to use middleware like express.json() or express.urlencoded() to parse the incoming data.
     app.use(express.json()); // For parsing JSON payloads
     */
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    //we will those code inside try catch block, whcih we know will throw error
    try {
        //check if user already exist
        const existingUser = await UserModel.findOne(email);
        if(existingUser){
            return res.status(400).json({message:"Email is already registerd"})
        }
    
    //Encrypting the Passowrd using {Hash+Salt}
    // bcrypt.hash(myPlaintextPassword, saltRounds)  ##saltRound:means how many times u want to hash the password
    const hashedPassword = await bcrypt.hash(password, 5);

    /*
    Inserting Data into the Database
    The create method stores a new user record in the database.
    Always use 'async - await' while inserting data into the DataModel, kyu ki pahle hum dataBase me data insert kre ge then we will send the success response
     */
    await UserModel.create({
        name: name,
        email: email,
        password: hashedPassword,
    });
    } catch (error) {
        return res.json({message: "User already exist"});
    }
    
    res.json({message: "SigneUp successfully"})
})

//this POST will be used when the user will create signin in the forntend
app.post('/signin' , async function(req, res){
    //user jab signIn kre ga tb hume 'req' k andr ye sagre data mile ge
    const email = req.body.email;
    const password = req.body.password;

    // Find user in the database by email
    const user = await UserModel.findOne({
        email:email,
    })

    //we will check if user exist or not
    if(!user){
        res.status(403).json({
            message: "User does not exist in our db"
        })
    }
    console.log(req, "thisisreq");
    console.log(user, "thisisres");

    //Now we will compare the password, compare(password from the req body , password which we find using the email from the database)
    const passwordMatch = bcrypt.compare(password, user.password)

    //if the password match we will send the 'Token' or ye jo token bheje ga signin k time hum us token se veryfy kare ge apne JWT_SECRET key se kya wo match kr raha hai ye sare task auth wale funciton me ho ga, after varification we will allow user to use the application
    /* 
    jwt.sign: Creates (or signs) a new JWT.
    Payload:Contains the data you want to encode in the token (e.g., id: user._id in this case).
    This data will be visible if someone decodes the token, so it shouldn’t contain sensitive information like passwords.
     */
    if (passwordMatch) {
        /*
        syntex: jwt.sign(payload, secretOrPrivateKey, [options], [callback])
        Why JWT_SECRET is Important
        The JWT_SECRET is used to sign the token to ensure its authenticity and integrity.
        Without it, the token cannot be validated during verification. */
        // Generate JWT token
        const token = jwt.sign(
            { id: user._id.toString() },       // Payload
            JWT_SECRET,             // Secret key
            { expiresIn: '1h' }     // Options (e.g., expiration time)
        );
        res.json({ token: token });
    } else {
        res.status(403).json({ message: 'Invalid credentials' });
    }
});

//this POST will be used when the user will create TODO in the forntend
app.post('/todo' ,auth, function(req, res){
    const userId = req.userId;
    const {title, done} = req.body;

    TodoModel.create({
        title:title,
        userId:userId,
        done:done
    })

    res.json({
        message: 'todo created'})
})

//This to get all the TODO form backend
app.get('/todos' ,auth, async function(req, res){
    const userId = req.userId;

    //finding all the Todo for the specific 'userId'
    const todo = await TodoModel.find({
        userId:userId
    })

    res.json({
        todo})

})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});




