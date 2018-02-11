const Post = require('../../models/Post');
//Get Post by page&limit
//@method:GET
//@query:page,limit
//@return:JSON Array
list = (req,res)=>{
    const {page,limit} = req.query;
    Post.find({},["title","summary"],(err,docs)=>{
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