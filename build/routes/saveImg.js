
var fs = require('fs')
var qiniuSave = require('./qiniuSave')

var saveImg = function(base64 , name , type){
	console.log("saveimg start ************************************")
	var base64Data = base64.replace(/^data:image\/\w+;base64,/, "");
  var dataBuffer = new Buffer(base64Data, 'base64');
  var path ="./public/upload/" + name + type;

  var key = name + type ;
    
  fs.writeFile(path ,dataBuffer ,  function(err){
      if(err){
        console.log("保存失败!" , name , err)
      }else{
        console.log("save imag succ &&&&&&&&&&&&&&&&&&&&&&&！" ,name);
        qiniuSave(key , path)
      }
  })
    
}

module.exports = function(imgArr){
	 for(var i = 0 ; i<imgArr.length ; i++){
	 	saveImg(imgArr[i].img , imgArr[i].name , imgArr[i].type);
	 }
}

