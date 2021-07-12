<template>
  <div class="ay-nav-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
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
</style>
