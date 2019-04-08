<template>
  <div>
    <Operation></Operation>
    <div class="b_home">
      <!-- 步骤条 -->
      <div class="step">
        <el-steps :active="active"
                  finish-status="success">
          <el-step title="注册用户">
            <el-form :model="ruleForm2"
                     status-icon
                     :rules="rules2"
                     ref="ruleForm2"
                     label-width="100px"
                     class="demo-ruleForm">
              <el-form-item label="密码"
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
              <el-form-item label="年龄"
                            prop="age">
                <el-input v-model.number="ruleForm2.age"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary"
                           @click="submitForm('ruleForm2')">提交</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
              </el-form-item>
            </el-form>
          </el-step>
          <el-step title="填写信息"></el-step>
          <el-step title="注册成功"></el-step>
        </el-steps>
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
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'))
          } else {
            callback()
          }
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
      active: 0,
      ruleForm2: {
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
    /* 步骤条的下一步按钮 */
    next () {
      if (this.active++ > 2) this.active = 0
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
</style>
