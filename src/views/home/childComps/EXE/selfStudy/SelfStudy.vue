<template>
  <div class="self_study">
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
import AySummaryMd from './childComps/AySummaryMd.vue'
import AyOutlineMd from './childComps/AyOutlineMd.vue'

export default {
  name: 'SelfStudy',
  components: {
    AySummaryMd,
    AyOutlineMd
  }
}
</script>
<style scoped>
.w {
  position: relative;
}
.outline {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  margin-top: 36px;
  height: 600px;
  overflow: auto;
  background-color: #94e1ff;
}
.outline > ul {
  list-style: none;
}

.md-Window {
  margin-left: 200px;
  padding-left: 30px;
  padding-right: 30px;
}
</style>
