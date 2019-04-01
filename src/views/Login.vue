<template>
  <div class="home">
    <!-- 登录框 -->
    <div class="input_box">
      <el-form :model="ruleForm2"
               status-icon
               :rules="rules2"
               ref="ruleForm2"
               label-width="70px"
               class="demo-ruleForm">
        <el-form-item label="用户名">
          <el-input placeholder="请输入内容"
                    prefix-icon="el-icon-third-icon-"
                    v-model="ruleForm2.name">
          </el-input>
        </el-form-item>
        <el-form-item prop="pass"
                      label="密码">
          <el-input type="password"
                    placeholder="请输入密码"
                    prefix-icon="el-icon-thirdpassword"
                    v-model="ruleForm2.pass"
                    auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     class="loginbutton"
                     @click="submitForm('ruleForm2')">登录</el-button>
        </el-form-item>
      </el-form>
      <!-- 注册 -->
      <div class="opration">
        <ul>
          <li>快速注册</li>
          <li>忘记密码</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          callback()
        }
      }, 1000)
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass')
        }
        callback()
      }
    }
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
      ruleForm2: {
        name: '',
        pass: '',
        checkPass: '',
        age: ''
      },
      rules2: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
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
.home {
  width: 1200px;
  margin: 0 auto;
}
.opration {
    width: 280px;
    height: 50px;
    margin-left: 70px;
  ul {
    li {
      display: block;
      float: left;
    }
    li:nth-child(2) {
      float: right;
    }
  }
}
/* 登录 */
.input_box {
  width:400px;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 200px;
  padding:20px;
  background-color: #999;
}
.loginbutton {
  width: 250px;
  background-color: red;
  color: #fff;
  border-radius: 20px;
  border: 1px solid red;
  box-shadow: 0px 7px 9px 0px red;
}
.el-input__inner {
  width: 300px;
}
</style>
