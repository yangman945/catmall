import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import '@/mock/index.js'
import '@/assets/reset.css'
    //使用rem布局
import 'amfe-flexible' 
    // 按需引入vant
import 'vant/lib/index.css'
import {Button,Icon, Tabbar, TabbarItem, Swipe, SwipeItem,Lazyload,CountDown,Popup,Checkbox,CheckboxGroup,Toast,AddressEdit} from 'vant'
Vue.use(Button).use(Icon).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload).use(CountDown).use(Popup).use(Checkbox)
.use(CheckboxGroup).use(Toast).use(AddressEdit);


Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   if(to.path === '/user'){
//     next({name:'login'})
//   }else{
//     next()
//   }
// })
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
