<template>
  <div id="Desktop-ico">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MyDesktop'
}
</script>
<style scoped>
#Desktop-ico {
  font-size: 16px;
  color: #fff;
  padding-top: 20px;
  text-shadow: black 1px 1px 1px;
}
</style>
