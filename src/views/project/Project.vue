<template>
  <div class="project">
    <div class="fixed-top fff"><MainNavBar></MainNavBar></div>
    <div class="test w">
      我的一些项目
      <a href="http://www.baidu.com" target="_blank" title="鼠标移到这个图片上就会显示这句话啦！">项目一</a><br>
      <a href="http://www.baidu.com" target="_blank">项目二</a><br>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MainNavBar from '@/components/content/mainnavbar/MainNavBar.vue'
export default {
  name: 'Project',
  components: {
    MainNavBar
  }
}
</script>
<style scoped>

</style>
