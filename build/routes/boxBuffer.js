/*******
	date : 2016-03-31;
	author : sailing
	function : 对意见意见反馈做缓存处理
********/

function getObj(){
	return {
		title:'',
		template:'',
		praise:'',
		place:'',
		noPraise:''
	}
}

module.exports ={
	data:{},
	root : '',

	objToArr : function(){
		var arr = [];
		for(var i in this.data){
			arr.push(this.data[i]);
		}

		return arr
	},

	arrToObj : function(doc){
		for(var i=0 ; i<doc.length ; i++){
			this.data[doc[i]['code']] = doc[i];
		}
	},

	copyObj : function(code , obj){
		for(var i in obj){
			this.data[code][i] = obj[i];
		}
	},

	getBox : function(code){
		return this.data[code];
	},

	setRoot : function(doc){
		var newDoc ='';
     //console.log("doc root:" , doc[i]['root']  , doc.length)
		for(var i=0 ; i<doc.length ; i++){
			if(!newDoc){
				newDoc = doc[i]
				continue;
			} 
			if(doc[i]['root'] > newDoc['root']) newDoc = doc[i]

		}

		if(newDoc){
			this.root = newDoc ; 
		}
	},

	setBox : function(code , obj){
		if(this.data[code]){
			this.copyObj(code , obj)
		}else{
			this.data[code] = obj;
		}

		this.setRoot(this.data);
	}
}
