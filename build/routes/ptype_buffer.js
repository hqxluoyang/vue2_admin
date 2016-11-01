/*******
	date : 2016-04-13
	author : sailing
	function : 类型管理的缓存
	name : 'ptype_buffer'   //缓存字段的值

**********/

var pType = require('../module/pType.js')
var redis = require('../module/redis.js')

module.exports.set_ptype = function(){
    
    pType.find({} ,  function(err , data){
        
        if(err){
        	console.log("读取ptype错误")
        }else{
           console.log("设置 pType缓存:" , data)
           redis.setJSON('ptype_buffer' , data , function(){})
        }
    })
}


module.exports.setRedis = function(data){
    console.log("shezhi pType缓存 xxxxxxx")
	redis.setJSON('ptype_buffer' , data , function(){})
}
