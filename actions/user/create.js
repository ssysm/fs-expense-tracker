const User = require('../../models/User');
const bcrypt = require('bcrypt-nodejs');
const {handler}  = require('../../common/');
//Create User
//@method:POST
//@body:username,password,admin
//@return:JSON Object
createUser = (req,res)=>{
    const { username,password,admin} = req.body;
    const data = { username:username,password:bcrypt.hashSync(password),admin:admin};
    User.create(data,(err,docs)=>{
        handler(req,res,err,docs)
    })
};

module.exports = createUser;