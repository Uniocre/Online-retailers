<template>
  <div>
    <Operation></Operation>
    <div class="b_home">
      <!-- 商品详情 -->
      <el-breadcrumb class="Breadcrumb"
                     separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>食品饮料</el-breadcrumb-item>
        <el-breadcrumb-item>优先食品</el-breadcrumb-item>
        <el-breadcrumb-item>饼干蛋糕</el-breadcrumb-item>
        <el-breadcrumb-item>三只松鼠（Three Squirres）</el-breadcrumb-item>
        <el-breadcrumb-item>三只松鼠吐司</el-breadcrumb-item>
      </el-breadcrumb>
      <!-- 商品详情页，点击主图跳转 -->
      <div class="Exhibition clearfix">
        <!-- 图片 -->
        <div class="pho di">
          <img :src="bigImgUrl"
               class="img"
               alt="">
          <ul class="clearfix ford">
            <li v-for="(item, index) in imgUrl"
                :key="index"
                @click="check(index)">
              <img :src="item.url"
                   alt="">
            </li>
          </ul>
        </div>
        <!-- 详情 -->
        <div class="details di"
             v-for="(item1,index) in sj"
             :key="index">
          <div class="name m5">{{item1.M_totalName}}</div>
          <div class="qianggou clearfix">
            <p class="fl">限时抢购</p>
            <div class="fr">
              距抢购结束还剩<i>1</i>天<i>06</i>:<i>12</i>:<i>12</i>
            </div>
          </div>
          <div class="price m5">
            <p class="one di">价格</p>
            <p class="price_1 di">{{item1.M_price}}</p>
            <p class="pric di">{{item1.M_price}}</p>
          </div>
          <div class="price m5">
            <p class="one di">领券</p>
            <div class="di stamp stamp01">
              领券满300享9折
            </div>
            <div class="di stamp stamp01">
              领券满300享9折
            </div>
          </div>
          <div class="price m5 clearfix">
            <p class="one fl">优惠</p>
            <div class="fl clearfix"
                 style="width:420px;">
              <div class="clearfix">
                <i class="redText fl">满减</i>
                <p class="fl"
                   style="width:360px;">1月8日-12月14日期间购买食品品类满1元订单完成即返100元减50元券</p>
              </div>
              <div class="clearfix">
                <i class="redText fl">满减</i>
                <p class="fl"
                   style="line-height: 30px;">20元店铺优惠券，满588元可用</p>
              </div>
            </div>
          </div>
          <div class="price m5">
            <p class="one di">奖励金</p>
            <div class="di dft">
              <p class="di">奖励金抵20.2%</p>
              <p class="di node">购后返1280奖励金</p>
            </div>
          </div>
          <div class="m5 clearfix">
            <p class="one fl">规格</p>
            <div class="fl clearfix"
                 style="width:420px;">
              <p v-for="item2 in item1.M_name"
                 class="checkdjf fl"
                 :key="item2.id">{{item2.value}}</p>
            </div>
          </div>
          <!-- 数量与库存 -->
          <div class="num m5">
            <p class="one di">数量</p>
            <!-- 计步器 -->
            <el-input-number size="mini"
                             v-model="number"
                             :min="1"
                             @change="handleChange(value)"></el-input-number>
            <p class="num_1 di">库存 {{item1.M_Stock}} 件</p>
          </div>
          <!-- 购买与加入购物成为 -->
          <div class="add m5">
            <div class="one di">&nbsp;</div>
            <el-button @click="gopay">立即购买</el-button>
            <el-button>加入购物车</el-button>
          </div>
          <!-- 承诺 -->
          <div class="nuo clearfix">
            <p class="one fl">服务承诺</p>
            <div class="fl clearfix ddws"
                 style="width:420px;">
              <p>支持7天无理由退货</p>
              <p>极速退款</p>
              <p>正品保证</p>
              <p>破损包退</p>
              <p>赠运险费</p>
              <p>企业采购</p>
            </div>
          </div>
          <div class="nuo clearfix">
            <p class="one fl">支付方式</p>
            <div class="fl clearfix ddws">
              <ul>
                <li>支付宝</li>
                <li>微信</li>
                <li>钱包</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="ddf fl">
          <ul>
            <li v-for="item in drf"
                :key="item.id">
              <img :src="item.url"
                   alt="">
              <p>{{item.name}}</p>
            </li>
          </ul>
        </div>
      </div>
      <!-- 图片介绍 -->
      <div class="pho_exh clearfix">
        <div class="exh_left">
          <div class="dianame bor">
            <p class="fv"
               style="text-align:center;">大表哥的店铺</p>
            <div style="margin-left:70px;">
              <ul class="clearfix">
                <li>
                  <p>描述</p>
                  <p class="orage">4.6</p>
                </li>
                <li>
                  <p>服务</p>
                  <p class="orage">4.6</p>
                </li>
                <li>
                  <p>物流</p>
                  <p class="orage">4.6</p>
                </li>
              </ul>
            </div>
            <el-button class="orage">进店逛逛</el-button>
            <el-button>收藏店铺</el-button>
          </div>
          <div class="searchName bor">
            <p class="fv">搜索店内商品</p>
            关键词:<el-input></el-input>
            价格:<el-input></el-input>
            <el-button>确定</el-button>
          </div>
          <div class="hostMail bor">
            <p class="fv">店铺热销</p>
            <ul>
              <li v-for="(item,index) in ceshi"
                  :key="item.id">
                <img :src="item.url"
                     alt="">
                <div class="dic clearfix">
                  <p class="fl"><i>{{index+1}}</i>热销{{item.Mail}}件</p>
                  <p class="fr">{{item.M_price}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="exh_zhon">
          <el-tabs :tab-position="tabPosition"
                   style="height: 200px;">
            <el-tab-pane label="商品介绍">
              <p>品牌名称：NATIONAL MUSEUM OF CHINA/中国国家博物馆</p>
              <p>产品参数：</p>
              <ul class="clearfix fl">
                <li>品牌: 华为（HUAWEI）</li>
                <li>型号: CH121 V5</li>
                <li>商品编号： 1212312435</li>
                <li>类型: 其他</li>
              </ul>
              <img src="../../../static/server/7.jpg"
                   alt="">
            </el-tab-pane>
            <el-tab-pane label="规格参数">
              <p>品牌名称：NATIONAL MUSEUM OF CHINA/中国国家博物馆</p>
              <p>产品参数：</p>
              <ul class="clearfix fl">
                <li>品牌: 华为（HUAWEI）</li>
                <li>型号: CH121 V5</li>
                <li>商品编号： 1212312435</li>
                <li>类型: 其他</li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="售后保障">
            </el-tab-pane>
            <el-tab-pane label="商品评价(42万+)">
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
      number: '1',
      ceshi: [
        { index: 1, url: '../../../static/server/2.jpg', Mail: '123', M_price: '￥243' },
        { index: 2, url: '../../../static/server/3.jpg', Mail: '123', M_price: '￥243' },
        { index: 3, url: '../../../static/server/4.jpg', Mail: '123', M_price: '￥243' },
        { index: 4, url: '../../../static/server/4.jpg', Mail: '123', M_price: '￥243' },
        { index: 5, url: '../../../static/server/4.jpg', Mail: '123', M_price: '￥243' }
      ],
      drf: [
        { index: 1, url: '../../../static/server/2.jpg', name: 'dsff' },
        { index: 2, url: '../../../static/server/3.jpg', name: 'dsff' },
        { index: 3, url: '../../../static/server/4.jpg', name: 'dsff' }
      ],
      sj: [
        {
          M_totalName: "乐事(Lay's)薯片 休闲零食 美国经典原味 145g 刺激你的味蕾(新老包装随机发货)",
          M_price: '￥20.00',
          M_Noprice: '￥15.00',
          M_Stock: '1562',
          M_name: [
            { id: 12, value: '经典原味 20g' },
            { id: 13, value: '经典番茄味 20g' },
            { id: 14, value: '经典原味 20g' },
            { id: 15, value: '经典番茄味 20g' },
            { id: 16, value: '经典原味 20g' },
            { id: 17, value: '经典番茄味 20g' }
          ]
        }
      ],
      tabPosition: 'top',
      userName: '测试用户',
      value: 3,
      bigImgUrl: '../../../static/server/8.jpg',
      imgUrl: [
        { index: 1, url: '../../../static/server/2.jpg' },
        { index: 2, url: '../../../static/server/3.jpg' },
        { index: 3, url: '../../../static/server/4.jpg' },
        { index: 4, url: '../../../static/server/5.jpg' },
        { index: 5, url: '../../../static/server/6.jpg' }
      ]
    }
  },
  filters: {
  },
  mounted () {
  },
  methods: {
    /* tcall () {
      this.sj = this.$route.query.sj
    } */
    gopay () {
      this.$router.push({ path: '/pay' })
    },
    check (i) {
      this.bigImgUrl = this.imgUrl[i].url
    }
  }
}
</script>

<style lang = 'scss'>
.dianame {
  padding:10px 0;
}
.orage {
  color: red;
}
.dianame ul li {
  float: left;
  margin: 10px;
}
.bor {
  border: 1px solid #999;
  margin-bottom: 10px;
}
.fv {
  border-bottom: 1px solid #999;
  padding: 8px 5px;
}
.dic p i {
  display: inline-block;
  height: 15px;
  width: 15px;
  text-align: center;
  line-height: 15px;
  border-radius: 50%;
  background-color: red;
  color: #fff;
}
.hostMail ul li img {
  height: 80%;
  width: 100%;
}
.hostMail ul li {
  padding: 5px;
  width: 250px;
  height: 200px;
}
.ddf ul li img {
  width: 80%;
  height: 60%;
}
.ddf {
  width: 300px;
}
.ddws p {
  float: left;
  margin: 0 10px;
  margin-bottom: 5px;
}
.node {
  background: red;
  color: #fff;
}
.dft {
  border: 1px solid red;
  border-radius: 10px;
  font-size: 13px;
  color: red;
}
.redText {
  color: red;
  border: 1px solid red;
  border-radius: 5px;
  padding: 2px;
  margin: 5px;
}
.stamp {
  width: 120px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  padding: 0 10px;
  position: relative;
  overflow: hidden;
}
.stamp:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 10px;
  right: 10px;
  z-index: -1;
}
.stamp:after {
  content: "";
  position: absolute;
  left: 10px;
  top: 10px;
  right: 10px;
  bottom: 10px;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.5);
  z-index: -2;
}
.stamp01 {
  background: #f39b00;
  background: radial-gradient(
    rgba(0, 0, 0, 0) 0,
    rgba(0, 0, 0, 0) 5px,
    #f39b00 5px
  );
  background-size: 20px 18px;
  background-position: 12px -3px;
}
.stamp01:before {
  background-color: #f39b00;
}
.checkdjf {
  border: 1px solid #999;
  border-radius: 5px;
  margin-right: 5px;
  margin-bottom: 3px;
  padding: 2px;
}
.pric {
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
}
.qianggou {
  background-color: #999;
  height: 50px;
  color: #fff;
  line-height: 50px;
  padding: 0 10px;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.ford li img {
  width: 100%;
  height: 100%;
}
.ford li {
  width: 50px;
  height: 100px;
  background-color: #000;
  float: left;
  margin: 0 10px;
}
.Breadcrumb {
  margin: 20px 0;
}
.el-breadcrumb {
  background-color: #fff;
}
.b_home {
  width: 1200px;
  margin: 0 auto;
}
.fl {
  li {
    float: left;
    margin-right: 10px;
  }
}
.user {
  display: inline-block;
  margin-right: 50px;
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
  width: 250px;
  margin-right: 20px;
  float: left;
}
.exh_kon {
  width: 930px;
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
  width: 350px;
  height: 600px;
  margin-right: 10px;
  float: left;
  .img {
    width: 300px;
    height: 300px;
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
  width: 500px;
  height: 600px;
  float: left;
  .name {
    font-size: 20px;
    font-weight: 600;
  }
  .price {
    .price_1 {
      font-size: 18px;
      color: red;
      font-weight: 600;
    }
  }
  .volume {
    .volume_1 {
      display: inline-block;
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
