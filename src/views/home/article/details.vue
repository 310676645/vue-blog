<template>
  <div class="md-article-details">
    <h2 class="md-article-details__title">{{info.article_title}} <el-tag type="primary">{{info.category_name}}</el-tag></h2>
    <div class="md-article-details__info">
      <p>
        发布时间:{{info.article_create_time | dateFormat('yyyy-MM-dd hh:mm:ss')}}
      </p>
    </div>
    <div class="md-article-details__desc">{{info.article_desc}}</div>
    <div class="md-article-details__content">{{info.article_content}}</div>
  </div>
</template>
<style lang="scss" rel="stylesheet/scss" type="text/css" scoped>
  @import "./../../../assets/sass/modules/var";
  .#{$baseName}-article-details {
    &__title {
      padding: 0;
      margin: 0 0 10px 0;
      text-align: center;
    }
    &__desc {
      text-align: center;
    }
    &__info {
      font-size: 12px;
      text-align: center;
    }
  }
</style>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        info: {}
      }
    },
    computed: {
      articleId () {
        return this.$route.params.articleId
      }
    },
    methods: {
      getInfo () {
        this.$axios.get(`home/article/${this.articleId}`).then(res => {
          if (res) {
            this.info = res.data
          }
        }).catch(error => {
          this.$message.error(error || error.msg)
        })
      },
      init () {
        this.getInfo()
      }
    },
    created () {
      this.init()
    }
  }

</script>
