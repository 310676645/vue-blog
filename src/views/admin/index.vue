<template>
  <div>
    <el-row type="flex" justify="center" class="header">
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-menu
            theme="dark"
            class="el-menu-demo"
            mode="horizontal"
            default-active="navActive"
            :router="true">
            <el-menu-item index="/admin">首页</el-menu-item>
          </el-menu>
        </div>
      </el-col>
    </el-row>
    <el-row class="md-main" :gutter="15">
      <el-col :span="4">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            default-activ="menuActive">
            <el-menu-item index="/admin/category"><i class="el-icon-menu"></i>分类管理</el-menu-item>
            <el-menu-item index="/admin/active"><i class="el-icon-setting"></i>文章管理</el-menu-item>
          </el-menu>
        </el-col>
      <el-col :span="20">
      </el-col>
    </el-row>
    <router-view></router-view>
  </div>
</template>
<style lang="scss" rel="stylesheet/scss" type="text/css" scoped>
  @import "./../../assets/sass/modules/var";
  .#{$baseName}-main {
    padding: $gutter;
  }
</style>
<script type="text/ecmascript-6">
  export default{
    data () {
      return {
        navActive: '/admin',
        menuActive: '/admin/category'
      }
    },
    components: {}
  }
</script>
