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

		if(arr[i]['title'] == str) continue
      //  console.log("arr[i]['title'] == str :" , arr[i]['title'] == str , arr[i]['title'] , str)
		for(var j=0 ; j<strArr.length ; j++){
			//if(arr[i]['title'] && arr[i]['title'].match(strArr[j])){
			if(strArr[j] == '?') continue;
		//	console.log("search 字段:" , strArr[j])
            var reg = new RegExp(strArr[j] + '\\b');					
			if(arr[i]['title'] && reg.test(arr[i]['title'])){	
				place = place + 1 ;
				if(place == 1){
					showArr.push(arr[i]) ;
				}

			}
		}

		arr[i]['place'] = place ;
	}
	//console.log("搜索到的相邻的问题:" , showArr)
	return showArr ;

}