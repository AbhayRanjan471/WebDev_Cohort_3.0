// The Node.js file system module allows you to work with the file system on your computer.
const fs = require("fs");

//readFileSync() is a function that read file, whose name is a.text and the formate is utf-8
//utf-8 : is the formate of English
const contents = fs.readFileSync("a.txt", "utf-8"); //synchronously
console.log(contents);

function print(err,data){
    if(err)console.log("file not found");
    else{
        console.log(data , ": data");
    }
}
//Asynchronous means that the thread will not stuck in a particular line , it will move forward to the next line
const contents2 = fs.readFile("a.txt", "utf-8", print); //Asynchronously