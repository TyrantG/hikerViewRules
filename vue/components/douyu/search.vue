<template>
  <div>
    <van-search class="douyu-search" v-model="search" placeholder="请输入搜索关键词" @search="hikerSearch" />
  </div>
</template>

<script>
import { Notify } from 'vant';
export default {
  name: "search",
  data() {
    return {
      search: '',
    }
  },
  methods: {
    hikerSearch() {
      if (! this.search) {
        Notify({ type: 'warning', message: '通知内容' });
        return false
      }
      const searchUrl = `https://m.douyu.com/api/search/anchor?limit=10&offset=fypage@-1@*10@&sk=${this.search};POST`
      fy_bridge_app.newPage(`搜索：${this.search}`, $(searchUrl).rule(_ => {
        eval(fetch('hiker://files/TyrantG/LIVE/douyu.js'))
        searchParse()
      }))
    },
  },
}
</script>

<style scoped lang="scss">
.douyu-search {
  margin-top: 36px;
}
</style>