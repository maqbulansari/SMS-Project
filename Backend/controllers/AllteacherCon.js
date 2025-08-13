const TeacherData = require("../model/Teacher.js");

exports.AllteacherInfo = async(req,res)=>{
    try {
        const teachers = await TeacherData.aggregate([
            {
                $lookup:{
                    from:"userdatas",
                    localField:"user_id",
                    foreignField:"_id",
                    as:"user_info"
                }
            }
        ])
        res.status(200).json({msg:"success",teachers});
    } catch (error) {
        res.status(500).json({ msg: "unsuccess", err: error.message })
    }
}