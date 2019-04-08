<template>
  <!--商品  -->
  <div>
    <!-- 顶部栏 -->
    <Operation></Operation>
    <!-- 版心 -->
    <div class="B_home">
      <!-- 搜索框 -->
      <div class="top">
        <el-row>
          <el-col :span="2"
                  :offset="1">
            <div class="grid-content ">
              <div class="img_logo">
                <img src="../../static/logo.jpg"
                     alt="">
              </div>
            </div>
          </el-col>
          <el-col :span="16"
                  :offset="2">
            <div class="grid-content ">
              <div style="margin-top: 15px;">
                <el-input placeholder="请输入内容"
                          v-model="input4"
                          style="width:80%; margin:0 auto">
                  <template slot="append">
                    <el-button type="primary"
                               icon="el-icon-search">搜索</el-button>
                  </template>
                </el-input>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- 侧边拦 旋转木马 -->
      <div class="Propaganda"
           style="height:350px">
        <el-row>
          <el-col :span="6"
                  style="position:relative;">
            <div class="Propaganda_left">
              <ul>
                <li v-for=' (value,index) in pro_name'
                    :key="index"
                    :class="thisIndex == index? 'p_l_claHover':'p_l_cla'"
                    @mouseenter="selectStyle (index) "
                    @mouseleave="outStyle (index) ">{{value.p_name}}</li>
              </ul>
            </div>
            <div class="Propaganda_right"
                 v-for=' (value,_index) in pro_name'
                 :key="_index"
                 v-show="thisIndex == _index">
              {{value.p_name}}
              <ul>
                <li v-for="(val,__index) in value.children"
                    :key="__index">
                  {{val.name}}
                </li>
              </ul>
            </div>
          </el-col>
          <el-col :span="12"
                  style="position: absolute;left: 150px;width:850px">
            <el-carousel height="350px">
              <el-carousel-item v-for="item in 4"
                                :key="item">
                <h3>{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </el-col>
          <el-col :span="1"
                  style="position: absolute;left:1000px"
                  class="Propaganda_pho">
            <ul>
              <li v-for="(item, index) in p_pho"
                  :key="index">
                <img :src=item.src
                     alt="">
              </li>
            </ul>
          </el-col>
        </el-row>
      </div>
      <!-- 商品分类 -->
      <div class='Mail_cal'
           v-for="( value, index) in Mail"
           :key='index'>
        <div class="M_top">{{value.M_type}}</div>
        <ul>
          <li v-for="( value2, index2) in value.M_children"
              :key='index2'>
            <img :src=value2.M_address
                 alt="">
            <p>{{value2.M_information}}</p>
            <p class="M_price">{{value2.M_price}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Operation from '../components/Operation'
export default {
  components: {
    Operation
  },
  data () {
    return {
      /* 商品宣传 */
      Mail: [
        {
          M_type: 'DDos攻击防御',
          M_children: [
            {
              M_name: 'S5720-28P-PWR-LI_AC',
              M_information: '24个10/100/1000Base-T 以太网端口，2个复用的10/100/1000Base-T以太网端口Combo交流供电',
              M_price: '1234',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5740-28P-PWR-LI_AC',
              M_price: '1234',
              M_information: '24个10/100/1000Base-T 以太网端口',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5720-28P-PWR-LI_AC',
              M_information: '24个10/100/1000Base-T 以太网端口，2个复用的10/100/1000Base-T以太网端口Combo交流供电',
              M_price: '1234',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5740-28P-PWR-LI_AC',
              M_price: '1234',
              M_information: '24个10/100/1000Base-T 以太网端口',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5720-28P-PWR-LI_AC',
              M_information: '24个10/100/1000Base-T 以太网端口，2个复用的10/100/1000Base-T以太网端口Combo交流供电',
              M_price: '1234',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5740-28P-PWR-LI_AC',
              M_price: '1234',
              M_information: '24个10/100/1000Base-T 以太网端口',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5720-28P-PWR-LI_AC',
              M_information: '24个10/100/1000Base-T 以太网端口，2个复用的10/100/1000Base-T以太网端口Combo交流供电',
              M_price: '1234',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5740-28P-PWR-LI_AC',
              M_price: '1234',
              M_information: '24个10/100/1000Base-T 以太网端口',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5720-28P-PWR-LI_AC',
              M_information: '24个10/100/1000Base-T 以太网端口，2个复用的10/100/1000Base-T以太网端口Combo交流供电',
              M_price: '1234',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5740-28P-PWR-LI_AC',
              M_price: '1234',
              M_information: '24个10/100/1000Base-T 以太网端口',
              M_address: '../../static/server/8.jpg'
            }
          ]
        },
        {
          M_type: 'web应用防火墙',
          M_children: [
            {
              M_name: 'S5720-28P-PWR-LI_AC',
              M_information: '24个10/100/1000Base-T 以太网端口，2个复用的10/100/1000Base-T以太网端口Combo交流供电',
              M_price: '1234',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5740-28P-PWR-LI_AC',
              M_price: '1234',
              M_information: '24个10/100/1000Base-T 以太网端口',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5720-28P-PWR-LI_AC',
              M_information: '24个10/100/1000Base-T 以太网端口，2个复用的10/100/1000Base-T以太网端口Combo交流供电',
              M_price: '1234',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5740-28P-PWR-LI_AC',
              M_price: '1234',
              M_information: '24个10/100/1000Base-T 以太网端口',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5720-28P-PWR-LI_AC',
              M_information: '24个10/100/1000Base-T 以太网端口，2个复用的10/100/1000Base-T以太网端口Combo交流供电',
              M_price: '1234',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5740-28P-PWR-LI_AC',
              M_price: '1234',
              M_information: '24个10/100/1000Base-T 以太网端口',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5720-28P-PWR-LI_AC',
              M_information: '24个10/100/1000Base-T 以太网端口，2个复用的10/100/1000Base-T以太网端口Combo交流供电',
              M_price: '1234',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5740-28P-PWR-LI_AC',
              M_price: '1234',
              M_information: '24个10/100/1000Base-T 以太网端口',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5720-28P-PWR-LI_AC',
              M_information: '24个10/100/1000Base-T 以太网端口，2个复用的10/100/1000Base-T以太网端口Combo交流供电',
              M_price: '1234',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5740-28P-PWR-LI_AC',
              M_price: '1234',
              M_information: '24个10/100/1000Base-T 以太网端口',
              M_address: '../../static/server/8.jpg'
            }
          ]
        },
        {
          M_type: '安全接入网关',
          M_children: [
            {
              M_name: 'S5720-28P-PWR-LI_AC',
              M_information: '24个10/100/1000Base-T 以太网端口，2个复用的10/100/1000Base-T以太网端口Combo交流供电',
              M_price: '1234',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5740-28P-PWR-LI_AC',
              M_price: '1234',
              M_information: '24个10/100/1000Base-T 以太网端口',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5720-28P-PWR-LI_AC',
              M_information: '24个10/100/1000Base-T 以太网端口，2个复用的10/100/1000Base-T以太网端口Combo交流供电',
              M_price: '1234',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5740-28P-PWR-LI_AC',
              M_price: '1234',
              M_information: '24个10/100/1000Base-T 以太网端口',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5720-28P-PWR-LI_AC',
              M_information: '24个10/100/1000Base-T 以太网端口，2个复用的10/100/1000Base-T以太网端口Combo交流供电',
              M_price: '1234',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5740-28P-PWR-LI_AC',
              M_price: '1234',
              M_information: '24个10/100/1000Base-T 以太网端口',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5720-28P-PWR-LI_AC',
              M_information: '24个10/100/1000Base-T 以太网端口，2个复用的10/100/1000Base-T以太网端口Combo交流供电',
              M_price: '1234',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5740-28P-PWR-LI_AC',
              M_price: '1234',
              M_information: '24个10/100/1000Base-T 以太网端口',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5720-28P-PWR-LI_AC',
              M_information: '24个10/100/1000Base-T 以太网端口，2个复用的10/100/1000Base-T以太网端口Combo交流供电',
              M_price: '1234',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5740-28P-PWR-LI_AC',
              M_price: '1234',
              M_information: '24个10/100/1000Base-T 以太网端口',
              M_address: '../../static/server/8.jpg'
            }
          ]
        },
        {
          M_type: '仿病毒网关',
          M_children: [
            {
              M_name: 'S5720-28P-PWR-LI_AC',
              M_information: '24个10/100/1000Base-T 以太网端口，2个复用的10/100/1000Base-T以太网端口Combo交流供电',
              M_price: '1234',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5740-28P-PWR-LI_AC',
              M_price: '1234',
              M_information: '24个10/100/1000Base-T 以太网端口',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5720-28P-PWR-LI_AC',
              M_information: '24个10/100/1000Base-T 以太网端口，2个复用的10/100/1000Base-T以太网端口Combo交流供电',
              M_price: '1234',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5740-28P-PWR-LI_AC',
              M_price: '1234',
              M_information: '24个10/100/1000Base-T 以太网端口',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5720-28P-PWR-LI_AC',
              M_information: '24个10/100/1000Base-T 以太网端口，2个复用的10/100/1000Base-T以太网端口Combo交流供电',
              M_price: '1234',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5740-28P-PWR-LI_AC',
              M_price: '1234',
              M_information: '24个10/100/1000Base-T 以太网端口',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5720-28P-PWR-LI_AC',
              M_information: '24个10/100/1000Base-T 以太网端口，2个复用的10/100/1000Base-T以太网端口Combo交流供电',
              M_price: '1234',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5740-28P-PWR-LI_AC',
              M_price: '1234',
              M_information: '24个10/100/1000Base-T 以太网端口',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5720-28P-PWR-LI_AC',
              M_information: '24个10/100/1000Base-T 以太网端口，2个复用的10/100/1000Base-T以太网端口Combo交流供电',
              M_price: '1234',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5740-28P-PWR-LI_AC',
              M_price: '1234',
              M_information: '24个10/100/1000Base-T 以太网端口',
              M_address: '../../static/server/8.jpg'
            }
          ]
        },
        {
          M_type: '上网行为管理',
          M_children: [
            {
              M_name: 'S5720-28P-PWR-LI_AC',
              M_information: '24个10/100/1000Base-T 以太网端口，2个复用的10/100/1000Base-T以太网端口Combo交流供电',
              M_price: '1234',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5740-28P-PWR-LI_AC',
              M_price: '1234',
              M_information: '24个10/100/1000Base-T 以太网端口',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5720-28P-PWR-LI_AC',
              M_information: '24个10/100/1000Base-T 以太网端口，2个复用的10/100/1000Base-T以太网端口Combo交流供电',
              M_price: '1234',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5740-28P-PWR-LI_AC',
              M_price: '1234',
              M_information: '24个10/100/1000Base-T 以太网端口',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5720-28P-PWR-LI_AC',
              M_information: '24个10/100/1000Base-T 以太网端口，2个复用的10/100/1000Base-T以太网端口Combo交流供电',
              M_price: '1234',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5740-28P-PWR-LI_AC',
              M_price: '1234',
              M_information: '24个10/100/1000Base-T 以太网端口',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5720-28P-PWR-LI_AC',
              M_information: '24个10/100/1000Base-T 以太网端口，2个复用的10/100/1000Base-T以太网端口Combo交流供电',
              M_price: '1234',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5740-28P-PWR-LI_AC',
              M_price: '1234',
              M_information: '24个10/100/1000Base-T 以太网端口',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5720-28P-PWR-LI_AC',
              M_information: '24个10/100/1000Base-T 以太网端口，2个复用的10/100/1000Base-T以太网端口Combo交流供电',
              M_price: '1234',
              M_address: '../../static/server/8.jpg'
            },
            {
              M_name: 'S5740-28P-PWR-LI_AC',
              M_price: '1234',
              M_information: '24个10/100/1000Base-T 以太网端口',
              M_address: '../../static/server/8.jpg'
            }
          ]
        }
      ],
      thisIndex: null,
      input4: '',
      tabPosition: 'left',
      p_show: false,
      right_id: '',
      getRef: '',
      /* 图片 */
      p_pho: [
        { src: require('../..//static/server/1.jpg') },
        { src: require('../..//static/server/2.jpg') },
        { src: require('../..//static/server/3.jpg') }
      ],
      /* 商品全信息 */
      pro_name: [
        {
          p_name: '视屏通信',
          id: '0',
          children: [
            { id: 1, name: 'X' },
            { id: 2, name: 'XX' },
            { id: 3, name: 'XXX' },
            { id: 4, name: 'XXXX' }
          ]
        },
        {
          p_name: '计算机设备',
          id: '1',
          children: [
            { id: 1, name: 'A' },
            { id: 2, name: 'AA' },
            { id: 3, name: 'AAA' },
            { id: 4, name: 'AAAA' }
          ]
        },
        {
          p_name: '办公设备',
          id: '2',
          children: [
            { id: 1, name: 'B' },
            { id: 2, name: 'BB' },
            { id: 3, name: 'BBB' },
            { id: 4, name: 'BBBB' }
          ]
        },
        {
          p_name: '电器设备',
          id: '3',
          children: [
            { id: 1, name: 'C' },
            { id: 2, name: 'CC' },
            { id: 3, name: 'CCC' },
            { id: 4, name: 'CCCC' }
          ]
        },
        {
          p_name: '网络设备',
          id: '4',
          children: [
            { id: 1, name: 'D' },
            { id: 2, name: 'DD' },
            { id: 3, name: 'DDD' },
            { id: 4, name: 'DDDD' }
          ]
        },
        {
          p_name: 'OA耗材',
          id: '5',
          children: [
            { id: 1, name: 'E' },
            { id: 2, name: 'EE' },
            { id: 3, name: 'EEE' },
            { id: 4, name: 'EEEE' }
          ]
        },
        {
          p_name: '运维服务',
          id: '6',
          children: [
            { id: 1, name: 'F' },
            { id: 2, name: 'FF' },
            { id: 3, name: 'FFF' },
            { id: 4, name: 'FFFF' }
          ]
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
    selectStyle (index) {
      this.thisIndex = index
    },
    outStyle (index) {
      this.thisIndex = null
    },
    goBcar () {
      this.$router.push({ name: 'Bcar' })
    }
  }
}
</script>

<style lang = 'scss'>
.B_home {
  width: 1200px;
  margin: 0 auto;
}
/* 商品分类 */
.Mail_cal {
  .M_top {
    height: 40px;
    font-size: 20px;
    border-bottom: 5px solid #000;
  }
  .M_price {
    color: red;
  }
  ul {
    li {
      display: inline-block;
      height: 250px;
      width: 220px;
      padding:10px;
    }
  }
  img {
    height: 150px;
    width: 100%;
  }
  p {
    height: 30px;
    display: -webkit-box;
    text-align: center;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 15px;
    display: block;
    width: 180px;
    margin: 5px auto;
  }
}
/* 首页旋转木马和侧边拦 */
.Propaganda_pho {
    ul{
      li{
        height: 117px;
        width: 200px;
        img {
          height: 100%;
          width: 100%;
        }
      }
    }
  }
/* 侧边拦右侧部分 */
.Propaganda_right {
  display: inline-block;
  position: absolute;
  z-index: 1000;
  left: 150px;
  height: 350px;
  width: 500px;
  background-color: #999;
}
.Propaganda_left {
  display: inline-block;
  height: 350px;
  width: 150px;
  z-index: 200;
  position: absolute;
  top: 0;
  left: 0;
}
/* 鼠标移入移除样式 */
.p_l_cla {
  height: 50px;
  width: 150px;
  background-color: rgb(24, 27, 26);
  color: white;
  text-align: center;
  line-height: 50px;
}
.p_l_claHover {
  height: 50px;
  width: 150px;
  background-color: red;
  color: white;
  text-align: center;
  line-height: 50px;
}
/* 旋转木马 */
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.img_logo {
  img {
    display: inline-block;
    padding: auto;
    width: 100%;
    height: 70px;
  }
}
/* 布局默认样式 */
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
  padding: 0 auto;
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
