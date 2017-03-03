<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-form
          ref="form"
          :model="formData"
          :rules="rules"
          label-width="100px">
          <el-form-item
            label="文章标题"
            prop="article_title">
            <el-input
              v-model="formData.article_title">
            </el-input>
          </el-form-item>
          <el-form-item
            label="文章描述"
            prop="article_desc">
            <el-input
              v-model="formData.article_desc">
            </el-input>
          </el-form-item>
          <el-form-item
            label="文章分类"
            prop="category_id">
            <el-select
              v-model="formData.category_id"
              placeholder="请选择文章分类">
              <el-option
                v-for="(item, key) in categoryList"
                :key="key"
                :label="item.category_name"
                :value="item.category_id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="文章详情"
            prop="article_content">
            <el-input
              v-model="formData.article_content"
              type="textarea"
              rows="10">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="onSubmit">提交</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        categoryList: [],
        formData: {
          article_title: '',
          article_desc: '',
          article_content: '',
          category_id: ''
        },
        rules: {
          article_title: [
            {
              required: true,
              message: '请输入文章标题',
              trigger: 'blur'
            }
          ]
          /* category_id: [
            {
              required: true,
              message: '请选择文章分类',
              trigger: 'change'
            }
          ] */
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
      updateArticle () {
        this.$axios.put(`admin/article/${this.$route.params.articleId}`, this.formData, {
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
      getCategory () {
        this.$axios.get('admin/category', {
          module: 'admin'
        }).then(res => {
          let data = res.data
          if (data && data.length > 0) {
            this.categoryList = data
          }
        }).catch((error) => {
          console.log(error)
        })
      },
      getArticle () {
        this.$axios.get(`admin/article/${this.$route.params.articleId}`, {
          module: 'admin'
        }).then(res => {
          let data = res.data
          if (data) {
            this.formData = data
          }
        }).catch(error => {
          this.$message.error(error)
        })
      },
      onSubmit () {
        this.validate().then(() => {
          this.updateArticle()
        }).catch(() => {})
      },
      init () {
        this.getCategory()
        this.getArticle()
      }
    },
    created () {
      this.init()
    }
  }
</script>
