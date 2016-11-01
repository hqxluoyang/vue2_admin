/**
	author : sailing
	date : 2016-10-21
	fun: 听音乐
***/

<style lang="less">
	.vx-panel{
      width:400px;
      background:#f3f3f3;
      left:50%;
      z-index:2500;
      top:50px;
      min-height:100px;
      margin-left:-200px;
      border-radius:10px;
      position:absolute;
      
	}

  .shadow-bg{
    position:absolute;
    width:100%;
    height:100%;
  }

  .musicPanel{
    min-height:50px;
    position:relative;
    padding-right:10px;
    padding-left:10px;
    .uploadPanel{
      
      .showImg{
        display: block;
        margin-top:20px;
        height:80px;
        margin-left:20px;
      }

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
  <div v-show="isShow">
    <div class="shadowDiv_all">
    </div>
  	<div class="vx-panel" v-show="isShow">
  	  <musicPanelHeader text="添加音乐"></musicPanelHeader>
      <div class="musicPanel">
        <ul class="uploadPanel">
          <li class="line">
          </li>
          <li class="line">
          </li>
        </ul>
      </div>
      <musicPanelfoter></musicPanelfoter>
    </div>
  </div>
  </transition>
</template>

<script>
import musicPanelHeader from '../../components/panel/panel_header'
import musicPanelfoter from '../../components/panel/panel_foter'
import vxBnt from '../../components/vx_bnt.vue'
import vxProgress from '../../components/progress.vue'
import addMusicJudge from './addMusicJudge'
import canvasImg from './canvasImg'
import upModule from '../../service/uploadFile.js'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      flag: true,
      imgSrc: '',
      pgMusic: {
        len: 0
      },
      pgPic: {
        len: 0
      }
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
      const text = addMusicJudge.jugeFlag(this.showItem)
      if (!text) {
        this.$store.dispatch('uploadMusicForm', this.showItem)
      } else {
        this.$message({
          message: text,
          type: 'warning'
        })
      }
    },
    musicChange (e) {
      console.log(e.target.files)
      upModule.uploadObj({
        files: e.target.files,
        progress: this.pgMusic,
        type: 'music',
        vm: this
      })
    },
    picChange (e) {
      const files = e.target.files
      canvasImg.getBase64Img(files, this)
      upModule.uploadObj({
        files: files,
        progress: this.pgPic,
        type: 'img',
        vm: this
      })
    },
    cancel (e) {
      console.log('cancel')
      this.$store.dispatch('changeAddMusicState', false)
    }
  },
  props: {
    bg: String,
    text: String
  },
  components: {musicPanelfoter, musicPanelHeader, vxBnt, vxProgress}
}
</script>