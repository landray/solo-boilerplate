// 引入 Vue
import Vue from 'vue'

// 引入Solo及css
import Solo from 'solojs'
import 'solojs/solo.css'

// 引入 vux 的 重置样式表
import 'vux/src/styles/reset.less'

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

// // 如果接口服务器只能处理 application/x-www-form-urlencoded 格式的请求数据，则需要将 emulateJSON 设置为 true
// Vue.http.options.emulateJSON = true

// // 对所有ajax请求进行统一设置
// Vue.http.interceptors.push((request, next) => {
//   next()
// })


// 启动应用
Solo.start({
  pages: Pages,
  // 默认页面
  enterPage: 'home'{{#iskkjs}},
  kk
  {{/iskkjs}}
})

