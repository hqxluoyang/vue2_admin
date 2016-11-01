/********
	date : 2016-03-28
	author : sailing
	function :　闪传页面获取参数入口
**********/

var url = require('url');
var querystring = require("querystring")
var feedbackBox = require('../module/box');
var redis = require('../module/redis')
var feedbackLine = require('../module/line');
var boxBuffer = require('./boxBuffer');

function findMax (doc) {
	var newDoc ='';
     //console.log("doc root:" , doc[i]['root']  , doc.length)
	for(var i=0 ; i<doc.length ; i++){
		if(!newDoc){
			newDoc = doc[i]
			continue;
		} 
		if(doc[i]['root'] > newDoc['root']) newDoc = doc[i]

	}

    console.log("findMax root")
	return newDoc
}

function _getpage(req , res , code){
    feedbackBox.findByName({code:code} , function(err , doc){
        //console.log("error:error:" , doc.template)
        if(err){
            res.send('')
        }else{
            var list=doc['list']
            res.send(list);
            console.log("redis save:" , doc)
            redis.setJSON(code , doc);
        }
    })
}

function _getRoot(req , res){
    feedbackBox.find({} , function(err , doc){
        //console.log("error:error:" , doc.template)
        if(err){
            res.send([])
        }else{
            var newDoc = findMax(doc)
            res.send(newDoc['list']);
            redis.setJSON('set_hot_box' , newDoc)
        }
    })
}

module.exports.getRoot = function(req , res){
    var urlParam = url.parse(req.url);
    var json = querystring.parse(urlParam.query);

    redis.getJSON('set_hot_box' , function(err , doc){
        if(!doc){
            _getRoot(req , res)
        }else{
            console.log("getPage 从redis缓存读出数据:")
            res.send(doc['list'])    
        }
    })
}

/*
module.exports._getRoot = function(req , res){
	var urlParam = url.parse(req.url);
	var json = querystring.parse(urlParam.query);
   
	feedbackBox.find({} , function(err , doc){
    	//console.log("error:error:" , doc.template)
    	if(err){
    		res.send('')
    	}else{
    		var newDoc = findMax(doc)
            boxBuffer.root = newDoc;
    		res.send(newDoc['list']);
    	}
    })
}

*/

module.exports.getPage = function(req , res){
	var urlParam = url.parse(req.url);
	var json = querystring.parse(urlParam.query);
    
    redis.getJSON(json.linkTo , function(err , obj){
        if(!obj){
            _getpage(req , res , json.linkTo)
        }else{
            console.log("getPage 从redis缓存读出数据:" , obj['list'])
            res.send(obj['list'])    
        }
    })
}

module.exports.clear = function(req , res){
   // return
    /*
	feedbackBox.remove({} , function(err , doc){
    	//console.log("error:error:" , doc.template)
    	if(err){
    	//	res.send('')
    	}else{
    	//	res.send(doc);
    	
    	}
    })

    feedbackLine.remove({} , function(err , doc){
    	//console.log("error:error:" , doc.template)
    	if(err){
    	//	res.send('')
    	}else{
    	//	res.send(doc);
    	}
    })
    */

    res.send('');
}