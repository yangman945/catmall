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
            </div>
            <div class="phone">
              <span>{{v.province}}{{v.city}}{{v.county}}{{v.addressDetaill}}</span>
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
      <van-popup v-model="addresShow" position="bottom" :style="{ height: '100%' }">
      <div class="pop-up">
        <section class="address-content">
          <ul class="address-list">
            <li class="address-item">
              <van-cell title="联系人" />
              <div class="address-name">
                <van-field v-model="addressItem.name" placeholder="请输入姓名" />
              </div>
            </li>
            <li class="address-item">
              <van-cell title="电话" />
              <div class="address-name">
                <van-field v-model="addressItem.tel" placeholder="手机号码" />
              </div>
            </li>
            <li class="address-item">
              <van-cell title="所在地区" />
              <div class="address-name" @click="show = true">
                <van-field v-model="address" disabled placeholder="请选择省市区" />
              </div>
            </li>
            <li class="address-item">
              <van-cell title="所在地区" />
              <div class="address-name" @click="show = true">
                <van-field v-model="addressItem.addressDetaill" disabled placeholder="请填写详细地址" />
              </div>
            </li>
          </ul>
        </section>
      </div>
        <div @click="submitBtn" class="save-btn">保存</div>
        <div class="cancel-btn">取消</div>
      </van-popup>
      <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
        <van-area
          :area-list="areaList"
          @cancel="handleCancel"
          @confirm="handleConfirm"
          :columns-placeholder="value"
          value="110101"
        />
      </van-popup>
    </div>
  </div>
</template>
<script>
import myNavbar from "@/components/navbar/index.vue";
import areaList from "@/mock/area.js";
export default {
  data() {
    return {
      address:'',
      value: ['请选择', '请选择', '请选择'],
      addressList: [],
      addresShow: false,
      show: false,
      areaList: {},
      addressItem: {
        name: "杨标泓",
        tel: "15107684016",
        province: "",
        city: "",
        county: "",
        addressDetaill: "文冲文园牛地街菜鸟驿站"
      }
    };
  },
  created() {
    this.areaList = areaList;
  },
  methods: {
    handelDelBtn(i){
      this.addressList.splice(i,1)
    },
    handleCancel() {
      this.show = false;
    },
    handleConfirm(e) {
      console.log(e);
      this.addressItem.province = e[0].name;
      this.addressItem.city = e[1].name;
      this.addressItem.county= e[2].name;
      this.address = `${e[0].name}-${e[1].name}-${e[2].name}`
      // this.value[0] = e[0].code
      // this.value[1] = e[1].code
      // this.value[2] = e[2].code
      
      this.show = false;
    },
    submitBtn(){
      this.addressList.push(JSON.parse(JSON.stringify(this.addressItem)))
      this.addresShow = false
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
.cancel-btn{
  box-sizing: border-box;
  margin:10px auto 0;
  width: 80%;
  height: 40px;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  border:1px solid #ccc;
};
.save-btn{
  margin:0 auto;
  width: 80%;
  height: 40px;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  background-color: #dd1a21;
  color:#fff;
}
</style>