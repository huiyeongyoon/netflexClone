import Vue from "vue"
import Router from "vue-router"
import _ from "lodash"
import PageNotFound from "@/views/PageNotFound"
import Layout from "@/layout"

Vue.use(Router)

export const constantRoutes = _.concat(
  {
    path: "/",
    component: Layout,
    redirect: "/",
    children: [
      {
        path: "/",
        component: () => import("@/views/pages"),
      },
    ],
  },
  { path: "*", component: PageNotFound }
)

// 왜 사용?
const createRouter = () =>
  new Router({
    mode: "history", // require service support
    // base: process.env.BASE_URL,
    // scrollBehavior: () => {
    //   document.querySelector("body").scrollTop = 0
    // },
    routes: constantRoutes,
  })

const router = createRouter()

export default router
