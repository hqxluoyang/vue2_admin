/**********
	date : 2016-04-18
	author : sailing
	function : 用户对问题的描述的评价
***********/
var mainlist = require('../module/mainlist.js')

module.exports = function(req , res){
	var json = req.body;
	mainlist.updata({code:json.code} , function(err , doc , that){
		if(doc){
			if(json.type == 1){
				if(doc['noSolve']){
					doc['noSolve'] = doc['noSolve'] + 1 ;
				}else{
					doc['noSolve'] = 1 ;
				}

				console.log("doc:" , doc['noSolve'])
			}else if(json.type == 2){
				if(doc['noGoodUse']){
					doc['noGoodUse'] = doc['noGoodUse'] + 1 ;
				}else{
					doc['noGoodUse'] = 1 ;
				}

			}else if(json.type == 3){
				if(doc['noDescrip']){
					doc['noDescrip'] = doc['noDescrip'] + 1 ;
				}else{
					doc['noDescrip'] = 1 ;
				}

			}else if(json.type == 4){
				if(doc['noRule']){
					doc['noRule'] = doc['noRule'] + 1 ;
				}else{
					doc['noRule'] = 1 ;
				}

			}
			doc.save(function(err , d){
				console.log("保存修改 :" , err , d['noSolve'])
			});
		}
	})

	res.send("succ")
}