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
        <el-select v-model="value">
          <el-option
          v-for="item in options"
          :label="item.label"
          :value="item.value">
          </el-option>
        </el-select>
      </li>

      <li class="vx_table" v-bind:style="{height:h + 'px'}">
        <el-tabs style="width:100%">
          <el-tab-pane label="搜索"><searchTable></searchTable></el-tab-pane>
          <el-tab-pane label="收藏"><favoritTable></favoritTable></el-tab-pane>
          <el-tab-pane label="缓存"><saveTable></saveTable></el-tab-pane>
        </el-tabs>
      </li>

    </ul>

	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import vxBnt from '../../components/vx_bnt.vue'
import tools from '../../service/tools.js'
import searchTable from './searchTable.vue'
import favoritTable from './favoritesTable.vue'
import saveTable from './saveTable.vue'

export default{
  data () {
    return {
      h: 200,
      options: [{
        value: '1',
        label: '昨日'
      }, {
        value: '2',
        label: '前七天'
      }, {
        value: '3',
        label: '前30天'
      }],
      value: ''
    }
  },
  methods: {
    changeFile (e) {
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
  },
  computed: {
    ...mapGetters({
    })
  },
  components: {vxBnt, searchTable, favoritTable, saveTable}
}

</script>