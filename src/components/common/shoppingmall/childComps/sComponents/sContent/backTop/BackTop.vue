<template>
  <div class="back_top">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BackTop'
}
</script>

<style>
.back_top {
  position: fixed;
  right: 24px;
  bottom: 66px;
}
.back_top img {
  width: 43px;
  height: 43px;
  z-index: 999;
}
</style>
