/********
	date : 2016-04-14
	author :sailing
	function : 往qiniu上上传图片
**********/

var qiniu = require("qiniu");

function uptoken(bucket, key) {
  var putPolicy = new qiniu.rs.PutPolicy(bucket+":"+key);
  return putPolicy.token();
}

function uploadFile(uptoken, key, localFile) {
  var extra = new qiniu.io.PutExtra();
    qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
      if(!err) {
        // 上传成功， 处理返回值
        console.log(ret.hash, ret.key, ret.persistentId);       
      } else {
        // 上传失败， 处理返回代码
        console.log(err);
      }
  });
}

module.exports= function(key , filePath){
	qiniu.conf.ACCESS_KEY = 'cdEp_191sGvVAEuaqSbcNadWBf9u0GkY6kXklJlW';
	qiniu.conf.SECRET_KEY = 'CDkLsowd0bg0mK6uGYEjG3XlB5WzJqgbZfkYjaCU';
	var bucket = 'faq-img';
	var token = uptoken(bucket, key);
	console.log("start xxxxxxxxxxxxxxxxxxxxxxxxxxxx")
	uploadFile(token, key, filePath);
}