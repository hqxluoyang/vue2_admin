import vue from 'vue'
import tools from '../../../service/tools'

/**
 * get请求
 * @param  {String} options.url   api地址
 * @param  {String} options.query query参数
 * @return {Promise}               Promise
 */
const _get = ({ url, query }, commit) => {
  if (commit) commit('START_LOADING')
  let _url
  /*
  if (query) {
    _url = `http://54.223.119.207:8082/${url}?${query}`
  } else {
    _url = `http://54.223.119.207:8082/${url}`
  }
  */
  if (query) {
    _url = url + '?' + query
  } else {
  }

  return vue.http.get(_url)
    .then((res) => {
      if (commit) commit('FINISH_LOADING')
      if (res.status >= 200 && res.status < 300) {
        return res.data
      }
      return Promise.reject(new Error(res.status))
    })
}

/**
 * 获取即将开始电影列表
 * @param  {Function} options.commit store对象解构出来的函数，无需手动提供
 * @param  {Number} page             页数
 * @param  {Number} count             每页数量
 * @return {Promise}                  Promise
 */
export const getMusicList = ({ commit }, page, count) => {
  const url = tools.getUrl('admin/findmusics')

  if(count == undefined) count=20
  const query = `count=${count}&page=${page}&_t=` + new Date().getTime()
  return _get({url, query}, commit)
    .then((json) => {
      return commit('FETCH_MUSIC_LIST_SUCCESS', json.result.list)
    })
    .catch((error) => {
      return Promise.reject(error)
    })
}


/**http://54.223.119.207:8082/http://192.168.1.53:8082/admin/findmusics?count=undefined&page=1&_t=1477444091928
 * 上架音乐
 * @param  {Function} options.commit store对象解构出来的函数，无需手动提供
 * @param  {Number} page             页数
 * @param  {Number} count             每页数量
 * @return {Promise}                  Promise
 */
export const publishMusic = ({ commit }, item) => {
  //const url = '/admin/activatemusic'
  const url = tools.getUrl('admin/activatemusic')
  const query = `id=${item.id}&_t=` + new Date().getTime()
  return _get({url, query}, commit)
    .then((json) => {
      return commit('FETCH_MUSIC_LIST_SUCCESS', json.result.list)
    })
    .catch((error) => {
      return Promise.reject(error)
    })
}

/**
 * 修改添加音乐的状态
 * @param  显示或者关闭音乐弹出框
 * @return {Promise}                  Promise
 */
export const changeAddMusicState = ({commit}, isShow) => {
  console.log('iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii')
  commit('ADD_MUSIC_PANEL', isShow)
}

/**
 * 获取后台音乐
 * @param  {Function} options.commit store对象解构出来的函数，无需手动提供
 * @param  {Number} id             电影id
 * @return {Promise}                  Promise
 */

export const getMusicLis_ = ({commit}) => {
  console.log('iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii')
  commit('GET_MUSIC_LIST')
}

/**
 * 添加单首歌曲
 * @param  musicList // 要保存的music list  : Array
 */

export const pushMusicList= ({commit}, musicList) => {
  console.log('PUSH_MUSIC_LIST')
  commit('PUSH_MUSIC_LIST' , musicList)
}

/**
 * 添加单首歌曲
 * @param  musicList // 要保存的music list  : Array
 */

export const uploadSuccessBack= ({commit}, musicList) => {
  console.log('UPLOAD_BACK_ITEM:', musicList)
  commit('UPLOAD_BACK_ITEM' , musicList)
}

/**
 * 上传添加音乐的表单
 * @param  {Function} options.commit store对象解构出来的函数，无需手动提供
 * @param  {Number} page             页数
 * @param  {Number} count             每页数量
 * @return {Promise}                  Promise
 */
export const uploadMusicForm = ({ commit }, item) => {
  //const url = '/admin/activatemusic'
  const url = tools.getUrl('admin/savemusic')
  const query = tools.jsonToStr(item);
  console.log('file name:' , item , query , url)
  return _get({url, query}, commit)
    .then((json) => {
      console.log("jjjjjjjjson:" , json)
      return commit('PUSH_MUSIC_LIST', [json.result])
    })
    .catch((error) => {
      return Promise.reject(error)
    })
}


