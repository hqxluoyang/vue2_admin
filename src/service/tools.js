/***
	author : sailing
	date : 2016-10-21
****/
import Config from './config'
export default {
  getPageHeight () {
    return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  },
  getPageWidth () {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  },
  getContainerH () {
    const h = this.getPageHeight()
    return (h - 105)
  },
  getContainerW () {
    const w = this.getPageWidth()
    return w
  },
  getUrl (query) {
    var url = Config.url + query
    return url 
  },
  jsonToStr (json) {
    var str = '';
    if(json){
      for(var i in json){
        if(str == ''){
          str=i+'=' + json[i]
        } else {
          str +='&' + i + '=' + json[i]
        }
      }
    }
    return str 
  }
}
