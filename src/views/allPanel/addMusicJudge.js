/**
author: sailing
date: 2016-10-28
fun:
***/

export default{
	jugeFlag (file) {
	  var text = ''
      if(!file['fileuuid']){
        text = '请先上传音乐'
      } else if(!file['singer  ']) {
        text = '歌手不能为空'
      } else if(!file['filename ']) {
        text = '原文件名不能为空'
      } else if(!file['fileuuid']) {
        text = '请输入歌手名'
      } else {

      }

      return text 
	}
}