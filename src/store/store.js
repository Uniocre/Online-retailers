import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  username: ''
}
// mutations 里面定义着操作state中数据的函数，通过这个函数可以自由的操作数据
const mutations = {
  // 这里面有每一个函数都有一个默认值state，这个state就是store中定义的state对象
  // 同时还可以传递给其他的参数，但是state是第一个参数

  // 设置用户名--将用户名存储到state中的变量
  setusername: (state, value) => {
    state.username = value
    localStorage.setItem('username', value)
  }
}

// actions 里面存储着触发mutations里面函数的行为（函数）
const actions = {
  // 触发器：一个函数的调用会在内部通用其他的函数
  setusernameAction: ({commit}, value) => {
    commit('username', value)
  }
}
// getters 属性封装——————可以用来获取state中的数据
const getters = {
  username: (state) => {
    return localStorage.getItem('username')
  }
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations: mutations
})
