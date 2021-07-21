<template>
  <div class="toast">
    <transition name="toast">
      <div class="toast_inner" v-show="show">
        <div class="toast_message">
          {{message}}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    // 提示内容
    message: {
      type: String,
      default: ''
    },
    // 提示时长
    delay: {
      type: Number,
      default: 2000
    },
    setup (props) {
      const visible = ref(true)
      // 关闭
      const close = () => {
        visible.value = false
      }
      // 打开
      const open = () => {
        visible.value = true
        setTimeout(() => {
          close()
        }, props.delay)
      }

      return {
        visible,
        open,
        close
      }
    },
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 99;
    padding: 8px 10px;
    transform: translate(-50%, -50%);
    color: #fff;
    background-color: rgba(0,0,0,0.75);
    /* 可穿透 */
    pointer-events: none;
  }
</style>
