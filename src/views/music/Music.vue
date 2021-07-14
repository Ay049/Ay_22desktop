<template>
  <div class="project">
    <div class="fixed-top fff"><MainNavBar></MainNavBar></div>
    <div class="w">
      <div class="AyMusic">
        <div class="box">
          <div class="hd_box">
            <p class="hd_txt">听歌</p>
            <div class="hd_search">
              <input
                class="hd_search_inp"
                type="text"
                v-model="query"
                @keyup.enter="queryKeyup"
              />
              <button class="hd_search_btn" @click="btnClick">搜索</button>
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
                  @click="b(item.id)"
                >
                  <span class="music_list_li_play">☆</span>
                  <span class="music_list_li_name">{{ item.name }}</span>
                  <span
                    class="music_list_li_mv"
                    v-if="item.mvid != 0"
                    @click="playMv(item.mvid)"
                    >⊙</span
                  >
                </li>
              </ul>
            </div>
            <!-- 唱片 -->
            <div class="music_info">
              <div class="record_w_box" :class="{ picR: ccc }">
                <img src="~@/assets/images/music/05.jpg" class="record_n_img" />
                <img :src="picUrl" class="record_n_box picR" v-show="isshow" />
              </div>
            </div>
            <!-- 评论 -->
            <div class="music_comments">
              <div class="hot">热门评论</div>
              <ul>
                <li class="user" v-for="item in userHot" :key="item">
                  <div class="faces">
                    <img :src="item.user.avatarUrl" alt="" class="user_faces" />
                  </div>
                  <div class="username">{{ item.user.nickname }}</div>
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
              @play="play"
              @pause="pause"
              :src="musicUrl"
              controls
              loop
              autoplay="autoplay"
              class="music_play"
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
      isshow: false,
      videoShow: false,
      mvUrl: ''
    }
  },
  created () {
    // getQuery().then((response) => {
    //   console.log(response)
    //   this.musicList = response.data.result.songs
    // }).catch((err) => {
    //   console.log('报错了,老哥' + err)
    // })
  },
  methods: {
    queryKeyup () {
      getQuery().then((response) => {
        console.log(response)
        this.musicList = response.result.songs
      }).catch((err) => {
        console.log('getQuery()报错了,老哥' + err)
      })
    },
    btnClick () {
      this.queryKeyup()
    },
    b (musicId) {
      getMusicUrl(musicId).then((response) => {
        console.log(response)
        this.musicUrl = response.data[0].url
      }).catch((err) => {
        console.log('getMusicUrl()报错了,老哥' + err)
      })
      getPicUrl(musicId).then((response) => {
        this.isshow = !this.isshow
        this.picUrl = response.songs[0].al.picUrl
      }).catch((err) => {
        console.log('getPicUrl()报错了,老哥' + err)
      })
      getIds(musicId).then((response) => {
        this.userHot = response.hotComments
      }).catch((err) => {
        console.log('getIds()报错了,老哥' + err)
      })
    },
    play () {
      this.ccc = true
    },
    pause () {
      this.ccc = false
    },
    playMv (mvid) {
      getMvid(mvid).then((response) => {
        console.log(response)
        console.log(response.data.url)
        this.videoShow = true
        this.mvUrl = response.data.url
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
