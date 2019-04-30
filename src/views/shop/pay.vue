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
      <!-- 拍下商品 -->
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
          <!-- 确认订单信息 -->
          <p style="margin:10px 0;">确认订单信息</p>
          <!-- 商品 -->
          <el-table :data="tableData"
                    style="width: 100%">
            <el-table-column label="商品">
              <template slot-scope="scope">
                <img :src="scope.row.img"
                     alt=""
                     style="height:30px;width:50px;">
                <span style="margin-left: 10px">{{ scope.row.name }}</span>
              </template>
            </el-table-column>
            <el-table-column label="单价"
                             prop="UnitPrice">
            </el-table-column>
            <el-table-column label="数量"
                             prop="number">
              <template slot-scope="scope">
                <el-input-number size="mini"
                                 v-model="scope.row.number"
                                 :min="1"
                                 @change="handleChange(scope.row)"></el-input-number>
              </template>
            </el-table-column>
            <el-table-column label="金额"
                             prop="totalPrice">
            </el-table-column>
          </el-table>
          <div class="div">
            {{calculatePrice}}
          </div>
        </div>
      </div>
      <el-button style="margin-top: 12px"
                 @click="next">确认订单</el-button>
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
      /* 全部商品总价 */
      Price: 0,
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
      ],
      /* 商品 */
      tableData: [{
        /* 商品 */
        /* 图片 */
        img: '../../../static/server/4.jpg',
        id: '1001',
        /* 商品类型 */
        type_id: '1',
        /* 商品名称 */
        name: '刀片服务器',
        /* 商品单价 */
        UnitPrice: 40,
        /* 商品数量 */
        number: '2',
        /* 总价 */
        totalPrice: null
      },
      {
        /* 商品 */
        /* 图片 */
        img: '../../../static/server/4.jpg',
        id: '1002',
        /* 商品类型 */
        type_id: '2',
        /* 商品名称 */
        name: '刀片服务器',
        /* 商品单价 */
        UnitPrice: 20,
        /* 商品数量 */
        number: '1',
        /* 总价 */
        totalPrice: null
      }]
    }
  },
  /* 过滤器 */
  filters: {
    capitalize: function (value) {
      if (!value) return ''
    }
  },
  computed: {
    calculatePrice: function () {
      let total1 = 0
      this.tableData.filter((v, i) => {
        total1 += v.UnitPrice * v.number
      })
      return total1
    }
  },
  mounted () {
    this.Lprice()
  },
  methods: {
    goedit () { },
    /* 商品金额 */
    Lprice () {
      this.tableData.filter((v, i) => {
        v.totalPrice = v.UnitPrice * v.number
      })
    },
    /* 商品金额总价 */
    next () {
      if (this.active++ > 2) this.active = 0
    },
    /* 计步器事件 */
    handleChange (value) {
      this.tableData.filter((v, i) => {
        if (value.id === this.tableData[i].id) {
          /* 循环数组当前的id与数组里id相等时
          取当前的单价和num，相乘取总金额数，在赋值到当前商品的总金额数值中 */
          let price = v.UnitPrice
          let num = v.number
          let allPrice = price * num
          v.totalPrice = allPrice
        }
      })
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
