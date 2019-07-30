import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
   {
     path:"/",
     redirect:"/index"
   },{
     path:"/index",
     name:"index",
     component:()=>import("@/views/Index") // 组件懒加载
   },{
    path:"/detail",
    name:"detail",
    component:()=>import("@/views/Detail") // 组件懒加载
  }
  ]
})
