<template>
  <div class="page1">
    <div class="img_box">
      <img src="~@/assets/images/ppt/code.png" alt="">
    </div>
    <p>
      天下事有难易乎？为之，则难者亦易矣；不为，则易者亦难矣。
    </p>
    <div class="line_box"></div>
    <div class="myname_box">
      <span v-show="isNameShow" class="myname">你好, 我是Ay</span>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
export default {
  name: 'Page1',
  data () {
    return {
      isNameShow: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.isNameShow = !this.isNameShow
    }, 2000)
  }
}
</script>

<style scoped>
  .page1 {
    position: relative;
    font-size: 30px;
  }
  .img_box {
    margin: 0 auto;
    width: 150px;
    height: 150px;
  }
  .img_box>img {
    width: 100%;
    height: 100%;
  }
  .myname_box {
    position: relative;
    overflow: hidden;
    height: 3em;
  }
  .myname {
    position: absolute;
    padding-top: 30px;
    top: 50px;
    transform: translateX(-50%);
    animation: myname 1000ms linear forwards;
  }
  @keyframes myname {
    0% {
      top: 50px;
    }
    50% {
      top: 25px;
    }
    100% {
      top: 0;
    }
  }
  .line_box {
    margin: 0 auto;
    width: 10px;
    border-bottom: 2px solid rgb(121, 121, 121);
    animation: line_box 1500ms ease-in-out forwards;
  }
  @keyframes line_box {
    0% {
      width: 10px;
      border-bottom: 2px solid rgb(121, 121, 121);
    }
    100% {
      width: 30em;
      border-bottom: 2px solid rgb(73, 253, 49);
    }
  }
</style>
