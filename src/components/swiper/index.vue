<template>
  <div class="swiper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in swiperList" :key="item.id" >
          <img @click="handleSwiperFn(item.id)" v-lazy="item.img" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  name: "mySwiper",
  data() {
    return {};
  },
  props:{
    //   轮播图数组
      swiperList:{
          type:Array,
          default(){
              return []
          }
      }
  },
  methods:{
      handleSwiperFn(id){
          console.log(id,"轮播图id")
      }
  }
};
</script>
<style lang="less" scoped>
  img{
      width: 100%;
      height: 185px;
  }
</style>