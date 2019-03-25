import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Bcar from '../views/Backstage/BuyCar.vue'
import '../styles/index.scss'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/home',
    name: 'Home',
    component: Home,
    children: [{
      path: 'bcar',
      name: 'Bcar',
      component: Bcar
    }]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
  ]
})
