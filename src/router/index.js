import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import RouterView from '../views/public/RouterView.vue'
import Login from '../views/Login.vue'
import Order from '../views/Backstage/Order.vue'
import Bcar from '../views/Backstage/BuyCar.vue'
import '../styles/index.scss'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home',
    component: RouterView,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/bcar',
        name: 'Bcar',
        component: Bcar
      },
      {
        path: '/order',
        name: 'Order',
        component: Order
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
  ]
})
