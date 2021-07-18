<template>
  <div class="home">
    <div class="fixed-top fff"><MainNavBar></MainNavBar></div>
    <CalendarBg></CalendarBg>
    <Calendar></Calendar>
  </div>
</template>

<script>
// @ is an alias to /src
// 导入顶部导航栏模块
import MainNavBar from '@/components/content/mainnavbar/MainNavBar.vue'
import CalendarBg from '../../components/content/calendarbg/CalendarBg.vue'

export default {
  name: 'Home',
  components: {
    MainNavBar,
    CalendarBg
  }
}
</script>
<style scoped>

</style>
