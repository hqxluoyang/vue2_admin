/***
	author : sailing
	date : 2016-10-21
****/
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
  }
}
