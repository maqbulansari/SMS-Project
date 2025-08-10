const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
first_name:{
    type:String,
    required:true
},
middle_name:{
    type:String
},
last_name:{
    type:String,
    required:true
},
psw:{
    type:String,
    required:true,
    trim:true
},
email:{
    type:String,
    required:true,
    trim:true,
    unique:true
},
ph_no:{
    type:String,
    required:true
},
gender:{
    type:String,
    required:true
},
role:{
    type: mongoose.Schema.Types.ObjectId
},
user_pro:{
  filename: String,
  mimetype: String,
  size: Number,
  data: Buffer,
}
})
module.exports = mongoose.model("UserData",UserSchema)