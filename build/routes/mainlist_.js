var mainlist = require('../module/mainlist.js')
var url = require('url');
var querystring = require("querystring")
var pageData = require("./pageData")
var redis = require('../module/redis.js')

function sortData(data){
     data.sort(function(o1,o2){
                if(o1.place === o2.place){
                    return 0;
                }else if(o1.place < o2.place){
                    return -1;
                }else{
                    return 1;
                }
                    
     });

     return data
}

function _getmainlist (req , res) {
    mainlist.find({} , function(err , doc){
        //console.log("error:error:" , doc.template)
        if(err){
           if(res) res.send('')
        }else{
            var data = sortData(doc);
            redis.setJSON('mainlist' , data)
            if(res) res.send(data)
        }
    })
}

module.exports.getlist = function(req , res){

    redis.getJSON('mainlist' , function(err , obj){
        if(!obj){
            _getmainlist(req , res)
        }else{
            console.log("getPage 从redis缓存读出数据:" , obj['list'])
            res.send(obj['list'])    
        }
    })
	
}

module.exports.remove = function(req , res){
    var urlParam = url.parse(req.url);
    var json = querystring.parse(urlParam.query);
    
    mainlist.remove({title:json.title} ,  function(err){
        console.log("error:error:" , err)

        if(err){
            res.send('fail')
        }else{
            pageData.remove({title:json.title})
            res.send('succ')
        }
    })
}

module.exports.setlist = function(req , res){
	var urlParam = url.parse(req.url);
	var json = querystring.parse(urlParam.query);
	var obj = {
		title:json.title,
        place:json.place,
        praise:json.praise,
        noPraize:json.noPraize,
		template:json.template
	}
    

    mainlist.updateById({title:json.title} ,obj ,  function(err , doc){
    	console.log("error:error:" , err)
        if(err){
            res.send("fail")
        }else{
            _getmainlist();
            res.send("succ")
        }

    })
}

