<template>
  <div class="home">
    <div class="calendar_bg"><CalendarBg></CalendarBg></div>
    <div class="desktop"><MainDesktop></MainDesktop></div>
  </div>
</template>

<script>
// @ is an alias to /src
// 导入顶部导航栏模块
import CalendarBg from '@/components/content/calendarbg/CalendarBg.vue'
import MainDesktop from './childComps/MainDesktop.vue'

export default {
  name: 'Home',
  components: {
    CalendarBg,
    MainDesktop
  }
}
</script>
<style>
.calendar_bg {
  position: relative;
  z-index: 1;
}
.desktop {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0px;
  bottom: 0px;
  z-index: 2;
}
</style>
