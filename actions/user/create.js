const User = require('../../models/User');
const bcrypt = require('bcrypt-nodejs');
const {handler}  = require('../../common/dbRestHandler');
//Create User
//@method:POST
//@body:username,password,admin
//@return:JSON Object
createUser = (req,res)=>{
    const { username,password,admin} = req.body;
    const data = { username,password:bcrypt.hashSync(password),admin};
    console.log('123');
    User.create(data,["username,admin"],(err,docs)=>{
        handler(req,res,err,docs)
    })
};

module.exports = createUser;