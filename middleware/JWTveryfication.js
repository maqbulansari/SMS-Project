require("dotenv").config();
const JWT = require("jsonwebtoken");

const TokenVerift = (req,res,next)=>{
    const AuthHeader = req.headers.Authorization;

        if(AuthHeader){
            const token = AuthHeader.split("")[1];
           const user =  JWT.verify(token,process.env.SECRET_KEY,)
            req.user =user.id
            next();
        }
        else{
     res.status(400).json("you are not authorized")
        }
}
module.exports = TokenVerift