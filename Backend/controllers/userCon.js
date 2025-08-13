require("dotenv").config()
const UserData =require("../model/User.js");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const RoleData = require("../model/Role.js")
const StudentData = require("../model/Student.js");
const TeacherData = require("../model/Teacher.js");
const GuardianData = require("../model/Guardian.js");
const OfficeStaffData = require("../model/OfficeStaff.js");


exports.LoginUser = async(req,res)=>{
try {
 const {email,psw} = req.body;
 const gettingUser = await UserData.findOne({email});
  if(!gettingUser) return res.status(404).json({msg:"user not found"});
  const verifypsw = bcrypt.compare(psw,gettingUser.psw);
  if(!verifypsw) return res.status(400).json({msg:"wrong password"});
  const role = await RoleData.findOne({ _id:gettingUser.role})
  const jwt = JWT.sign({id:gettingUser._id},process.env.SECRET_KEY,{expiresIn:"1d"});
   

  if(role.name == "Director") {
    const students = await StudentData.countDocuments();
    const teachers = await TeacherData.countDocuments();
    const guardians = await GuardianData.countDocuments();
    const officeStaff = await OfficeStaffData.countDocuments();
    
    return res.status(201).json({msg:"success",jwt,user:gettingUser,role:role.name,totalcount:{students,teachers,guardians,officeStaff}})};

  res.status(201).json({msg:"success",jwt,user:gettingUser,role:role.name});
  
  
} catch (error) {
  res.status(500).json({msg:"unsuccess",err:error.message})
}

}
