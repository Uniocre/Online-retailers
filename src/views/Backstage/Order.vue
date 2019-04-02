<template>
  <div>
    <Operation></Operation>
    <div class="b_home">
      <!-- 标签页 -->
      <el-tabs v-model="activeName"
               @tab-click="handleClick"
               class="tab">
        <el-tab-pane label="所有订单"
                     name="first">
          <div class="grid-content">&nbsp;&nbsp;
            <el-checkbox v-model="checkAll"
                         @change="selectTOtal">全选</el-checkbox>
          </div>
          <el-row class='b_shop'
                  v-for="(value,index) in commodity"
                  :key="index">
            <!-- 商品 -->
            <el-col :span="3">
              <div class="grid-content car_iput">&nbsp;&nbsp;
                <el-checkbox v-model="value.isSelect"
                             @change="handleCheckedCitiesChange(value,index)"></el-checkbox>
                <img :src="value.pho"
                     alt="">
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
            <!-- 操作 -->
            <el-col :span="3">
              <el-button type="text"
                         style="color:#333;line-height:0px;"
                         @click="Delcar(index, value.id)">删除</el-button>
              <!-- 未完成 -->
              <el-button type="text"
                         style="color:#333;line-height:0px;"
                         @click="Delcar(index, value.id)">订单详情</el-button>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="待发货"
                     name="second">待发货</el-tab-pane>
        <el-tab-pane label="待收货"
                     name="third">待收货</el-tab-pane>
        <el-tab-pane label="订单回收站"
                     name="fourth"
                     style="margin-left:100px;">订单回收站</el-tab-pane>
      </el-tabs>
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
      activeName: 'first',
      commodity: [
        {
          /* 商品图片 */
          pho: '../../../static/server/1.jpg',
          /* 商品id */
          id: 1001,
          /* 商品名称 */
          name: '防火墙',
          /* 商品价格 */
          price: 1.1,
          /* 商品状态 发货1，未发货2，已收货3 */
          state: '1',
          /* 订单时间 */
          time: 20190402,
          /* 商品数量 */
          number: '1',
          /* 订单号 */
          order_id: 12345678,
          /* 确认是否被选择 */
          isSelect: false
        },
        {
          pho: '../../../static/server/1.jpg',
          id: 1002,
          name: '网关',
          price: 1.1,
          state: '1',
          time: 20190402,
          number: '1',
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
    },
    handleClick (tab, event) {
      console.log(tab, event)
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
      this.$confirm('此操作将删除该商品, 是否继续?', '提示', {
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
.b_home {
  width: 1200px;
  margin: 0 auto;
}
.b_shop {
  text-align: center;
  margin-top: 5px;
  img {
    width: 50px;
    height: 50px;
  }
}
</style>
