/**
	author : sailing
	date : 2016-10-21
	fun: button
***/

<style>
	.vx-panel-header{
      width:40px;
      width:100%;
      position:relative;
      border-bottom:1px solid #ccc;
	}
</style>

<template>
	<div class="vx-panel-header">
    
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