/***
 author: sailing
 date: 2016-1027
 fun: 关于音乐的操作方法
***/

export default{
  changeMethod (list) {
    for(var i=0 ; i<list.length; i++){
      this.handlerDate(list[i])
    }
  },
  handlerDate (obj) {
    obj['createtime'] = this.format(obj['createtime'])
    obj['updatetime'] = this.format(obj['updatetime'])
  },
  format (time) {
    let date = new Date(time)
    let back = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
    return back
  }
}