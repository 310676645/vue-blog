<template>
  <div>
    <el-button type="primary" icon="plus" style="margin-bottom: 15px">新增</el-button>
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
<style lang="scss" rel="stylesheet/scss" type="text/css" scoped>

</style>
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
          console.log(error)
        })
      },
      handleEdit (index, row) {
        console.log(index, row)
      },
      handleDelete (index, row) {
        console.log(index, row)
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
