var express = require('express');
var router = express.Router();
const {create,login,info,status,list,deleteUser,update}  = require('../actions/user');
const {checkAdminExpress} = require('../actions/guard');

router.post('/login',login);

router.post('/create',checkAdminExpress,create);

router.get('/info',info);

router.get('/status',status);

router.get('/list',checkAdminExpress,list);

router.delete('/delete',checkAdminExpress,deleteUser);

router.patch('/update',checkAdminExpress,update);

module.exports = router;
