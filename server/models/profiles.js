const mongoose = require('mongoose')


const profileSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    password:String,
    gender:String,
    city:String,
    dob:String,
    age:String,
    height:String,
    weight:String,
    occupation:String,
    hobbies:String,
    src:String
});

const Profile =mongoose.model("Profile",profileSchema)

module.exports(Profile)

