/***
	date: 2016-3-3;
	Function:调整主页列表的顺序
***/

var mainlist = require('../module/mainlist.js')
var url = require('url');
var querystring = require("querystring")
var pageData = require("./pageData")
var mainlist_buffer = require('./mainlist_buffer')

function setMongo(param , res){
	mainlist.updataArr({code:{"$in" : [param.currentCode , param.otherCode]}} , function(err , doc){
		console.log("doc:" , err , doc , typeof doc , doc.length)

		if(doc && doc.length >=2){
			var place1 = doc[1].place;
			var place0 = doc[0].place;
			doc[1]['place'] = place0;
			doc[0]['place'] = place1;

			doc[0].save();
			doc[1].save();
			//pageData.changePlace(doc[0].code , doc[1].code)
			res.send({})
			mainlist_buffer.set_mainlist_buffer();
		}else{
			res.send('fail')

		}
		
	})

}

module.exports.upDown = function(req , res , flag){
	var param = {
		otherCode : req.body.otherCode,
		currentCode: req.body.currentCode
	}

	var data = {};

	setMongo(param , res);
}
