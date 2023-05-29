import axios from "axios"
// import store from "@/store"

const service = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 30000,
})

export default service
