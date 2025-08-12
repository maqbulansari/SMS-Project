const RoleData = require("../model/Role.js");

exports.CreateRole = async (req,res) => {
    try {
        const {name} = req.body
        const createRole = await RoleData.create({name})
        res.status(201).json({msg:"success",data:createRole})
    } catch (error) {
         res.status(500).json({msg:"unsuccess role already exist"})
    }
}