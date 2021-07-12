<template>
  <div class="page3">
    <SwiperPage3Swiper ref="spage3Swiper"></SwiperPage3Swiper>
  </div>
</template>

<script>
import SwiperPage3Swiper from './SwiperPage3Swiper.vue'
export default {
  name: 'Page3',
  components: {
    SwiperPage3Swiper
  },
  data () {
    return {
    }
  },
  methods: {
    isAct3Fun () {
      this.$refs.spage3Swiper.isAct3FunSwiper()
    },
    isAct3FunEnd () {
      this.$refs.spage3Swiper.isAct3FunSwiperEnd()
    }
  }
}
</script>

<style scoped>
  .page3 {
    position: relative;
  }
</style>
