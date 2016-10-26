import {
  ADD_MUSIC_PANEL,
  FETCH_MUSIC_LIST_SUCCESS,
  PUSH_MUSIC_LIST,
  UPLOAD_BACK_ITEM,
  UPLOAD_MUSIC_FROM
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
    state.musicTable = data
  },
  // 添加音乐list
  [PUSH_MUSIC_LIST] (state, musicList) {
    console.log('PUSH_MUSIC_LIST xxxxxxxxxxxxx' , musicList)
    for(var i=0; i<musicList.length ; i++){
      state.musicTable.push(musicList[i])
    }
  },
  // 上传音乐成功之后要显示的东西元素
  [UPLOAD_BACK_ITEM] (state, uploadItem) {
    for(var i in uploadItem){
      state.uploadBackItem[i] = uploadItem[i]
    }
  }
}

export default mutations
