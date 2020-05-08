<template>
    <div tabs>
    <nav>
      <div class="hobby">
        <div
          v-for="v in navList"
          :key="v.id"
          :class="v.id === active ? 'pitch' : ''"
          @click="handleClicktabs(v.id)"
        >{{v.title}}</div>
      </div>
      <div class="content">
          <slot></slot>
      </div>
    </nav>
    </div>
</template>
<script>
export default {
    name:'myTabs',
    data(){
        return{    
            active: 1,
        }
    },
    methods:{
    handleClicktabs(id) {
        console.log(id,'id')
      this.active = id;
      this.$emit('tabsFn',id)
    }
    },
    props:{
        navList:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>
<style lang="less" scoped>

nav {
  .hobby {
    display: flex;
    height: 20px;
    padding: 5px;
    margin-left: 6px;
    white-space: nowrap;
    overflow-y:auto;
    div {
      font-size: 14px;
      color: #919191;
      padding: 0 5px;
      margin-left: 10px;
      /* 最后一个元素 */
    //   &:last-child {
    //     margin-left: 40px;
    //     float: right;
    //     font-size: 16px;
    //   }
    }
    .pitch {
      color: #e65b60;
      border-bottom: 2px solid #e65b60;
    }
  }
  .hobby::-webkit-scrollbar{
    display: none;
}
}
</style>