<template>
  <div class="home">
    <!-- 搜索栏 -->
    <header>
      <div class="title">
        <div class="logo">连猫好货</div>
        <div class="search">
            <van-icon name="search" />
            <span>搜索商品，共15648款好物</span>
        </div>
        <div class="login">登录</div>
      </div>
    </header>
    <myTabbar></myTabbar>
  </div>
</template>
<script>
import myTabbar from '@/components/tabbar/index.vue'
export default {
  data() {
    return {};
  },
  components:{myTabbar}
};
</script>
<style lang="less" scoped>
header {
  .title {
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    padding: 5px;
    display: flex;
    .logo {
     width: 90px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      font-size: 18px;
      font-weight: 600;
    }
    .search {
      box-sizing: border-box;
      width: 230px;
      height: 30px;
      margin:0 5px;
      border-radius: 5%;
      text-align: center;
      line-height: 30px;
      font-size: 14px;
      background-color: #ededed;
    }
    .login {
      margin: auto 0;
      border: 1px solid #cf1d20;
      border-radius: 10%;
      width: 30px;
      height: 20px;
      font-size: 12px;
      text-align: center;
      line-height: 20px;
      color: #cf1d20;
    }
  }
}
</style>