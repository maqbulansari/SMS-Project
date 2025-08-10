const mongoose = require("mongoose");

const GuardianSchema = mongoose.Schema({
user_id: mongoose.Schema.Types.ObjectId,
anu_income:{
    type:Number,
    required:true
},
qualification:{
    type:String,
    required:true
},
occupation:{
    type:String,
    required:true
},
})
module.exports = mongoose.model("GuardianData",GuardianSchema)