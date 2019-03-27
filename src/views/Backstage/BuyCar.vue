<template>
  <div class="home">
    <!-- 顶部栏 -->
    <div class="operation">
      <div class="home">
        <ul>
          <li>
            <router-link :to="{path:'/login'}">请登录 </router-link>
          </li>
          <li>请注册</li>
          <li>我的订单</li>
          <li>
            <router-link :to="{path:'/bcar'}">购物车 </router-link>
          </li>
          <li>购物车</li>
          <li>请注册</li>
        </ul>
      </div>
    </div>
    <div class="b_home">
      <!-- 购物车 -->
      <el-row style="line-height:30px;">
        <el-col :span="18">
          <div class="grid-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;全部商品 {{totalnum}}</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content"
               style="text-align:right;">已选商品(不含运费) {{bfg}}</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content"
               style="text-align:right;">结算</div>
        </el-col>
      </el-row>
      <!-- 操作栏 -->
      <el-row style="text-align: center;">
        <el-col :span="3">
          <div class="grid-content">&nbsp;&nbsp;
            <el-checkbox v-model="checkAll"
                         @change="selectTOtal">全选</el-checkbox>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">商品信息</div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content">&nbsp;</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">单价</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">数量</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">金额</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">操作</div>
        </el-col>
      </el-row>
      <!-- 商品拦 -->
      <el-row class='b_shop'
              v-for="(value,index) in car_"
              :key="index"
              :show="isTrue"
              v-if="car_.length>0">
        <!-- 商品 -->
        <el-col :span="3">
          <div class="grid-content">&nbsp;&nbsp;
            <el-checkbox v-model="value.isSelect"
                         @change="handleCheckedCitiesChange(value,index)"></el-checkbox>
            <img :src="value.car_pho"
                 alt="">
          </div>
        </el-col>
        <!-- 商品信息 -->
        <el-col :span="3">
          <div class="grid-content">{{value.car_commodity}}</div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content">&nbsp;</div>
        </el-col>
        <!-- 商品单价 -->
        <el-col :span="3">
          <div class="grid-content">{{value.UnitPrice}}</div>
        </el-col>
        <!-- 商品数量 -->
        <el-col :span="4">
          <div class="grid-content">
            <!-- 计步器 -->
            <el-input-number size="mini"
                             v-model="value.number"
                             :min="1"
                             @change="handleChange(value)"></el-input-number>
          </div>
        </el-col>
        <!-- 商品总金额 -->
        <el-col :span="3">
          <div class="grid-content"
               style="color:#c51c1c">￥{{value.totalPricr}}</div>
        </el-col>
        <!-- 操作 -->
        <el-col :span="3">
          <el-button type="text"
                     style="color:#333;line-height:0px;"
                     @click="Delcar(index, value.id)">删除</el-button>
        </el-col>
      </el-row>
      <!-- 猜你你喜欢 -->
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      /* 全选商品 */
      checkAll: false,
      /* 测试用隐藏 */
      isTrue: false,
      /* 运费 */
      bfg: '1213',
      /* 商品数量 */
      totalnum: '2',
      car_: [
        {
          /* 商品id */
          id: 1001,
          /* 图片路径 */
          car_pho: '../../static/server/7.jpg',
          /* 商品名称 */
          car_commodity: '防火墙',
          /* 商品价格 */
          car_price: '124',
          /* 判断商品是否被选中 */
          isSelect: false,
          /* 单价 */
          UnitPrice: '40',
          /* 商品数量 */
          number: '2',
          /* 总价 */
          totalPricr: '40'
        },
        {
          id: 1002,
          car_pho: '../../static/server/7.jpg',
          car_commodity: '网关',
          car_price: '124',
          UnitPrice: '20',
          number: '1',
          totalPricr: '20',
          isSelect: false
        }
      ]
    }
  },
  mounted () {
  },
  methods: {
    /* 删除商品 */
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
        /* 删除后，商品消失，没有接口先不做了 */
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    /* 计步器事件 */
    handleChange (value) {
      this.car_.filter((v, i) => {
        if (value.id === this.car_[i].id) {
          /* 循环数组当前的id与数组里id相等时
          取当前的单价和num，相乘取总金额数，在赋值到当前商品的总金额数值中 */
          let price = value.UnitPrice
          let num = this.car_[i].number
          let allPrice = price * num
          this.car_[i].totalPricr = allPrice
        }
      })
    },
    /* 全选 */
    selectTOtal () {
      if (this.checkAll) {
        this.car_.map((v) => {
          v.isSelect = true
        })
      } else {
        this.car_.map((v) => {
          v.isSelect = false
        })
      }
    },
    /* 单选 */
    handleCheckedCitiesChange (val, index) {
      let flag = true
      this.car_.filter((v, i) => {
        if (!v.isSelect) {
          flag = false
        }
      })
      /* 赋值给全选按钮 */
      this.checkAll = flag
    }
  }
}
</script>

<style lang = 'scss'>
.b_home {
  width: 1200px;
  margin: 0 auto;
  background-color: #999;
}
/* 商品拦 */
.b_shop {
  text-align: center;
  img {
    width: 50px;
    height: 50px;
  }
}
/* 顶部栏 */
.operation {
  height: 50px;
  background-color: #000;
  width: 100%;
  color: #fff;
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
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
