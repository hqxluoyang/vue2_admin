/********
	date : 2016-04-18
	author : sailing
	function:保存反馈问题的列表
**********/

var url = require('url');
var querystring = require("querystring");
var moment = require('moment');

var back_quest = require('../module/back_quest.js')

module.exports.set = function(req , res){
	
	var json = req.body ;
	json['date'] = moment().format('YYYY-MM-DD HH:mm:ss');
	console.log("提交问题:" , json)
	back_quest.save(json , function(err , doc , that){
		
	})

	res.send("succ")
}

module.exports.get = function(req , res){
	var urlParam = url.parse(req.url);
	var json = querystring.parse(urlParam.query);
	
	back_quest.find({code : json.code} , function(err , doc ){
		if(doc){
			res.send(doc);
		}else{
			res.send([]);
		}
	})
}