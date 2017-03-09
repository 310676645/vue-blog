<template>
  <el-row
    class="md-header">
    <el-col
      :span="24">
      <h1 class="md-header__title">
        <img src="http://ohhqdafpw.bkt.clouddn.com/9f3df8dcd100baa1c6fccbd14610b912c9fc2e83.png" width="100px">
        <div>毛豆个人博客</div>
        <el-tag type="gray">WEB前端开发工程师</el-tag>
      </h1>
      <el-card
        class="md-header__menu">
        <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          :router="true">
          <el-menu-item index="/home">首页</el-menu-item>
          <el-menu-item index="/article">全部文章</el-menu-item>
          <el-menu-item index="/about">留言</el-menu-item>
          <el-menu-item index="/message">关于我</el-menu-item>
        </el-menu>
      </el-card>
    </el-col>
  </el-row>
</template>
<style lang="scss" rel="stylesheet/scss" type="text/css">
  @import "./../assets/sass/modules/var";
  .#{$baseName}-header {
    padding: $gutter;
    &__title {
      padding-bottom: $gutter;
      text-align: center;
      font-size: 30px;
      font-weight: normal;
    }
    &__menu {
      padding: 0;
      .el-card__body {
        padding: 0 !important;
      }
      .el-menu {
        background: #fff;
      }
      .is-active {
        border-bottom: 5px solid #20a0ff;
      }
    }
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
