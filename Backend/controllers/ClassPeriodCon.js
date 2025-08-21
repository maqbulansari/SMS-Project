const ClassPeriodData = require("../model/class_period.js");

exports.CreateClassPeriod = async (req,res) => {
    try {
        const createClassPeriod = await ClassPeriodData.create(req.body)
        res.status(201).json({msg:"success",data:createClassPeriod})
    } catch (error) {
         res.status(500).json({msg:"unsuccess adding ClassPeriod",err:error.message})
    }
}