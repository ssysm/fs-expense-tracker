const mongoose = require('mongoose');
const Post = require('../../models/Post');
const {handler} = require('../../common');
//Delete Post Based on Object Id
//@method:DELETE
//@body:uid
//@return:JSON Object
deletePost = (req,res)=>{
    const {uid} = req.body;
    Post.remove({
        _id:mongoose.Types.ObjectId(uid)
    },(err,docs)=>{
        handler(req,res,err,docs)
    })
};

module.exports = deletePost;