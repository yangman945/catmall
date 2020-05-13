<template>
  <div class="address">
    <div class="content">
      <header>
        <myNavbar />
      </header>
      <!-- 地址列表 -->
      <main v-if="addressList.length > 0">
        <div v-for="(v,i) in addressList" :key="v.addressDetail" class="address-item">
          <div class="left-text">
            <div class="name">
              <span>{{v.name}}</span>
              <span>{{v.tel}}</span>
              <div v-show="v.isDefault">默认</div>
            </div>
            <div class="phone">
              <span>
                  {{v.province}}{{v.city}}{{v.county}}{{v.addressDetaill}}
              </span>
            </div>
          </div>
          <div @click="handelDelBtn(i)" class="right-del">
            <van-icon name="delete" />
          </div>
        </div>
      </main>
      <footer>
        <div @click="addresShow = true" class="add">
          <span>+</span>
          <span>新建地址</span>
        </div>
      </footer>
      <div class="pop-up">
        <van-popup :style="{ height: '100%',width: '100%' }" v-model="addresShow">
          <van-address-edit
            :area-list="areaList"
            show-delete
            show-set-default
            show-search-result
            :delete-button-text="'退出'"
            :search-result="searchResult"
            :area-columns-placeholder="['请选择', '请选择', '请选择']"
            @save="onSave"
            @delete="onDelete"
          />
        </van-popup>
      </div>
    </div>
  </div>
</template>

<script>
import myNavbar from "@/components/navbar/index.vue";
import areaList from "@/mock/area.js";
export default {
  data() {
    return {
      addressList: [],
      addresShow: false,
      areaList: {},
      searchResult: []
    };
  },
  created() {
    this.areaList = areaList;
  },
  methods: {
    onSave(addItem) {
        console.log(addItem)
      if (addItem.isDefault) {
        this.addressList.some(v => {
          if (v.isDefault) {
            return (v.isDefault = false);
          }
        });
        this.addressList.unshift(addItem);
      } else {
        this.addressList.push(addItem);
      }
      this.addresShow = false;
    },
    onDelete() {
      this.addresShow = false;
    },
    handelDelBtn(i){
        this.addressList.splice(i,1)
    }
  },
  components: { myNavbar }
};
</script>
<style lang="less" scoped>
.content {
  padding-top: 40px;
}
main {
  padding: 10px;
  .address-item {
    box-sizing: border-box;
    display: flex;
    height: 70px;
    // background-color: yellow;
    border-bottom: 1px solid #f2f2f2;
    font-size: 16px;
    .left-text {
        box-sizing: border-box;
      width: 90%;
      padding-right: 15px;
      .name {
        display: flex;
        align-items: center;
        span {
          margin-right: 15px;
        }
        div {
          width: 30px;
          height: 20px;
          font-size: 12px;
          color: #e1363c;
          line-height: 20px;
          text-align: center;
          border: 1px solid #e1363c;
          margin-right: 20px;
        }
      }
      .phone {
        display: flex;
        align-items: center;
        margin-top: 15px;
        span {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    .right-del {
      text-align: center;
      font-size: 26px;
      line-height: 70px;
    }
  }
}
footer {
  .add {
    position: fixed;
    box-sizing: border-box;
    margin: 0 auto;
    width: 90%;
    height: 40px;
    border: 1px solid #e03e44;
    background-color: #f4f4f4;
    font-size: 18px;
    text-align: center;
    line-height: 40px;
    left: 5vw;
    bottom: 3vh;
  }
}
</style>