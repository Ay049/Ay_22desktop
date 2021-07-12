<template>
  <div class="welcome">
    <WelcomeSwiper class="swiper"></WelcomeSwiper>
  </div>
</template>

<script>
// @ is an alias to /src

import WelcomeSwiper from '@/views/welcome/welcomeSwiper/WelcomeSwiper.vue'
export default {
  name: 'Welcome',
  components: {
    WelcomeSwiper
  }
}
</script>
<style scoped>
  .welcome {
    overflow: hidden;
  }
</style>
