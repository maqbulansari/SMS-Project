const OfficeStaffData = require("../model/OfficeStaff.js");

exports.AlloficeStaffInfo = async(req,res)=>{
    try {
        const officeStaff = await OfficeStaffData.aggregate([
            {
                $lookup:{
                    from:"userdatas",
                    localField:"user_id",
                    foreignField:"_id",
                    as:"user_info"
                }
            }
        ])
        res.status(200).json({msg:"success",officeStaff});
    } catch (error) {
        res.status(500).json({ msg: "unsuccess", err: error.message })
    }
}