/****
	date : 2016-03-22
	author: sailing
	function : '列表的所有操作'
*****/

var feedbackBox = require('../module/box');
var boxList = require('../module/boxList');
var redis = require('../module/redis');
var url = require('url');
var querystring = require("querystring");
var boxBuffer = require('./boxBuffer');

function findMax(docc , docArr) {
    for(var i = 0 ; i<docArr.length ; i++){
        if(docc['hot'] > docArr[i]['hot']){
            return true
        }
    }

    return false
}

function searchHot (docc) {
    feedbackBox.find({} , function(err , doc){
        //console.log("error:error:" , doc.template)
        if(err){
            
        }else{
           if(findMax(docc , doc)){
                redis.setJSON('set_hot_box' , doc)
           }
        }
    })
}


module.exports.getBox = function(req , res){
    
	feedbackBox.find({} , function(err , doc){
    	//console.log("error:error:" , doc.template)
    	if(err){
    		res.send('')
    	}else{
    		res.send(doc);
           // boxBuffer.arrToObj(doc);
    		//console.log("读取 box 列表:" , doc[0].list)
    	}
    })
}

module.exports.add = function(req , res){
	//var urlParam = url.parse(req.url);
	//var json = querystring.parse(urlParam.query);
	var json = req.body
    feedbackBox.updateById({code:json.code} ,json ,  function(err , doc){
        if(err){
            console.log("添加BOX参数出现错误:" , err);
            res.send("fail")
        }else{
            //boxBuffer.setBox(json.code , doc);
            redis.setJSON(json.code , doc)
            res.send("succ")
        }
    })
}

module.exports.setHot = function(req , res){

    var json = req.body
    feedbackBox.updateById({code:json.code} ,json ,  function(err , doc){
        if(err){
            console.log("添加BOX参数出现错误:" , err);
            res.send("fail")
        }else{
            //boxBuffer.setBox(json.code , doc);
            redis.setJSON('set_hot_box' , doc)
            res.send("succ")
        }
    })
}

module.exports.setBox = function(req , res){
	var json = req.body ;

	feedbackBox.updateSet({code:json.code} ,json , function(err , doc){
        if(err){
            console.log("修改BOX参数错误:" , err)
        }else{
            console.log("redis==== setBox")
            redis.setJSON(json.code , doc)
            searchHot(doc);
        }
        
    })
	res.send("succ")
}
