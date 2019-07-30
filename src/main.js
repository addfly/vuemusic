import Vue from 'vue'  // <script src="./vue.js"></script>
import App from './App.vue' // 引入根组件   let app = new Vue()
import router from './router'  // router 路由
import store from './store/index'  // vuex中的仓库

// 引入MintUI库
import Mint from 'mint-ui';
import "mint-ui/lib/style.css"
Vue.use(Mint);

// 引入静态资源
import "@/assets" // 图片，字体，样式
import "@/mock"  // 模拟数据

Vue.config.productionTip = false


// 创建一个Vue的实例
new Vue({
  router,
  store,
  render: h => h(App)   // render是渲染  render是函数   钩子函数
}).$mount('#app')
