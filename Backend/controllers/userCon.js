require("dotenv").config()
const UserData =require("../model/User.js");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const teacherData = require("../model/Teacher.js");
const OfficeStaffData = require("../model/OfficeStaff.js");
const StudentData = require("../model/Student.js");
const GuardianData = require("../model/Guardian.js");
const FeeRecData = require("../model/FeeRecord.js");
const SubjectData = require("../model/Subject.js");
const StudentAttendanceData = require("../model/stuAttendance.js");
const addmissionData = require("../model/Admission.js")



exports.LoginUser = async(req,res)=>{
try {
 const {email,psw} = req.body;
 const gettingUser = await UserData.findOne({email});
  if(!gettingUser) res.status(404).json({msg:"user not found"});
  const verifypsw = bcrypt.compare(psw,gettingUser.psw);
  if(!verifypsw) res.status(400).json({msg:"wrong password"});
  const jwt = JWT.sign({id:gettingUser._id},process.env.SECRET_KEY,{expiresIn:"1d"});
  if(gettingUser.role =="Director"){
 const [  students,
      teachers,
      officeStaff,
      guardians,
      admissions,
      subjects,
      attendance,
      fees] = await Promise.all([StudentData.find().populate('user_id'),
      teacherData.find().populate('user_id'),
      OfficeStaffData.find().populate('user_id'),
      GuardianData.find().populate('user_id'),
      addmissionData.find()
        .populate('student_id')
        .populate('guardian_id')
        .populate('year_level_id')
        .populate('school_year_id'),
      SubjectData.find(),
      StudentAttendanceData.find()
        .populate('student_id')
        .populate('teacher_id')
        .populate('year_level_id')
        .populate('school_year_id'),
      FeeRecData.find()
        .populate('student_id')
        .populate('fee_record_yearlevelfee.yearlevelfee_id')])

 res.status(201).json({msg:"success",jwt,user:gettingUser,alldata:{students,
      teachers,
      officeStaff,
      guardians,
      admissions,
      subjects,
      attendance,
      fees}})
  }
   else if(gettingUser.role =="Teacher"){
 res.status(201).json({msg:"success",jwt,user:gettingUser})
  }
   else if(gettingUser.role =="Student"){
 res.status(201).json({msg:"success",jwt,user:gettingUser})
  }
  else{
   res.status(201).json({msg:"success",jwt,user:gettingUser})
  }
  
  res.status(201).json({msg:"success",jwt,user:gettingUser})
  
} catch (error) {
   res.status(500).json({msg:"unsuccess",err:error.message})
}

}