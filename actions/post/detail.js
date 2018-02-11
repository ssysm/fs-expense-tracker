const mongoose = require('mongoose');
const Post = require('../../models/Post');
const {handler}  =require('../../common');
//Get Post Detail base on Object Id
//@method:GET
//@query:uid
//@return:JSON Object
detail = (req,res)=>{
    const {uid} = req.query;
    Post.findOne({
        _id:mongoose.Types.ObjectId(uid)
    },(err,docs)=>{
        handler(req,res,err,docs)
    })
};

module.exports = detail;