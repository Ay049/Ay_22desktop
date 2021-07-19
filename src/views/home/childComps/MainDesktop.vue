<template>
  <div>
    <div class="icon">
      <MyDesktopIcon>
        <MyDesktopIconitem @dblclick="openMusic">
          <template #item-icon>
            <img src="~@/assets/images/MyIco/音乐-01.png" alt="" />
          </template>
          <template #item-text>
            <div>
              Music
            </div>
          </template>
        </MyDesktopIconitem>
        <MyDesktopIconitem @dblclick="openTxt">
          <template #item-icon>
            <img src="~@/assets/images/MyIco/记事本-03.png" alt="" />
          </template>
          <template #item-text>
            <div>
              笔记
            </div>
          </template>
        </MyDesktopIconitem>
        <MyDesktopIconitem @dblclick="openResume">
          <template #item-icon>
            <img src="~@/assets/images/MyIco/简历.png" alt="" />
          </template>
          <template #item-text>
            <div>
              简历
            </div>
          </template>
        </MyDesktopIconitem>
        <MyDesktopIconitem @dblclick="openPhone">
          <template #item-icon>
            <img src="~@/assets/images/MyIco/手机.png" alt="" />
          </template>
          <template #item-text>
            <div class="ico-text-s">
              安卓模拟器
            </div>
          </template>
        </MyDesktopIconitem>
      </MyDesktopIcon>
    </div>

    <div class="music-exe" v-if="musicShow">
      <div @click="CloseMusicExe" class="music-xx">X</div>
      <Music></Music>
    </div>

    <div class="txt-exe" v-if="TxtShow">
      <div class="menu-bar">
        <span>我的笔记</span>
        <span @click="CloseTxtExe" class="txt-xx">X</span>
      </div>
      <div class="txt-bd">
        <SelfStudyTxt></SelfStudyTxt>
      </div>
    </div>

    <div class="resume-exe" v-if="ResumeShow">
      <div class="menu-bar">
        <span>我的简历</span>
        <span @click="CloseResumeExe" class="resume-xx">X</span>
      </div>
      <Resume></Resume>
    </div>
  </div>
</template>

<script>
// 导入导航栏模块
import MyDesktopIcon from './DesktopIcon/MyDesktopIcon.vue'
import MyDesktopIconitem from './DesktopIcon/MyDesktopIconitem.vue'
import Music from './EXE/music/Music.vue'
import SelfStudyTxt from './EXE/selfStudy/SelfStudy.vue'
import Resume from './EXE/resume/Resume.vue'

export default {
  name: 'MainDesktop',
  components: {
    MyDesktopIcon,
    MyDesktopIconitem,
    Music,
    SelfStudyTxt,
    Resume
  },
  data () {
    return {
      musicShow: false,
      TxtShow: false,
      ResumeShow: false
    }
  },
  methods: {
    openMusic () {
      this.musicShow = true
    },
    openTxt () {
      this.TxtShow = true
    },
    openResume () {
      this.ResumeShow = true
    },
    CloseMusicExe () {
      this.musicShow = false
    },
    CloseTxtExe () {
      this.TxtShow = false
    },
    CloseResumeExe () {
      this.ResumeShow = false
    }
  }
}
</script>

<style scoped>
  .ico-text-s {
    font-size: 14px;
    line-height: 1.2;
  }
  .music-exe,
  .resume-exe,
  .txt-exe {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
  }
  .menu-bar {
    width: 100%;
    font-size: 22px;
    padding-left: 20px;
    overflow: hidden;
    border-bottom: 1px #ccc solid;
    background-color: #f5f5f5;
  }
  .music-xx {
    color: #fff;
    font-size: 24px;
    position: absolute;
    top: 10px;
    right: 15px;
  }
  .resume-xx,
  .txt-xx {
    padding-right: 10px;
    float: right;
  }
  .Txt-exe {
    width: 800px;
    overflow: hidden;
  }
  .txt-bd {
    width: 800px;
    height: 600px;
    overflow: auto;
    position: relative;
    background-color: rgb(191, 237, 255);
  }
</style>
