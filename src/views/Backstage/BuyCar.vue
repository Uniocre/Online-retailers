<template>
  <div class="home">
    <!-- 顶部栏 -->
    <Operation></Operation>
    <div class="b_home">
      <!-- 如果商品数组没有数据则是没有商品在购物车，v-if="car_.length>0"判断数组的长度是否有商品 -->
      <!-- 购物车 -->
      <el-row style="line-height:30px;"
              v-if="car_.length>0">
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
      <el-row style="text-align: center;"
              v-if="car_.length>0">
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
          <div class="grid-content car_iput">&nbsp;&nbsp;
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
      <!-- 当购物车为空时 -->
      <!-- 搜索框 -->
      <el-row v-if="car_.length<=0">
        <el-col :span="12"
                style="text-align:center;margin-top:30px;">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>我的购物车</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <el-col :span="12"
                style="text-align:center;margin-top:30px;">
          <el-input placeholder="请输入内容"
                    v-model="input4"
                    class="input-with-select">
            <el-button slot="append"
                       icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </el-row>
      <!-- 购物车空文字 -->
      <div class="car_text">
        <span>你的购物车还是空的，赶紧行动吧!</span>
      </div>
      <!-- 猜你你喜欢 -->
      <div class="clike">
        <div class="title">猜你喜欢</div>
        <ul>
          <li v-for="(value, index) in like_"
              :key='index'>
            <img :src="value.pho"
                 alt="">
            <p style="color:red;text-align:center">￥{{value.UnitPrice}}</p>
            <p style="text-align:center">{{value.commodity}}</p>
            <p style="color:#333;font-size:14px">月销{{value.Monthlysales}}</p>
          </li>
        </ul>
      </div>
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
      /* 全选商品 */
      checkAll: false,
      input4: '',
      /* 测试用隐藏 */
      isTrue: false,
      /* 运费 */
      bfg: '1213',
      /* 商品数量 */
      totalnum: '0',
      /* 购物车商品 */
      car_: [],
      /* 猜你喜欢 */
      like_: [
        {
          /* 商品id */
          id: 1001,
          /* 图片路径 */
          pho: '../../static/server/6.jpg',
          /* 商品名称 */
          commodity: '防火墙',
          /* 单价 */
          UnitPrice: '40',
          /* 月销 */
          Monthlysales: '567'
        },
        {
          /* 商品id */
          id: 1002,
          /* 图片路径 */
          pho: '../../static/server/2.jpg',
          /* 商品名称 */
          commodity: '网关',
          /* 单价 */
          UnitPrice: '50',
          /* 月销 */
          Monthlysales: '345'
        },
        {
          /* 商品id */
          id: 1003,
          /* 图片路径 */
          pho: '../../static/server/1.jpg',
          /* 商品名称 */
          commodity: 'web应用防火墙',
          /* 单价 */
          UnitPrice: '20',
          /* 月销 */
          Monthlysales: '78'
        },
        {
          /* 商品id */
          id: 1004,
          /* 图片路径 */
          pho: '../../static/server/3.jpg',
          /* 商品名称 */
          commodity: '入侵方策系统',
          /* 单价 */
          UnitPrice: '90',
          /* 月销 */
          Monthlysales: '5267'
        },
        {
          id: 1002,
          pho: '../../static/server/4.jpg',
          commodity: '防病毒网关',
          UnitPrice: '230',
          Monthlysales: '4576'
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
  margin: 20px auto;
}
.car_text {
  height: 200px;
  overflow: hidden;
  span {
    display: block;
    width: 500px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin: 0 auto;
    margin-top: 75px;
  }
}
.clike {
  margin-top: 50px;
  .title {
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    font-weight: 600;
    border-bottom: 5px solid #999;
    margin-bottom: 10px;
    text-indent: 20px;
  }
  ul {
    li {
      display: inline-block;
      height: 250px;
      width: 220px;
      padding: 10px;
      img {
        width: 220px;
        height: 150px;
        display: block;
        margin: 0 auto;
      }
      p {
        margin: 10px 0;
      }
    }
  }
}
.el-breadcrumb {
  background-color: #fff;
}
.car_iput {
  padding: auto 0;
  input {
    vertical-align: middle;
  }
}
/* 商品拦 */
.b_shop {
  text-align: center;
  margin-top: 5px;
  img {
    width: 50px;
    height: 50px;
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
