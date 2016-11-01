/**
	author : sailing
	date : 2016-10-21
	fun: button
***/

<style lang="less">
	.vx-panel-header{
      width:40px;
      width:100%;
      height:40px;
      line-height:40px;
      text-align:center;
      position:relative;
      border-bottom:1px solid #ccc;
      .close{
        position:absolute;
        float:right;
        right:0px;
        marign-right:10px;
        display:inline-block;
        width:40px;
        height:40px;
      }
      .close:hover{
        cursor:pointer;
      }
	}
</style>

<template>
	<div class="vx-panel-header">
    <span>{{text}}</span>
    <span @click="clickClose()" class="close">X</span>
	</div>
</template>

<script>
export default {
  methods: {
    clickClose (e) {
      this.$parent.clickClose(e)
    }
  },
  props: {
    bg: String,
    text: String
  }
}
</script>