<template>
  <div class="project">
    <div class="fixed-top fff"><MainNavBar></MainNavBar></div>
    <div class="w">
      <div class="AyMusic">
        <div class="box">
          <!-- 顶部 -->
          <div class="hd_box">
            <p class="hd_txt">听歌</p>
            <div class="hd_search">
              <button
                class="hd_search_btn"
                @click="searchBtnClick"
              >🔍
              </button>
              <input
                class="hd_search_inp"
                type="text"
                v-model="query"
                @keyup.enter="queryKeyup"
                placeholder="请输入想要搜索的歌曲"
              />
            </div>
          </div>
          <div class="bd_box">
            <!-- 歌单 -->
            <div class="music_list">
              <ul>
                <li
                  class="music_list_li"
                  v-for="item in musicList"
                  :key="item"
                >
                  <span @click="listBtnClick(item.id)">
                    <span class="music_list_li_play">☆</span>
                    <span class="music_list_li_name">{{ item.name }}</span>
                  </span>
                  <span
                    class="music_list_li_mv"
                    v-if="item.mvid != 0"
                    @click="playMv(item.mvid)"
                    >⭐</span
                  >
                </li>
              </ul>
            </div>
            <!-- 唱片 -->
            <div class="music_info">
              <div>
                <img src="~@/assets/images/music/music_steam.png" class="music_steam" :class="{ steamR: ccc,steamR0: ccc0 }">
              </div>
              <div class="record_w_box" :class="{ picR: ccc }">
                <img src="~@/assets/images/music/05.jpg" class="record_n_img" />
                <img :src="picUrl" class="record_n_box picR" v-show="isshow" />
              </div>
            </div>
            <!-- 评论 -->
            <div class="music_comments">
              <div class="hot" v-show="hotShow">热门评论</div>
              <ul>
                <li class="user" v-for="item in userHot" :key="item">
                  <div class="user_faces_name_box">
                    <div class="faces">
                    <img :src="item.user.avatarUrl" class="user_faces" />
                  </div>
                  <div class="username">{{ item.user.nickname }}</div>
                  </div>
                  <div class="usertxt">
                    {{ item.content }}
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- 播放条 -->
          <div class="foot_box">
            <audio
              @play="picplay"
              @pause="picpause"
              :src="musicUrl"
              controls
              loop=false
              autoplay="autoplay"
              class="music_play"
              id="audio"
            ></audio>
          </div>
          <!-- mv -->
          <div class="video_box" v-show="videoShow">
            <video
              ref="video"
              :src="mvUrl"
              controls="controls"
              autoplay="autoplay"
            ></video>
            <div class="mask" @click="XX"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MainNavBar from '@/components/content/mainnavbar/MainNavBar.vue'
import { getQuery, getMusicUrl, getPicUrl, getIds, getMvid } from '@/network/music.js'
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
      ccc0: false,
      isshow: false,
      hotShow: false,
      videoShow: false,
      mvUrl: '',
      audio: null
    }
  },
  methods: {
    queryKeyup () { // 按下回车获取30首歌曲数据
      if (this.query !== '') {
        getQuery(this.query).then((response) => {
          this.musicList = response.result.songs
        }).catch((err) => {
          console.log('getQuery()报错' + err)
        })
      }
    },
    searchBtnClick () {
      // 点击搜索调用上面的回车方法
      this.queryKeyup()
    },
    listBtnClick (musicId) {
      // 播放url
      getMusicUrl(musicId).then((response) => {
        // console.log(response)
        this.musicUrl = response.data[0].url
      }).catch((err) => {
        console.log('getMusicUrl()报错' + err)
      })
      // 歌曲图片
      getPicUrl(musicId).then((response) => {
        this.isshow = !this.isshow
        this.picUrl = response.songs[0].al.picUrl
      }).catch((err) => {
        console.log('getPicUrl()报错' + err)
      })
      // 热评
      getIds(musicId).then((response) => {
        console.log(response)
        this.userHot = response.hotComments
        if (this.userHot !== '') {
          this.hotShow = true
        }
      }).catch((err) => {
        console.log('getIds()报错' + err)
      })
    },
    picplay () {
      // 图片转
      this.ccc = true
      this.ccc0 = false
    },
    picpause () {
      this.ccc = false
      this.ccc0 = true
    },
    playMv (mvid) { // 点击播放mv
      this.audio = document.getElementById('audio')

      if (this.audio !== null) {
        this.audio.pause()
      }
      getMvid(mvid).then((response) => {
        this.videoShow = true // 显示mv盒子
        this.mvUrl = response.data.url // mv地址
      }).catch((err) => {
        console.log('getMvid(mvid)报错' + err)
      })
    },
    XX () { // 关闭mv盒子
      this.videoShow = false
      this.mvUrl = ''
    }
  }
}
</script>
<style src="@/assets/css/music.css" scoped></style>
<style scoped>
.w {
  padding-top: 20px;
}
</style>
