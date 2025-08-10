require("dotenv").config()
const UserData =require("../model/User.js");
const DirectorData = require("../model/Director.js")
const RoleData = require("../model/Role.js")
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken")

exports.Director = async(req,res)=>{
try {
  const file = req.file;
  const {psw,role,email} = req.body;
  console.log(req.file);
  const CheckingUser = UserData.findOne({email});
  if(CheckingUser) res.status(400).json({msg:"user Already exist please try login"})
    if (!file) {
      return res.status(400).json({ error: 'plese upload a file' });
    }
    const RoleId = await RoleData.findOne({name:{$in:role}});
    const salt = await bcrypt.genSaltSync(10);
    const hashpsw = await bcrypt.hash(psw,salt);
    const createdirector = await UserData.create({...req.body,psw:hashpsw,role:RoleId._id,user_pro:{
      filename: file.originalname,
      mimetype: file.mimetype,
      size: file.size,
      data: file.buffer,
    }});
    const director = await DirectorData.create({user_id:createdirector._id});
    const jwt = JWT.sign({id:createdirector._id},process.env.SECRET_KEY,{expiresIn:"1d"})
    res.status(201).json({msg:"success",jwt,data:createdirector,diData:director,})
} catch (error) {
     res.status(500).json({msg:"unsuccess",err:error.message})
}
}


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