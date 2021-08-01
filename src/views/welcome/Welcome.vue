<template>
  <div class="welcome">
    <div class="fixed-top fff"><MainNavBar></MainNavBar></div>
    <WelcomeSwiper class="swiper"></WelcomeSwiper>
  </div>
</template>

<script>
// @ is an alias to /src
import MainNavBar from './MainNavBar.vue'
import WelcomeSwiper from '@/views/welcome/welcomeSwiper/WelcomeSwiper.vue'
export default {
  name: 'Welcome',
  components: {
    MainNavBar,
    WelcomeSwiper
  }
}
</script>
<style scoped>
  .welcome {
    overflow: hidden;
  }
</style>
