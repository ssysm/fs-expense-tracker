handler = (req,res,err,docs)=>{
    if(err){
        res.status(500).json({
            success:false,
            response:err
        })
    }else{
       if(!docs){
           res.status(404).json({
               success:false,
               response:docs
           })
       }else{
           res.status(200).json({
               success:true,
               response:docs
           })
       }
    }
};

module.exports = handler;