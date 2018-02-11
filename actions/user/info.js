const mongoose  = require('mongoose');
const User = require('../../models/User');
const {handler} = require('../../common/');
//Get User Info
//@method:GET
//@query:uid
//@return:JSON Object
info = (req,res)=>{
    const {uid} = req.query;
    User.findOne({
        _id:mongoose.Types.ObjectId(uid)
    },["username","admin"],(err,docs)=>{
        handler(req,res,err,docs)
    })
};

module.exports = info;