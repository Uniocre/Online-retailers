<template>
  <div>
    <Operation></Operation>
    <div class="b_home ">
      <div class="logo clearfix">
        <img src="../../../static/logo.jpg"
             style="height: 57px;width: 200px;float: left; display: inline-block;"
             alt="">
        <!-- 步骤条 -->
        <el-steps :active="active"
                  style="width:700px;float:right;"
                  finish-status="success">
          <el-step title="拍下商品"></el-step>
          <el-step title="确认收货"></el-step>
          <el-step title="确认收货"></el-step>
        </el-steps>
      </div>
      <div v-show="active === 0">
        <div class="addres">
          <div class="address-top clearfix">
            <p style="float:left;">确认收货地址</p>
            <div style="float:right;"
                 @click="goedit">管理收货地址</div>
          </div>
          <!-- 收货地址选择 -->
          <p>寄送至:</p>
          <ul v-for="(value,index) in address"
              :key="index"
              class="payaddress">
            <li>{{value.address}} ({{value.name}} 收) {{value.phone}}</li>
          </ul>
        </div>
      </div>
      <el-button style="margin-top: 12px;"
                 @click="next">下一步</el-button>
    </div>
  </div>
</template>

<script>
import Operation from '../../components/Operation'
export default {
  components: {
    Operation
  },
  data () {
    return {
      active: 0,
      /* 收货地址 */
      address: [
        {
          address: '广东省 广州市 天河区 新塘街道 宏太智慧谷6号楼409',
          phone: '13022001673',
          name: '么么么'
        }, {
          address: '广东省 广州市 天河区 新塘街道 宏太智慧谷6号楼409',
          phone: '13022001673',
          name: '么么么'
        }
      ]
    }
  },
  mounted () {
    this.tcall()
  },
  methods: {
    tcall () {
    },
    next () {
      if (this.active++ > 2) this.active = 0
    }
  }
}
</script>

<style lang = 'scss'>
.b_home {
  width: 1200px;
  margin: 20px auto;
}
/* 地址 */
.payaddress {
  li {
    text-indent: 12px;
    margin: 5px auto;
  }
}
</style>
