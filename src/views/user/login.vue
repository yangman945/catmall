<template>
  <div class="login">
    <div class="nav-bar">
      <myNavbar />
    </div>
    <div class="login-item">
      <div class="logo">地主精选</div>
      <!-- 登录方式 -->
      <div class="login-methods">
        <div @click="PhoneShowBtn" class="phone-login">
          <van-icon name="phone-o e" />
          <span>手机号快捷登录</span>
        </div>
        <div class="pass-login">
          <van-icon name="user-o" />
          <span>账号密码登录</span>
        </div>
      </div>
    </div>
    <!-- 手机号登录弹出层 -->
    <div class="phone-popup">
        <van-popup :style="{ height: '100%',width: '100%' }" v-model="phoneShow">
            <div>
                <div  @click=" phoneShow = false " class="exit">其他登录方式</div>
            </div>
        </van-popup>
    </div>
  </div>
</template>
<script>
import myNavbar from "@/components/navbar/index.vue";
export default {
  data() {
    return {
        phoneShow:false,
    };
  },
  methods:{
      PhoneShowBtn(){ 
          this.phoneShow = true;
      },
  },
  components: {
    myNavbar
  }
};
</script>
<style lang="less" scoped>
.login {
  box-sizing: border-box;
    background-color: #f2f5f4;
}
// .nav-bar {
//   position: fixed;
// }
.login-item {
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  padding-top: 40px;
  .logo {
      text-align: center;
      margin-top: 10vh;
  }
  .login-methods {
      margin-top: 15vh;
    div {
      margin: 0 auto;
      width: 80vw;
      height: 40px;
      border-radius: 5px;
      line-height: 40px;
      text-align: center;
      font-size: 16px;
      span {
        padding-left: 10px;
      }
    }
    .phone-login {
      color: #fff;
      background-color: #dd1a21;
      margin-bottom: 20px;
    }
    .pass-login {
      color: #dd1a21;
      border: 1px solid #dd1a21;
    }
  }
  .phone-popup{
  }
}
</style>