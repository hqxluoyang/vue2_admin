/***
  author : sailing
  date : 2016-10-24
****/
import tools from './tools'
import getBackData from './getBackData'
function upload (config) {
  this.files = config.files
  this.type = config.type
  this.vm = config.vm
}

upload.prototype.uploadComplete= function() {
  cosnole.log('complete')
}
   
upload.prototype.uploadFailed= function(){
}   
   
upload.prototype.uploadProgress= function(evt,pro){
  console.log('progress :')
};
   
upload.prototype.uploadCanceled= function(){
}

upload.prototype.sendFiles = function(){   
   for(var i=0; i < this.files.length ; i++){
     this.send(this.files[i])
   }
}

upload.prototype.onChange = function(e){
  const xhr = e.target ;
  const vueSelf = xhr.upload.scope
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
      var response = xhr.responseText;
      var json = JSON.parse(response)
      const music = getBackData.getMusicPicData(json.result , xhr.upload.scope.type)
      vueSelf.vm.$store.dispatch('uploadSuccessBack', music) 
    } else {
          console.log("response 1:" , response)
      }
  } else {
        
    }
}      

upload.prototype.send = function(file){
  var fd = new FormData()
  var that = this
  var url = tools.getUrl('admincomm/upload');
  fd.append("file",file)

  var xhr = new XMLHttpRequest()
  /*
  xhr.upload.addEventListener("progress", this.uploadProgress, false);
  xhr.addEventListener("load", this.uploadComplete, false);
  xhr.addEventListener("error", this.uploadFailed, false);
  xhr.addEventListener("abort", this.uploadCanceled, false);
  */
  //xhr.upload.addEventListener("progress", this.uploadProgress, false);
  xhr.open("POST", url)
  xhr.withCredentials = "true";
  xhr.onreadystatechange = this.onChange;

  xhr.upload.scope = that
  xhr.send(fd)
}

export default {
  uploadObj (config) {
    var up = new upload(config)
    up.sendFiles()
    return up 
  }
}
