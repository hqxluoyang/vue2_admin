import {
  ADD_MUSIC_PANEL,
  FETCH_MUSIC_LIST_SUCCESS,
  PUSH_MUSIC_LIST,
  UPLOAD_BACK_ITEM,
  UPLOAD_MUSIC_FROM,
  CHANGE_MUSIC_ELEMENT,
  TIP_MESSAGE,
  FETCH_MUSIC_TOTAL,
  UPLOAD_BACK_CLEAR
  }
  from './mutation-type'
import toolsMusic from './method/changeMusicEl'
const mutations = {
  // 添加音乐pannel的状态
  [ADD_MUSIC_PANEL] (state, isShow) {
    state.addMusic = isShow
  },
  // tip_message的状态
  [TIP_MESSAGE] (state, isShow) {
    state.tipMessage = isShow
  },
  // 获取music列表的状态
  [FETCH_MUSIC_LIST_SUCCESS] (state, data) {
    toolsMusic.changeMethod(data)
    state.musicTable = data
  },
  // 添加音乐list
  [PUSH_MUSIC_LIST] (state, musicList) {
    toolsMusic.changeMethod(musicList)
    for(var i=0; i<musicList.length ; i++){
      state.musicTable.push(musicList[i])
    }
  },
  // 上传音乐成功之后要显示的东西元素
  [UPLOAD_BACK_ITEM] (state, uploadItem) {
    for(var i in uploadItem){
      state.uploadBackItem[i] = uploadItem[i]
    }

    console.log('state.uploadBackItem[i] :', state.uploadBackItem)
  },
  // 上传音乐清空
  [UPLOAD_BACK_CLEAR] (state) {
    for(var i in state.uploadBackItem){
      state.uploadBackItem[i] = ''
    }

  },
  // 设置音乐的总长度
  [FETCH_MUSIC_TOTAL] (state, count) {
    console.log('count:', count)
    state.musicPage.total = count
  },
  // 修改音乐的参数
  [CHANGE_MUSIC_ELEMENT] (state, item) {
    for(var j = 0 ; j < state.musicTable.length ; j++){
      if(state.musicTable[j].id === item.id) {
        for(var i in item){
          if(i!= 'id') state.musicTable[j][i] = item[i]
        } 
      }
    }
    
  }
}

export default mutations
