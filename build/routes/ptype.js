var pType = require('../module/pType.js')
var url = require('url');
var querystring = require("querystring")

var ptype_buffer = require('./ptype_buffer')
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

function _getptypelist (req , res){
	pType.find({} , function(err , doc){
    	if(err){
    		res.send('')
    	}else{
            var data = sortData(doc)
    		res.send(data)
            ptype_buffer.setRedis(data)
    	}
    })
}


module.exports.get_list = function(req , res){
    console.log("get_ptype list : ")
     redis.getJSON('ptype_buffer' , function(err , obj){
        if(!obj){
            _getptypelist(req , res)
        }else{
            console.log("getPage 从redis缓存读出数据:")
            var data = sortData(obj)
            res.send(data)    
        }
    })
}

module.exports.remove_list = function(req , res){
    var urlParam = url.parse(req.url);
    var json = querystring.parse(urlParam.query);
    
    pType.remove({code:json.code} ,  function(err){
        console.log("error:error:" , err)

        if(err){
            res.send('fail')
        }else{
         //   pageData.remove({title:json.title})
            res.send('succ')
            ptype_buffer.set_ptype();
        }
    })
}

module.exports.set_list = function(req , res){
    
    var json = req.body;

    pType.updateById({code:json.code} ,json ,  function(err , doc){
    	console.log("error:error:" , err)
        if(err){
            res.send("fail")
        }else{
            res.send("succ")
            ptype_buffer.set_ptype();
        }

    })
}

