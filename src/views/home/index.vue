<template>
  <div class="home">
    <!-- 搜索栏 -->
    <header>
      <div class="title">
        <div class="logo">地主好货</div>
        <div class="search">
          <van-icon name="search" />
          <span>搜索商品，共15648款好物</span>
        </div>
        <div class="login">登录</div>
      </div>
    </header>
    <!-- 推荐条 -->
    <nav>
      <div class="hobby">
        <div
          v-for="v in navList"
          :key="v.id"
          :class="v.id === active ? 'pitch' : ''"
          @click="handleHover(v.id)"
        >{{v.title}}</div>
        <div>
          <van-icon name="arrow-down" />
        </div>
      </div>
    </nav>
    <!-- 轮播图 -->
    <mySwiper :swiperList="img"></mySwiper>
    <!-- 声明 -->
    <div class="grow">
      <div>
        <van-icon class="icon" name="friends-o" />
        <span>地主自营品牌</span>
      </div>
      <div>
        <van-icon class="icon" name="gold-coin-o" />
        <span>坚决不予退换</span>
      </div>
      <div>
        <van-icon class="icon" name="logistics" />
        <span>24周内保证送达</span>
      </div>
    </div>
    <!-- 分类商品 -->
    <div class="category">
      <div v-for="v in categoryList" :key="v.id" class="cate-item">
        <img :src="v.img" alt="">
        <span>{{v.title}}</span>
      </div>
      <div class="cate-item">1</div>
      <div class="cate-item">1</div>
      <div class="cate-item">1</div>
      <div class="cate-item">1</div>
      <div class="cate-item">1</div>
      <div class="cate-item">1</div>
      <div class="cate-item">1</div>
      <div class="cate-item">1</div>
      <div class="cate-item">1</div>
    </div>
    <myTabbar></myTabbar>
  </div>
</template>
<script>
import myTabbar from "@/components/tabbar/index.vue";
import mySwiper from "@/components/swiper/index.vue";
export default {
  data() {
    return {
      active: 1,
      navList: [
        { title: "推荐", id: 1 },
        { title: "居家生活", id: 2 },
        { title: "服饰鞋包", id: 3 },
        { title: "美食酒水", id: 4 }
      ],
      // 分类数据
      categoryList:[
        { id: 1, img: require("@/assets/icons/category/item1.png"),title:'新品首发' },
        { id: 2, img: require("@/assets/icons/category/item2.png"),title:'居家生活' },
        { id: 3, img: require("@/assets/icons/category/item3.png"),title:'服饰鞋包' },
        { id: 4, img: require("@/assets/icons/category/item4.png"),title:'美食酒水' },
        { id: 5, img: require("@/assets/icons/category/item5.png"),title:'个护清理' },
        { id: 6, img: require("@/assets/icons/category/item6.png"),title:'母婴亲子' },
        { id: 7, img: require("@/assets/icons/category/item7.png"),title:'运动旅游' },
        { id: 8, img: require("@/assets/icons/category/item8.png"),title:'数码家电' },
        { id: 9, img: require("@/assets/icons/category/item9.png"),title:'全球特色' },
        { id: 10, img: require("@/assets/icons/category/item10.gif"),title:'好货抄底' },

      ],
      // 轮播图数据
      img: [
        { id: 1, img: require("@/assets/icons/swiper/item1.webp") },
        { id: 2, img: require("@/assets/icons/swiper/item2.webp") },
        { id: 3, img: require("@/assets/icons/swiper/item3.webp") },
        { id: 4, img: require("@/assets/icons/swiper/item4.webp") },
        { id: 5, img: require("@/assets/icons/swiper/item5.webp") },
        { id: 6, img: require("@/assets/icons/swiper/item6.webp") },
        { id: 7, img: require("@/assets/icons/swiper/item7.webp") },
        { id: 8, img: require("@/assets/icons/swiper/item8.webp") }
      ]
    };
  },
  methods: {
    handleHover(id) {
      this.active = id;
    }
  },
  components: { myTabbar, mySwiper }
};
</script>
<style lang="less" scoped>

header {
  .title {
    box-sizing: border-box;
    padding: 5px;
    width: 100%;
    height: 40px;
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
      margin: 0 5px;
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
nav {
  .hobby {
    display: flex;
    height: 20px;
    padding: 5px 0;
    margin-left: 5px;
    div {
      font-size: 14px;
      color: #919191;
      padding: 0 5px;
      margin-left: 10px;
      /* 最后一个元素 */
      &:last-child {
        margin-left: 40px;
        float: right;
        font-size: 16px;
      }
    }
    .pitch {
      color: #e65b60;
      border-bottom: 2px solid #e65b60;
    }
  }
}
.grow {
  display: flex;
  justify-content: space-around;
  height: 20px;
  padding: 5px 0;
  font-size: 12px;
  div {
    display: flex;
    align-items: center;
    .icon {
      color: #ca6669;
      margin-right: 5px;
    }
    span {
      color: #333;
    }
  }
}
.category{
  .cate-item{
    box-sizing: border-box;
    display: inline-block;
    width: 20%;
    padding: 10px;
    text-align: center;
    font-size: 0;
    img{
      width: 100%;
      height: 100%;
      margin-bottom: 8px;
    }
    span{
      font-size: 12px;
    }
  }
}
</style>