<template>
  <div>
    <Operation></Operation>
    <div class="b_home">
      <div class="evaluate">
        <div class="top">
          <p>评价商品</p>
        </div>
        <div class="evaluate-left">
          <div class="img-box">
            <img src="../../../static/server/2.jpg"
                 alt="">
          </div>
          <p>dfg</p>
          <p>dfg</p>
        </div>
        <div class="evaluate-right">
          <!-- 文字 -->
          <el-input type="textarea"
                    :rows="4"
                    class="cbd"
                    placeholder="请输入内容"
                    v-model="textarea">
          </el-input>
          <!-- 图片 -->
          <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                     list-type="picture-card"
                     :on-preview="handlePictureCardPreview"
                     :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%"
                 :src="dialogImageUrl"
                 alt="">
          </el-dialog>
          <!--  星星好评 -->
          <div style="margin-top:50px;">
            宝贝描述:<el-rate v-model="value"
                     show-text>
            </el-rate>
          </div>
          <div>
            物流服务:<el-rate v-model="value1"
                     show-text>
            </el-rate>
          </div>
        </div>
      </div>
      <el-button style="margin-left: 500px;">发表评论</el-button>
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
      textarea: '',
      temp: 4.3,
      value: null,
      value1: null,
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  computed: {
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>

<style lang = 'scss'>
.b_home {
  width: 1200px;
  margin: 0 auto;
}
.cbd {
  width: 500px;
}
/*  */
.evaluate {
  width: 800px;
  height:500px;
  margin: 50px auto;
  overflow: hidden;
  border: 3px solid #c0c4cc;
}
.img-box {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #ecf5ff;
  margin: 10px auto;
  img {
    width: 100%;
    height: 100%;
  }
}
.top {
  width: 100%;
  height: 50px;
  text-indent: 10px;
  line-height: 50px;
}
.evaluate-left {
  vertical-align: top;
  display: inline-block;
  width: 200px;
  height: 300px;
  margin-right: 20px;
  p {
    text-align: center;
  }
}
.evaluate-right {
  vertical-align: top;
  display: inline-block;
  height: 300px;
}
</style>
