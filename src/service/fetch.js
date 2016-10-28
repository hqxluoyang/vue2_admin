/**
  author: sailing
  date: 2016-10-25
  fun: fetch 接口
**/
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


