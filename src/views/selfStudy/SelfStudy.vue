<template>
  <div class="self_study">
    <div class="fixed-top fff"><MainNavBar></MainNavBar></div>
      <div class="w">
          <div class="outline">
            <AyOutlineMd></AyOutlineMd>
          </div>
        <div class="md-Window">
          <AySummaryMd></AySummaryMd>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MainNavBar from '@/components/content/mainnavbar/MainNavBar.vue'
import AySummaryMd from './childComps/AySummaryMd.vue'
import AyOutlineMd from './childComps/AyOutlineMd.vue'

export default {
  name: 'SelfStudy',
  components: {
    MainNavBar,
    AySummaryMd,
    AyOutlineMd
  }
}
</script>
<style scoped>
.w  {
  position: relative;
}
.outline {
  position: fixed;
  top: 55px;
  left: 0;
  width: 200px;
  height: calc(100vh - 55px);
  overflow: auto;

}
.outline>ul {
  list-style: none;
}

.md-Window {
  margin-left: 200px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: rgb(191, 237, 255);
}
</style>
