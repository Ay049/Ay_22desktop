<template>
  <div id="app" class="wrapper">
    <router-view  v-slot="{Component}">
      <keep-alive>
        <component :is='Component'></component>
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style scoped>
/* 引入通用的css样式 */
@import "~@/assets/css/base.css";
</style>
