import { request3 } from './request'

export function getCity (city) {
  return request3({
    url: '/weather_mini?city=' + city
  })
}
