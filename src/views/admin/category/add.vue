<template>
  <div>
    <el-row>
      <el-col :span="8">
        <el-form ref="form" :model="formData" :rules="rules" label-width="100px">
          <el-form-item label="分类名称" prop="category_name">
            <el-input v-model="formData.category_name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="sass" rel="stylesheet/scss" type="text/css" scoped>

</style>
<script type="text/ecmascript-6">
    export default {
      data () {
        return {
          formData: {
            category_name: ''
          },
          rules: {
            category_name: [
              {
                required: true,
                message: '请输入分类名称',
                trigger: 'blur'
              }
            ]
          }
        }
      },
      methods: {
        validate () {
          return new Promise((resolve, reject) => {
            this.$refs['form'].validate((valid) => {
              if (valid) resolve()
              reject()
            })
          })
        },
        addCategory () {
          this.$axios.post('admin/category', this.formData, {
            module: 'admin'
          }).then((res) => {
            this.$message({
              type: 'success',
              message: res.msg
            })
            this.$router.go(-1)
          }).catch((error) => {
            this.$message.error(error.msg || error)
          })
        },
        onSubmit () {
          this.validate().then(() => {
            this.addCategory()
          }).catch(() => {})
        }
      }
    }
</script>
