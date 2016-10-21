/**
	author : sailing
	date : 2016-10-21
	fun: button
***/

<style>
	.vx-panel{
      width:400px;
      position:relative;
      
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