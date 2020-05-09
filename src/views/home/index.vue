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
    <!-- 推荐tabs -->
    <myTabs :navList="tabsList" @tabsFn="changeFn">
      <!-- 推荐商品 -->
      <div v-show="cur === 1">
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
            <span>24周内尽量送达</span>
          </div>
        </div>
        <!-- 分类商品 -->
        <div class="category">
          <div v-for="v in categoryList" :key="v.id" class="cate-item">
            <img :src="v.img" alt />
            <span>{{v.title}}</span>
          </div>
        </div>
        <!-- 秒杀专区 -->
        <div class="seckill">
          <div class="timer">
            <span>限时购</span>
            <van-count-down class="timer-out" :time="timeData">
              <template v-slot="timeData">
                <span class="block">{{ timeData.hours }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.minutes }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.seconds }}</span>
              </template>
            </van-count-down>
          </div>
          <div class="sec-goods">
            <div class="goods-item" v-for="v in secList" :key="v.goodsID">
              <div>
                <img :src="v.img" alt />
              </div>
              <span class="sec-price">￥{{v.price}}</span>
              <span class="old-price">${{v.oldPrice}}</span>
            </div>
          </div>
        </div>
        <!-- 热销专区 -->
        <div class="hotgoods">
          <div class="title clearfix">
            <span class="hotref">人气推荐</span>
            <div class="gengduo">
              <span>更多</span>
              <van-icon name="arrow" />
            </div>
          </div>
          <div class="hot-title">
            <div class="img-item">
              <img :src="hotTitle.img" alt />
            </div>
            <div class="hot-item">
              <div>{{hotTitle.hot}}</div>
              <div>{{hotTitle.name}}</div>
              <div>{{hotTitle.desSign}}</div>
              <div>￥{{hotTitle.price}}</div>
            </div>
          </div>
          <div class="goods-item">
            <div class="item" v-for="v in hotList" :key="v.goodsID">
              <div class="img-item">
                <img :src="v.img" alt />
              </div>
              <div class="text-item">
                <div>{{v.name}}</div>
                <div>￥{{v.price}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="cur === 2">居家生活</div>
      <div v-show="cur === 3">服饰鞋包</div>
      <div v-show="cur === 4">美食酒水</div>
    </myTabs>

    <!-- 置顶按钮 -->
    <div v-show="btnShow" @click="handleClickTopFn" class="top-btn">
      <van-icon name="arrow-up" />
    </div>
    <myTabbar></myTabbar>
  </div>
</template>
<script>
import myTabbar from "@/components/tabbar/index.vue";
import mySwiper from "@/components/swiper/index.vue";
import myTabs from "@/components/tabs/index.vue";
import { getSeckillList, getHotgoodsList } from "@/api/goods.js";
export default {
  data() {
    return {
      btnShow: false,
      cur: 1,
      timeData: 36000000,
      tabsList: [
        { title: "推荐", id: 1 },
        { title: "居家生活", id: 2 },
        { title: "服饰鞋包", id: 3 },
        { title: "美食酒水", id: 4 },
        { title: "个护清理", id: 5 },
        { title: "母婴亲子", id: 6 },
        { title: "运动旅行", id: 7 },
        { title: "数码家电", id: 8 },
        { title: "严选全球", id: 9 }
      ],
      // 分类数据
      categoryList: [
        {
          id: 1,
          img: require("@/assets/icons/category/item1.png"),
          title: "新品首发"
        },
        {
          id: 2,
          img: require("@/assets/icons/category/item2.png"),
          title: "居家生活"
        },
        {
          id: 3,
          img: require("@/assets/icons/category/item3.png"),
          title: "服饰鞋包"
        },
        {
          id: 4,
          img: require("@/assets/icons/category/item4.png"),
          title: "美食酒水"
        },
        {
          id: 5,
          img: require("@/assets/icons/category/item5.png"),
          title: "个护清理"
        },
        {
          id: 6,
          img: require("@/assets/icons/category/item6.png"),
          title: "母婴亲子"
        },
        {
          id: 7,
          img: require("@/assets/icons/category/item7.png"),
          title: "运动旅游"
        },
        {
          id: 8,
          img: require("@/assets/icons/category/item8.png"),
          title: "数码家电"
        },
        {
          id: 9,
          img: require("@/assets/icons/category/item9.png"),
          title: "全球特色"
        },
        {
          id: 10,
          img: require("@/assets/icons/category/item10.gif"),
          title: "好货抄底"
        }
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
      ],
      // 秒杀商品数据
      secList: [],
      // 热销商品数据
      hotTitle: {},
      hotList: []
    };
  },
  mounted() {
    // 获取秒杀商品
    getSeckillList()
      .then(res => {
        this.secList = res.data;
      })
      .catch(err => {
        console.log(err, "获取秒杀商品失败");
      });
    // 获取热销商品
    getHotgoodsList()
      .then(res => {
        console.log(res);
        (this.hotTitle = res.data.splice(0, 1)[0]), (this.hotList = res.data);
      })
      .catch(err => {
        console.log(err, "获取热销商品失败");
      });
    // 监听滚动事件
    window.addEventListener("scroll", this.scrollFn);
  },
  methods: {
    // 切换tabs
    changeFn(id) {
      this.cur = id;
      console.log(id);
    },
    // 滚动事件
    scrollFn() {
      var topH = document.documentElement.scrollTop || document.body.scrollTop;
      if (topH > 210) {
        this.btnShow = true;
      } else {
        this.btnShow = false;
      }
    },
    handleClickTopFn() {
      // 页面置顶动画效果
      var scrollToptimer = setInterval(function() {
        var top = document.body.scrollTop || document.documentElement.scrollTop;
        var speed = top / 30;
        console.log();
        console.log(speed);
        if (document.body.scrollTop != 0) {
          document.body.scrollTop -= speed;
        } else {
          document.documentElement.scrollTop -= speed;
        }
        if (top == 0) {
          clearInterval(scrollToptimer);
        }
      }, 10);
    }
  },
  components: { myTabbar, mySwiper, myTabs }
};
</script>
<style lang="less" scoped>
header {
  margin-bottom: 40px;
  .title {
    position: fixed;
    top: 0;
    height: 30px;
    z-index: 3;
    box-sizing: border-box;
    padding: 5px;
    width: 100%;
    height: 40px;
    background-color: #fff;
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
.category {
  border-bottom: 8px solid #f4f4f4;
  padding: 5px;
  .cate-item {
    box-sizing: border-box;
    display: inline-block;
    width: 20%;
    padding: 5px;
    text-align: center;
    font-size: 0;
    img {
      width: 100%;
      height: 100%;
      margin-bottom: 8px;
    }
    span {
      // font-size: 12px;
      font-size: 12px;
    }
  }
}
.seckill {
  border-bottom: 8px solid #f4f4f4;
  .timer {
    padding: 10px 10px 0 10px;
    display: flex;
    span {
      padding: 0 10px;
      font-size: 16px;
    }
    .timer-out {
      color: #dd3749;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        padding: 0;
        font-style: 12px;
      }
    }
  }
  .sec-goods {
    box-sizing: border-box;
    padding: 0 10px;
    .goods-item {
      box-sizing: border-box;
      display: inline-block;
      width: 33.33%;
      padding: 5px;
      margin-bottom: 5px;
      div {
        background-color: #f5f5f5;
        border-radius: 5%;
        margin-bottom: 6px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .sec-price {
        color: #dd2128;
        font-size: 14px;
        font-weight: 500;
        padding-left: 5px;
        margin-right: 10px;
      }
      .old-price {
        color: #7f7f7f;
        font-size: 12px;
        font-weight: 300;
        text-decoration: line-through;
      }
    }
  }
}
.clearfix::after {
  content: ".";
  display: block;
  visibility: hidden;
  height: 0;
}
.hotgoods {
  border-bottom: 8px solid #f4f4f4;
  padding: 10px;
  .title {
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    padding: 10px 10px;
    .hotref {
      float: left;
      font-size: 16px;
    }
    .gengduo {
      float: right;
      display: flex;
      align-items: center;
      font-size: 14px;
    }
  }
  .hot-title {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    padding: 0 10px;
    .img-item {
      flex: 2;
      background-color: #fef0df;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .hot-item {
      flex: 3;
      background-color: #fef0df;
      padding: 20px 15px 0 15px;
      div:first-child {
        font-size: 12px;
        width: 80px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        color: #e1363c;
        background-color: #fff;
        border: 1px solid #e1363c;
        border-radius: 20px;
      }
      div:nth-child(2) {
        font-size: 14px;
        padding-top: 10px;
      }
      div:nth-child(3) {
        padding-top: 5px;
        font-size: 12px;
        color: #7f7f7f;
      }
      div:nth-child(4) {
        padding-top: 10px;
        font-size: 14px;
        color: #e1363c;
      }
    }
  }
  .goods-item {
    padding-top: 10px;
    padding-right: 10px;
    .item {
      box-sizing: border-box;
      display: inline-block;
      padding-left: 10px;
      width: 33.33%;
      font-size: 14px;
      .img-item {
        background-color: #f5f5f5;
        // margin-bottom: 5px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .text-item {
        div:nth-child(1) {
          height: 30px;
          font-size: 12PX;
          margin-top: 5px;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        div:nth-child(2) {
          margin-top: 5px;
          font-size: 14px;
          color: #dd1a21;
        }
      }
    }
  }
}
.top-btn {
  position: fixed;
  right: 10px;
  bottom: 100px;
  width: 50px;
  height: 50px;
  border: 1px solid #a8a8a8;
  color: #a8a8a8;
  border-radius: 50%;
  text-align: center;
  line-height: 50px;
  font-size: 30px;
  background-color: #fefefe;
  opacity: 0.6;
}
</style>