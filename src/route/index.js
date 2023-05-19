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
<<<<<<< HEAD
    redirect: "/",
    children: [
      {
        path: "/",
        component: () => import("@/views/pages"),
=======
    redirect: "/dashboard",
    children: [
      {
        path: "/dashboard",
        component: () => import("@/views/pages/dashboard"),
      },
      // {
      //   path: "/userManagement",
      //   component: () => import("@/views/pages/userManagement"),
      // },
      {
        path: "/newUser",
        component: () => import("@/views/pages/newUser"),
>>>>>>> fa0b73bc7be1d990081570065eef96f8eadbd8d5
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
