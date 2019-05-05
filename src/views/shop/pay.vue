<template>
  <div>
    <Operation></Operation>
    <div class="b_home ">
      <div class="logo clearfix">
        <img src="../../../static/logo.jpg"
             style="height: 57px;width: 200px;float: left; display: inline-block;"
             alt="">
        <!-- 步骤条 -->
        <el-steps :active="active"
                  style="width:700px;float:right;"
                  finish-status="success">
          <el-step title="拍下商品"></el-step>
          <el-step title="确认收货"></el-step>
          <el-step title="确认收货"></el-step>
        </el-steps>
      </div>
      <!-- 拍下商品 -->
      <div v-show="active === 0">
        <div class="addres clearfic">
          <div class="address-top">
            <p>确认收货地址</p>
          </div>
          <!-- 收货地址选择 -->
          <div class="shouhuo">
            <p style="margin-top:20px;">寄送至:</p>
            <ul v-for="(value,index) in address"
                :key="index"
                class="payaddress">
              <li>{{value.address}} ({{value.name}} 收) {{value.phone}}</li>
            </ul>
            <!-- 添加收货地址 -->

            <el-button type="text"
                       @click="dialogVisible = true">添加收货地址</el-button>

            <el-dialog title="提示"
                       :visible.sync="dialogVisible"
                       width="80%"
                       :before-close="handleClose">
              <el-form :model="ruleForm"
                       :rules="rules"
                       ref="ruleForm"
                       label-width="100px"
                       class="demo-ruleForm">
                <el-form-item label="地址信息"
                              prop="name">
                  <el-cascader :options="options"
                               v-model="selectedOptions"></el-cascader>
                </el-form-item>
                <el-form-item label="活动区域"
                              prop="region">
                  <el-select v-model="ruleForm.region"
                             placeholder="请选择活动区域">
                    <el-option label="区域一"
                               value="shanghai"></el-option>
                    <el-option label="区域二"
                               value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="活动时间"
                              required>
                  <el-col :span="11">
                    <el-form-item prop="date1">
                      <el-date-picker type="date"
                                      placeholder="选择日期"
                                      v-model="ruleForm.date1"
                                      style="width: 100%;"></el-date-picker>
                    </el-form-item>
                  </el-col>
                  <el-col class="line"
                          :span="2">-</el-col>
                  <el-col :span="11">
                    <el-form-item prop="date2">
                      <el-time-picker placeholder="选择时间"
                                      v-model="ruleForm.date2"
                                      style="width: 100%;"></el-time-picker>
                    </el-form-item>
                  </el-col>
                </el-form-item>
                <el-form-item label="即时配送"
                              prop="delivery">
                  <el-switch v-model="ruleForm.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="活动性质"
                              prop="type">
                  <el-checkbox-group v-model="ruleForm.type">
                    <el-checkbox label="美食/餐厅线上活动"
                                 name="type"></el-checkbox>
                    <el-checkbox label="地推活动"
                                 name="type"></el-checkbox>
                    <el-checkbox label="线下主题活动"
                                 name="type"></el-checkbox>
                    <el-checkbox label="单纯品牌曝光"
                                 name="type"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="特殊资源"
                              prop="resource">
                  <el-radio-group v-model="ruleForm.resource">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="活动形式"
                              prop="desc">
                  <el-input type="textarea"
                            v-model="ruleForm.desc"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary"
                             @click="submitForm('ruleForm')">立即创建</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-form>
              <span slot="footer"
                    class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary"
                           @click="dialogVisible = false">保存</el-button>
              </span>
            </el-dialog>
          </div>
          <!-- 确认订单信息 -->
          <p style="margin:20px 0;">确认订单信息</p>
          <!-- 商品 -->
          <div class="mail">
            <el-table :data="tableData"
                      style="width: 100%">
              <el-table-column label="商品">
                <template slot-scope="scope">
                  <img :src="scope.row.img"
                       alt=""
                       style="height:30px;width:50px;">
                  <span style="margin-left: 10px">{{ scope.row.name }}</span>
                </template>
              </el-table-column>
              <el-table-column label="单价"
                               prop="UnitPrice">
              </el-table-column>
              <el-table-column label="数量"
                               prop="number">
                <template slot-scope="scope">
                  <el-input-number size="mini"
                                   v-model="scope.row.number"
                                   :min="1"
                                   @change="handleChange(scope.row)"></el-input-number>
                </template>
              </el-table-column>
              <el-table-column label="金额"
                               prop="totalPrice">
              </el-table-column>
            </el-table>
            <div class="div">
              金额为:￥<p style="color:red;display:inline-block;">{{calculatePrice}}</p>
            </div>
          </div>
        </div>
      </div>
      <el-button style="margin-top: 20px;
      float:right"
                 @click="next">确认订单</el-button>
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
      /* 管理收货地址弹框 */
      dialogVisible: false,
      /* 地区选择 */
      options: [],
      /* 收货信息表单 */
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      /* 规则验证 */
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      },
      /* 步骤条 */
      active: 0,
      /* 全部商品总价 */
      Price: 0,
      /* 收货地址 */
      address: [
        {
          address: '广东省 广州市 天河区 新塘街道 宏太智慧谷6号楼409',
          phone: '13022001673',
          name: '么么么'
        }, {
          address: '广东省 广州市 天河区 新塘街道 宏太智慧谷6号楼409',
          phone: '13022001673',
          name: '么么么'
        }
      ],
      /* 商品 */
      tableData: [{
        /* 商品 */
        /* 图片 */
        img: '../../../static/server/4.jpg',
        id: '1001',
        /* 商品类型 */
        type_id: '1',
        /* 商品名称 */
        name: '刀片服务器',
        /* 商品单价 */
        UnitPrice: 40,
        /* 商品数量 */
        number: '2',
        /* 总价 */
        totalPrice: null
      },
      {
        /* 商品 */
        /* 图片 */
        img: '../../../static/server/4.jpg',
        id: '1002',
        /* 商品类型 */
        type_id: '2',
        /* 商品名称 */
        name: '刀片服务器',
        /* 商品单价 */
        UnitPrice: 20,
        /* 商品数量 */
        number: '1',
        /* 总价 */
        totalPrice: null
      }]
    }
  },
  /* 过滤器 */
  filters: {
    capitalize: function (value) {
      if (!value) return ''
    }
  },
  computed: {
    calculatePrice: function () {
      let total1 = 0
      this.tableData.filter((v, i) => {
        total1 += v.UnitPrice * v.number
      })
      return total1
    }
  },
  mounted () {
    this.Lprice()
  },
  methods: {
    /* 管理收货地址 */
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => { })
    },
    goedit () { },
    /* 商品金额 */
    Lprice () {
      this.tableData.filter((v, i) => {
        v.totalPrice = v.UnitPrice * v.number
      })
    },
    /* 商品金额总价 */
    next () {
      if (this.active++ > 2) this.active = 0
    },
    /* 计步器事件 */
    handleChange (value) {
      this.tableData.filter((v, i) => {
        if (value.id === this.tableData[i].id) {
          /* 循环数组当前的id与数组里id相等时
          取当前的单价和num，相乘取总金额数，在赋值到当前商品的总金额数值中 */
          let price = v.UnitPrice
          let num = v.number
          let allPrice = price * num
          v.totalPrice = allPrice
        }
      })
    }
  }
}
</script>

<style lang = 'scss'>
.b_home {
  width: 1200px;
  margin: 20px auto;
}
.addres {
  margin-top: 20px;
}
/* button */
.div {
  margin: 20px 0 10px 1098px;
}
/* 地址 */
.payaddress {
  li {
    text-indent: 12px;
    margin: 5px auto;
    height: 30px;
    line-height: 30px;
  }
}
</style>
