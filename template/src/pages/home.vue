<template>
<page>
  <page-content>
    <x-header :left-options="{showBack: false}">
      <template slot="left"><x-button plain mini @click.native="onClickLoadToChannel">Channel</x-button></template>
      新闻管理中心
      <template slot="right"><x-button plain mini @click.native="onClickLoadToNew">News</x-button></template>
    </x-header>
    <div class="vux-demo">
      <h1>This is  channel</h1>
      <p>PageData is </p>
      <example></example>
      <button @click="onClickLoadToNew">to new</button>
    </div>
    <template v-if="filterNews && filterNews.length">
      <template v-for="item in filterNews">
        <a class="home-link" @click="toDetail(item)">
          <div class="link-left">\{{ item.title }}</div>
          <div class="link-right">\{{ item.author }}</div>
        </a>
      </template>
    </template>
    <template v-else>
      <p align="center">No news yet</p>
    </template>
  </page-content>
</page>
</template>

<script>
import { XButton, XHeader, Group, Cell } from 'vux'
import Solo from 'solojs'
import Example from '../components/com'
import * as localstore from '../localstore'

export default {
  extends: Solo.Page,
  components: {
    Group,
    Cell,
    XHeader,
    XButton,
    Example
  },
  created() {
    console.log(this)
    console.log('created')
  },
  activated() {
    console.log('activated')
    if (this.pageData && this.pageData.from === 'create') {
      console.log(this.news)
      console.log(this.pageData.data)
      this.news.push(this.pageData.data)
    }
  },
  deactivated() {
    console.log('deactivated')
  },
  computed: {
    filterNews() {
      const _this = this
      return _this.news.filter((value, index) => value.channel === _this.channel)
    }
  },
  methods: {
    toDetail(item) {
      console.log(item)
      const viewData = {
        from: 'home',
        data: item
      }
      this.$router.load('detail', { viewData })
    },
    onClickLoadToNew() {
      this.$router.load('create')
    },
    onClickLoadToChannel() {
      this.$router.load('channel', {
        type: 'panel'
      })
    }
  },
  data() {
    return {
      channel: this.pageData && this.pageData.name ? this.pageData.name : 'index',
      news: [
        {
          title: 'hello world',
          author: 'lee',
          content: 'hhehhehehehhehehehhehehehe',
          channel: 'index'
        },
        {
          title: 'hello i am index',
          author: 'zhuang',
          content: 'world',
          channel: 'index'
        }
      ]
    }
  }
}
</script>

<style lange="less">
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
.home-link {
  background: #fff;
  margin: 5px 0px;
  padding: 0 40px;
  display: flex;
  line-height: 50px;
  justify-content: space-between;
}
</style>
