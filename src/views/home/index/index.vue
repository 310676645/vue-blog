<template>
  <div>
    <el-card
      v-for="(item, key) in articleList"
      :key="key"
      class="md-card"
      :body-style="{ padding: '0px' }">
      <div style="padding: 14px;">
        <span>{{ item.article_title }}</span>
        <el-tag type="primary">{{ item.category_name }}</el-tag>
        <div class="bottom clearfix md-card__time">
          <i class="md-card__icon el-icon-time"></i><time class="time">创建时间:{{ item.article_create_time |　dateFormat('yyyy-MM-dd hh:mm:ss') }}</time>
        </div>
      </div>
    </el-card>
    <el-pagination
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
  </div>
</template>
<style lang="scss" rel="stylesheet/scss" type="text/css" scoped>
  @import "./../../../assets/sass/modules/var";
  .#{$baseName}-card {
    margin-bottom: 15px;
    cursor: pointer;
    &__time {
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }
    &__icon {
      margin-right: 5px;
    }
  }
</style>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        articleList: []
      }
    },
    methods: {
      getArticleList () {
        this.$axios.get('/home/article').then(res => {
          let data = res.data
          if (data && data.length > 0) {
            this.articleList = data
          }
        }).catch(error => {
          this.$message.error(error.msg || error)
        })
      },
      init () {
        this.getArticleList()
      }
    },
    created () {
      this.init()
    }
  }
</script>
