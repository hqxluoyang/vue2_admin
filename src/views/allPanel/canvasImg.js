/**
author: sailing
date: 2016-10-28
fun
**/

export default{
  getBase64Img (files, self) {
    var reader = new FileReader();
	reader.readAsDataURL(files[0]);
	reader.onload = function(){
	  self.imgSrc = this.result
	  console.log("back succ")
	  //callback.call(self , this.result)
	}
  }
}