<template>
  <div>
    <Operation></Operation>
    <div class="b_home">
      <!-- 搜索框 -->
      <search class="weq"></search>
      <!-- 商品详情 -->
      <div class="Exhibition">
        <!-- 图片 -->
        <div class="pho">
          <img src="../../../static/server/3.jpg"
               class="img"
               alt="">
        </div>
        <!-- 详情 -->
        <div class="details">
          <div class="name">服务器</div>
          <div class="price">￥1231</div>
          <div class="volume">月销量 2131234</div>
          <div class="type">
            <ul>
              <li>OceanStor 18000 V5</li>
            </ul>
          </div>
          <!-- 数量与库存 -->
          <div class="num">
            <!-- 计步器 -->
            <el-input-number size="mini"
                             v-model="number"
                             :min="1"
                             @change="handleChange(value)"></el-input-number>
            <p>库存 123123 件</p>
          </div>
          <!-- 购买与加入购物成为 -->
          <div class="add">
            <el-button>立即购买</el-button>
            <el-button>加入购物车</el-button>
          </div>
          <!-- 承诺 -->
          <ul>
            <li>服务承诺</li>
            <li>极速退款</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Operation from '../../components/Operation'
import search from '../../components/search'
export default {
  components: {
    Operation,
    search
  },
  data () {
    return {
      input4: '',
      number: '1'
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
.b_home {
  width: 1200px;
  margin: 0 auto;
}
.Exhibition {
}
.pho {
  display: inline-block;
  width: 400px;
  height: 300px;
  margin-right: 10px;
  float: left;
  .img {
    width: 400px;
    height: 260px;
  }
}
.details {
  display: inline-block;
  width: 400px;
  height: 300px;
  float: left;
}
.weq {
  margin-left: 670px;
}
</style>
