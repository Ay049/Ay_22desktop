import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import bus from './utils/bus' // 自定义总线

import 'bootstrap/dist/css/bootstrap.min.css' // 第三方轮播图插件
import 'bootstrap' // 第三方轮播图插件

const app = createApp(App)
app.config.globalProperties.$bus = bus // 事件总线
app.use(store).use(router).mount('#app')
