const { error } = require('console');
const fs = require('fs');

// const text = fs.readFile('read.txt', 'utf-8', print);

function read(resolve){
    setTimeout(()=>{
        resolve(fs.readFileSync('read.txt','utf-8'));
    }, 3000)
    
}

const p = new Promise(read)

// function trimString(data){
//     console.log(data.trim());
// }

p.then(function trimString(data){
    console.log(data.trim());
})
.then(console.log('done triming'))
.catch((err)=>{console.log(err)})