/**
	author : sailing
	date : 2016-10-21
	fun: button
***/

<style>
	.vx-bnt{
      height:35px;
      position:relative;
      text-align:center;
      padding-left:10px;
      padding-right:10px;
      color:#fff;
      min-width:80px;
      background:#00d1b2;
      line-height:35px;
      display:inline-block;
	}
</style>

<template>
	<div class="vx-bnt" @click="clickBnt($event)" @style="{background:bg}">
	  {{text}}
	</div>
</template>

<script>
export default {
  methods: {
    clickBnt (e) {
      this.$parent.clickBnt(e)
    }
  },
  props: {
    bg: String,
    text: String
  }
}
</script>