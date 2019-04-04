<template>
  <div>
    <Operation></Operation>
    <div class="b_home">
      <!-- 标签页 -->
      <el-tabs v-model="activeName"
               @tab-click="handleClick"
               class="tab">
        <!-- 所有订单 已收货state3 -->
        <el-tab-pane label="所有订单"
                     name="first">
          <!-- 搜索栏 -->
          <search></search>
          <!-- 操作栏 -->
          <mailoperation></mailoperation>
          <!-- 商品拦 -->
          <el-row class='b_shop'
                  v-for="(value,index) in commodity"
                  :key="index">
            <el-col :span="3">
              <div class="fnt">
                <div class="iput">
                  <el-checkbox v-model="value.isSelect"
                             style="width:20px;display:inline-block;"
                             @change="handleCheckedCitiesChange(value,index)"></el-checkbox>
                </div>
                <div class="pho_"><img :src="value.pho" alt=""></div>
              </div>
            </el-col>
            <!-- 商品信息 -->
            <el-col :span="3">
              <div class="grid-content">{{value.name}}</div>
            </el-col>
            <el-col :span="5">
              <div class="grid-content">&nbsp;</div>
            </el-col>
            <!-- 商品单价 -->
            <el-col :span="3">
              <div class="grid-content">{{value.price}}</div>
            </el-col>
            <!-- 商品数量 -->
            <el-col :span="4">
              <div class="grid-content">{{value.number}}</div>
            </el-col>
            <!-- 商品数量 -->
            <el-col :span="3">
              <div class="grid-content">{{value.totalPrice}}</div>
            </el-col>
            <!-- 操作 -->
            <el-col :span="3" style="line-height:0;text-align:center">
              <ul class="op_color">
                <li>
                  <el-button type="text"
                             @click="Delcar(index, value.id)">删除</el-button>
                </li>
                <li>
                  <el-button type="text"
                             @click="Delcar(index, value.id)">订单详情</el-button>
                </li>
                <li>
                  <el-button type="text"
                             @click="Delcar(index, value.id)"
                             v-if="value.state == 1">确认收货</el-button>
                </li>
              </ul>
            </el-col>
          </el-row>
        </el-tab-pane>
        <!-- 待发货 state2-->
        <el-tab-pane label="待发货"
                     name="second">
                     <!-- 搜索栏 -->
          <search></search>
          <!-- 操作栏 -->
          <mailoperation></mailoperation>
          <!-- 商品拦 -->
          <el-row class='b_shop'
                  v-for="(value,index) in commodity"
                  :key="index"
                  v-show="value.state == 2 ? true : false">
            <el-col :span="3">
              <div class="fnt">
                <div class="iput">
                  <el-checkbox v-model="value.isSelect"
                             style="width:20px;display:inline-block;"
                             @change="handleCheckedCitiesChange(value,index)"></el-checkbox>
                </div>
                <div class="pho_"><img :src="value.pho" alt=""></div>
              </div>
            </el-col>
            <!-- 商品信息 -->
            <el-col :span="3">
              <div class="grid-content">{{value.name}}</div>
            </el-col>
            <el-col :span="5">
              <div class="grid-content">&nbsp;</div>
            </el-col>
            <!-- 商品单价 -->
            <el-col :span="3">
              <div class="grid-content">{{value.price}}</div>
            </el-col>
            <!-- 商品数量 -->
            <el-col :span="4">
              <div class="grid-content">{{value.number}}</div>
            </el-col>
            <!-- 商品数量 -->
            <el-col :span="3">
              <div class="grid-content">{{value.totalPrice}}</div>
            </el-col>
            <!-- 操作 -->
            <el-col :span="3" style="line-height:0;text-align:center">
              <ul class="op_color">
                <li>
                  <el-button type="text"
                             @click="Delcar(index, value.id)">删除</el-button>
                </li>
                <li>
                  <el-button type="text"
                             @click="Delcar(index, value.id)">订单详情</el-button>
                </li>
                <li>
                  <el-button type="text"
                             @click="Delcar(index, value.id)"
                             v-if="value.state == 1">确认收货</el-button>
                </li>
              </ul>
            </el-col>
          </el-row>
        </el-tab-pane>
        <!-- 待收货 state1-->
        <el-tab-pane label="待收货"
                     name="third">
          <search></search>
          <!-- 操作栏 -->
          <mailoperation></mailoperation>
          <!-- 商品拦 -->
          <el-row class='b_shop'
                  v-for="(value,index) in commodity"
                  :key="index"
                  v-show="value.state == 1 ? true : false">
            <el-col :span="3">
              <div class="fnt">
                <div class="iput">
                  <el-checkbox v-model="value.isSelect"
                             style="width:20px;display:inline-block;"
                             @change="handleCheckedCitiesChange(value,index)"></el-checkbox>
                </div>
                <div class="pho_"><img :src="value.pho" alt=""></div>
              </div>
            </el-col>
            <!-- 商品信息 -->
            <el-col :span="3">
              <div class="grid-content">{{value.name}}</div>
            </el-col>
            <el-col :span="5">
              <div class="grid-content">&nbsp;</div>
            </el-col>
            <!-- 商品单价 -->
            <el-col :span="3">
              <div class="grid-content">{{value.price}}</div>
            </el-col>
            <!-- 商品数量 -->
            <el-col :span="4">
              <div class="grid-content">{{value.number}}</div>
            </el-col>
            <!-- 商品数量 -->
            <el-col :span="3">
              <div class="grid-content">{{value.totalPrice}}</div>
            </el-col>
            <!-- 操作 -->
            <el-col :span="3" style="line-height:0;text-align:center">
              <ul class="op_color">
                <li>
                  <el-button type="text"
                             @click="Delcar(index, value.id)">删除</el-button>
                </li>
                <li>
                  <el-button type="text"
                             @click="Delcar(index, value.id)">订单详情</el-button>
                </li>
                <li>
                  <el-button type="text"
                             @click="Delcar(index, value.id)"
                             v-if="value.state == 1">确认收货</el-button>
                </li>
              </ul>
            </el-col>
          </el-row>
        </el-tab-pane>
        <!-- 订单回收站 被删除的订单state4 -->
        <el-tab-pane label="订单回收站"
                     name="fourth">
          <search></search>
          <!-- 操作栏 -->
          <mailoperation></mailoperation>
          <!-- 商品拦 -->
          <el-row class='b_shop'
                  v-for="(value,index) in commodity"
                  :key="index"
                  v-show="value.state == 4 ? true : false">
            <el-col :span="3">
              <div class="fnt">
                <div class="iput">
                  <el-checkbox v-model="value.isSelect"
                             style="width:20px;display:inline-block;"
                             @change="handleCheckedCitiesChange(value,index)"></el-checkbox>
                </div>
                <div class="pho_"><img :src="value.pho" alt=""></div>
              </div>
            </el-col>
            <!-- 商品信息 -->
            <el-col :span="3">
              <div class="grid-content">{{value.name}}</div>
            </el-col>
            <el-col :span="5">
              <div class="grid-content">&nbsp;</div>
            </el-col>
            <!-- 商品单价 -->
            <el-col :span="3">
              <div class="grid-content">{{value.price}}</div>
            </el-col>
            <!-- 商品数量 -->
            <el-col :span="4">
              <div class="grid-content">{{value.number}}</div>
            </el-col>
            <!-- 商品数量 -->
            <el-col :span="3">
              <div class="grid-content">{{value.totalPrice}}</div>
            </el-col>
            <!-- 操作 -->
            <el-col :span="3" style="line-height:0;text-align:center">
              <ul class="op_color">
                <li>
                  <el-button type="text"
                             @click="Delcar(index, value.id)">删除</el-button>
                </li>
                <li>
                  <el-button type="text"
                             @click="Delcar(index, value.id)">订单详情</el-button>
                </li>
                <li>
                  <el-button type="text"
                             @click="Delcar(index, value.id)"
                             v-if="value.state == 1">确认收货</el-button>
                </li>
              </ul>
            </el-col>
          </el-row>
          </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Operation from '../../components/Operation'
import mailoperation from '../../components/mailoperation'
import search from '../../components/search'
export default {
  components: {
    Operation,
    mailoperation,
    search
  },
  data () {
    return {
      /* tab拦默认展示 */
      activeName: 'first',
      /* 搜索框 */
      input4: '',
      /* 全选默认为否 */
      checkAll: false,
      commodity: [
        {
          /* 商品图片 */
          pho: '../../../static/server/1.jpg',
          /* 商品id */
          id: 1001,
          /* 商品名称 */
          name: '防火墙',
          /* 商品价格 */
          price: 5574,
          /* 商品状态 已发货1，已收货3，被删除4 */
          state: 3,
          /* 订单时间 */
          time: 20190402,
          /* 金额 */
          totalPrice: '',
          /* 商品数量 */
          number: '2',
          /* 订单号 */
          order_id: 12345678,
          /* 确认是否被选择 */
          isSelect: false
        },
        {
          pho: '../../../static/server/2.jpg',
          id: 1002,
          name: '网关',
          price: 43567,
          state: 2,
          time: 20190402,
          totalPrice: '',
          number: '4',
          order_id: 12345678,
          isSelect: false
        },
        {
          pho: '../../../static/server/3.jpg',
          id: 1003,
          name: '网关1',
          price: 1355,
          state: 1,
          time: 20190402,
          totalPrice: '',
          number: '6',
          order_id: 12345678,
          isSelect: false
        },
        {
          pho: '../../../static/server/4.jpg',
          id: 1004,
          name: '网关2',
          price: 466,
          state: 2,
          time: 20190402,
          totalPrice: '',
          number: '3',
          order_id: 12345678,
          isSelect: false
        },
        {
          pho: '../../../static/server/5.jpg',
          id: 1005,
          name: '网关3',
          price: 347,
          state: 3,
          totalPrice: '',
          time: 20190402,
          number: '5',
          order_id: 12345678,
          isSelect: false
        },
        {
          pho: '../../../static/server/6.jpg',
          id: 1006,
          name: '网关4',
          price: 35,
          state: 4,
          totalPrice: '',
          time: 20190402,
          number: '2',
          order_id: 12345678,
          isSelect: false
        }
      ]
    }
  },
  mounted () {
    this.tcall()
  },
  methods: {
    tcall () {
      this.commodity.map((v, i) => {
        let untprice = v.price
        let num = v.number
        let totalprice = untprice * num
        this.commodity[i].totalPrice = totalprice
      })
    },
    handleClick (tab, event) {
      console.log(tab, event)
    },
    /* 商品单选事件 */
    handleCheckedCitiesChange (val, index) {
      let flag = true
      this.commodity.filter((v, i) => {
        if (!v.isSelect) {
          flag = false
        }
      })
      /* 赋值给全选按钮 */
      this.checkAll = flag
    },
    /* 全选 */
    selectTOtal () {
      if (this.checkAll) {
        this.commodity.map((v) => {
          v.isSelect = true
        })
      } else {
        this.commodity.map((v) => {
          v.isSelect = false
        })
      }
    },
    /* 删除订单 */
    Delcar (index, id) {
      this.$confirm('此操作将删除该订单, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        /* 没有接口先不做了 */
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>

<style lang = 'scss'>
/* 版心 */
.b_home {
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
}
.op_color {
  li {
    .el-button--text{
      color: #333;
    }
  }
}
/* 商品 */
.b_shop {
  margin-top: 5px;
  .el-col{
    height:150px;
    line-height: 150px;
    .grid-content{
      text-align: center;
    }
    .fnt{
      display:flex;
      .iput{
        width:20px;
        height:150px;
        display: inline-block;
      }
      .pho_{
        width: 115px;
        height: 125px;
        padding-top: 25px;
        padding-left: 15px;
        display: inline-block;
        img {
          width: 100px;
          height: 100px;
        }
      }
    }
  }
}
</style>
