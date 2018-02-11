const jwt = require('jsonwebtoken');
//Check Admin
//@method:Middleware
//@cookie:token
checkAdmin = (req,res,next)=>{
    if(!req.cookies.token){
        res.status(403).json({
            success:false
        })
    }else{
        jwt.verify(req.cookies.token, require('../../config').jwtSecret, function(err, decoded) {
            if(err){
                res.status(403).json({
                    success:false
                })
            }else{
                if(decoded.admin){
                    next();
                }else{
                    res.status(403).json({
                        success:false
                    })
                }
            }
        });
    }
};

module.exports = checkAdmin;