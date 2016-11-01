/*******
   date :　2016-03-31
   author : sailing
   function : 所有用户的意见反馈数据
*******/
var Config = require('./config')
var url = require('url');
var querystring = require("querystring");


module.exports.save = function(req , res){ 

	var obj = req.body;
	console.log("提交反馈 start ............")
	
	res.send('{}');
}

module.exports.get = function(req , res){

}