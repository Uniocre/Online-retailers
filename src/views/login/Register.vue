<template>
  <div>
    <Operation></Operation>
    <div class="b_home">
      <!-- 步骤条 -->
      <div class="step">
        <el-steps :active="active"
                  finish-status="success">
          <el-step title="注册用户">
          </el-step>
          <el-step title="填写信息"></el-step>
          <el-step title="注册成功"></el-step>
        </el-steps>
      </div>
      <div class="mve"
           v-if="active===0">
        <!-- 注册用户 -->
        <el-form :model="ruleForm2"
                 status-icon
                 :rules="rules2"
                 ref="ruleForm2"
                 label-width="100px"
                 class="demo-ruleForm">
          <!--  <el-form-item label="用户名"
                        prop="checkName">
            <el-input v-model="ruleForm2.name"
                      auto-complete="off"></el-input>
          </el-form-item> -->
          <el-form-item label="用户名"
                        prop="checkName">
            <el-input v-model="ruleForm2.checkName"></el-input>
          </el-form-item>
          <el-form-item label="设置密码"
                        prop="pass">
            <el-input type="password"
                      v-model="ruleForm2.pass"
                      auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码"
                        prop="checkPass">
            <el-input type="password"
                      v-model="ruleForm2.checkPass"
                      auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="手机号码"
                        prop="checkPhone">
            <el-input v-model="ruleForm2.checkPhone"></el-input>
          </el-form-item>
          <el-form-item label="手机验证码"
                        prop="Verification">
            <el-input v-model="ruleForm2.Verification"
                      style="width:300px"></el-input>
            <button class="button"
                    @click="getCode"
                    v-show="show">获取验证码</button>
            <button class="button"
                    v-show="!show">已发送({{count}})</button>
          </el-form-item>
        </el-form>
        <el-button style="margin-top: 12px;"
                   @click="next">下一步</el-button>
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
    var checkPhone = (rule, value, callback) => {
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
    var checkName = (rule, value, callback) => {
      const ebb = value.trim()
      if (ebb === '') {
        callback(new Error('请输入用户名'))
        console.log(value)
      }
      /* 判断是否有非法字符(除了中英文、数字、下划线以外的字符) */
      var charReg = /[^\u4E00-\u9FA5\w]/
      var res = charReg.test(ebb)
      /* 如果res为真即代表，有特殊符号 */
      if (res) {
        callback(new Error('用户名仅支持中英文、数字和下划线,且不能为纯数字'))
      }
      /* 不能为纯数字 */
      var numReg = /\D/
      res = numReg.test(ebb)
      if (!res) {
        callback(new Error('用户名仅支持中英文、数字和下划线,且不能为纯数字'))
      }
      /* 设置用户名的长度 */
      var len = 0
      var china = /[\u4E00-\u9FA5]/
      for (var i = 0; i < ebb.length; i++) {
        /* 如果值为中文，就为两个字符节 */
        if (china.test(ebb[i])) {
          console.log(ebb[i])
          len += 2
          console.log(len)
        } else {
          len += 1
          console.log(len)
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
    /* 密码 */
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        const Pass = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/
        if (Pass.test(value)) {
          callback()
        } else {
          return callback(new Error('最少6位，带有大小写和数字'))
        }
      }
    }
    /* 第二次和第一次密码得相同 */
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      active: 0,
      timer: null,
      show: true,
      count: '',
      /* 注册用户的信息 */
      ruleForm2: {
        checkName: '',
        pass: '',
        checkPass: '',
        checkPhone: '',
        Verification: ''
      },
      rules2: {
        checkName: [
          { required: true, validator: checkName, trigger: 'blur' }
        ],
        pass: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ],
        checkPhone: [
          { required: true, validator: checkPhone, trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    this.tcall()
  },
  methods: {
    tcall () {
    },
    /* 获取验证码 */
    getCode () {
      const TIME_COUNT = 60
      if (!this.timer) {
        this.show = false
        this.count = TIME_COUNT
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--
          } else {
            this.show = true
            clearInterval(this.timer)
            this.timer = null
          }
        }, 1000)
      }
    },
    /* 步骤条的下一步按钮 */
    next () {
      console.log(this.ruleForm2.phone)
      if (this.ruleForm2.phone === '') {
        this.$message('请填写完全部信息')
      } else {
        if (this.active++ > 2) this.active = 0
      }
    },
    /* 上一步 */
    prev () {
      --this.active
      if (this.active < 0) this.active = 0
    },
    /* 调交表单 */
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang = 'scss'>
.b_home {
  width: 1200px;
  margin: 0 auto;
}
.button {
  height: 40px;
  width: 95px;
  background-color: #ebeef5;
  border: 1px solid #e4e7ed;
}
.mve {
  width: 500px;
  margin-top: 20px;
}
</style>
