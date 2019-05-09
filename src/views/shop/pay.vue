<template>
  <div>
    <Operation></Operation>
    <div class="b_home ">
      <div class="logo clearfix">
        <img src="../../../static/logo.jpg"
             style="height: 57px;width: 200px;float: left; display: inline-block;"
             alt="">
        <!-- 步骤条 -->
        <el-steps :active="gfer"
                  style="width:700px;float:right;"
                  finish-status="success">
          <el-step title="拍下商品"></el-step>
          <el-step title="确认收货"></el-step>
        </el-steps>
      </div>
      <!-- 拍下商品 -->
      <div v-show="gfer === 1">
        <div class="addres clearfic">
          <div class="address-top">
            <p>确认收货地址</p>
          </div>
          <!-- 收货地址选择 -->
          <div class="shouhuo">
            <p style="margin-top:20px;">寄送至:</p>
            <ul>
              <li v-for="(value,index) in address"
                  :key="index"
                  :class='{payaddress1 : index == active1,payaddress:true}'
                  @click="sleectAddress(value, index)">{{value.address}} ({{value.name}} 收) {{value.phone}}</li>
            </ul>
            <!-- 添加收货地址 -->
            <el-button type="text"
                       @click="dialogVisible = true">添加收货地址</el-button>

            <el-dialog title="提示"
                       :visible.sync="dialogVisible"
                       width="50%"
                       :before-close="handleClose">
              <el-form :model="ruleForm"
                       :rules="rules"
                       ref="ruleForm"
                       label-width="100px"
                       class="demo-ruleForm">
                <el-form-item label="地址信息"
                              prop="selectedOptions">
                  <el-cascader :options="options"
                               v-model="ruleForm.selectedOptions"></el-cascader>
                </el-form-item>
                <el-form-item label="详细地址"
                              prop="region">
                  <el-input v-model="ruleForm.DetailedAddress"></el-input>
                </el-form-item>
                <el-form-item label="邮政编码">
                  <el-input v-model="ruleForm.PostalCode"></el-input>
                </el-form-item>
                <el-form-item label="收货人姓名"
                              prop="name">
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="手机号码"
                              prop="Phone">
                  <el-input v-model="ruleForm.Phone"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button @click="dialogVisible = false">取 消</el-button>
                  <el-button type="primary"
                             @click="dialogVisible = false">保存</el-button>
                </el-form-item>
              </el-form>
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
      <el-button v-show="gfer === 1"
                 style="margin-top: 20px;
      float:right"
                 @click="next">确认订单</el-button>
      <!-- 确认订单后，物流走向 -->
      <div v-show="gfer === 0">
        <el-steps :active="gfeb"
                  direction="vertical"
                  class="processing_content">
          <el-step v-for="item in approvalProcessProject"
                   :key="item.id"
                   icon="el-icon-location">
            <template slot="description">
              <div class="step-row">
                <table width="100%"
                       border="0"
                       cellspacing="0"
                       cellpadding="0">
                  <tr>
                    <td class="fs"
                        style="width: 150px;">{{item.event_time}} &nbsp;&nbsp;{{item.event_SameDay}} </td>
                    <td style="font-size:14px;">
                      <div v-for="(value, index) in item.event_children"
                           :key="index">
                        {{value.time}} &nbsp;&nbsp;&nbsp;&nbsp;{{value.content}}
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </template>
          </el-step>
        </el-steps>
        <div></div>
      </div>
      <!-- 猜你你喜欢 -->
      <div class="clike">
        <div class="title">猜你喜欢</div>
        <ul>
          <li v-for="(value, index) in like_"
              :key='index'>
            <img :src="value.pho"
                 alt="">
            <p style="color:red;text-align:center">￥{{value.UnitPrice}}</p>
            <p style="text-align:center">{{value.commodity}}</p>
            <p style="color:#333;font-size:14px">月销{{value.Monthlysales}}</p>
          </li>
        </ul>
      </div>
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
    /* 手机号码 */
    let Phone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机号码'))
      } else {
        if (/^1[34578]\d{9}$/.test(value)) {
          callback()
        } else {
          callback(new Error('手机号码格式有误'))
        }
      }
    }
    /* 用户名（可以中英文与数字，不能带特殊符号） */
    let checkName = (rule, value, callback) => {
      const ebb = value.trim()
      if (ebb === '') {
        return callback(new Error('请输入用户名'))
      }
      /* 判断是否有非法字符(除了中英文、数字、下划线以外的字符) */
      let charReg = /[^\u4E00-\u9FA5\w]/
      let res = charReg.test(ebb)
      /* 如果res为真即代表，有特殊符号 */
      if (res) {
        callback(new Error('用户名仅支持中英文、数字和下划线,且不能为纯数字'))
      }
      /* 不能为纯数字 */
      let numReg = /\D/
      res = numReg.test(ebb)
      if (!res) {
        callback(new Error('用户名仅支持中英文、数字和下划线,且不能为纯数字'))
      }
      /* 设置用户名的长度 */
      let len = 0
      let china = /[\u4E00-\u9FA5]/
      for (let i = 0; i < ebb.length; i++) {
        /* 如果值为中文，就为两个字符节 */
        if (china.test(ebb[i])) {
          len += 2
        } else {
          len += 1
        }
        // 尽量避免执行过多的次数，一旦len超过14就不满足条件了
        if (len > 14) {
          callback(new Error('中文仅限7个与字符串仅限14个'))
        }
      }
      /* 如果超过7个汉字或者12个字符串 */
      if (len.length > 14) {
        return callback(new Error('中文仅限7个与字符串仅限14个'))
      } else {
        callback()
      }
    }
    return {
      /* 竖行步骤条 */
      gfeb: 1,
      /* 物流更新步骤条 */
      approvalProcessProject: [
        {
          id: '0',
          event_time: '2019-5-07',
          event_SameDay: '周二',
          event_children: [
            { time: '15:58:37', content: '商品已经下单' },
            { time: '16:43:49', content: '订单开始处理' }
          ]
        },
        {
          id: '1',
          event_time: '2019-5-08',
          event_SameDay: '周三',
          event_children: [
            { time: '10:58:57', content: '您的订单待配货' },
            { time: '10:43:46', content: '您的包裹已出库' },
            { time: '10:43:48', content: '包裹正在等待揽收' }
          ]
        }
      ],
      /* 地址选择li的对比值 */
      active1: -1,
      pay: 'payaddress',
      /* 猜你喜欢 */
      like_: [
        {
          /* 商品id */
          id: 1001,
          /* 图片路径 */
          pho: '../../static/server/6.jpg',
          /* 商品名称 */
          commodity: '防火墙',
          /* 单价 */
          UnitPrice: '40',
          /* 月销 */
          Monthlysales: '567'
        },
        {
          /* 商品id */
          id: 1002,
          /* 图片路径 */
          pho: '../../static/server/2.jpg',
          /* 商品名称 */
          commodity: '网关',
          /* 单价 */
          UnitPrice: '50',
          /* 月销 */
          Monthlysales: '345'
        },
        {
          /* 商品id */
          id: 1003,
          /* 图片路径 */
          pho: '../../static/server/1.jpg',
          /* 商品名称 */
          commodity: 'web应用防火墙',
          /* 单价 */
          UnitPrice: '20',
          /* 月销 */
          Monthlysales: '78'
        },
        {
          /* 商品id */
          id: 1004,
          /* 图片路径 */
          pho: '../../static/server/3.jpg',
          /* 商品名称 */
          commodity: '入侵方策系统',
          /* 单价 */
          UnitPrice: '90',
          /* 月销 */
          Monthlysales: '5267'
        },
        {
          id: 1002,
          pho: '../../static/server/4.jpg',
          commodity: '防病毒网关',
          UnitPrice: '230',
          Monthlysales: '4576'
        }
      ],
      /* 管理收货地址弹框 */
      dialogVisible: false,
      /* 地区选择 */
      options: [
        {
          'label': '北京市',
          'value': '2',
          'level': 1,
          'parentId': '1',
          'children': [
            {
              'label': '北京',
              'value': '52',
              'level': 2,
              'parentId': '2',
              'children': [
                {
                  'label': '东城区',
                  'value': '500',
                  'level': 3,
                  'parentId': '52'
                }
              ]
            }
          ]
        },
        {
          'label': '北京市',
          'value': '2',
          'level': 1,
          'parentId': '1',
          'children': [
            {
              'label': '北京',
              'value': '52',
              'level': 2,
              'parentId': '2',
              'children': [
                {
                  'label': '东城区',
                  'value': '500',
                  'level': 3,
                  'parentId': '52'
                }
              ]
            }
          ]
        }
      ],
      /* 收货信息表单 */
      ruleForm: {
        /* 详细地址 */
        DetailedAddress: '',
        /* 邮政编码 */
        PostalCode: '',
        /* 收货人姓名 */
        name: '',
        /* 手机号码 */
        Phone: '',
        /* 选择 */
        selectedOptions: ''
      },
      /* 规则验证 */
      rules: {
        name: [
          { required: true, validator: checkName, trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请填写详细地址', trigger: 'change' }
        ],
        selectedOptions: [
          { type: 'date', required: true, message: '请选择地址', trigger: 'change' }
        ],
        Phone: [
          { required: true, validator: Phone, trigger: 'blur' }
        ]
      },
      /* 步骤条 */
      gfer: 0,
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
    this.gf()
  },
  methods: {
    /*  */
    gf () {
      this.approvalProcessProject.map(item => {
        this.gref = item.id
      })
    },
    /* 弹窗关闭前，发生的事件 */
    handleClose () { },
    /* 选择收货地址 */
    sleectAddress (value, index) {
      this.active1 = index
    },
    /* 商品金额 */
    Lprice () {
      this.tableData.filter((v, i) => {
        v.totalPrice = v.UnitPrice * v.number
      })
    },
    /* 商品金额总价 */
    next () {
      if (this.gfer++ > 2) this.gfer = 0
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
.el-step__icon-inner[class*="el-icon"]:not(.is-status) {
  background-color: #d9e5f9;
}
.fs {
  font-size: 15px;
  font-weight: 600;
}
.el-step.is-vertical .el-step__main {
  margin-top: -12px;
}
.processing_content {
  background-color: #d9e5f9;
  padding: 25px 20px;
}
/* 竖行步骤条 */
.step-row {
  min-width: 500px;
  margin-bottom: 12px;
  margin-top: 12px;
  color: #333;
}
.clike {
  margin-top: 100px;
  .title {
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    font-weight: 600;
    border-bottom: 5px solid #999;
    margin-bottom: 10px;
    text-indent: 20px;
  }
  ul {
    li {
      display: inline-block;
      height: 250px;
      width: 220px;
      padding: 10px;
      img {
        width: 220px;
        height: 150px;
        display: block;
        margin: 0 auto;
      }
      p {
        margin: 10px 0;
      }
    }
  }
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
  text-indent: 12px;
  margin: 5px auto;
  height: 30px;
  line-height: 30px;
}
.payaddress1 {
  text-indent: 12px;
  margin: 5px auto;
  line-height: 30px;
  height: 30px;
  outline: 1px solid #333;
}
</style>
