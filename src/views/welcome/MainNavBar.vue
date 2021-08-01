<template>
  <div>
    <NavBar class="ay-nav-bar">
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
import NavBar from '@/components/content/mainnavbar/NavBar.vue'
import NavBarItem from '@/components/content/mainnavbar/NavBarItem.vue'

export default {
  name: 'NavTabBar',
  components: {
    NavBar,
    NavBarItem
  }
}
</script>

<style scoped>
  /* 导航栏整体样式 */
  .ay-nav-bar {
    display: flex;
    overflow: hidden;
    height: 50px;
    position: relative;
    line-height: 50px;
    background-color: #fff;
    border-bottom: 2px solid rgb(3, 255, 3);
    box-shadow: 0 2px 1px rgb(21, 255, 0);
    animation: breathe 2700ms ease-in-out alternate infinite;
  }
  @keyframes breathe {
    0% {
      opacity:1;
      box-shadow:0 1px 10px rgb(234, 0, 255);
    }
    100% {
      opacity:.2;
      box-shadow:0 1px 2px rgb(21, 255, 0);
    }
  }
  /* music组件 */
  .right {
    position: absolute;
    right: 20px;
  }
</style>
