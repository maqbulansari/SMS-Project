const mongoose = require("mongoose");

const FeeRecordSchema = new mongoose.Schema({
student_id: mongoose.Schema.Types.ObjectId,
fee_type:{
    type:String,
    required:true
},
month:{type:Date},
total_amount:{
    type:Number,
     required:true
},
paid_amount:{
     type:Number,
     required:true
},
due_amount:{
     type:Number,
     required:true
},
receipt_number:{
     type:Number,
     required:true
},
late_fee:{
     type:Number,
     required:true
},
payment_status:{
     type:Boolean,
     required:true
},
remarks:{
     type:String,
},
signature:{
     type:String,
},
})

module.exports = mongoose.model("FeeRecordData",FeeRecordSchema)