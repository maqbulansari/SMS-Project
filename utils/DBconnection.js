require("dotenv").config()
const mongoose = require("mongoose");

const  DBconnect = async()=>{
    try {
      await mongoose.connect(process.env.MONGODB_URL)
      console.log("connected to mongoDB");
      
    } catch (error) {
        console.log("failed to connect to mongoose",error);
        exit(1)
    }
}

module.exports = DBconnect

