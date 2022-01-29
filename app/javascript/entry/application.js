import Vue from 'vue'
import router from '../configs/router'
import App from '../layouts/application.vue'

//vue_loader.jsの内容
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import VueCompositionApi from '@vue/composition-api'

Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.use(VueCompositionApi)

//vuetify.jsの内容
import ja from 'vuetify/src/locale/ja.ts'

export default new Vuetify({
  icons: { iconfont: 'fa' },
  lang:  {
    locales: { ja },
    current: 'ja',
  },
})


document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    vuetify : new Vuetify(),
    router,
    render: (h) => h(App),
  }).$mount('#app')
})

