<template>
    <el-row>
      <el-col :span="24">
        <md-header></md-header>
      </el-col>
      <el-col :span="24">
        <div class="md-container">
          <transition
            enter-active-class="animated bounceInLeft"
            leave-active-class="animated bounceOutRight">
              <router-view
                class="md-main">
              </router-view>
          </transition>
        </div>
      </el-col>
    </el-row>
</template>
<style lang="scss" rel="stylesheet/scss" type="text/css" scoped>
  @import "./../../assets/sass/modules/var";
  .#{$baseName}-container {
    position: relative;
    padding: $gutter;
    box-sizing: border-box;
    width: 100%;
  }
  .#{$baseName}-main {
    position: absolute;
    left: $gutter;
    right: $gutter;
    margin-bottom: $gutter;
    padding: $gutter;
    box-sizing: border-box;
    overflow-y: auto;
    border: 1px solid #d1dbe5;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
  }
</style>
