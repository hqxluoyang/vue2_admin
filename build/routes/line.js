/****
	date : 2016-03-22
	author: sailing
	function : '线的所有操作'
*****/

var feedbackLine = require('../module/line');
var url = require('url');
var querystring = require("querystring");

module.exports.getLine = function(req , res){
	
	feedbackLine.find({} , function(err , doc){
    	//console.log("error:error:" , doc.template)
    	if(err){
    		res.send('')
    	}else{
    		res.send(doc);
    		console.log("读取 box 列表")
    	}
    })
}

module.exports.setLine = function(req , res){
	//var urlParam = url.parse(req.url);
	//var json = querystring.parse(urlParam.query);

    var json = req.body;
   // console.log("保存线:" , json)
    console.log("json start end:" , json.start , json.end)
    json['sx'] = json.start[0]; 
    json['sy'] = json.start[1];
    json['ex'] = json.end[0];
    json['ey'] = json.end[1];
    delete json._id;
    delete json.start;
    delete json.end;


    feedbackLine.updateById({code:json.code} ,json ,  function(err , doc){
        if(err){
            res.send("fail")
        }else{
            res.send("succ")
        }
    })
}

module.exports.delLine = function(req , res){
    var urlParam = url.parse(req.url);
    var json = querystring.parse(urlParam.query);

    feedbackLine.remove({code:json.code} , function(err , doc){
        if(err){
            res.send("fail")
        }else{
            res.send("succ")
        }
    })
} 