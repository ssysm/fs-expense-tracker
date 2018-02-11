const Post = require('../../models/Post');
const jwt = require('jsonwebtoken');
const {handler} = require('../../common');
//Create New Post
//@method:POST
//@body:title,content,summary,tags
create = (req,res)=>{
    const {title,content,summary,tags} = req.body;
    const data ={
        title,
        content,
        summary,
        tags,
        author_id: jwt.verify(req.cookies.token,require('../../config').jwtSecret).uid
    };
    Post.create(data,(err,docs)=>{
        handler(req,res,err,docs);
    })
};

module.exports = create;