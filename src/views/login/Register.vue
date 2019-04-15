<template>
  <div style="
  background-color: #9999994a;">
    <Operation></Operation>
    <div class="b_home">
      <!-- 手机号码注册 -->
      <div class="mve">
        <el-form :model="form"
                 status-icon
                 :rules="rule"
                 ref="form"
                 label-width="100px"
                 class="demo-ruleForm">
          <el-form-item label="用户名"
                        prop="checkName">
            <el-input v-model="form.checkName"></el-input>
          </el-form-item>
          <el-form-item label="设置密码"
                        prop="pass">
            <el-input type="password"
                      v-model="form.pass"
                      auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码"
                        prop="checkPass">
            <el-input type="password"
                      v-model="form.checkPass"
                      auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="手机号码"
                        prop="checkPhone">
            <el-input v-model="form.checkPhone"></el-input>
          </el-form-item>
          <el-form-item label="手机验证码"
                        prop="checkVaira">
            <el-input v-model="form.checkVaira"
                      style="width:300px"></el-input>
            <button class="button"
                    @click="getCode"
                    v-show="show">获取验证码</button>
            <button class="button"
                    v-show="!show">已发送({{count}})</button>
          </el-form-item>
        </el-form>
        <div class="btn">
          <el-button class="bn"
                     @click="next">注册</el-button>
        </div>
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
    /* 验证码格式 */
    var checkVaira = (rule, value, callback) => {
      callback()
    }
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
        return callback(new Error('请输入用户名'))
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
    /* 密码 */
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('请输入密码'))
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
      } else if (value !== this.form.pass) {
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
      form: {
        checkPhone: '',
        checkVaira: '',
        checkName: '',
        pass: '',
        checkPass: ''
      },
      rule: {
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
        ],
        checkVaira: [
          { required: true, validator: checkVaira, trigger: 'blur' }
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
    next () {
      this.$refs['form'].validate((v) => {
        if (v) {
          this.$message('注册成功')
          this.$router.push({path: '/'})
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang = 'scss'>
.b_home {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.btn {
  margin-top: 12px;
  width: 200px;
  margin: 0 auto;
  .bn {
    width: 200px;
    color: #000;
    background-color: #e60d0dc9;
    border-radius: 15px;
  }
}
.step {
  width: 450px;
  margin-left: 400px;
  margin-top: 20px;
}
.button {
  height: 40px;
  width: 95px;
  background-color: #ebeef5;
  border: 1px solid #e4e7ed;
}
.mve {
  width: 500px;
  padding: 20px 90px;
  margin: 20px auto;
  background-color: #fff;
}
</style>
