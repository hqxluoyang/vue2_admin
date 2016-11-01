var express = require('express');
var router = express.Router();
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

var backMsg = require('./backMsg')

/**读取主页列表**/
router.post('/uploadImage' ,multipartMiddleware , backMsg.save);

module.exports = router;
