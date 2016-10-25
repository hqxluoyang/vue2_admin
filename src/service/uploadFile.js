/***
	author : sailing
	date : 2016-10-24
****/
export default {
  uploadObj (config) {
    this.files = config.files
    for(var i=0 ; i<this.files.length ; i++){
      this.send(this.files[i])
    }
  },
  send () {
    var fd = new FormData()
    var that = this
    var url= 'http://54.223.119.207:8082/'+ 'admincomm/upload'
    fd.append("filename",files)
    var xhr = new XMLHttpRequest()
    xhr.open('POST', url)
    xhr.upload.scope = that
    xhr.send(fd)
  }
}
