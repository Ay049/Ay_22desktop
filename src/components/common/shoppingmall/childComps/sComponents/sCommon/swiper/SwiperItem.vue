<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Slide'
}
</script>

<style scoped>
  .slide {
    height: 20%;
    flex-shrink: 0;
    width: 100%;
  }

  .slide img {
    width: 100%;
  }
</style>
