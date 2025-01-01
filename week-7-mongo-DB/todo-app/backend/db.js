const { mongoose } = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

//Schema: means finally dataStructure me kaisa data jayega
const User = new Schema({
    name: String,
    email: {type:String, unique:true},
    password: String,
});

const Todo = new Schema({
    userId: ObjectId,
    title: String,
    done: Boolean,
})

//mongoose.model : its tell in which collection u want to put the data, here we give the collection name as 'user', the data will be put inside 'user' collectio when we will check on mongoCompass
// const UserModel = mongoose.model('collectionName' , Schema);
//it will put the 'User Schema' data in 'user' collection
const UserModel = mongoose.model('user' , User);
const TodoModel = mongoose.model('todo' , Todo);
module.exports = {UserModel,TodoModel}; // we will export this so that we can use it other funciton where it's required