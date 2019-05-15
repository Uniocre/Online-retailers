<template>
  <div class="search">
    <el-input placeholder="请输入内容"
              class="input-with-select">
      <el-button slot="append">搜索</el-button>
    </el-input>
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
  /* 搜索栏 */
.search {
  margin-top: 15px;
  width: 500px;
  margin-bottom: 15px;
}
</style>
