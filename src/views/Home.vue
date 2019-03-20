<template>
  <div class="home">
    <div class="top">
      <el-row>
        <el-col :span="2"
                :offset="2">
          <div class="grid-content ">
            <div class="img_logo">
              <img src="../assets/logo.jpg"
                   alt="">
            </div>
          </div>
        </el-col>
        <el-col :span="14"
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
        <el-col :span="8"></el-col>
      </el-row>
    </div>
    <!-- 商品信息区 -->
    <div class="Propaganda">
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
               v-show="thisIndex == index ? true : false">
            {{value.p_name}}
            <ul>
              <li v-for="(val,__index) in value.children"
                  :key="__index">
                {{val.name}}
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="10">
          <!-- <div class="Propaganda_right">
            <el-carousel height="150px">
              <el-carousel-item v-for="item in 4"
                                :key="item">
                <h3>{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </div> -->
        </el-col>
        <el-col :span="8"></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      thisIndex: null,
      input4: '',
      tabPosition: 'left',
      p_show: false,
      right_id: '',
      getRef: '',
      /* 宣传 */
      pro_name: [
        { p_name: '视屏通信',
          id: '0',
          children: [
            { id: 1, name: 'X' },
            { id: 2, name: 'XX' },
            { id: 3, name: 'XXX' },
            { id: 4, name: 'XXXX' }
          ] },
        {
          p_name: '计算机设备',
          id: '1',
          children: [
            { id: 1, name: 'A' },
            { id: 2, name: 'AA' },
            { id: 3, name: 'AAA' },
            { id: 4, name: 'AAAA' }
          ] },
        { p_name: '办公设备',
          id: '2',
          children: [
            { id: 1, name: 'B' },
            { id: 2, name: 'BB' },
            { id: 3, name: 'BBB' },
            { id: 4, name: 'BBBB' }
          ] },
        { p_name: '电器设备',
          id: '3',
          children: [
            { id: 1, name: 'C' },
            { id: 2, name: 'CC' },
            { id: 3, name: 'CCC' },
            { id: 4, name: 'CCCC' }
          ] },
        { p_name: '网络设备',
          id: '4',
          children: [
            { id: 1, name: 'D' },
            { id: 2, name: 'DD' },
            { id: 3, name: 'DDD' },
            { id: 4, name: 'DDDD' }
          ] },
        { p_name: 'OA耗材',
          id: '5',
          children: [
            { id: 1, name: 'E' },
            { id: 2, name: 'EE' },
            { id: 3, name: 'EEE' },
            { id: 4, name: 'EEEE' }
          ] },
        { p_name: '运维服务',
          id: '6',
          children: [
            { id: 1, name: 'F' },
            { id: 2, name: 'FF' },
            { id: 3, name: 'FFF' },
            { id: 4, name: 'FFFF' }
          ] }
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
    }
  }
}
</script>

<style lang = 'scss' scoped>
.home {
  width: 1200px;
  margin: 0 auto;
}
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
}
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
