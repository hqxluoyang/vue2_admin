var template = require('../module/template.js')
var url = require('url');
var querystring = require("querystring")
var redis = require('../module/redis.js')
var fs = require('fs')
var saveImg = require('./saveImg.js')
var parseHTML = require('./parseHTML')

var getFromMongo = function(json , res){
    template.findByName({code:json.code} , function(err , doc){
        
        if(doc){
            res.send(doc.template)
            redis.set(json.code , doc.template , function(err , msg){
                console.log("保存模板到 redis:" , err)
            })
           // console.log("error:error:" , doc.template)
        }else{
            res.send("not found !")
        }
    })
}

var getFromRedis = function(){
    
}

var saveToTemplate = function(){
    
}

module.exports.getlist = function(req , res){
	template.find({} , function(err , doc){
    	//console.log("error:error:" , doc.template)
    	if(err){
    		res.send('')
    	}else{
    		res.send(doc)
    	}
    })
}

module.exports.getTemplate = function(req , res){
	var urlParam = url.parse(req.url);
	var json = querystring.parse(urlParam.query);

    redis.get(json.code , function(err , data){
        console.log("读取 redis：" , err , data , json.name)
        if(!data){
            console.log("读取 redis失败")
            getFromMongo(json , res);
        }else{
            console.log("redis 读取数据成功!!!!!!!:")
            res.send(data)
        }
    })
	
}

module.exports.allTemplate = function(req , res){
    template.find({} ,  function(err , data){
      //  console.log("all template：" , data)

        if(err){
            res.send('error');
        }else{
            res.send(data);
        }
    })
}

module.exports.savepage = function(req , res){
	//var urlParam = url.parse(req.url);
	//var json = querystring.parse(urlParam.query);
	

    var parseStr = parseHTML(req.body.template)

    saveImg(parseStr.imgArr)

    var obj = {
        title:req.body.title,
        code: req.body.code,
        template:parseStr.html
    }
    
    template.updateById({code:req.body.code} ,obj ,  function(err){
    
        if(!err){
             redis.set(obj.code , obj.template , function(err , msg){
                console.log("保存模板到 redis:" , obj.name)
            })
        }
       
    })
	
	res.send('succ')
}

