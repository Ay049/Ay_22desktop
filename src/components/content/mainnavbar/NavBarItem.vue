<template>
  <div @click="itemClick">
    <div class="ay-nav-item" :class="activeNavClass">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBarItem',
  props: {
    path: String,
    activeCalss: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isNavClass: -1
    }
  },
  computed: {
    isActive () {
      // 让导航栏路由不被重复点击
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeNavClass () {
      // 动态添加类名给导航栏被点击对象
      return this.isActive ? 'activeNavClass' : ''
    }
  },
  methods: {
    itemClick () {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
  /* 导航栏子项目样式 */
  .ay-nav-item {
    padding: 0 20px;
  }
  .activeNavClass {
    color: skyblue;
  }
</style>
