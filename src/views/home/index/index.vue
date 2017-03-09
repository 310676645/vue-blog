<template>
  <div>
    <el-row
      :gutter="15">
      <el-col
        :span="20">
        <md-placeholder-text
          text="暂无文章"
          v-if="articleList.length === 0">
        </md-placeholder-text>
        <router-link
          v-for="(item, key) in articleList"
          :key="key"
          :to="{
            name: 'articleDetails',
            params: {
              articleId: item.article_id
            }
          }">
          <el-card
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
        </router-link>
        <el-pagination
          v-if="page.count > 1"
          layout="prev, pager, next"
          :total="page.total"
          :page-count="page.count"
          :current-page="currentPage"
          :page-size="articleListParams.page_size"
          @current-change="handleCurrentChange">
        </el-pagination>
      </el-col>
      <el-col
        :span="4">
        <el-card
          class="md-bage-list">
          <el-badge :value="12" class="md-bage-list__item">
            <el-button size="small">javascript</el-button>
          </el-badge>
          <el-badge :value="3" class="md-bage-list__item">
            <el-button size="small">html</el-button>
          </el-badge>
          <el-badge :value="12" class="md-bage-list__item">
            <el-button size="small">javascript</el-button>
          </el-badge>
          <el-badge :value="3" class="md-bage-list__item">
            <el-button size="small">a</el-button>
          </el-badge>
          <el-badge :value="12" class="md-bage-list__item">
            <el-button size="small">javascript</el-button>
          </el-badge>
          <el-badge :value="3" class="md-bage-list__item">
            <el-button size="small">html</el-button>
          </el-badge>
          <el-badge :value="12" class="md-bage-list__item">
            <el-button size="small">javascript</el-button>
          </el-badge>
          <el-badge :value="3" class="md-bage-list__item">
            <el-button size="small">html</el-button>
          </el-badge>
          <el-badge :value="12" class="md-bage-list__item">
            <el-button size="small">javascript</el-button>
          </el-badge>
          <el-badge :value="3" class="md-bage-list__item">
            <el-button size="small">html</el-button>
          </el-badge>
          <el-badge :value="12" class="md-bage-list__item">
            <el-button size="small">javascript</el-button>
          </el-badge>
          <el-badge :value="3" class="md-bage-list__item">
            <el-button size="small">html</el-button>
          </el-badge>
          <el-badge :value="12" class="md-bage-list__item">
            <el-button size="small">javascript</el-button>
          </el-badge>
          <el-badge :value="3" class="md-bage-list__item">
            <el-button size="small">html</el-button>
          </el-badge>
          <el-badge :value="12" class="md-bage-list__item">
            <el-button size="small">javascript</el-button>
          </el-badge>
          <el-badge :value="3" class="md-bage-list__item">
            <el-button size="small">html</el-button>
          </el-badge>
          <el-badge :value="12" class="md-bage-list__item">
            <el-button size="small">javascript</el-button>
          </el-badge>
          <el-badge :value="3" class="md-bage-list__item">
            <el-button size="small">html</el-button>
          </el-badge>
          <el-badge :value="12" class="md-bage-list__item">
            <el-button size="small">javascript</el-button>
          </el-badge>
          <el-badge :value="3" class="md-bage-list__item">
            <el-button size="small">html</el-button>
          </el-badge>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="scss" rel="stylesheet/scss" type="text/css" scoped>
  @import "./../../../assets/sass/modules/var";
  .#{$baseName}-card {
    margin-bottom: $gutter;
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
  .#{$baseName}-bage-list {
    min-height: 300px;
    &__item {
      margin-right: 20px;
      margin-bottom: 20px;
    }
  }
</style>
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
        articleList: []
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
          name: 'home',
          query: {
            page: val
          }
        })
      },
      getArticleList () {
        this.$axios.get('/home/article', {
          params: {
            page: this.currentPage,
            ...this.articleListParams
          }
        }).then(res => {
          let data = res.data
          if (!data) return false
          if (data.list && data.list.length > 0) {
            this.articleList = data.list
          }
          if (data.total) {
            this.page.total = data.total
          }
          if (data.page_count) {
            this.page.count = data.page_count
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
