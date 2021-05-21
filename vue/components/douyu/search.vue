<template>
  <div>
    <el-input placeholder="请输入内容" v-model="search" clearable :size="size">
      <el-select :style="`width: ${selectWidth}`" slot="prepend" v-model="chooseOption">
        <el-option
            v-for="item in options"
            :key="item.type"
            :label="item.label"
            :value="item.type">
        </el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search" @click="hikerSearch">{{searchText}}</el-button>
    </el-input>
  </div>
</template>

<script>
export default {
  name: "search",
  props: {
    options: {
      type: Array,
      default: () => []
    },
    defaultOption: {
      type: String,
      default: ''
    },
    searchText: {
      type: String,
      default: '搜索'
    },
    selectWidth: {
      type: String,
      default: '90px'
    },
    size: {
      type: String,
      default: 'medium'
    }
  },
  mounted() {
    this.chooseOption = this.defaultOption
  },
  data() {
    return {
      search: '',
      chooseOption: '',
    }
  },
  methods: {
    hikerSearch() {
      // putVar('chooseOption', this.chooseOption)
      if (! this.search) {
        this.$message.error('请输入搜索内容！')
        return false
      } else {
        this.$message.warning(this.chooseOption)
        this.$message.success(getVar('chooseOption'))
        return false
      }
      const searchUrl = `https://m.douyu.com/api/search/${this.chooseOption}?limit=10&offset=fypage@-1@*10@&sk=${this.search};POST`
      fy_bridge_app.newPage(`搜索：${this.search}`, $(searchUrl).rule(_ => {

      }))
    },
    searchParse() {
      let res = {};
      let d = [];
      const html = getResCode();
      const list = JSON.parse(html).data

      if (getVar('chooseOption') == 'video') {
        list.list.forEach(item => {
          d.push({
            title: item.title,
            desc: item.roomName,
            pic_url: item.videoPic,
            url: "https://vmobile.douyu.com/show/"+item.hashID
          })
        })
      } else {
        list.list.forEach(item => {
          d.push({
            title: item.nickname,
            desc: item.roomName,
            pic_url: item.roomSrc,
            url: "https://m.douyu.com/"+item.roomId
          })
        })
      }

      res.data = d;
      setHomeResult(res);
    },
  },
}
</script>

<style scoped lang="scss">

</style>