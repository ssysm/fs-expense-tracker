const mongoose = require('mongoose');
mongoose.connect(require('../config').database);
const schema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    summary:{
      type:String,
        require:true
    },
    tags:{
      type:Array
    },
    author_id:{
        type:String,
        required:true
    },
    created:{
        type:Date,
        default:Date.now()
    },
    file:{
        type:Array
    }
});

module.exports = mongoose.model('post',schema);