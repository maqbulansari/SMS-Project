require("dotenv").config()
const UserData =require("../model/User.js");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken")


exports.LoginUser = async(req,res)=>{
try {
 const {email,psw} = req.body;
 const gettingUser = await UserData.findOne({email});
  if(!gettingUser) res.status(404).json({msg:"user not found"});
  const verifypsw = bcrypt.compare(psw,gettingUser.psw);
  if(!verifypsw) res.status(400).json({msg:"wrong password"});
  const jwt = JWT.sign({id:gettingUser._id},process.env.SECRET_KEY,{expiresIn:"1d"});
  res.status(201).json({msg:"success",jwt,data:gettingUser})
  
} catch (error) {
   res.status(500).json({msg:"unsuccess",err:error.message})
}

}