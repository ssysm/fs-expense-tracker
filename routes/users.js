var express = require('express');
var router = express.Router();
const {create,login,info,status,list,deleteUser}  = require('../actions/user');
const {checkAdminExpress} = require('../actions/guard');

router.post('/login',login);

router.post('/create',checkAdminExpress,create);

router.get('/info',info);

router.get('/status',status);

router.get('/list',checkAdminExpress,list);

router.delete('/delete',checkAdminExpress,deleteUser);

module.exports = router;
