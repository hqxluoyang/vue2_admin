/**
	author : sailing
	date : 2016-10-24
	fun: table 分页
***/

<style lang="less">
	.vx-tabelPage{
      height:35px;
      position:relative;
      text-align:center;
      padding-left:10px;
      padding-right:10px;
      color:#fff;
      width:100%;
     
      line-height:30px;
      margin-top:10px;
      display:inline-block;
      .ulPage{
        text-align:left;
        .itemPage{
          width:30px;
          margin-left:5px;
          background:#00d1b2;
          text-align:center;
          display:inline-block
        }
      }
      
	}
</style>

<template>
	<div class="vx-tabelPage">
	  <ul class="ulPage">
      <li class="itemPage" style="width:100px">上一页</li>
      <li class="itemPage" style="border:0">...</li>
      <li class="itemPage" v-for="(item , index) in pageLen">
        {{item}}
      </li>
      <li class="itemPage" style="border:0">...</li>
      <li class="itemPage" style="width:100px">上一页</li>
    </ul>
	</div>
</template>

<script>
export default {
  data () {
    return {
      pageLen: 10,
      pageStart: 5,
      pageEnd: this.pageStart + 10
    }
  },
  methods: {
    clickBnt (e) {
      this.$parent.clickBnt(e, this.id)
    }
  },
  props: {
    bg: String
  }
}
</script>