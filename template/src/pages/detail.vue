<template>
  <page>
    <page-header :title="'i am detail title'" :showBack="true" slot="header" @on-click-back="toBack">
      <template slot="header-right">
        <button>right button</button>
      </template>
    </page-header>
    <page-footer>
      <template slot="footer-content">
        <p align="center">i am detail footer</p>
      </template>
    </page-footer>
    <page-content>
      <h1>i am detail page</h1>
      <p>viewData is </p>
      <group>
        <cell title="标题" :value="viewData.data.title"></cell>
        <cell title="作者" :value="viewData.data.author"></cell>
        <cell title="频道" :value="viewData.data.channel"></cell>
        <cell title="内容" :value="viewData.data.content"></cell>
      </group>
    </page-content>
  </page>
</template>

<script>
  import Solo from 'solojs'
  import { Group, Cell } from 'vux'

  export default {
    extends: Solo.Page,
    components: {
      Group,
      Cell
    },
    data() {
      return {
      }
    },
    methods: {
      toBack() {
        console.log('back')
        this.$router.back('home')
      }
    }
  }
</script>

<style>

</style>
