/* eslint-disable import/no-unresolved */
import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import App from './App.vue'

// eslint-disable-next-line import/extensions
import router from './router/index'
// eslint-disable-next-line import/extensions
import store from './store/index'

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
