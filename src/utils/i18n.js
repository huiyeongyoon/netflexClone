import vue from "vue"
import VueI18n from "vue-i18n"

vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: "ko",
  fallbackLocale: "ko",
})

export default i18n
