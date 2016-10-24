/**
author : sailing
date: 2016-10-24
fun: 
***/

<style lang="less">
  .tableCss{
  	position:relative;
  	margin:0 auto;
  	table{
  	  width:100%;
  	  .headerCss{
  	    background:#9a9a9a;
  	    color:#fff;
  	  }
  	  tr{
  	    height:40px;
  	    text-align:center;
  	    border-bottom:1px solid #fff;
  	    td {
          margin-left:10px;
          margin-right:10px;
  	    }
  	  }
  	}
  	
  }
</style>

<template>
  <div class="tableCss">
    <table border="0">
      <tr class="headerCss">
	    <th v-for="(item, index) in header">{{item.name}}</th>
	  </tr>
      <tbody>
      	 <tr v-for="(item, index) in tableList">
	      <th>{{index + 1}}</th>
	     
	      <th>{{item.song}}</th>
	      <th>{{item.favoritecnt_fake}}</th>
	      <th>{{item.downloadcnt}}</th>
	      <th>{{item.favoritecnt}}</th>
	      <th>{{item.updatetime}}</th>
	      <th>{{item.createtime}}</th>
	   
	      <th>
	      	<span>下架</span>
	      	<span>上架</span>
	      </th>
	      
	  	</tr>
      </tbody>
	  
	</table>
	<tablePage></tablePage>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import vxBnt from '../../components/vx_bnt.vue'
import tools from '../../service/tools.js'
import tablePage from '../../components/tablePage.vue'

export default{
  data () {
    return {
      h: 200,
      header: [{
        name: '序号'
      }, {
        name: '歌曲名'
      }, {
        name: '展示收藏'
      }, {
        name: '下载次数'
      }, {
        name: '实际收藏'
      }, {
        name: '上传时间'
      }, {
        name: '修改时间'
      }, {
        name: '状态'
      }]
    }
  },
  methods: {
    changeFile (e) {
    },
    clickMusic () {
      console.log('kkkkkkkkkkkkkkkkkkkkkkkkkk')
    }
  },
  mounted () {
    let height = tools.getContainerH()
    this.h = height
    this.$store.dispatch('getMusicList', 1, 10)
    console.log('height :', height)
  },
  computed: {
    ...mapGetters({
      tableList: 'getMusicList'
    })
  },
  created () {
  },
  components: {vxBnt, tablePage}
}

</script>