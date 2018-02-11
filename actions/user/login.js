const jwt = require('jsonwebtoken');
const bcrypt =require('bcrypt-nodejs');
const User = require('../../models/User');
//Log User In
//@method:POST
//@body:username,password
//@return:@cookie:token
login = (req,res)=>{
    const {username,password} = req.body;
    User.findOne({
        username:username
    },(err,docs)=>{
        if(err){
            res.status(500).json({
                success:false,
                response:err
            })
        }else{
            if(!bcrypt.compareSync(password,docs.password)||!docs){
                res.status(403).json({
                    success:false,
                    response:"no match record"
                })
            }else{
                res.status(200).cookie(
                    'token',
                    jwt.sign({
                        username:docs.username,
                        admin:docs.admin,
                        uid:docs._id
                    },require('../../config').jwtSecret)
                    , {
                        httpOnly: true
                    }).json({
                    success:true
                })
            }
        }
    })
};

module.exports = login;