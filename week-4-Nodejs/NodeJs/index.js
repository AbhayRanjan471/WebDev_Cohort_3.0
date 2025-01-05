const path = require("path")

console.log(__dirname); // print the current directory
console.log(path.join(__dirname , "index.js"));// It will join the current directory with index.js
console.log(path.join(__dirname , "../../index.js"));// ../../index.js , this will 1st move 2 dircetory up in the folder structure and the it will add index.js, to the file path
console.log(path.join("/1stfloder/2ndfolder/3rdfolder" , "../../index.js")); //OP: \1stfloder\index.js