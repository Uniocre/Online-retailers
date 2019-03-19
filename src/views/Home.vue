<template>
  <div class="home">
    <div class="top">
      <el-row :gutter="60">
        <el-col :span="4" :offset="2">
          <div class="grid-content ">
            <div class="img_logo">
              <img src="../assets/logo.jpg" alt="">
            </div>
          </div>
        </el-col>
        <el-col :span="16" :offset="2">
          <div class="grid-content ">
            <div style="margin-top: 15px;">
              <el-input placeholder="请输入内容" v-model="input4" style="width:80%; margin:0 auto">
                <template slot="append"><el-button type="primary" icon="el-icon-search">搜索</el-button></template>
              </el-input>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 商品信息区 -->
    <div class="Propaganda">
      <el-row :gutter="60">
        <el-col :span="20" :offset="2">
          <div>
            <div class="Propaganda_left" >
              <ul>
                <li v-for=' (value,index) in pro_name' :key="index"  v-text='value' class="p_l_cla"></li>
              </ul>
            </div>
            <div class="Propaganda_right"></div>
          </div>
        </el-col>
        <!-- <el-col :span="12" :offset="2">
          <div class="block">
            <el-carousel height="150px">
              <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-col> -->
      </el-row>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      input4: '',
      tabPosition: 'left',
      pro_name: [
        '视屏通信', '计算机设备', '办公设备', '电器设备', '网络设备', 'OA耗材', '运维服务'
      ]
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang = 'scss' scoped>
  .p_l_cla{
    height: 50px;
    width: 200px;
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
    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
  .img_logo {
    img {
      display: inline-block;
      padding: auto;
      width: 100%;
      height: 70px
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
