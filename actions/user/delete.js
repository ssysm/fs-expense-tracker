const mongoose = require('mongoose');
const Post = require('../../models/Post');
const {handler} = require('../../common');
//Delete User based on Object Id
//@method:DELETE
//@body:uid
//@return:JSON Object
deleteUser = (req,res)=>{
    const {uid} = req.body;
    Post.remove({
        _id:mongoose.Types.ObjectId(uid)
    },(err,docs)=>{
        handler(req,res,err,docs)
    })
};

module.exports= deleteUser;