<template>
  <div class="page4">
    感谢您的浏览<br>
    自动跳转至我的主页
    <div class="timeOver">{{timeOver}}</div>
    <SwiperLoading></SwiperLoading>
  </div>
</template>

<script>
import SwiperLoading from '@/components/common/loading/Loading.vue'
export default {
  name: 'page04',
  components: {
    SwiperLoading
  },
  data () {
    return {
      timeOver: 3
    }
  },
  props: [
  ],
  methods: {
    isAct4Fun () {
      this.playTimer = setInterval(() => {
        if (this.timeOver !== 0) {
          this.timeOver--
        } else {
          clearInterval(this.playTimer)
          window.location.href = '#/home'
        }
      }, 800)
    }
  }
}
</script>

<style scoped>
  .timeOver {
    font-size: 30px;
  }
</style>
