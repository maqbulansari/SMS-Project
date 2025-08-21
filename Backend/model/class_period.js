const mongoose =require("mongoose");

const class_periodSchema = new mongoose.Schema({
    sub_id: mongoose.Schema.Types.ObjectId,
    teacher_id : mongoose.Schema.Types.ObjectId,
    start_period_id : mongoose.Schema.Types.ObjectId,
    end_period_id : mongoose.Schema.Types.ObjectId,
    clsroom_no:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
})
module.exports =mongoose.model("class_periodData",class_periodSchema)