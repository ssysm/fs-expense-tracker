const jwt = require('jsonwebtoken');
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
            if(err){
                res.status(403).json({
                    success:false
                })
            }else{
                res.status(200).json({
                    success:true,
                    response:decoded
                })
            }
        });
    }
};
module.exports = status;