<template>
  <div class="mySwiper2">
    <span class="left_btn" @click="up" v-show="currentIndex!=0">
      <div class="arrow-left"></div>
    </span>
    <span class="right_btn" @click="down" v-show="currentIndex!=imgArr.length-1">
      <div class="arrow-right"></div>
    </span>
    <div class="img-box">
      <img :src="imgArr[currentIndex]">
    </div>
    <!-- <div>{{imgArrText[currentIndex]}}</div> -->
  </div>
</template>

<script>
// 图片需要以这种形式导入
import pic1 from '@/assets/images/welcome/桌面.png'
import pic2 from '@/assets/images/welcome/听歌.png'
import pic3 from '@/assets/images/welcome/笔记.png'
import pic4 from '@/assets/images/welcome/安卓1.png'
import pic5 from '@/assets/images/welcome/安卓2.png'
import pic6 from '@/assets/images/welcome/安卓3.png'
import pic7 from '@/assets/images/welcome/贪吃蛇.png'
import pic8 from '@/assets/images/welcome/今日天气.png'

export default {
  name: 'Page3swiper',
  data () {
    return {
      imgArr: [
        pic1,
        pic2,
        pic3,
        pic4,
        pic5,
        pic6,
        pic7,
        pic8
      ],
      currentIndex: 0
    }
  },
  methods: {
    // 向上翻页
    up () {
      if (this.currentIndex > 0) {
        window.clearInterval(this.playTimer)
        // console.log('关闭了轮播计时')
        this.currentIndex--
        this.isAct3FunSwiper()
        // console.log('重新开启了轮播计时')
      }
    },
    // 向下翻页
    down () {
      if (this.currentIndex < this.imgArr.length) {
        window.clearInterval(this.playTimer)
        // console.log('关闭了轮播计时')
        this.currentIndex++
        this.isAct3FunSwiper()
        // console.log('重新开启了轮播计时')
      }
    },
    isAct3FunSwiper () {
      // 开启轮播
      this.playTimer = window.setInterval(() => {
        console.time('time')
        if (this.currentIndex < this.imgArr.length - 1) {
          this.currentIndex++
          console.log(this.currentIndex)
        } else if (this.currentIndex === this.imgArr.length - 1) {
          this.currentIndex = 0
          console.log(this.currentIndex)
        }
        console.timeEnd('time')
      }, 3000)
    },
    isAct3FunSwiperEnd () {
      // 关闭第三页的自动轮播
      window.clearInterval(this.playTimer)
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
  .mySwiper2 {
    width: 800px;
    height: 500px;
    border: 1px skyblue solid;
    overflow: hidden;
    position: relative;
  }
  .left_btn,
  .right_btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #60ff75;
  }
  .left_btn {
    left: 20px;
  }
  .right_btn {
    right: 20px;
  }

  .img-box>img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
