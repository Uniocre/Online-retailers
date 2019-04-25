import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import RouterView from '../views/public/RouterView.vue'
import Login from '../views/login/Login.vue'
import Order from '../views/Backstage/Order.vue'
import Bcar from '../views/Backstage/BuyCar.vue'
import Register from '../views/login/Register.vue'
import Pay from '../views/shop/pay.vue'
import Details from '../views/shop/Details.vue'
import Evaluate from '../views/shop/Evaluate.vue'
import Search from '../views/search/Search.vue'
import '../styles/index.scss'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home',
    component: RouterView,
    children: [{
      path: '/home',
      name: '主页',
      component: Home
    },
    {
      path: '/bcar',
      name: '购物车',
      component: Bcar
    },
    {
      path: '/order',
      name: '订单',
      component: Order
    },
    {
      path: '/register',
      name: '用户注册',
      component: Register
    },
    {
      path: '/details',
      name: '商品详情',
      component: Details
    },
    {
      path: '/evaluate',
      name: '评价商品',
      component: Evaluate
    },
    {
      path: '/search',
      name: '搜索页',
      component: Search
    },
    {
      path: '/pay',
      name: '支付页',
      component: Pay
    }
    ]
  },
  {
    path: '/login',
    name: '登录',
    component: Login
  }
  ]
})
