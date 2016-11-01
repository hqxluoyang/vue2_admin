/**
	 * Date:2016-3-2
	 * 主要是对用户点赞的记录
**/

var mainlist = require('../module/mainlist.js')
var url = require('url');
var querystring = require("querystring")
var mainlist_buffer = require('./mainlist_buffer')


module.exports = function(req , res){
	var urlParam = url.parse(req.url);
	var json = querystring.parse(urlParam.query);
	
	mainlist.updata({code:json.code} , function(err , doc , that){
		if(doc){
			if(json.praise){
				if(doc['praise']){
					doc['praise'] = doc['praise'] + 1 ;
				}else{
					doc['praise'] = 1 ;
				}
				
			}else{
				if(doc['noPraise']){
					doc['noPraise'] = doc['noPraise'] + 1 ;
				}else{
					doc['noPraise'] = 1 ;
				}
			}
			doc.save();
		}
	})

	res.send("succ")
}