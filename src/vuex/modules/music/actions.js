import vue from 'vue'
import tools from '../../../service/tools'
import toolsMusic from './method/changeMusicEl'

/**
 * get请求
 * @param  {String} options.url   api地址
 * @param  {String} options.query query参数
 * @return {Promise}               Promise
 */
const _get = ({ url, query }, commit , flag) => {
  if (commit && flag) commit('START_LOADING')
  let _url
  if (query) {
    _url = url + '?' + query + '&' + 'isdebug=andoumiao'
  } else {
    _url = url
  }
  console.log('_url:', _url)
  return vue.http.get(_url)
    .then((res) => {
      if (commit) commit('FINISH_LOADING')
      if (res.status >= 200 && res.status < 300) {
        console.log('res.data :', res.data)
        return res.data
      }
      return Promise.reject(new Error(res.status))
    })
}

/**
 * 获取即将开始音乐列表
 * @param  {Function} options.commit store对象解构出来的函数，无需手动提供
 * @param  {Number} page             页数
 * @param  {Number} count             每页数量
 * @return {Promise}                  Promise
 */
export const getMusicList = ({ commit }, pageObj) => {
  const url = tools.getUrl('admin/findmusics')
  const query = `status=${pageObj.status}&pn=${pageObj.pn}&_t=` + new Date().getTime()
  return _get({url, query}, commit)
    .then((json) => {
      return commit('FETCH_MUSIC_LIST_SUCCESS', json.result.list)
    })
    .catch((error) => {
      return Promise.reject(error)
    })
}


/**
 * app登陆
 
 * @return {Promise}                  Promise
 */
export const appLogin = ({ commit }, obj) => {
  const url = tools.getUrl('admin/adminlogin')

  console.log('login :', obj)
  
  vue.http.post(url, obj, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }})
   .then((json) => {
      return commit('LOGIN_APP', json.result)
    })
    .catch((error) => {
      return Promise.reject(error)
    })

  return
  const query = `status=${status}&pn=${page}&_t=` + new Date().getTime()
  return _get({url, query}, commit)
    .then((json) => {
      return commit('FETCH_MUSIC_LIST_SUCCESS', json.result.list)
    })
    .catch((error) => {
      return Promise.reject(error)
    })
}

/**
 * 获取music table 总页数
 * @param  {Function} options.commit store
 * @return {Promise}                  Promise
 */
export const getMusicTotal = ({ commit }) => {
  const url = tools.getUrl('admin/countmusics')

  return _get({url}, commit)
    .then((json) => {
      console.log('yyyyyyyyyyyyyyyy:', json)
      return commit('FETCH_MUSIC_TOTAL', json.result.count)
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
      console.log('list :', json.result.list)
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
 * 修改添加音乐的状态
 * @param  显示或者关闭音乐弹出框
 * @return {Promise}                  Promise
 */
export const changeMusicState = ({commit}, isShow) => {
  commit('CHANGE_MUSIC_PANEL', isShow)
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
 * 添加上传状态上传状态
 * @param  musicList // 要保存的music list  : Array
 */

export const uploadSuccessBack= ({commit}, item) => {
  console.log('item :,', item)
  commit('UPLOAD_BACK_ITEM', item)
}

/**
 * 
   清除上传状态
 * @param  musicList // 要保存的music list  : Array
 */

export const clearUploadBack= ({commit}) => {
  commit('UPLOAD_BACK_CLEAR')
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
      commit('ADD_MUSIC_PANEL', false)
      return commit('PUSH_MUSIC_LIST', [json.result.music])
    })
    .catch((error) => {
      return Promise.reject(error)
    })
}

/**
 * 跟新音乐的接口
 * @param  {Function} options.commit store对象解构出来的函数，无需手动提供
 * @return {Promise}                  Promise
 */
export const changeMusicForm = ({ commit }, item) => {
  //const url = '/admin/activatemusic'
  const url = tools.getUrl('admin/updatemusic')
  const query = tools.jsonToStr(item);

  return _get({url, query}, commit)
    .then((json) => {
      if(json.status.code == 0) {
        commit('CHANGE_MUSIC_PANEL', false)
        console.log('upload item:', item)
        return commit('UPDATE_ONE_MUSIC', item)
      }
    })
    .catch((error) => {
      return Promise.reject(error)
    })
}


/**
 * 音乐上架操作
 * @param  {id} id 提供唯一的接口
 * @return {Promise}                  Promise
 */
export const putAwayMusic = ({ commit }, item) => {
  //const url = '/admin/activatemusic'
  const url = tools.getUrl('admin/activatemusic')
  const query = tools.jsonToStr(item);
  return _get({url, query}, commit , false)
    .then((json) => {
      return commit('CHANGE_MUSIC_ELEMENT', {id:item.id, status:1})
    })
    .catch((error) => {
      return Promise.reject(error)
    })
}

/**
 * 音乐同步到七牛操作
 * @param  {id} id 提供唯一的接口
 * @return {Promise}                  Promise
 */
export const putAwayQiniu = ({ commit }, item) => {
  //const url = '/admin/activatemusic'
  const url = tools.getUrl('admin/sync2qiniu')
  const query = tools.jsonToStr(item);
  console.log('file name:' , item , query , url)
  return _get({url, query}, commit)
    .then((json) => {
      if(json.status.code === 0){
        return commit('CHANGE_MUSIC_ELEMENT', {id:item.id, status:2})
      }
    })
    .catch((error) => {
      return Promise.reject(error)
    })
}

/**
 * 音乐下架架操作
 * @param  {id} id 提供唯一的接口
 * @return {Promise}                  Promise
 */
export const slodMusic = ({ commit }, item) => {
  //const url = '/admin/activatemusic'
  const url = tools.getUrl('admin/deletemusic')
  const query = tools.jsonToStr(item);
  return _get({url, query}, commit)
    .then((json) => {
      if(json.status.code === 0){
        return commit('CHANGE_MUSIC_ELEMENT', {id:item.id, status:0}) 
      }
      
    })
    .catch((error) => {
      return Promise.reject(error)
    })
}




