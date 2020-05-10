<template>
    <div class="navbar">
        <div class="top-bar">
            <van-icon @click="handletoHome" name="wap-home-o" />
            <span>地主精选</span>
            <div>
            <van-icon @click="handletoSearch" class="icon-item" name="search" />
            <van-icon @click="handletoCart" name="cart-o" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'myNavbar',
    data(){
        return{}
    },
    methods:{
        handletoHome(){
            this.$router.push({name:'home'})
        },
        handletoCart(){
            this.$router.push({name:'shopcart'})
        },
        handletoSearch(){}
    }
}
</script>
<style lang="less" scoped>
.navbar{
    .top-bar{
        position: fixed;
        top: 0;
        box-sizing: border-box;
        width: 100%;
        height: 40px;
        padding:0 10px;
        z-index: 3;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 22px;
        background-color: #fff;
        border-bottom: 1PX solid #e5e6e6;
        span{
        font-size: 20px;
        };
        .icon-item{
            padding-right: 10px;
        }
    }
}
</style>