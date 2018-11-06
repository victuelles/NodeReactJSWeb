const mongoose= require('mongoose');
//const Schema =mongoose.Schema;
const {Schema} = mongoose; //ES6 destructuring


const userSchema= new Schema({
    googleId:String,
    credits: {type:Number,default:0}
});
//create new collection called users
mongoose.model('users',userSchema);