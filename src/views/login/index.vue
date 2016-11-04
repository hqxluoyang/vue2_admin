/**
  author: sailing
  date: 2016-10-27
  fun: 登陆页面
**/

<style lang=less>
  .loginPanel{
    width:130%;
    height:100%;
    position:absolute;
    left:-100px;
    z-index:3200;
    display:block;
    top:0;
    background:#000;

    .loginContent{
      position:absolute;
      background:#fff;
      left:100px;
      top:0px;

      .lPanel{
        display:relative;
        .header{
          height: 150px;
          background:#dadada;
          text-align:center;
          line-height:150px;
          box-shadow:5px 5px 5px #ccc;
          font-size:28px
        }
        .login-content{
          .login-panel{
            width:400px;
            margin-top:30px;
            padding-top:65px;
            border:1px solid #ccc;
            height:400px;
            box-shadow:4px 6px 6px #ccc;
            margin-left:-200px;
            left:50%;
            position:absolute;

            .line{
              height:50px;
              line-height:50px;
              text-align:center;
              font-size:18px;
            }
            .line input:hover{
              border-bottom:green 1px solid;
            }
            .line.enter{
              margin-top:30px;
              margin-left:60px;
              text-align:left;
            }
          }
        }
      }
    }
  }
</style>

<template>
  <div class="loginPanel">
      <div class='loginContent' v-bind:style="{height:h + 'px', width:w + 'px'}">
          <ul class='lPanel'>
            <li class='header'>
                X Play 音乐管理后台
            </li>
             <li class='login-content'>
                <div class='login-panel'>
                  <ul>
                    <li class="line">
                      <label>用户</label><input v-model='username' type='text' />
                    </li>
                    <li class="line">
                      <label>密码</label><input v-model='password' type='password' />
                    </li>
                    <li class="line enter">
                      <vxBnt bg="#00d1b2" id='login_panel' text="登陆"></vxBnt>
                    </li>
                  </ul>
                </div>
            </li>
          </ul>
      </div>
  </div>
</template>

<script>
import tools from '../../service/tools'
import vxBnt from '../../components/vx_bnt.vue'

export default{
  data () {
    return {
      h: 1000,
      w: 1000,
      username: 'admin',
      password: '123'
    }
  },
  methods: {
    clickBnt (e, id) {
      if (id === 'login_panel') {
        this.login()
      }
    },
    login () {
      this.$store.dispatch('appLogin', {username: this.user, password: this.password})
    }
  },
  mounted () {
    this.h = tools.getPageHeight()
    this.w = tools.getPageWidth()
  },
  components: {vxBnt}
}
</script>