/**
	date : 2016-04-19
	author : sailing
	function : 文章反馈的信息
**/

var mainlist = require('../module/mainlist.js')

module.exports = function (req , res){
	 mainlist.find({release:true} , function(err , doc){
	 	console.log("err:" , err)
        if(err){
            res.send([])
        }else{
            res.send(doc)
        }
    })
}