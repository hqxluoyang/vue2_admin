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
        <el-select v-on:change='change()' v-model="value" style="display:inline-block">
          <el-option
          v-for="item in options"
          :label="item.label"
          :value="item.value">
          </el-option>
        </el-select>
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
      h: 200,
      options: [{
        value: 0,
        label: '下架'
      }, {
        value: 1,
        label: '上架'
      }, {
        value: 2,
        label: '审核'
      }, {
        value: 3,
        label: '同步'
      }]
    }
  },
  methods: {
    changeFile (e) {
      console.log('change file: ')
    },
    change (val) {
      console.log('change vualxxxxxxxxxxxxxxxx:', val)
    },
    clickBnt (e, id) {
      if (id === 'add_music') {
        this.$store.dispatch('clearUploadBack')
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
    console.log('this.value xxxx:', this.valueSelect)
  },
  computed: {
    ...mapGetters({
      value: 'getMgrMusicStatus'
    })
  },
  components: {vxBnt, musicTable}
}

</script>