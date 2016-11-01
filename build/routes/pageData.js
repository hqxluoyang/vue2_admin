/**
	date:2016-3-3
	Function:缓存了主页列表的数据
**/

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
	data:[],

	set:function(options){
		console.log("start save data:",options)
		for(var i=0 ; i< this.data.length ; i++){
			console.log("start save data:", this.data[i].title)
			if(options.title == this.data[i].title){
				
				var tempObj = getObj();

				for(var key in tempObj){
					if(options[key]){
						console.log("save key**********:" , key)
						this.data[i][key] = options[key]
					}
				}
				return ;
			}
			
		}
		
		this.data.push(options);

	},
	changePlace: function(title1 , title2){
		var currentIndex = 0;
		var otherIndex = 0;

		for(var i=0 ; i<this.data.length ; i++){
			console.log("this.data:" , this.data[i])
			if(this.data[i].title == title1) currentIndex = i;
			if(this.data[i].title == title2) otherIndex = i;
		}

		var place = this.data[currentIndex].place
		this.data[currentIndex]['place']= this.data[otherIndex].place;
		this.data[otherIndex]['place']= place;

		this.sortData();
		return
	},

	remove: function(obj){
		for(var i=0 ; i< this.data.length ; i++){
			if(obj.title == this.data[i].title){
				
				this.data.splice(i , 1)
				return ;
			}
			
		}
	},

	sortData: function(){
		this.data.sort(function(o1,o2){
                if(o1.place === o2.place){
                    return 0;
                }else if(o1.place < o2.place){
                    return -1;
                }else{
                    return 1;
                }
                    
     	});
	},

	get:function(){
		return this.data;
	},

	setAll: function(data){
		this.data = data;
	}
}
