const UserData = require("../model/User.js");
const RoleData = require("../model/Role.js");
const teacherData = require("../model/Teacher.js");
const OfficeStaffData = require("../model/OfficeStaff.js");


exports.Register = async(req,res)=>{
    try {
         const { role, email, psw } = req.body;
                const CheckingUser = UserData.findOne({ email });
                if (CheckingUser) res.status(409).json({ msg: "user Already exist please try login" })
                if (!file) {
                    return res.status(400).json({ error: 'plese upload a file' });
                }
                const RoleId = await RoleData.findOne({ name: { $in: role } });
                const salt = await bcrypt.genSaltSync(10);
                const hashpsw = await bcrypt.hash(psw, salt);
                const createUser = await UserData.create({
                    ...req.body, psw: hashpsw, role: RoleId._id, user_pro: {
                        filename: file.originalname,
                        mimetype: file.mimetype,
                        size: file.size,
                        data: file.buffer,
                    }
                });
                if(role === "Teacher"){
                    const createteacher = await teacherData.create({...req.body,user_id:createUser._id})
                }
                else {
                    const createofficestaff = await OfficeStaffData.create({...req.body,user_id:createUser._id})
                }
                res.status(201).json({msg:"register success"})
    } catch (error) {
        res.status(500).json({ msg: "register unsuccess", err: error.message })
    }
}