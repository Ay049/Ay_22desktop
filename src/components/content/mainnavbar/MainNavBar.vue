<template>
  <div>
    <NavBar>
      <NavBarItem path="/welcome">
        <template #item-text>
          <div>
            Welcome
          </div>
        </template>
      </NavBarItem>
      <NavBarItem path="/home">
        <template #item-text>
          <div>
            Home
          </div>
        </template>
      </NavBarItem>
      <NavBarItem path="/resume">
        <template #item-text>
          <div>
            Resume
          </div>
        </template>
      </NavBarItem>
      <NavBarItem  class="right">
        <template #item-text>
          <div>
            预留的music组件
          </div>
        </template>
      </NavBarItem>
    </NavBar>
  </div>
</template>

<script>
// 导入导航栏模块
import NavBar from './NavBar.vue'
import NavBarItem from './NavBarItem.vue'

export default {
  name: 'NavTabBar',
  components: {
    NavBar,
    NavBarItem
  }
}
</script>

<style scoped>
  /* music组件 */
  .right {
    position: absolute;
    right: 20px;
  }
</style>
