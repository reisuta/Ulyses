import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()


// import Vue from 'vue'
// import router from '../configs/router'
// import vuetify from '../configs/vuetify'
// import App from '../layouts/application'
// import '../configs/vue_loader'

//vue_loader.jsの内容
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import VueCompositionApi from '@vue/composition-api'
import VueClipboard from 'vue-clipboard2'
// import I18nLoader from './i18n_loader'

Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.use(VueCompositionApi)
// Vue.use(I18nLoader)
Vue.use(VueClipboard)

//vuetify.jsの内容
import Vuetify from 'vuetify'
import ja from 'vuetify/src/locale/ja.ts'

export default new Vuetify({
  icons: { iconfont: 'fa' },
  lang:  {
    locales: { ja },
    current: 'ja',
  },
})

require.context('images', true, /\.(png|jpg|jpeg|svg)$/)

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    router,
    vuetify,
    render: (h) => h(App),
  }).$mount('#app')
})
