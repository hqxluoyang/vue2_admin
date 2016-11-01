/***
  date : 2016-03-22
  author : sailing
  function : '获得模块列表'
**/

var box = require('./box')
var line = require('./line')

var feedback = {};

function testList () {
	return [{
		name:'mod',
		code:'dfessafe',
		left:400,
		top:200,
		z:400,
		list:[{
			title:'黑屏',
			code:'ddddse',
			linkTo:''
		}]
	}]
}


function testLine () {
	return [{
		name:'xian',
		start : [x , y],
		end : [x, y],
		from : 'dfea',
		code : 'hiji',
		rowCode : 'jik',
		to:'sdfe'
	}]
}

module.exports.getBoxlist = function(req , res){
	
	mainlist.find({} , function(err , doc){
    	//console.log("error:error:" , doc.template)
    	if(err){
    		res.send('')
    	}else{
            var data = sortData(doc);
            pageData.data = data;
    		res.send(data)
    	}
    })
}

module.exports.getLine = function(req , res){
	var data = testLine();
	console.log("获得box列表并且发送")
	res.send(data);
}		