const UserData = require("../model/User.js");
const StudentData = require("../model/Student.js");
const StudentGuardianData = require("../model/StudentGuardian.js");
const GuardianData = require("../model/Guardian.js");
const FeeRecData = require("../model/FeeRecord.js");
const SchoolYearData = require("../model/SchoolYear.js");
const SchoolYear_lvl_Data = require("../model/StudentYearlvl.js");
const Year_lvl_fee_Data = require("../model/YearLevelFee.js");
const fee_rec_yr_lvl_Data = require("../model/fee_recored_yr_lvl_fee.js");
const Yearlvl = require("../model/Yearlvl.js");
const RoleData = require("../model/Role.js");
const SubjectData = require("../model/Subject.js");
const ClassPeriodData = require("../model/class_period.js");
const StudentAttendanceData = require("../model/stuAttendance.js");


exports.StudentAdmission = async (req, res) => {
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

        const createStudent =await StudentData.create({...req.body,user_id:createUser.id})
        const createGuardian =await GuardianData.create({...req.body,user_id:createUser.id})
        const createStuGuar = await StudentGuardianData.create()

    } catch (error) {
        res.status(500).json({ msg: "unsuccess", err: error.message })
    }
}