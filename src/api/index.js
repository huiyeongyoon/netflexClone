import request from "@/utils/request"

const API_KEY = "78a4d0373f1d5e9db6addc349a02b5ba"

export function movieInfo(data) {
  return request({
    url: `/trending/all/week?api_key=${API_KEY}&language=ko-KO`,
    method: "get",
    data,
  })
}
export function top(data) {
  return request({
    url: `/movie/top_rated?api_key=${API_KEY}&language=ko-KO`,
    method: "get",
    data,
  })
}
export function popular(data) {
  return request({
    url: `/movie/popular?api_key=${API_KEY}&language=ko-KO`,
    method: "get",
    data,
  })
}
export function upcoming(data) {
  return request({
    url: `/movie/popular?api_key=${API_KEY}&language=ko-KO`,
    method: "get",
    data,
  })
}
