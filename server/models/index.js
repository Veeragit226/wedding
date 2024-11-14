const mongoose =require('mongoose')

const userSchema = new mongoose.Schema({
    name:String,
    age:String,
    email:String,
    phone:String,
    caste:String,
    dob:String,
    state:String,
    district:String,
    height:String,
    weight:String,
    education:String,
    working:String,
    password:String,
    description:String,
    gender:String,
    resetPasswordToken:String,
    resetPasswordExpires:Date,
});

const User = mongoose.model("User",userSchema)


module.exports = User;