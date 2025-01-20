const express = require("express");
const fs = require("fs");  // Importing the fs module

const app = express();
let todo =[];

app.use(express.json());

app.post("/", function(req,res){
    //destructuring
    console.log(todo)
    const {name,email,password} = req.body;
    todo.push({
        name,
        email,
        password
    })
    // // / Saving the todo array to txt.json file
    // fs.writeFile("todo_data.json", JSON.stringify(todo), (err) => {
    //     if (err) {
    //         console.log("Error saving data:", err);
    //         return res.status(500).send("Error saving data.");
    //     }
    //     console.log("Data saved to txt.json successfully");
    //     res.send("Data created successfully");
    // });
    // console.log(todo);
    res.send("data created successfully")
})

app.get("/" , function(req,res){
    res.status(200).json({ todo, message: "Data retrieved successfully" });
})

app.listen(5000, ()=>{
    console.log("server is running on port 5000")
});