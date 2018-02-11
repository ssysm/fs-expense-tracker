const jwt = require('jsonwebtoken');
//Decode JWT
//@method:Middleware
//@cookie:token
decodeJWT = (token)=>{
    if(!token){
        return false
    }else{
        jwt.verify(token, require('../config').jwtSecret, function(err, decoded) {
            if(err){
                return false;
            }else{
                return decoded
            }
        });
    }
};

module.exports = decodeJWT;