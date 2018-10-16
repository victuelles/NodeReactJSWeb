const mongoose= require('mongoose');
//const Schema =mongoose.Schema;
const {Schema} = mongoose; //ES6 destructuring


const userSchema= new Schema({
    googleId:String
});
//create new collection called users
mongoose.model('users',userSchema);