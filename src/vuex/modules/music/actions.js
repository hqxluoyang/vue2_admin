import vue from 'vue'
/**
 * Created by zhengguorong on 16/6/22.
 */
/**
 * get请求
 * @param  {String} options.url   api地址
 * @param  {String} options.query query参数
 * @return {Promise}               Promise
 */
const _get = ({ url, query }, commit) => {
  if (commit) commit('START_LOADING')
  let _url
  if (query) {
    _url = `http://54.223.119.207:8082/${url}?${query}`
  } else {
    _url = `http://54.223.119.207:8082/${url}`
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
  const url = '/admin/findmusics'
  console.log('getMusicListgetMusicListgetMusicListgetMusicList')
  const query = `count=${count}&page=${page}&_t=` + new Date().getTime()
  return _get({url, query}, commit)
    .then((json) => {
      console.log('1111111111111111111111:', json)
      return commit('FETCH_MUSIC_LIST_SUCCESS', json.result.list)
      // return Promise.reject(new Error('fetchFilmsLists failure'))
    })
    .catch((error) => {
      // commit('FETCH_TOPIC_LISTS_FAILURE', topicTab, page)
      return Promise.reject(error)
    })
}

/**
 * 获取广告
 * @param  {Function} options.commit store对象解构出来的函数，无需手动提供
 * @param  {Number} id             电影id
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
