const mongoose = require('mongoose');
const User = require('../../models/User');
const {handler} = require('../../common');
//Delete User based on Object Id
//@method:DELETE
//@body:uid
//@return:JSON Object
deleteUser = (req,res)=>{
    const {uid} = req.body;
    User.remove({
        _id:mongoose.Types.ObjectId(uid)
    },(err,docs)=>{
        handler(req,res,err,docs)
    })
};

module.exports= deleteUser;