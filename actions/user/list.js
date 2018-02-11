const User = require('../../models/User');
//Get User by page&limit
//@method:GET
//@query:page,limit
//@return:JSON Array
list = (req,res)=> {
    const {page,limit} = req.query;
    User.find({},[],(err,docs)=>{
        if(err){
            res.status(500).json({success:false,response:err})
        }else{
            const result = docs.slice(limit*(page-1),limit*(page-1)+limit);
            res.status(200).json({
                success:true,
                response:result
            })
        }
    })
};

module.exports = list;