import request from "@/utils/request"

export function trendingAllWeek(params) {
  return request({
    url: `/trending/all/week`,
    method: "get",
    params,
  })
}
export function MovieTopRated(params) {
  return request({
    url: `/movie/top_rated?`,
    method: "get",
    params,
  })
}
export function MoviePopular(params) {
  return request({
    url: `/movie/popular?`,
    method: "get",
    params,
  })
}
export function movieUpcoming(params) {
  return request({
    url: `/movie/upcoming?`,
    method: "get",
    params,
  })
}
