/*******
	date : 2016-04-14
	author : sailing
	function : 搜索管理
********/

var search = require('./search')
var redis = require('../module/redis.js')

function findMainList (list) {
    var arr = [];
    for(var i = 0 ; i<list.length ; i++){
       if(list[i]['release']){
            arr.push(list[i]);
       }
    }

    return arr;
}

function _findAndSave (req , res , json , searchTitle){
   
    mainlist.find(json , function(err , doc){
        if(err){
            res.send('')
        }else{
            var d = search(searchTitle , doc)
            res.send(d)
        }
    })
}

module.exports.get_list = function(req , res){
    var json = req.body;
  
    redis.getJSON('mainlist_buffer' , function(err , obj){
        if(!obj){
            _findAndSave(req , res , {release:true} , json.title)
        }else{
            var data = findMainList(obj);
            var d = search(json.title , data);
            res.send(d)    
        }
    })
}