<template>
  <div>
    <router-link :to="{
      name: 'categoryAdd'
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
        {{ scope.row.category_id }}
        </template>
      </el-table-column>
      <el-table-column
        label="分类名称"
        width="180">
        <template scope="scope">
          {{scope.row.category_name}}
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
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        tableData: []
      }
    },
    methods: {
      getCategory () {
        this.$axios.get('admin/category', {
          module: 'admin'
        }).then(res => {
          let data = res.data
          if (data && data.length > 0) {
            this.tableData = data
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
          name: 'categoryEdit',
          params: {
            categoryId: row.category_id
          }
        })
      },
      handleDelete (index, row) {
        this.$confirm('您确定要删除此分类吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'info'
        }).then(() => {
          this.deleteCategory(row.category_id).then(() => {
            this.tableData.splice(index, 1)
          }).catch(() => {})
        }).catch(() => {})
      },
      deleteCategory (categoryId) {
        return new Promise((resolve, reject) => {
          this.$axios.delete(`admin/category/${categoryId}`, {
            module: 'admin'
          }).then(res => {
            this.$message({
              type: 'success',
              message: res.msg
            })
            resolve()
          }).catch(error => {
            this.$message.error(error.msg || error)
            reject()
          })
        })
      },
      init () {
        this.getCategory()
      }
    },
    created () {
      this.init()
    }
  }
</script>
