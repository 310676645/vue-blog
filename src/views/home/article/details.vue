<template>
  <div class="md-article-details">
    <h2 class="md-article-details__title">{{info.article_title}} <el-tag v-if="info.category_name" type="primary">{{info.category_name}}</el-tag></h2>
    <div class="md-article-details__info">
      <p>
        发布时间:{{info.article_create_time | dateFormat('yyyy-MM-dd hh:mm:ss')}}
      </p>
    </div>
    <div class="md-article-details__desc">{{info.article_desc}}</div>
    <div class="md-article-details__content" v-highlight="info.article_content">

    </div>
  </div>
</template>
<style lang="scss" rel="stylesheet/scss" type="text/css">
  @import "./../../../assets/sass/modules/var";
  .#{$baseName}-article-details {
    padding: 30px;
    &__title {
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
    &__content {
      padding: 30px;
      font-family: "Microsoft YaHei";
      .hljs {
        padding: 30px;
        border-radius: 10px;
      }
    }
  }
</style>
<script type="text/ecmascript-6">
  import highlightjs from 'highlight.js'
  import marked from 'marked'
  import 'highlight.js/styles/dracula.css'
  export default {
    data () {
      return {
        info: {},
        checked: false
      }
    },
    directives: {
      highlight: function (el, binding) {
        if (binding.value) {
          let value = binding.value
          /* marked.setOptions({
            highlight: (value) => highlightjs.highlightAuto(value).value
          }) */
          el.innerHTML = marked(value)
          let codeList = document.querySelectorAll('.md-article-details__content code')
          for (let i = 0, len = codeList.length; i < len; i++) {
            console.log(1)
            highlightjs.highlightBlock(codeList[i])
          }
        }
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
    },
    mounted () {
     // highlightjs.initHighlightingOnLoad()
    }
  }

</script>
