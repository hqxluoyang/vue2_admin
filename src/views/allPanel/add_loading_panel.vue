/**
	author : sailing
	date : 2016-10-21
	fun: button
***/

<style lang="less">
	.vx-loading{
      width:400px;
      height:300px;
      left:50%;
      top:100px;
      min-height:100px;
      z-index:100;
      margin-left:-200px;
      border-radius:10px;
      .musicPanel{
        width:100%;
        position:absolute;
        height:100%;
        z-index:3000;
        left:0;
        top:0;
        background:#ccc;
        opacity:0.5;
      }
  }
   .loading {
        width:120px;
        height:120px;
        top:80px;
        left:50%;
        z-index:3100;
        position:absolute;
        background:#fff;
        margin:0 auto;
        border-radius:5px;
        overflow:hidden;
    }
  .load3 .loader {
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  margin-top:18px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #0dc5c1;
  background: -moz-linear-gradient(left, #0dc5c1 10%, rgba(255, 255, 255, 0) 42%);
  background: -webkit-linear-gradient(left, #0dc5c1 10%, rgba(255, 255, 255, 0) 42%);
  background: -o-linear-gradient(left, #0dc5c1 10%, rgba(255, 255, 255, 0) 42%);
  background: -ms-linear-gradient(left, #0dc5c1 10%, rgba(255, 255, 255, 0) 42%);
  background: linear-gradient(to right, #0dc5c1 10%, rgba(255, 255, 255, 0) 42%);
  position: relative;
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 0.9s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
.load3 .loader:before {
  width: 50%;
  height: 50%;
  background: #0dc5c1;
  border-radius: 100% 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
}
.load3 .loader:after {
  background: #fff;
  width: 75%;
  height: 75%;
  border-radius: 50%;
  content: '';
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
@-webkit-keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>

<template>
	<div class="vx-loading" v-show="isLoading">
    <div class="musicPanel">
    </div>
    <div class="loading load3" v-if="isLoading">
      <div class="loader"></div>
    </div>
  </div>
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