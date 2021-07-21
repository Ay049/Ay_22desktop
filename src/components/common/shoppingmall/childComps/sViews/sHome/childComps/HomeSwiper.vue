<template>
  <swiper class='ttt'>
    <swiper-item v-for="(item, id) in banners" :key="id" >
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from '../../../sComponents/sCommon/swiper/index'
export default {
  name: 'HomeSwiper',
  props: {
    banners: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  data () {
    return {
      isLoad: false
    }
  },
  methods: {
    imageLoad () {
      // 不让HomeSwiper多次发出事件
      if (!this.isLoad) {
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
    }
  }
}
</script>

<style scoped>
  .ttt img {
    width: 100%;
  }
</style>
