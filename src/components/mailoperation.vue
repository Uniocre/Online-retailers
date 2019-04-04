<template>
  <div class="grid-content b_operation">&nbsp;&nbsp;
    <!-- 商品信息 -->
    <el-row style="text-align:center;">
      <el-col :span="3">
        <div class="grid-content">&nbsp;&nbsp;
          <el-checkbox v-model="checkAll"
                      size="medium"
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
  </div>
</template>

<script>

export default {
  data () {
    return {
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
  .grid-content{
    text-align: center
  }
  /* 操作栏 */
.b_operation {
  border: 1px solid #e3e3e3;
  background-color: #e4e4e4;
  margin: 10px 0;
  height: 50px;
}
</style>
