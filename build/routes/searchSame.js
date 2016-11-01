/*******
	date : 2016-04-14
	author : sailing
	function : 相邻问题的搜索
**********/


module.exports = function (str , arr) {
	var strArr = str.split(' ');
	var place = 0;
	var showArr = [];
	for(var i=0 ; i<arr.length ; i++){
		place = 0;
		for(var j=0 ; j<strArr.length ; j++){
			if(arr[i].match(strArr[j])){
				
				place = place + 1 ;
				if(place == 1){
					showArr.push(arr[i]) ;
				}

			}
		}

		arr[i]['place'] = place ;
	}
	console.log("搜索到的相邻的问题:" , showArr)
	return showArr ;

}