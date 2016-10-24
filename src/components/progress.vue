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
	}
</style>

<template>
	<div class="vx-progress">
	  <p class="classWidth" v-bind:style="{width:width + 'px'}"></p>
	</div>
</template>

<script>
export default {
  methods: {
    clickBnt (e) {
      this.$parent.clickBnt(e, this.id)
    }
  },
  props: {
    width: Number
  }
}
</script>