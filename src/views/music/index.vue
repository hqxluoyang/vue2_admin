/***
	author : sailing
	date : 2016-10-19
	fun: music 上传和操作的管理
***/

<style lang="less">
	.music_container{
		height:100%;
    margin:0 auto;
		position:relative;

    .topBnt{
      position:relative;
      display:inline-block;
      padding-left:10px;
      margin-top:10px;
      margin-bottom:10px;
    }

    .vx_table{
      with:100%;
      overflow-y:scroll;
      overflow-x:hidden;
    }

	}
</style>

<template>
	<div class="music_container">
		<ul>
      <li class="topBnt">
        <vxBnt bg="#00d1b2" id="add_music" text="添加音乐"></vxBnt>
        <vxBnt bg="#00d1b2" id="del_music" text="删除"></vxBnt>
      </li>

      <li class="vx_table" v-bind:style="{height:h + 'px'}">
        <musicTable></musicTable>
      </li>

    </ul>

	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import vxBnt from '../../components/vx_bnt.vue'
import tools from '../../service/tools.js'
import musicTable from './musicTable.vue'

export default{
  data () {
    return {
      h: 200
    }
  },
  methods: {
    changeFile (e) {
    },
    clickBnt (e, id) {
      if (id === 'add_music') {
        console.log('kk')
        this.$store.dispatch('changeAddMusicState', true)
      } else if (id === 'del_music') {
        console.log('dfffe')
      }
      console.log('hiiiiiiiiiiiiiiiii:', id)
    },
    click_bnt_img () {
      console.log('kkkkkkkkkkkkkkkkkkkkkkkkkk')
    }
  },
  mounted () {
    let height = tools.getContainerH()
    this.h = height
    console.log('height :', height)
  },
  computed: {
    ...mapGetters({
    })
  },
  created () {
  },
  components: {vxBnt, musicTable}
}

</script>