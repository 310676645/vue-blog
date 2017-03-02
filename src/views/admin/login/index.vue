<template>
  <el-row :gutter="0">
    <el-col :span="8" :offset="8">
      <h1>博客后台系统登录</h1>
      <el-form ref="form" :model="formData" :rules="rules" label-width="80px">
        <el-form-item label="账号" prop="user_name">
          <el-input v-model="formData.user_name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="user_pwd">
          <el-input type="password" v-model="formData.user_pwd"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="large" @click="submitForm">登录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
<script type="text/ecmascript-6">
  import Login from '@libs/login'
  export default{
    data () {
      return {
        rules: {
          user_name: [
            {
              required: true,
              message: '请输入账号名称',
              trigger: 'blur'
            }
          ],
          user_pwd: [
            {
              required: true,
              message: '请输入密码',
              trigger: 'blur'
            }
          ]
        },
        formData: {
          user_name: '',
          user_pwd: ''
        }
      }
    },
    methods: {
      submitForm () {
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.$axios.post('/admin/login', this.formData).then((res) => {
              this.$message({
                showClose: true,
                message: res.msg
              })
              Login.success(res.data.user_token)
              this.$router.replace({
                name: 'adminCategory'
              })
            }).catch((error) => {
              this.$message({
                showClose: true,
                message: error.msg,
                type: 'error'
              })
            })
          } else {
            return false
          }
        })
      }
    }
  }

</script>
