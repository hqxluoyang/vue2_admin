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
    display:none;
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
          background:#bdcade;
          text-align:center;
          line-height:150px;
          box-shadow:5px 5px 5px #ccc;
          font-size:28px
        }
        .login-content{
          .login-panel{
            width:400px;
            margin-top:30px;
            padding-top:25px;
            height:400px;
            box-shadow:1px 2px 2px #ccc;
            margin-left:-200px;
            left:50%;
            position:absolute;

            .line{
              height:50px;
              line-height:50px;
              text-align:center;
              font-size:18px;
            }

            .line.enter{
              margin-top:30px;
              margin-right:60px;
              text-align:right;
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
                      <label>用户</label><input type='text' />
                    </li>
                    <li class="line">
                      <label>密码</label><input type='password' />
                    </li>
                    <li class="line enter">
                      <vxBnt bg="#000" id='upload_pic' text="取消"></vxBnt>
                      <vxBnt bg="#00d1b2" id='upload_pic' text="登陆"></vxBnt>
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
      w: 1000
    }
  },
  mounted () {
    this.h = tools.getPageHeight()
    this.w = tools.getPageWidth()
  },
  components: {vxBnt}
}
</script>