<template>
  <div class="resume_box">
    <div class="fixed-top fff"><MainNavBar></MainNavBar></div>
    <ResumeContent></ResumeContent>
  </div>
</template>

<script>
// @ is an alias to /src

import ResumeContent from '@/components/content/resume/ResumeContent.vue'
export default {
  name: 'Resume',
  components: {
    ResumeContent
  }
}
</script>

<style scoped>

</style>
