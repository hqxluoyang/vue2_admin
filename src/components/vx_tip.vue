/**
	author : sailing
	date : 2016-10-27
	fun: button
***/

<style lang="less">
	.vx-bnt{
      height:30px;
      position:relative;
      text-align:center;
      padding-left:10px;
      padding-right:10px;
      color:#fff;
      min-width:80px;
      margin-left:20px;
      background:#00d1b2;
      line-height:30px;
      display:inline-block;
      
	}

  .vx-bnt:hover{
        cursor:pointer;
        background:red;
        }

</style>

<template>
	<div class="vx-bnt" @click="clickBnt($event)" v-bind:style="{background:bg}">
	  {{text}}
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