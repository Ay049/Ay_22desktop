<template>
  <div>
    <div class="fixed-top fff"><MainNavBar></MainNavBar></div>
    <div class="resume_box"><ResumeContent></ResumeContent></div>
  </div>
</template>

<script>
// @ is an alias to /src
import MainNavBar from './MainNavBar.vue'
import ResumeContent from '@/components/content/resume/ResumeContent.vue'
export default {
  name: 'Resume',
  components: {
    MainNavBar,
    ResumeContent
  }
}
</script>

<style scoped>
.resume_box {
  padding-top: 55px;
  width: 800px;
  margin: 0 auto;
  overflow-y: auto;
}

</style>
