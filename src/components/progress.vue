/**
	author : sailing
	date : 2016-10-21
	fun: progress
***/

<style lang="less">
	.vx-progress{
      height:5px;
      position:relative;
      text-align:center;
      color:#fff;
      width:200px;
      margin-left:20px;
      background:#00d1b2;
      display:inline-block;
      .classWidth{
      	position:absolute;
      	height:5px;
      	background:red;
      }
      .imgBg{
          float:right;
          color:#000;
          margin-right:-35px;
          margin-top:-5px;
      }
	}
</style>

<template>
	<div class="vx-progress">
	  <p class="classWidth" v-bind:style="{width:pgObj.len + '%'}"></p>
    <span class='imgBg'>{{pgObj.len + '%'}}<span>
	</div>
</template>

<script>
export default {
  data () {
    return {
      width: 20
    }
  },
  mounted: {
  },
  props: {
    pgObj: Object
  }
}
</script>