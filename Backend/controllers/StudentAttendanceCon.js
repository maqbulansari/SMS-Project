const StudentAttendanceData = require("../model/stuAttendance.js");

exports.CreateAttendance = async (req,res) => {
    try {
        const CreateAttendance = await StudentAttendanceData.create(req.body)
        res.status(201).json({msg:"success",data:CreateAttendance})
    } catch (error) {
         res.status(500).json({msg:"unsuccess marking attendance"})
    }
}