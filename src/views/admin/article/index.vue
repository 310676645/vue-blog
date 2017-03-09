<template>
  <div>
    <router-link :to="{
      name: 'articleAdd'
    }">
      <el-button
        type="primary"
        icon="plus"
        style="margin-bottom: 15px">
        新增
      </el-button>
    </router-link>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        label="id"
        width="180">
        <template scope="scope">
        {{ scope.row.article_id }}
        </template>
      </el-table-column>
      <el-table-column
        label="分类名称"
        width="180">
        <template scope="scope">
          {{scope.row.category_name}}
        </template>
      </el-table-column>
      <el-table-column
        label="文章标题"
        width="180">
        <template scope="scope">
          {{scope.row.article_title}}
        </template>
      </el-table-column>
      <el-table-column
        label="文章描述"
        width="180">
        <template scope="scope">
          {{scope.row.article_desc || '暂无描述'}}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button
            size="small"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="md-mt-15"
      v-if="page.count > 1"
      layout="prev, pager, next"
      :total="page.total"
      :page-count="page.count"
      :current-page="currentPage"
      :page-size="articleListParams.page_size"
      @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        articleListParams: {
          page_size: 20
        },
        page: {
          total: 0,
          count: 0
        },
        tableData: []
      }
    },
    computed: {
      currentPage () {
        return Number(this.$route.query.page) || 1
      }
    },
    methods: {
      handleCurrentChange (val) {
        this.$router.push({
          path: '/admin/article',
          query: {
            page: val
          }
        })
      },
      getArticleList () {
        this.$axios.get('admin/article', {
          module: 'admin',
          params: {
            page: this.currentPage,
            ...this.articleListParams
          }
        }).then(res => {
          let data = res.data
          if (!data) return false
          if (data.list && data.list.length > 0) {
            this.tableData = data.list
          }
          if (data.total) {
            this.page.total = data.total
          }
          if (data.page_count) {
            this.page.count = data.page_count
          }
        }).catch(error => {
          this.$message({
            type: 'error',
            message: error.msg
          })
        })
      },
      handleEdit (index, row) {
        this.$router.push({
          name: 'articleEdit',
          params: {
            articleId: row.article_id
          }
        })
      },
      handleDelete (index, row) {
        this.tableData.splice(index, 1)
        this.$confirm('您确定要删除此文章吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'info'
        }).then(() => {
          this.deleteArticle(row.article_id).then(() => {
            this.tableData.splice(index, 1)
          }).catch(() => {})
        }).catch(() => {})
      },
      deleteArticle (articleId) {
        return new Promise((resolve, reject) => {
          this.$axios.delete(`admin/article/${articleId}`, {
            module: 'admin'
          }).then(res => {
            console.log(res)
            this.$message({
              type: 'success',
              message: res.msg
            })
            resolve()
          }).catch(error => {
            console.log(error)
            this.$message.error(error.msg || error)
            reject()
          })
        })
      },
      init () {
        this.getArticleList()
      }
    },
    watch: {
      '$route' () {
        this.init()
      }
    },
    created () {
      this.init()
    }
  }
</script>
