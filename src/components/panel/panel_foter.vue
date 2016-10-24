/**
	author : sailing
	date : 2016-10-21
	fun: button
***/

<style lang="less">
	.vx-panel-foter{
      height:50px;
      width:100%;
      border-top:1px solid #ccc;
      position:relative;

      .line-bnt{
        float:right;
        padding-top:8px;
        padding-right:20px;
      }
	}
</style>

<template>
	<div class="vx-panel-foter" v-bind:style="{background:bg}">
	    <div class="line-bnt"> 
       <vxBnt bg="#ccc" id='cancel' text="取消"></vxBnt>
       <vxBnt bg="#00d1b2" id='submit' text="确定"></vxBnt>
      </div>
	</div>
</template>

<script>
import vxBnt from '../vx_bnt.vue'
export default {
  methods: {
    clickBnt (e, id) {
      switch (id) {
        case 'submit':
          this.$parent.submit()
          break
        case 'cancel':
          this.$parent.cancel()
          break
        default:
      }
    }
  },
  props: {
    bg: String,
    text: String
  },
  components: {vxBnt}
}
</script>