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
    background:#b9bbbb;
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

  .basicStatus{
    color: #fff;
    width:70px;
    display:inline-block;
    height:35px;
    box-shadow: 2px 3px 9px #b9b9b9;
    line-height:35px;
    color:#000;
  }

   .basicStatus:hover{
      cursor:pointer;
    }

  .basicStatus.downU_up{
    background:#e69393;
  }

  .basicStatus.downU_sh{
    background:#d9edf7;
  }

  .basicStatus.downU_down{
    background:#dff0d8;
  }

  .basicStatus.downU_qiniu{
    background:#f2dede;
  }

  .downM:hover{
    cursor:pointer;
  }
  .tableCss{
  	position:relative;
    min-height: 300px;
  	margin:0 auto;
  	table{
  	  width:100%;
      .trStyle:hover{
        background:#ccc;
        opacity:0.8;
      };
  	  .headerCss{
  	    background:#20a0ff;
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
    <table>
    </table>
    <table border="0">
      <tr class="headerCss">
	      <th v-for="(item, index) in header">{{item.name}}</th>
	    </tr> 
      <tbody>
      	 <tr @dblclick="showAllEl(item)" class="trStyle" @click="clickTr(index)" v-for="(item, index) in tableList">
	      <th>{{index + 1}}</th>
	     
	      <th>{{item.song}}</th>
        <th>{{item.fileext}}</th>
	      <th>{{item.favoritecnt_fake}}</th>
	      <th>{{item.downloadcnt}}</th>
	      <th>{{item.favoritecnt}}</th>
	      <th>{{item.updatetime}}</th>
	      <th>{{item.createtime}}</th>
	   
	      <th>
          <span @click="putAwayMusic(item)" v-show="item.status==0" class='basicStatus downU_up'>上架</span>
          <span @click="soldMusic(item)" v-show="item.status==1" class='basicStatus downU_down'>下架</span>
	      	<span @click="putAwayMusic(item)" v-show="item.status==2" class='basicStatus downU_sh'>待审核/上架</span>
          <span @click="putAwayQiniu(item)" v-show="item.status==3" class='basicStatus downU_qiniu'>待同步</span>
	      </th>

        <th>
          <span @click="changeItemMusic(item)" class='basicStatus downU_down'>修改</span>
        </th>
	      
	  	</tr>

      </tbody>
	 
	</table>
	<tablePage :pageMessage='musicTablePage'></tablePage>
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
        name: '扩展名'
      }, {
        name: '模拟收藏'
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
      }, {
        name: '修改'
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
    handleCurrentChange (val) {
      this.$store.dispatch('getMusicList', val, 10)
      console.log('change page :', val)
    },
    pushMusic (item) {
      this.$store.dispatch('pushMusicList', [item])
    },
    clickTr (index) {
      this.select = index
    },
    hoverSelect (index) {
    },
    putAwayMusic (item) {
      this.$store.dispatch('putAwayMusic', {id: item.id})
    },
    soldMusic (item) {
      this.$store.dispatch('slodMusic', {id: item.id})
    },
    putAwayQiniu (item) {
      this.$store.dispatch('putAwayQiniu', {id: item.id})
    },
    showAllEl (item) {},
    handleSizeChange (val) {
      console.log('change page:', val)
    },
    changeItemMusic (item) {
      this.$store.dispatch('changeMusicState', true)
      this.$store.dispatch('uploadSuccessBack', item)
    }
  },
  mounted () {
    let height = tools.getContainerH()
    this.h = height
    console.log('xxxxxxxxxxxxxxxxxxxxxxxx:', this.value)
    this.$store.dispatch('getMusicList', {pn: 1,
      status: this.value
    })
    this.$store.dispatch('getMusicTotal')
  },
  computed: {
    ...mapGetters({
      tableList: 'getMusicList',
      musicTablePage: 'getMusicPageMessage',
      value: 'getMgrMusicStatus'
    })
  },
  components: {vxBnt, tablePage}
}

</script>