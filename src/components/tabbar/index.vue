<template>
  <div class="tabbar">
    <div>
      <van-tabbar v-model="active" active-color="#cf1d20" route>
        <van-tabbar-item to="/index">
            <span>首页</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon_home.active : icon_home.normal"
          />
        </van-tabbar-item>
        <van-tabbar-item to="/classify">
            <span>分类</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon_classify.active : icon_classify.normal"
          />
        </van-tabbar-item>
        <van-tabbar-item :badge="shopNum" to="/shopcart">
            <span>购物车</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon_cart.active : icon_cart.normal"
          />
        </van-tabbar-item>
        <van-tabbar-item to="/user">
            <span >我</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon_mine.active : icon_mine.normal"
          />
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
export default {
  name: "myTabbar",
  data() {
    return {
      icon_home: {
        normal: require("@/assets/icons/tabbar/home.png"),
        active: require("@/assets/icons/tabbar/home_active.png")
      },
      icon_classify: {
        normal: require("@/assets/icons/tabbar/classify.png"),
        active: require("@/assets/icons/tabbar/classify_active.png")
      },
      icon_cart: {
        normal: require("@/assets/icons/tabbar/cart.png"),
        active: require("@/assets/icons/tabbar/cart_active.png")
      },
      icon_mine: {
        normal: require("@/assets/icons/tabbar/mine.png"),
        active: require("@/assets/icons/tabbar/mine_active.png")
      },
      active: 0, //当前激活tabbar
      shopNum:5, //假定商品数量
    };
  }
};
</script>
<style lang="less" scoped>
.tabbar {
  div {
    height: 50px;
  }
}
</style>