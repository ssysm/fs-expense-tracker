const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const User = require('../../models/User');
const {handler} = require('../../common/');
//Update User
//@method:PATCH
//@body:uid,username,password,admin
//@return:JSON Object
update = (req,res)=>{
    const {uid,username,password,admin} = req.body;
    const data = {
        username,
        password:bcrypt.hashSync(password),
        admin
    };
    User.update({
        _id:mongoose.Types.ObjectId(uid)
    },data,(err,docs)=>{
        handler(req,res,err,docs)
    })
};
module.exports = update;