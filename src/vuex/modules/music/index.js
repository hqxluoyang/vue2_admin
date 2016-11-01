/**
 * Created by zhengguorong on 16/6/22.
 */
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

const state = {
  addMusic: false,
  changeMusic: false,
  musicTable: [],
  uploadBackItem: {
    filename:'',
    song: '',
    singer:'',
    album: ''
  },
  tipMessage: true,
  musicPage: {
    total: 100,
    pageCount: 30
  }
}

export default{
  state,
  actions,
  getters,
  mutations
}
