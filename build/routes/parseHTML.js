var Config = require('./config')


function guidGenerator(){
	var s4 = function(){
		return(((1+Math.random())*0x10000)|0).toString(16).substring(1);
	}
	return(s4() + s4() +"-" + s4() +"-" + s4() +"-" + s4() +"-" + s4() +"-" + s4()  + s4()  )
}

function getType (str) {
	var type=""
	var flag = "";
	if(str.indexOf("data:image/png") > 0){
		var type = ".png";
		var flag = "data:image/png" ;
	}else{
		var type = ".jpg"
		var flag = "data:image/jpeg" ;
	}

	return {
		type:type,
		flag:flag
	}
}

function getImage(str , flag){
	var name = guidGenerator();
	var first = str.substr(0 , str.indexOf(flag.flag))
	//var imgHtml = "<img src =./upload/" + name + flag.type;
	//var imgHtml = "<img " + first + "./upload/" + name + flag.type + '"';
	var imgHtml = "<img " + first + Config.DDNS + "/" + name + flag.type + '"';
	console.log("")
	var temp = str.substr(str.indexOf(flag.flag))
	var img = temp.substr(0 , temp.indexOf('"'))
	imgHtml = imgHtml + temp.substr(temp.indexOf('"') + 1)

	console.log("imgHtml*************:" , imgHtml)
	return {
		html:imgHtml,
		img:{
			name:name,
			img:img,
			type:flag.type
		}
	}
}

module.exports = function(htmlstr){
	var html = htmlstr.split("<img");
	var outHTML = "";
	var imgArr = [];
	console.log("start*************************:" , html)
	for(var i=0 ; i<html.length ; i++){
		var flag = getType(html[i]);
		if(html[i].indexOf(flag.flag) != -1){
			var getHtml = getImage(html[i] , flag)
			outHTML = outHTML + getHtml.html;
			imgArr.push(getHtml.img)
		}else{
			if(i > 0){
				outHTML = outHTML + '<img' + html[i]
			}else{
				outHTML = outHTML + html[i] ;
			}
			
		}
	}

	return {
		html:outHTML,
		imgArr:imgArr
	}
}