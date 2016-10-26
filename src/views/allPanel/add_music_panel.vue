/**
	author : sailing
	date : 2016-10-21
	fun: button
***/

<style lang="less">
	.vx-panel{
      width:400px;
      background:#f3f3f3;
      left:50%;
      top:100px;
      min-height:100px;
      margin-left:-200px;
      border-radius:10px;
      position:absolute;
      
	}

  .musicPanel{
    min-height:50px;
    position:relative;
    padding-right:10px;
    padding-left:10px;
    .uploadPanel{
      label{
        display:inline-block;
        width:100px;
        text-align:right;
      }
      .line{
        margin-top:10px;
        min-height:40px;
        margin-bottom:10px;
        .inputStyle{
          width:200px;
        }
      }

      .line.marginL{
        margin-left:20px;
      }
    }
  }
</style>

<template>

  <transition name="fadeIn">
	<div class="vx-panel" v-show="isShow">
	  <musicPanelHeader text="添加音乐"></musicPanelHeader>
    <div class="musicPanel">
      <ul class="uploadPanel">
        <li class="line">
          <vxBnt bg="#00d1b2" id='upload_music' text="上传音乐"></vxBnt>
          <input id="uploadMusicId" @change="musicChange($event)" type="file" style="display:none"/>
          <vxProgress :width="progressMusic"></vxProgress>
        </li>
        <li class="line">
          <vxBnt bg="#00d1b2" id='upload_pic' text="上传图片"></vxBnt>
          <input id="uploadMusicId" @change="picChange($event)" type="file" style="display:none"/>
          <vxProgress :width="progressPic"></vxProgress>
        </li>
        <li class="line">
          <label>作者</label>
          <input v-model='showItem.singer' class="inputStyle"/>
        </li>
        <li class="line">
          <label>歌曲名称</label>
          <input v-model='showItem.song' class="inputStyle"/>
        </li>
        <li class="line">
          <label>文件名称</label>
          <input v-model='showItem.filename' class="inputStyle"/>
        </li>
        
         <li class="line">
          <label>歌曲集合</label>
          <input v-model='showItem.album' class="inputStyle"/>
        </li>
      </ul>
    </div>
    <musicPanelfoter></musicPanelfoter>
  </div>
  </transition>
</template>

<script>
import musicPanelHeader from '../../components/panel/panel_header'
import musicPanelfoter from '../../components/panel/panel_foter'
import vxBnt from '../../components/vx_bnt.vue'
import vxProgress from '../../components/progress.vue'
import upModule from '../../service/uploadFile.js'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      flag: true,
      progressMusic: 0,
      progressPic: 0
    }
  },
  methods: {
    clickBnt (e, id) {
      switch (id) {
        case 'upload_music':
          let dom = document.getElementById('uploadMusicId')
          dom.click()
          break
        case 'upload_pic':
          let domPic = document.getElementById('uploadPicId')
          domPic.click()
          break
        default:
      }
    },
    clickClose () {
      this.$store.dispatch('changeAddMusicState', false)
    },
    submit (e) {
      console.log('submit')
      this.$store.dispatch('uploadMusicForm', this.showItem)
    },
    musicChange (e) {
      console.log(e.target.files)
      upModule.uploadObj({
        files: e.target.files,
        vm: this
      })
    },
    cancel (e) {
      console.log('cancel')
      this.$store.dispatch('changeAddMusicState', false)
    }
  },
  computed: {
    ...mapGetters({
      isShow: 'getAddMusic',
      showItem: 'getUploadBackItem'
    })
  },
  props: {
    bg: String,
    text: String
  },
  components: {musicPanelfoter, musicPanelHeader, vxBnt, vxProgress}
}
</script>