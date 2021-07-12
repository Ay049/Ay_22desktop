import mitt from 'mitt'
// 引入mitt, 因为VUE3弃用了一些,所以我们需要用mitt来完成总线的需求
const bus = {}
const emitter = mitt()
bus.$on = emitter.on
bus.$off = emitter.off
bus.$emit = emitter.emit

export default bus
