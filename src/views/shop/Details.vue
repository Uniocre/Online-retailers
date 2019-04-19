<template>
  <div>
    <Operation></Operation>
    <div class="b_home">
      <!-- 搜索框 -->
      <search class="weq"></search>
      <!-- 商品详情 -->
      <div class="Exhibition">
        <!-- 图片 -->
        <div class="pho di">
          <img src="../../../static/server/3.jpg"
               class="img"
               alt="">
        </div>
        <!-- 详情 -->
        <div class="details di">
          <div class="name m5">服务器</div>
          <div class="price m5">
            <p class="one di">价格</p> ￥<p class="price_1 di">1231</p>
          </div>
          <div class="volume m5">
            <p class="one di">月销量</p>
            <p class="volume_1">2131234</p>
          </div>
          <div class="type m5">
            <p class="one di">型号</p>
            <ul>
              <li>OceanStor 18000 V5</li>
            </ul>
          </div>
          <!-- 数量与库存 -->
          <div class="num m5">
            <p class="one di">数量</p>
            <!-- 计步器 -->
            <el-input-number size="mini"
                             v-model="number"
                             :min="1"
                             @change="handleChange(value)"></el-input-number>
            <p class="num_1 di">库存 123123 件</p>
          </div>
          <!-- 购买与加入购物成为 -->
          <div class="add m5">
            <div class="one di">&nbsp;</div>
            <el-button>立即购买</el-button>
            <el-button>加入购物车</el-button>
          </div>
          <!-- 承诺 -->
          <div class="nuo">
            <p class="one di">服务承诺</p>
            <ul class="de di">
              <li>服务承诺</li>
              <li>极速退款</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 图片介绍 -->
      <div class="pho_exh clearfix">
        <div class="exh_left"></div>
        <div class="exh_zhon">
          <el-tabs :tab-position="tabPosition"
                   style="height: 200px;">
            <el-tab-pane label="商品详情">用户管理</el-tab-pane>
            <el-tab-pane label="商品参数">
              <p>品牌名称：NATIONAL MUSEUM OF CHINA/中国国家博物馆</p>
              <p>产品参数：</p>
              <ul class="clearfix fl">
                <li>品牌: 华为（HUAWEI）</li>
                <li>型号: CH121 V5</li>
                <li>商品编号： 1212312435</li>
                <li>类型: 其他</li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="评价">
              <div style="padding:10px">
                <div class="user">
                  <div class="img-box">
                    <img src="../../../static/logo.jpg"
                         alt="">
                  </div>
                  <p>{{userName}} </p>
                </div>
                <div class="star">
                  <el-rate v-model="value"
                           disabled
                           text-color="#ff9900"
                           score-template="{value}">
                  </el-rate>
                  <p style="width:800px;margin:5px auto">
                    静夜思_百度汉语作者：李白床前明月光，疑是地上霜。举头望明月，低头思故乡。静夜思_百度汉语作者：李白床前明月光，疑是地上霜。举头望明月，低头思故乡。静夜思_百度汉语作者：李白床前明月光，疑是地上霜。举头望明月，低头思故乡。静夜思_百度汉语作者：李白床前明月光，疑是地上霜。举头望明月，低头思故乡。静夜思_百度汉语作者：李白床前明月光，疑是地上霜。举头望明月，低头思故乡。静夜思_百度汉语作者：李白床前明月光，疑是地上霜。举头望明月，低头思故乡。
                  </p>
                  <ul class="clearfix fl">
                    <li>E9000 CH121 V5</li>
                    <li>2019.10.12 16:53</li>
                  </ul>
                </div>
              </div>
              <div style="padding:10px">
                <div class="user">
                  <div class="img-box">
                    <img src="../../../static/logo.jpg"
                         alt="">
                  </div>
                  <p>{{userName}} </p>
                </div>
                <div class="star">
                  <el-rate v-model="value"
                           disabled
                           text-color="#ff9900"
                           score-template="{value}">
                  </el-rate>
                  <p style="width:800px;margin:5px auto">
                    静夜思_百度汉语作者：李白床前明月光，疑是地上霜。举头望明月，低头思故乡。静夜思_百度汉语作者：李白床前明月光，疑是地上霜。举头望明月，低头思故乡。静夜思_百度汉语作者：李白床前明月光，疑是地上霜。举头望明月，低头思故乡。静夜思_百度汉语作者：李白床前明月光，疑是地上霜。举头望明月，低头思故乡。静夜思_百度汉语作者：李白床前明月光，疑是地上霜。举头望明月，低头思故乡。静夜思_百度汉语作者：李白床前明月光，疑是地上霜。举头望明月，低头思故乡。
                  </p>
                  <ul class="clearfix fl">
                    <li>E9000 CH121 V5</li>
                    <li>2019.10.12 16:53</li>
                  </ul>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="sxh_right"></div>
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
      number: '1',
      tabPosition: 'top',
      userName: '测试用户',
      value: 3
    }
  },
  filters: {
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
.fl{
  li{
    float: left;
    margin-right:10px;
  }
}
.user {
  display: inline-block;
  margin-right:50px;
}
.star {
  display: inline-block;
}
.img-box {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #ecf5ff;
  img {
    width: 100%;
    height: 100%;
  }
}
.el-tabs__item {
  font-size: 20px;
}
.exh_left {
  width: 200px;
  float: left;
}
.exh_kon {
  float: left;
}
.exh_right {
  float: left;
}
/* 头部 */
.Exhibition {
  display: flex;
}
/* 商品详情 */
.one {
  width: 80px;
}
/* 商品图片 */
.pho {
  width: 400px;
  height: 300px;
  margin-right: 10px;
  float: left;
  .img {
    width: 400px;
    height: 260px;
  }
}
.m5 {
  margin: 10px 0;
}
.di {
  display: inline-block;
}
/* 右部 */
.details {
  width: 400px;
  height: 300px;
  float: left;
  .name {
    font-size: 20px;
    font-weight: 600;
  }
  .price {
    .price_1 {
      font-size: 15px;
      color: red;
    }
  }
  .volume {
    .volume_1 {
      display: inline-block;
    }
  }
  .type {
    .type_1 {
      display: inline-block;
    }
    ul {
      display: inline-block;
      li {
      }
    }
  }
  .nuo {
    .de {
      li {
        float: left;
        margin-right: 10px;
      }
    }
  }
}
.weq {
  margin-left: 670px;
}
</style>
