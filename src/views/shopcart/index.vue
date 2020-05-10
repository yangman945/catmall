<template>
  <div class="shopcart">
    <divclass="title">
      <span>购物车</span>
      <span @click="handleExitFn" style="float:right;font-size:14px;">编辑</span>
    </div>
    <div v-if="cartShopList.length === 0 " class="cart-not">购物车暂无数据</div>
    <div v-else class="cart-list">
      <div v-for=" v in cartShopList" :key="v.goodsID" class="cart-item">
        <!-- 选择按钮 -->
        <div class="check-btn">
          <van-checkbox @change="handleChangeBtn" v-model="v.sign" checked-color="#d71e22"></van-checkbox>
        </div>
        <!-- 商品图片 -->
        <div class="goods-img">
          <img :src="v.img" alt />
        </div>
        <!-- 商品数据 -->
        <div class="goods-data">
          <div class="desc">{{v.name}}</div>
          <div class="type">
            <span>{{v.type}}</span>
          </div>
          <div class="price">
            <span>￥{{v.price}}</span>
            <div>
              <div>-</div>
              <div>{{v.num}}</div>
              <div>+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="order">
      <div>
        <van-checkbox @click="handleChangeBox" checked-color="#d71e22" v-model="checkBox">全选</van-checkbox>
        <span style="color:#dd1a21;">合计：￥{{totalPrice}}</span>
      </div>
      <div>{{editSta?'删除所选':'下单'}}</div>
    </div>
    <myTabbar />
  </div>
</template>
<script>
import myTabbar from "@/components/tabbar/index.vue";
export default {
  data() {
    return {
      editSta: false, //编辑状态
      checkBox: false, //是否权限状态按钮
      totalPrice: 0, //商品总价
      // 购物车数据
      cartShopList: [
        {
          name: "男式吸湿速干运动基础T恤", //描述
          color: "经典黑", //颜色
          type: "24码-130(2.0)，脚长13.5~14cm", //型号
          img: require("@/assets/icons/category/item1.png"), //图片
          price: 65.25, //单价
          num: 1, //数量
          maxNum: 10, //库存
          goodsID: 155445, //商品id
          sign: true //是否选中 默认为true
        },
        {
          name: "男式吸湿速干运动基础T恤", //描述
          color: "经典黑", //颜色
          type: "24码-130(2.0)，脚长13.5~14cm", //型号
          img: require("@/assets/icons/sec/1.webp"), //图片
          price: 65, //单价
          num: 2, //数量
          maxNum: 10, //库存
          goodsID: 1554365, //商品id
          sign: true //是否选中 默认为true
        },
        {
          name: "男式吸湿速干运动基础T恤", //描述
          color: "经典黑", //颜色
          type: "24码-130(2.0)，脚长13.5~14cm", //型号
          img: require("@/assets/icons/category/item1.png"), //图片
          price: 65, //单价
          num: 2, //数量
          maxNum: 10, //库存
          goodsID: 1554445, //商品id
          sign: true //是否选中 默认为true
        },
        {
          name: "男式吸湿速干运动基础T恤", //描述
          color: "经典黑", //颜色
          type: "24码-130(2.0)，脚长13.5~14cm", //型号
          img: require("@/assets/icons/sec/1.webp"), //图片
          price: 65, //单价
          num: 2, //数量
          maxNum: 10, //库存
          goodsID: 155465, //商品id
          sign: true //是否选中 默认为true
        },
        {
          name: "男式吸湿速干运动基础T恤", //描述
          color: "经典黑", //颜色
          type: "24码-130(2.0)，脚长13.5~14cm", //型号
          img: require("@/assets/icons/category/item1.png"), //图片
          price: 65, //单价
          num: 2, //数量
          maxNum: 10, //库存
          goodsID: 15545, //商品id
          sign: true //是否选中 默认为true
        },
        {
          name: "男式吸湿速干运动基础T恤", //描述
          color: "经典黑", //颜色
          type: "24码-130(2.0)，脚长13.5~14cm", //型号
          img: require("@/assets/icons/sec/1.webp"), //图片
          price: 65, //单价
          num: 2, //数量
          maxNum: 10, //库存
          goodsID: 15465, //商品id
          sign: true //是否选中 默认为true
        }
      ]
    };
  },
  mounted() {
    this.checkBtn()
    this.totalPriceFn()
  },
  methods:{
    // 全选按钮状态
    checkBtn(){ 
        this.checkBox = this.cartShopList.every(v=>{
        return v.sign === true
      })
      this.totalPriceFn()
    },
    // 单项按钮改变
    handleChangeBtn(){
       this.checkBtn()
      this.totalPriceFn()
    },
    // 全选按钮改变
    handleChangeBox(){
      this.cartShopList.forEach(v =>  v.sign = this.checkBox ? true : false)
    },
    // 计算商品总价
    totalPriceFn(){
      // eslint-disable-next-line no-unused-vars
      let totalPrice = 0
      this.cartShopList.forEach(v=>{
        if(v.sign){
          totalPrice += v.num * v.price
        }
      })
      this.totalPrice = totalPrice
    },
    // 编辑事件
    handleExitFn(){
      console.log('编辑')
      this.editSta === !this.editSta
    }
  },
  components: { myTabbar }
};
</script>
<style lang="less" scoped>
.shopcart {
  height: 100vh;
  margin-top: 40px;
  margin-bottom: 110px;
  background-color: #f4f4f4;
}
.title {
  position: fixed;
  top: 0;
  background-color: #fff;
  z-index: 9;
  box-sizing: border-box;
  padding: 0 15px;
  width: 100%;
  height: 40px;
  font-size: 18px;
  line-height: 40px;
  background-color: #fff;
  border-bottom: 1px solid #fff8d8;
}
.cart-list {
  background-color: #fff;
  .cart-item {
    box-sizing: border-box;
    display: flex;
    border-top: 8px solid #f4f4f4;
    width: 100%;
    padding: 10px 0;
    .check-btn {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .goods-img {
      flex: 2;
      background-color: #eeeeee;
      border-radius: 5px;
      img {
        width: 100%;
      }
    }
    .goods-data {
      box-sizing: border-box;
      flex: 6;
      display: flex;
      flex-direction: column;
      padding: 0px 10px;
      .desc {
        flex: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 14px;
        color: #8a8a8a;
        padding: 0 10px;
      }
      .type {
        flex: 1;
        height: 20px;
        max-width: 150px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 10px;
        line-height: 20px;
        font-size: 12px;
        color: #a9a9a9;
        border-radius: 2px;
        background-color: #fafafa;
        text-align: right;
        span {
          box-sizing: border-box;
          text-align: left;
          padding-right: 10px;
        }
      }
      .price {
        flex: 2;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          font-size: 16px;
        }
        div {
          font-size: 18px;
          display: flex;
          justify-content: center;
          align-items: center;
          div {
            width: 25px;
            height: 25px;
            border: 1px solid #a5a9a3;
          }
          div:nth-child(2) {
            width: 30px;
          }
        }
      }
    }
  }
}
.order {
  position: fixed;
  bottom: 50px;
  margin-top: 40px;
  height: 60px;
  width: 100%;
  font-size: 14px;
  background-color: #fff;
  justify-content: space-between;
  display: flex;
  align-items: center;
  div:nth-child(1) {
    box-sizing: border-box;
    flex: 2;
    display: flex;
    padding: 0 20px;
  }
  div:nth-child(2) {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 16px;
    color: #fff;
    background-color: #dd1a21;
  }
}
</style>