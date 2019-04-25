<template>
  <div class="operation">
    <!-- 顶部栏组件 -->
    <div class="home">
      <ul>
        <li>
          <router-link :to="{path:'/login'}">请登录 </router-link>
        </li>
        <li><router-link :to="{path:'/order'}">我的订单 </router-link></li>
        <li>
          <router-link :to="{path:'/bcar'}">购物车 </router-link>
        </li>
        <li>
          <router-link :to="{path:'/et'}">我的 </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  mounted () {
    this.tcall()
  },
  methods: {
    tcall () {
    }
  }
}
</script>

<style lang = 'scss'>
/* 顶部栏 */
.operation {
  height: 50px;
  background-color: #000;
  width: 100%;
  color: #fff;
  .home{
    width:1200px;
    margin:0 auto;
  }
  ul {
    display: block;
    float: right;
    line-height: 50px;
    li {
      margin: 0 10px;
      display: inline-block;
    }
    li:last-children {
      margin-right: 0;
    }
  }
}
</style>
