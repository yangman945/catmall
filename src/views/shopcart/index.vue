<template>
  <div class="content">
    <div class="shopcart">
    <div class="title">
      <div class="border-1px"></div>
      <span style="margin-left:15px">购物车</span>
      <span
        v-if="cartShopList.length !== 0 "
        @click="handleExitFn"
        style="float:right;font-size:14px;margin-right:15px"
      >{{editSta?'完成':'编辑'}}</span>
    </div>
    <div v-if="cartShopList.length === 0 " class="cart-not">购物车暂无数据</div>
    <div v-else class="cart-list">
      <div v-for=" (v,i) in cartShopList" :key="v.goodsID" class="cart-item">
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
              <div @click="handleShopComponentFn(false,v,i)">-</div>
              <div>{{v.num}}</div>
              <div @click="handleShopComponentFn(true,v,i)">+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="order">
      <div>
        <van-checkbox @click="handleChangeBox" checked-color="#d71e22" v-model="checkBox">全选</van-checkbox>
        <span v-show="!editSta" style="color:#dd1a21;">合计：￥{{totalPrice}}</span>
      </div>
      <div
        @click="handleSubmitFn"
        class="order-item"
        :class="{'pass-color':ispass}"
      >{{editSta?'删除所选':'下单'}}</div>
    </div>
    <myTabbar />
  </div>
  </div>
</template>
<script>
import myTabbar from "@/components/tabbar/index.vue";
export default {
  data() {
    return {
      ispass:false, //结算状态
      editSta: false, //编辑状态
      checkBox: false, //权限状态
      totalPrice: 0, //商品总价
      // 购物车数据
      cartShopList: [
        {
          name: "男式吸湿速干运动基础T恤daji就大家好的 我是大黄沙岭安居客附加按分类建立", //描述
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
    this.changePassFn()
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
      this.changePassFn()
    },
    // 全选按钮改变
    handleChangeBox(){
      this.cartShopList.forEach(v =>  v.sign = this.checkBox ? true : false)
    },
    // 改变结算状态
    changePassFn(){
      this.ispass = this.cartShopList.some(v=>{
       return v.sign === true
      })
    },
    // 商品加减
    handleShopComponentFn(result,item,index){
      console.log(index)
      if(result){
       if(item.num >= 99){
           this.$toast('达到单次添加上限')
       }else{
         this.cartShopList[index].num++
         this.totalPriceFn()
       }
      }else{
        if(item.num <= 1){
           this.$toast('最低一件起售')
        }else{
          this.cartShopList[index].num--
          this.totalPriceFn()
        }
      }

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
      this.editSta = !this.editSta
      this.ispass = false
      this.totalPrice = 0
      this.cartShopList.forEach(v=>{
        v.sign = false
      })
    },
    // 提交 编辑状态时为商品删除提交 false为商品下单提交
    handleSubmitFn(){
      if(this.editSta){
        for(let i = this.cartShopList.length -1;i >= 0;i--){
          console.log(i)
            if(this.cartShopList[i].sign){
              this.cartShopList.splice(i,1)
            }
        }
        this.checkBox = false
      }else{
        console.log(`提交金额为${this.totalPrice}`)
      }
    }
  },
  components: { myTabbar }
};
</script>
<style lang="less" scoped>
.content{
  box-sizing: border-box;
  height:100vh;
  background-color:#f4f4f4;
}
.border-1px {
  position: absolute;
  bottom: 0;
  height: 1px;
  width: 100%;
  background: #dd1a21;
  -webkit-transform: scaleY(0.5);
  -webkit-transform-origin: 0 0;
  overflow: hidden;
}
/* 2倍屏 */
@media only screen and (-webkit-min-device-pixel-ratio: 2) {
  .border-1px::after {
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
}

/* 3倍屏 */
@media only screen and (-webkit-min-device-pixel-ratio: 3) {
  .border-1px::after {
    -webkit-transform: scaleY(0.33);
    transform: scaleY(0.33);
  }
}

.shopcart {
  padding-top: 40px;
  padding-bottom: 70px;
  background-color: #f4f4f4;
}
.title {
  position: fixed;
  top: 0;
  background-color: #fff;
  z-index: 9;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  font-size: 18px;
  line-height: 40px;
  background-color: #fff;
}
.cart-list {
  background-color: #fff;
  .cart-item {
    box-sizing: border-box;
    display: flex;
    border-top: 8px solid #f4f4f4;
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
      justify-content: space-between;
      padding: 0px 10px;
      .desc {
        box-sizing: border-box;
        padding:6px 0;
        max-height:34px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 14px;
        color: #8a8a8a;
      }
      .type {
        height: 20px;
        margin-top: 5px;
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
  .order-item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 16px;
    color: #fff;
    background-color: #cccccc;
  }
  .pass-color {
    background-color: #dd1a21;
  }
}
</style>