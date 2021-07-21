<template>
  <div>
    <router-view  v-slot="{Component}">
      <keep-alive>
        <component :is='Component'></component>
      </keep-alive>
    </router-view>
    <SMainTabBar2></SMainTabBar2>
  </div>
</template>

<script>
import SMainTabBar2 from './childComps/sComponents/sContent/sMianTabbar/SMainNavBar2.vue'
export default {
  components: {
    SMainTabBar2
  }
}
</script>

<style>
@import "~@/assets/css/base/base.css";
</style>
