<template>
  <div class="home">
    <div class="fixed-top fff"><MainNavBar></MainNavBar></div>
    <div class="w">
      我是主页
      <Calendar></Calendar>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// 导入顶部导航栏模块
import MainNavBar from '@/components/content/mainnavbar/MainNavBar.vue'
import Calendar from './childComps/Calendar.vue'
// 导入主视内容模块

export default {
  name: 'Home',
  components: {
    MainNavBar,
    Calendar
  }
}
</script>
<style scoped>

</style>
