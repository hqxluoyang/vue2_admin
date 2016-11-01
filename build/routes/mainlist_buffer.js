/******
	date : 2016-04-13
	author : sailing
	function : '主页列表做缓存'
	name : mainlist_buffer         //redis 标识字段
********/

var mainlist = require('../module/mainlist.js')
var redis = require('../module/redis.js')

module.exports.set_mainlist_buffer = function(){
    
    mainlist.find({} ,  function(err , data){
        
        if(err){
        	console.log("读取maillist 错误" , err)
        }else{
           console.log("设置 main-buffer缓存")
           redis.setJSON('mainlist_buffer' , data , function(){})
        }
    })
}


module.exports.setRedis = function(data){
	redis.setJSON('mainlist_buffer' , data , function(){})
}