<template>
    <div class="search">
        <div>
            <van-icon name="search" />
            <span>搜索商品，共15234款好物等你拿</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'mySearch',
    data(){
        return{}
    }
}
</script>
<style lang="less" scoped>
.search{
    box-sizing: border-box;
    padding: 5px 10px;
    border-bottom: 1PX solid #f2f2f2;
    div{
        width: 100%;
        height: 30px;
        font-size: 18px;
        font-weight: 600;
        color:#757575;
        background-color:#ededed;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        span{
            padding-left: 5px;
            font-size: 14px;
            font-weight: 500;
        }
    }
}
</style>