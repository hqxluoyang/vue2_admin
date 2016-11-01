/*******
	date : 2016-04-01
	author : sailing
	function : 一些公共的方法
*******/

module.exports = {
	isEmpty : function(obj){
		for(var i in obj){
			return false;
		}

		return true;
	}
}