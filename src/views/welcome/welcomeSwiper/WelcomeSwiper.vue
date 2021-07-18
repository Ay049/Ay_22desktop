<template>
  <swiper :direction="'vertical'" :slidesPerView="1" :spaceBetween="30" :mousewheel="true" :pagination="{'clickable': true}" class="mySwiper">
    <SwiperSlide>
      <Page1></Page1>
    </SwiperSlide>
    <SwiperSlide>
      <Page2 ref="spage2"></Page2>
    </SwiperSlide>
    <SwiperSlide>
      <Page3 ref="spage3"></Page3>
    </SwiperSlide>
    <SwiperSlide>
      <Page4 ref="spage4"></Page4>
    </SwiperSlide>
  </swiper>
</template>

<script>
import Page1 from './SwiperPage1.vue'
import Page2 from './SwiperPage2.vue'
import Page3 from './SwiperPage3.vue'
import Page4 from './SwiperPage4.vue'

import 'swiper/components/pagination/pagination.min.css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Mousewheel, Pagination } from 'swiper/core'
SwiperCore.use([Mousewheel, Pagination])

export default {
  name: 'WelcomeSwipe',
  components: {
    Page1,
    Page2,
    Page3,
    Page4,

    Swiper,
    SwiperSlide
  },
  computed: {
    swiper () {
      return document.querySelector('.swiper-container').swiper
    }
  },
  methods: {
  },
  mounted () {
    var vm = null
    const that = this
    this.swiper.on('slideChange', function () {
      vm = this.activeIndex
      switch (vm) {
        case 1:
          that.$refs.spage2.isAct2Fun() // 是否跳过页
          break
        case 2:
          that.$refs.spage3.isAct3Fun() // 小轮播页
          break
        case 3:
          that.$refs.spage4.isAct4Fun() // 跳转倒计时
          break

        default:
          break
      }
      if (vm !== 2) {
        that.$refs.spage3.isAct3FunEnd() // 不在第三页时关闭第三页的轮播
      }
    })
  }
}
</script>
<style src="@/assets/css/welcomeswiper.css" scoped></style>
<style>
  /* 轮播图整体背景 */
  .mySwiper {
    background: url('~@/assets/images/welcome/黑夜星空背景.jpg') no-repeat;
    background-size: cover;
    color: rgb(255, 255, 255);
  }
  .swiper-pagination-bullet {
    background-color: #fff
  }
  .swiper-pagination-bullet-active {
    background: #fff
  }
</style>
