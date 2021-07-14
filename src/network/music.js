import { request } from './request'

export function getQuery (query) {
  return request({
    url: '/search?keywords=' + query
  })
}

export function getMusicUrl (musicId) {
  return request({
    url: '/song/url?id=' + musicId
  })
}

export function getPicUrl (musicId) {
  return request({
    url: '/song/detail?ids=' + musicId
  })
}

export function getIds (musicId) {
  return request({
    url: '/comment/hot?type=0&id=' + musicId
  })
}

export function getMvid (mvid) {
  return request({
    url: 'https://autumnfish.cn/mv/url?id=' + mvid
  })
}
