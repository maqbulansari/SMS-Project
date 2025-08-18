const bcrypt = require("bcrypt");
const UserData = require("../model/User.js");
const StudentData = require("../model/Student.js");
const StudentGuardianData = require("../model/StudentGuardian.js");
const GuardianData = require("../model/Guardian.js");
const FeeRecData = require("../model/FeeRecord.js");
const SchoolYearData = require("../model/SchoolYear.js");
const StuYear_lvl_Data = require("../model/StudentYearlvl.js");
const Year_lvl_fee_Data = require("../model/YearLevelFee.js");
const fee_rec_yr_lvl_Data = require("../model/fee_recored_yr_lvl_fee.js");
const Yearlvl = require("../model/Yearlvl.js");
const RoleData = require("../model/Role.js");
const SubjectData = require("../model/Subject.js");
const addmissionData = require("../model/Admission.js")


exports.StudentAdmission = async (req, res) => {
    try {
        const { role, email, psw ,name,lvl_name} = req.body;
        const file = req.file;
        const CheckingUser = await UserData.findOne({ email });
        if (CheckingUser) return res.status(409).json({ msg: "user Already exist please try login" })
        if (!file) {
            return res.status(400).json({ error: 'plese upload a file' });
        }
        const RoleId = await RoleData.findOne({ name: role });
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
        const createStuGuar = await StudentGuardianData.create({stu_id:createStudent._id,Guar_id:createGuardian._id})
        const createFee = await FeeRecData.create({...req.body,student_id:createStudent._id})
        const findschyear = await SchoolYearData.findOne({name})
        const createyearlvlfee = await Year_lvl_fee_Data.create({...req.body,schoole_year_id:findschyear._id});
        const findyearlvl = await Yearlvl.findOne({lvl_name})
        const createstuyearlvl = await StuYear_lvl_Data.create({...req.body,stu_id:createStudent._id,year_lvl_id:findyearlvl._id,sch_year_id:findschyear._id})
        const createfeercyearlvlfee = await fee_rec_yr_lvl_Data.create({...req.body,fee_rec_id:createFee._id,yearlvlfee_id:createyearlvlfee._id})
        const createaddmission = await addmissionData.create({...req.body,student_id:createStudent._id,guardian_id:createGuardian._id,year_lvl_id:findyearlvl._id,sch_lvl_id:findschyear._id})
       

        res.status(201).json({msg:"admission success"})

    } catch (error) {
        res.status(500).json({ msg: "admission unsuccess", err: error.message })
    }
}