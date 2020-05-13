<template>
  <div class="user">
    <div class="content">
      <header>普通用户</header>
      <nav>
        <div>我的资产</div>
        <div>红包</div>
      </nav>
      <main>
        <div class="func-page">
              <router-link v-for="v in funcList" :key="v.icon" :to="v.link">
                <van-icon :name="v.icon" />
                <span>{{v.name}}</span>
              </router-link>
        </div>
      </main>
      <footer>退出登录</footer>
    </div>
    <myTabbar />
  </div>
</template>
<script>
import myTabbar from "@/components/tabbar/index.vue";
export default {
  data() {
    return {
      funcList: [
        { name: "我的订单", link: "#", icon: "todo-list-o" },
        { name: "周六一起拍", link: "#", icon: "hot-o" },
        { name: "售后服务", link: "#", icon: "bill-o" },
        { name: "邀请返利", link: "#", icon: "goods-collect-o" },
        { name: "优先购", link: "#", icon: "balance-list-o" },
        { name: "积分中心", link: "#", icon: "gold-coin-o" },
        { name: "会员中心", link: "#", icon: "vip-card-o" },
        { name: "我的订单", link: "/address", icon: "location-o" }
      ]
    };
  },
  components: { myTabbar }
};
</script>
<style lang="less" scoped>
main {
  border-top: 10px solid #f4f4f4;
  .func-page {
    display: flex;
    flex-wrap: wrap;
    a {
      display: block;
      box-sizing: border-box;
      width: 33.33%;
      height: 80px;
      text-decoration:none;
      color:#333;
      border-right: 1px solid #f4f4f4;
      border-bottom: 1px solid #f4f4f4;
      font-size: 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      span {
        margin-top: 10px;
        font-size: 14px;
      }
    }
    a:nth-child(3n) {
      border-right: none;
    }
  }
}
</style>