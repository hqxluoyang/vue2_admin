var mainlist = require('../module/mainlist.js')
var url = require('url');
var querystring = require("querystring")
var pageData = require("./pageData")

var mainlist_buffer = require('./mainlist_buffer')
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

function findHotList (list) {
    var arr = [];
    for(var i = 0 ; i<list.length ; i++){
       if(list[i]['hot'] && list[i]['release']){
            arr.push(list[i]);
       }
    }

    var d = sortData(arr);

    return d;

}

function findMainList (list , code) {
    var arr = [];
    for(var i = 0 ; i<list.length ; i++){
       if(list[i]['type'] == code && list[i]['release']){
            arr.push(list[i]);
       }
    }

    var d = sortData(arr);

    return d;
}


function _findAndSave (req , res , json){
   
    mainlist.find(json , function(err , doc){
        if(err){
            res.send('')
        }else{
            var d = sortData(doc);
            res.send(d)
            console.log("读取 mainlist数据成功")
            mainlist_buffer.set_mainlist_buffer();
        }
    })
}

module.exports.getlist = function(req , res){
    
    var urlParam = url.parse(req.url);
    var json = querystring.parse(urlParam.query);
    var obj = {};
    if(json.code){
        obj['type'] = json.code;
        obj['release'] = true;
    }else{
         _findAndSave(req , res , obj);
         return ;
    }

    redis.getJSON('mainlist_buffer' , function(err , obj){
        if(!obj){
            _findAndSave(req , res , obj)
        }else{
            var data = findMainList(obj , json.code);
            console.log("从缓存里面读取 mainlist 数据:" , obj)
            res.send(data)    
        }
    })
}

module.exports.hotspot = function(req , res){
    
    var urlParam = url.parse(req.url);
    var json = querystring.parse(urlParam.query);
    var obj_list = {hot:true ,release:true}

    redis.getJSON('mainlist_buffer' , function(err , obj){
        if(!obj){
            _findAndSave(req , res , obj_list)
        }else{
            var data = findHotList(obj);
            res.send(data)    
        }
    })
}

module.exports.remove = function(req , res){
    var urlParam = url.parse(req.url);
    var json = querystring.parse(urlParam.query);
    
    mainlist.remove({code:json.code} ,  function(err){
        if(err){
            res.send('fail')
        }else{
          
            res.send('succ')
            mainlist_buffer.set_mainlist_buffer();
        }
    })
}

module.exports.setlist = function(req , res){
    
    var json = req.body;

    delete json.template;
    mainlist.updateById({code:json.code} ,json ,  function(err , doc){
    	console.log("error:error:" , err)
        if(err){
            res.send("fail")
        }else{
            res.send({})

            mainlist_buffer.set_mainlist_buffer();
        }

    })
}

