// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import '@/style/LArea.css'
Vue.use(MintUI)

import vueSwiper from 'vue-awesome-swiper'
/* 样式的话，我这里有用到分页器，就在全局中引入了样式 */
import 'swiper/dist/css/swiper.css'
Vue.use(vueSwiper);

import Bottom from '@/components/Bottom'

Vue.config.productionTip = false

//全局注册组件

Vue.component('v-bottom', Bottom)

//第三方插件
import '@/style/font-awesome-4.7.0/css/font-awesome.min.css'
// import '@/style/common.scss'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
