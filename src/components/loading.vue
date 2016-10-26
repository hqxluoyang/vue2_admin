/**
	author : sailing
	date : 2016-10-21
	fun: button
***/

<style lang="less">
	.vx-loading{
     width:100%;
     height:100%;
     left:0;
     top:0;
     background:red;
     z-index:2000;
	}
</style>

<template>
	<div class="vx-loading">
	  
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
    bg: String,
    text: String,
    id: String
  }
}
</script>