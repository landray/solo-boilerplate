// 引入 Vue
import Vue from 'vue'

// 引入Solo及css
import Solo from 'solojs'
import 'solojs/solo.css'

{{#iskkjs}}
// 引入kkjs
import kk from 'kkjs'
{{/iskkjs}}

// 引入 vue-resource 负责 ajax 数据请求
//  参考文档 https://github.com/pagekit/vue-resource
import VueResource from 'vue-resource'

import Pages from './pages/pages'

// 引入 fastclick， 解决移动设备上点击延迟的问题
const FastClick = require('fastclick')

FastClick.attach(document.body)
Vue.use(VueResource)
Vue.use(Solo)

{{#iskkjs}}
// 初始化kk
// kk.ready(() => {
{{/iskkjs}}

// 启动应用
Solo.start({
  pages: Pages,
  // 默认页面
  enterPage: 'home'
  {{#iskkjs}}
  // kk: kk
  {{/iskkjs}}
})

{{#iskkjs}}
// })
{{/iskkjs}}
