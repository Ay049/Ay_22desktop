import BackTop from '../sComponents/sContent/backTop/BackTop.vue'
export const backTopMiXin = {
  components: {
    BackTop
  },
  data () {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backClick () {
      this.$refs.scroll.scrollTo(0, 0)
    },
    listShowBackTop (position) {
      this.isShowBackTop = (-position.y) > 1000
    }
  }
}
