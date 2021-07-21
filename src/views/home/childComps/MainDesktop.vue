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
        <MyDesktopIconitem @dblclick="openAndroidSimulator">
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

    <!-- 音乐 -->
    <div class="music-exe" v-if="musicShow">
      <div @click="CloseMusicExe" class="music-xx">X</div>
      <Music></Music>
    </div>

    <!-- 笔记 -->
    <div class="txt-exe" v-if="TxtShow">
      <div class="menu-bar">
        <span>我的笔记</span>
        <span @click="CloseTxtExe" class="txt-xx">X</span>
      </div>
      <div class="txt-bd">
        <SelfStudyTxt></SelfStudyTxt>
      </div>
    </div>

    <!-- 简历 -->
    <div class="resume-exe" v-if="ResumeShow">
      <div class="menu-bar">
        <span>我的简历</span>
        <span @click="CloseResumeExe" class="resume-xx">X</span>
      </div>
      <div class="resume-bd">
        <Resume></Resume>
      </div>
    </div>

    <!-- 安卓模拟器 -->
    <div class="AndroidSimulator-exe" v-if="AndroidSimulatorShow">
      <div class="menu-bar">
        <span>安卓模拟器</span>
        <span @click="CloseAndroidSimulatorExe" class="AndroidSimulator-xx">X</span>
      </div>
      <div class="AndroidSimulator-bd"><AndroidSimulator></AndroidSimulator></div>
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
import AndroidSimulator from './EXE/AndroidSimulator/AndroidSimulator.vue'

export default {
  name: 'MainDesktop',
  components: {
    MyDesktopIcon,
    MyDesktopIconitem,
    Music,
    SelfStudyTxt,
    Resume,
    AndroidSimulator
  },
  data () {
    return {
      musicShow: false,
      TxtShow: false,
      ResumeShow: false,
      AndroidSimulatorShow: false
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
    openAndroidSimulator () {
      this.AndroidSimulatorShow = true
      window.location.href = '#/home/shome'
    },
    CloseMusicExe () {
      this.musicShow = false
    },
    CloseTxtExe () {
      this.TxtShow = false
      window.location.href = ''
    },
    CloseResumeExe () {
      this.ResumeShow = false
    },
    CloseAndroidSimulatorExe () {
      this.AndroidSimulatorShow = false
      window.location.href = ''
    }
  }
}
</script>
<style src="@/assets/css/home/MainDesktop/MainDesktop.css" scoped>
</style>
