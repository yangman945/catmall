<template>
  <div class="classify">
    <div class="search-top">
      <mySearch />
    </div>
    <!-- 分类楼层 -->
    <div class="cate-floor">
      <!-- 分类导航 -->
      <div class="left-cate">
        <div @click="handleClickFn(v.cateID)" v-for="v in categoryList" :key="v.cateID" :class="curIndex === v.cateID ? 'item-style' : ''">{{v.name}}</div>
      </div>
      <!-- 分类商品 -->
      <div class="right-cate">
        <div v-for="item in cateItem" :key="item.title" class="cate-goods">
          <div class="cate-title">
            {{item.title}}
          </div>
          <div v-for="v in item.productList" :key="v.imgUrl"  class="cate-item">
            <div class="cate-style">
              <img :src="v.imgUrl" alt="">
              <div>{{v.title}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <myTabbar/>
  </div>
</template>
<script>
import myTabbar from '@/components/tabbar/index.vue'
import mySearch from '@/components/search/index.vue'
import { getCategoryList } from "@/api/goods.js"
export default {
  data() {
    return {
      curIndex:0,
      categoryList:[],
      cateItem:{}
    };
  },
  mounted(){
    getCategoryList().then(res=>{
      console.log(res)
      this.categoryList = res.data.categoryData
      this.cateItem = res.data.categoryData[0].list
    })
  },
  methods:{
    // 切换分类
    handleClickFn(ID){
      this.curIndex = ID
      this.cateItem =  this.categoryList[this.curIndex].list
    }
  },
  components:{myTabbar,mySearch}
};
</script>
<style lang="less" scoped>
.classify{
  box-sizing: border-box;
  padding-top: 40px;
}
  .search-top{
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    margin-bottom: 30px;
  }
  .cate-floor{
    display: inline-block;
    overflow: auto;
    .left-cate{
      position: fixed;
      width: 25vw;
      transform: translateY(0px);
      height: 85vh;
      border-right: 1PX solid #f2f2f2;
      div{
         box-sizing: border-box;
        height: 20px;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        margin-top: 15px;
        border-left: 2px solid #fff;
      };
      .item-style{
        border-left: 2px solid #ab2b2b;
        color:#ab2b2b;
      }
    };
    .right-cate{
      width: 75vw;
      margin-left: 25vw;
      box-sizing: border-box;
      padding:15px;
      .cate-goods{
        margin-bottom: 20px;
        .cate-title{
          width: 100%;
          font-size: 14px;
          font-weight: 700;
          padding-bottom: 10px;
          border-bottom: 1PX solid #f2f2f2;
        }
        .cate-item{
          display: inline-block;
          box-sizing: border-box;
          width: 33.33%;
          height: 100px;
          font-size: 14px;
          margin-top:5px ;
          .cate-style{
            display: flex;
            flex-direction:column;
            justify-content: center;
            align-items: center;
          img{
            width: 80%;
            height: 80%;
          }
          div{
            margin-top: 5px;
            font-size: 12px;
          }
          }
        }
      }
    }
  }
</style>