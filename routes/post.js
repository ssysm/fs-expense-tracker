const express = require('express');
const router = express.Router();
const {checkAdminExpress} = require('../actions/guard');
const {create,deletePost,detail,list} = require('../actions/post');

router.post('/create',checkAdminExpress,create);

router.get('/list',list);

router.get('/detail',detail);

router.delete('/delete',checkAdminExpress,deletePost);

module.exports= router;