import {
  ADD_MUSIC_PANEL,
  FETCH_MUSIC_LIST_SUCCESS
  }
  from './mutation-type'

const mutations = {
  // 添加音乐pannel的状态
  [ADD_MUSIC_PANEL] (state, isShow) {
    console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkllllllll:', isShow, state)
    state.addMusic = isShow
  },
  // 获取music列表的状态
  [FETCH_MUSIC_LIST_SUCCESS] (state, data) {
    console.log('kllllllllllllllllllllllllllllllllllll:', data)
    state.musicTable = data
  }
}

export default mutations
