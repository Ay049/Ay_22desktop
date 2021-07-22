<template>
  <div class="weather-box" ref="weatherbg">
    <div class="city-search">
      <input type="text" placeholder="只能搜索城市天气哦" @keyup.enter="getCityBtn" v-model="city">
      <button @click="getCityBtn">获取天气</button>
    </div>
    <div class="iscity">
      {{isCity}}
    </div>
    <div class="iswendu">
      {{wendu}}<span>℃</span>
    </div>
    <div class="istianqi">
      {{type}}
    </div>
    <div class="isganmao">
      {{ganmao}}
    </div>
    <div class="city-mes-box">
      <ul class="city-mes">
        <li v-for="(item,index) in cityWeather" :key="index">
          <div>{{item.date}}</div>
          <div>{{item.type}}</div>
          <div>{{item.low}}</div>
          <div>{{item.high}}</div>
          <div>{{item.fengxiang}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getCity } from '@/network/weather.js'

import WeatherXIAOYU from '@/assets/images/weather/小雨.jpg'
import WeatherDAYU from '@/assets/images/weather/大雨.png'
import WeatherXIAOXUE from '@/assets/images/weather/小雪.jpg'
import WeatherDAXUE from '@/assets/images/weather/大雪.jpg'
import WeatherQING from '@/assets/images/weather/晴.jpg'
import WeatherDUOYUN from '@/assets/images/weather/多云.jpg'
import WeatherYIN from '@/assets/images/weather/阴.jpg'
import WeatherLEIZHENYU from '@/assets/images/weather/雷阵雨.jpg'

export default {
  data () {
    return {
      city: '杭州',
      cityWeather: [],
      isCity: null,
      wendu: null,
      type: null,
      ganmao: null,
      wbg: null,
      WeatherXIAOYU, // 小雨
      WeatherDAYU, // 大雨
      WeatherXIAOXUE, // 小雪
      WeatherDAXUE, // 大雪
      WeatherDUOYUN, // 多云
      WeatherYIN, // 阴
      WeatherQING, // 晴
      WeatherLEIZHENYU // 雷阵雨
    }
  },
  mounted () {
    this.wbg = this.$refs.weatherbg
    this.getCityBtn()
  },
  methods: {
    getCityBtn () {
      getCity(this.city).then((response) => {
        this.isCity = response.data.city
        this.wendu = response.data.wendu
        this.type = response.data.forecast[0].type
        this.ganmao = response.data.ganmao
        this.cityWeather = response.data.forecast
      }).catch((err) => {
        console.log('getCity()报错' + err)
      }).then(() => {
        this.getbg()
      })
    },
    getbg () {
      if (this.type === '晴') {
        this.wbg.style.backgroundImage = 'url(' + this.WeatherQING + ')'
      } else if (this.type === '多云') {
        this.wbg.style.backgroundImage = 'url(' + this.WeatherDUOYUN + ')'
      } else if (this.type === '阴') {
        this.wbg.style.backgroundImage = 'url(' + this.WeatherYIN + ')'
      } else if (this.type === '雷阵雨' || this.type === '雷暴') {
        this.wbg.style.backgroundImage = 'url(' + this.WeatherLEIZHENYU + ')'
      } else if (this.type === '小雨' || this.type === '中雨' || this.type === '阵雨') {
        this.wbg.style.backgroundImage = 'url(' + this.WeatherXIAOYU + ')'
      } else if (this.type === '大雨' || this.type === '暴雨' || this.type === '大暴雨') {
        this.wbg.style.backgroundImage = 'url(' + this.WeatherDAYU + ')'
      } else if (this.type === '小雪' || this.type === '中雪') {
        this.wbg.style.backgroundImage = 'url(' + this.WeatherXIAOXUE + ')'
      } else if (this.type === '大雪' || this.type === '暴雪' || this.type === '大暴雪') {
        this.wbg.style.backgroundImage = 'url(' + this.WeatherDAXUE + ')'
      } else {
        this.wbg.style.backgroundImage = 'url(' + this.WeatherQING + ')'
      }
    }
  }
}
</script>
<style src="@/assets/css/home/exe/weather/weather.css" scoped></style>
