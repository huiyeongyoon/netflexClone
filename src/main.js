import "@/assets/css/normalize.css"
import "@/assets/css/style.scss"
import "@/assets/css/element-variables.scss"

import Vue from "vue"

import { sync } from "vuex-router-sync"
import axios from "axios"

import ElementUI from "element-ui"

import localeKo from "element-ui/lib/locale/lang/ko"
import localeEn from "element-ui/lib/locale/lang/en"

import VueLodash from "vue-lodash"
import lodash from "lodash"

import vueMoment from "vue-moment"
import moment from "moment"

import App from "./App.vue"
import router from "./route"
import store from "./store"

import mdiVue from "mdi-vue"
import * as mdijs from "@mdi/js"

import i18n from "./utils/i18n"

import { jsPDF } from "jspdf"
import html2pdf from "html2pdf.js"
import VueHtml2pdf from "vue-html2pdf"
import { InlineSvgPlugin } from "vue-inline-svg"
import vClickOutside from "v-click-outside"

import * as filters from "./filters"
import { func } from "./function"

Vue.config.productionTip = process.env.VUE_APP_LOG_PRODUCTION_TIP
Vue.config.devtools = true

Vue.use(html2pdf)
Vue.use(jsPDF)
Vue.use(VueHtml2pdf)
Vue.use(InlineSvgPlugin)
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.use(mdiVue, {
  icons: mdijs,
})
Vue.use(ElementUI, {
  locale: i18n.locale === "ko" ? localeKo : localeEn,
  size: "medium",
})
Vue.use(ElementUI)
Vue.use(vueMoment, { moment })
Vue.use(VueLodash, { name: "ld", lodash: lodash })
Vue.use(vClickOutside)

Vue.prototype.$http = axios
Vue.prototype.$func = func

global.$t = Vue.t

sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app")
