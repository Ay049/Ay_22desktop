<template>
  <div class="project">
  </div>
</template>

<script>
export default {
  name: 'Music',
  components: {
    MainNavBar
  },
  data () {
    return {
      query: '',
      musicList: [],
      musicUrl: '',
      picUrl: '',
      userHot: [],
      ccc: false,
      isshow: false,
      videoShow: false,
      mvUrl: ''
    }
  },
  methods: {
    a () {
      axios.get('https://autumnfish.cn/search?keywords=' + this.query).then((response) => {
        this.musicList = response.data.result.songs
      }).catch((err) => {
        console.log('报错了,老哥' + err)
      })
    },
    btnClick () {
      this.a()
    },
    b (musicId) {
      axios.get('https://autumnfish.cn/song/url?id=' + musicId).then((response) => {
        this.musicUrl = response.data.data[0].url
      }).catch((err) => {
        console.log('报错了,老哥' + err)
      })
      axios.get('https://autumnfish.cn/song/detail?ids=' + musicId).then((response) => {
        this.isshow = !this.isshow
        this.picUrl = response.data.songs[0].al.picUrl
      }).catch((err) => {
        console.log('报错了,老哥' + err)
      })
      axios.get('https://autumnfish.cn/comment/hot?type=0&id=' + musicId).then((response) => {
        this.userHot = response.data.hotComments
      }).catch((err) => {
        console.log('报错了,老哥' + err)
      })
    },
    play () {
      this.ccc = true
    },
    pause () {
      this.ccc = false
    },
    playMv (mvid) {
      axios.get('https://autumnfish.cn/mv/url?id=' + mvid).then((response) => {
        console.log(response)
        console.log(response.data.data.url)
        this.videoShow = true
        this.mvUrl = response.data.data.url
      }).catch((err) => {
        console.log('报错了,老哥' + err)
      })
    },
    XX () {
      this.videoShow = false
      this.mvUrl = ''
    }
  }
}
</script>
<style src="@/assets/css/music.css" scoped></style>
