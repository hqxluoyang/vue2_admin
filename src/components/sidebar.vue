<template>
  <aside class="application-sidebar">
    <!--<transition name="sidebar">-->
    <div class="sidebar-container" @click="hideNav" v-show="show" >
      <div class="sidebar-overlay">
        <transition name="leftNav">
        <nav v-show="show">
          <ul style="text-align:center">
            <li v-for="menu in menuList">
              <router-link :to='menu.path'><span>{{menu.name}}</span></router-link>
            </li>
          </ul>
        </nav>
          </transition>
      </div>
    </div>
    <!--</transition>-->
  </aside>
</template>

<style lang="less">

.router-link-active{
  color:#fff;
}

.application-sidebar {

  .sidebar-enter-active,.sidebar-leave-active{
    transition: all ease .4s;
    -webkit-transition: all ease .4s;
  }
  .sidebar-enter, .sidebar-leave-active {
    opacity: 0;
  }

  .sidebar-container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
	width:100px;
    color: #9a9a9a;
    z-index: 501;
    a{
      color: #9a9a9a;
      font-size: 14px;
    }
    .sidebar-overlay {
      background: rgba(0,0,0,0.5);
      position: absolute;
      top: 50px;
      width:100px;
      bottom: 0;
      left: 0;
      .leftNav-enter-active,.leftNav-leave--active{
        transition: right ease .4s;
        -webkit-transition: right ease .4s;
      }
      .leftNav-enter, .leftNav-leave--active {
        right:380px;
      }
      nav {
        border-top: 1px solid #222;
        box-shadow: 0 1px 1px #363636 inset;
        background: #282828;
        position: absolute;
        display: block;
        top: 0;
       
        width:100px;
        bottom: 0;
        left: 0;

        li{
          overflow: hidden;
          line-height: 50px;
          height: 51px;
          color: #9a9a9a;
          font-size: 14px;
          a{

            display: block;
            /*width: 100%;*/
            padding: 0 16px;
            border-bottom: 1px dotted #333;
            .right {
              float: right;
              color: #666;
              font-size: 14px;
            }
          }
        }
      }
    }
  }

  }
</style>

<script>
  import { mapGetters } from 'vuex'
  export default{
    computed: {
      ...mapGetters({
        show: 'getLeftNavState'
      })
    },
    data () {
      let menuList = [{name: '首页', path: '/'}, {name: '音乐管理', path: '/music'}, {name: '音乐上架', path: '/cinema'}, {name: '用户管理', path: '/login'}, {name: '设置', path: '/card'}]
      return { menuList: menuList }
    },
    methods: {
      hideNav () {
        this.$store.dispatch('changeLeftNavState', true)
      }
    }
  }
</script>
