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
	<div class="vx-panel">
	  <musicPanelHeader></musicPanelHeader>
    <musicPanelfoter></musicPanelfoter>
	</div>
</template>

<script>
import musicPanelHeader from '../../components/panel/panel_header'
import musicPanelfoter from '../../components/panel/panel_foter'
export default {
  methods: {
    clickBnt (e) {
      this.$parent.clickBnt(e)
    }
  },
  props: {
    bg: String,
    text: String
  },
  components: {addMusicPanel}
}
</script>