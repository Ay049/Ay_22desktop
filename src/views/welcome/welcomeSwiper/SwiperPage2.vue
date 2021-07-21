<template>
  <div class="page2">
      <div :class="{page2_box: isAnimation}">
        <span class="page2_text">
          简单的浏览Ay的项目 ?
        </span>
      </div>
      <a href="#/home" class="skip_btn" v-show="isSkipShow">No, Skip</a>
  </div>
</template>

<script>

export default {
  name: 'Page2',
  data () {
    return {
      isSkipShow: false, // 跳过按钮的初始状态
      isAnimation: false // 动画状态
    }
  },
  methods: {
    isAct2Fun () {
      this.isAnimation = true // 父组件调用isAct2Fun时开启page2的动画
      setTimeout(() => {
        this.isSkipShow = true // 让父组件来控制skip按钮的状态
      }, 1500)
    }
  }
}
</script>

<style scoped>
  .page2_box {
    width: 0em;
    overflow: hidden;
    animation: page2_box_animet 2000ms linear forwards;
  }
  @keyframes page2_box_animet {
    0% {
      width: 1em;
    }
    100% {
      width: 13em;
    }
  }
  .page2_text {
    white-space:nowrap;
  }
  .page2 {
    position: relative;
    font-size: 50px;
  }
  /* 跳过按钮 */
  .skip_btn {
    position: absolute;
    top: 120%;
    right: 10%;
    padding: 10px;
    background-color: skyblue;
    border: solid 1px skyblue;
    border-radius: 3px;
    text-decoration: none;
    font-size: 20px;
    color: #0099ff;
  }
</style>
