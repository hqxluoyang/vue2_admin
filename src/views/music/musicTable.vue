/**
author : sailing
date: 2016-10-24
fun: 
***/

<style lang="less">
  .sapnBasic{
    width:50px;
    display:inline-block;
    height:35px;
    line-height:35px;
    color:#000;
  }

  .selectColor{
    background:#00d1b2;
    color:#fff;
  }
  .hoverStyle{
    background:green;
  }
  .downM{
    color: #fff;
    background:#009966;
    width:50px;
    display:inline-block;
    height:35px;
    line-height:35px;
    color:#000;
  }

  .downU{
    color: #fff;
    background:#009966;
    width:50px;
    display:inline-block;
    height:35px;
    line-height:35px;
    color:#000;
  }

  .downM:hover{
    cursor:pointer;
  }
  .tableCss{
  	position:relative;
  	margin:0 auto;
  	table{
  	  width:100%;
      .trStyle:hover{
        background:#ccc;
        opacity:0.8;
      };
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
      	 <tr class="trStyle" @click="clickTr(index)" v-for="(item, index) in tableList" v-bind:class="{selectColor: index === select, hoverStyle:index === hoverIndex}">
	      <th>{{index + 1}}</th>
	     
	      <th>{{item.song}}</th>
	      <th>{{item.favoritecnt_fake}}</th>
	      <th>{{item.downloadcnt}}</th>
	      <th>{{item.favoritecnt}}</th>
	      <th>{{item.updatetime}}</th>
	      <th>{{item.createtime}}</th>
	   
	      <th>
	      	<span v-bind:class='{downU:item.status == 0, downM:item.status == 1}'>{{item.status == 0 ? '上架' : '下架'}}</span>
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
      flag: true,
      select: 1,
      hoverIndex: 10000,
      downFlag: false,
      downM: 'downMBnt',
      upM: 'upMBnt',
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
    },
    pushMusic_ (item) {
      if (item.status === 0) {
        this.$store.dispatch('pushMusic', item)
      }
    },
    pushMusic (item) {
      this.$store.dispatch('pushMusicList', [item])
    },
    clickTr (index) {
      this.select = index
    },
    hoverSelect (index) {
      this.hoverIndex = index
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