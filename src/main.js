import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import { iconsSet as icons } from '@/assets/icons'
import DocsCallout from '@/components/DocsCallout'
import DocsExample from '@/components/DocsExample'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@element-plus/icons-vue'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(CoreuiVue)
app.provide('icons', icons)
app.component('CIcon', CIcon)
app.component('DocsCallout', DocsCallout)
app.component('DocsExample', DocsExample)
app.use(ElementPlus)

app.mount('#app')

// import Vue from 'vue'
// //import ElementUI from 'element-ui'
// //import 'element-ui/lib/theme-chalk/index.css'
// import App from './App.vue'

// //Vue.use(ElementUI)
// Vue.use(store)
// Vue.use(router)
// Vue.use(CoreuiVue)
// Vue.provide('icons', icons)
// Vue.component('CIcon', CIcon)
// Vue.component('DocsCallout', DocsCallout)
// Vue.component('DocsExample', DocsExample)

// new Vue({
//   el: '#app',
//   render: (h) => h(App),
// })
