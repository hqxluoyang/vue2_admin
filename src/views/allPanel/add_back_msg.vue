/**
	author : sailing
	date : 2016-10-21
	fun: button
***/

<style lang="less">
	
</style>

<template>

  <transition name="fadeIn">
  <div class="vx-panel" v-show="isShow">
    <div class="musicPanel">
    </div>
    <musicPanelfoter></musicPanelfoter>
  </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      flag: false
    }
  },
  computed: {
    ...mapGetters({
      isLoading: 'getLoading'
    })
  },
  components: {}
}
</script>