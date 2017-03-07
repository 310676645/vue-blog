<template>
    <el-row>
      <el-col :span="24">
        <el-menu
          theme="dark"
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          :router="true">
          <el-menu-item index="/home">全部文章</el-menu-item>
        </el-menu>
      </el-col>
      <router-view class="md-main"></router-view>
    </el-row>
</template>
<style lang="scss" rel="stylesheet/scss" type="text/css" scoped>
  @import "./../../assets/sass/modules/var";
  .#{$baseName}-main {
    padding: $gutter;
    box-sizing: border-box;
    width: 100%;
    overflow-y: auto;
  }
</style>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        activeIndex: '/home'
      }
    }
  }
</script>
