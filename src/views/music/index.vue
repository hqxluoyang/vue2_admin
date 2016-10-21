/***
	author : sailing
	date : 2016-10-19
	fun: music 上传和操作的管理
***/

<style lang="less">
	.music_container{
		width:100%;
		height:100%;
		position:absolute;

    .topBnt{
      position:relative;
      display:inline-block;
      padding-left:10px;
      margin-top:10px;
      margin-bottom:10px;
    }

    .vx_table{
      with:100%;
      background:green;
    }

	}
</style>

<template>
	<div class="music_container">
		<ul>
      <li class="topBnt">
        <vxBnt bg="red" text="添加音乐"></vxBnt>
        <vxBnt bg="red" text="删除"></vxBnt>
      </li>

      <li class="vx_table" v-bind:style="{height:h + 'px'}">
      df
      </li>

    </ul>

	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import vxBnt from '../../components/vx_bnt.vue'
import tools from '../../service/tools.js'

export default{
  data () {
    return {
      h: 200
    }
  },
  methods: {
    changeFile (e) {
    },
    clickBnt (e) {
      console.log('hiiiiiiiiiiiiiiiii')
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
  components: {vxBnt}
}

</script>