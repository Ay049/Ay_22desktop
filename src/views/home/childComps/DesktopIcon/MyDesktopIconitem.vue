<template>
  <div @click="itemClick" class="item">
    <div class="item-icon">
      <slot name="item-icon"></slot>
    </div>
    <div class="item-text">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyDeskIconitem'
}
</script>

<style>
  .item {
    width: 100px;
    height: 100px;
    position: relative;
    margin-bottom: 10px;
  }
  .item-text {
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
