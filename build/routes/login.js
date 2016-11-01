/**
	date : 2016-04-20
	author : sailing
	function : 登陆界面
**/

var url = require('url');
var querystring = require("querystring");

var user = [{
	user : 'user',
	password : '55c1b712421058e961abfdee522155d6'   //andoumiao
},{
	user : 'admin',
	password : '0ff37d7e865898b2b8c09e24d39259cd'   //andoumiao
}]


module.exports = function(req , res){
	var urlParam = url.parse(req.url);
	var json = querystring.parse(urlParam.query);
	var password = '0ff37d7e865898b2b8c09e24d39259cd';

	for(var i=0 ; i<user.length ; i++){
		if(user[i]['user'] == json.user){
			if(json['password'] == user[i]['password']){
				res.send({flag:true})
				return ;
			}
		}
	}
	

	res.send({flag:false})
}