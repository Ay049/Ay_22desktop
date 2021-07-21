<template>
  <div>
    <CartListItem
      v-for="(item, index) in cartList"
      :key="index"
      :item-info="item"
    ></CartListItem>
  </div>
</template>

<script>
import CartListItem from './cartListItem.vue'

export default {
  components: {
    CartListItem
  },
  props: {
    cartList: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style>
</style>
