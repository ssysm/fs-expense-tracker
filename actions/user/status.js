const jwt = require('jsonwebtoken');
const {handler} = require('../../common');
//Get Current User Status
//@method:GET
//@cookie:token
//@return:Json Object
status = (req,res) => {
    if(!req.cookies.token){
        res.status(401).json({
            success:false
        })
    }else{
        jwt.verify(req.cookies.token, require('../../config').jwtSecret, function(err, decoded) {
            handler(req,res,err,decoded)
        });
    }
};
module.exports = status;