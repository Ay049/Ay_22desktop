<template>
  <div>
    <div>
      <MyDesktopIcon class="icon">
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

        <MyDesktopIconitem @dblclick="openRetroSnaker">
          <template #item-icon>
            <img src="~@/assets/images/MyIco/贪吃蛇.png" alt="" />
          </template>
          <template #item-text>
            <div>
              贪吃蛇
            </div>
          </template>
        </MyDesktopIconitem>

        <MyDesktopIconitem @dblclick="openWeather">
          <template #item-icon>
            <img src="~@/assets/images/MyIco/天气.png" alt="" />
          </template>
          <template #item-text>
            <div>
              天气
            </div>
          </template>
        </MyDesktopIconitem>

        <MyDesktopIconitem @dblclick="openxxx">
          <template #item-icon>
            <img src="~@/assets/images/MyIco/计算器.png" alt="" />
          </template>
          <template #item-text>
            <div>
              计算器
            </div>
          </template>
        </MyDesktopIconitem>

        <MyDesktopIconitem @dblclick="openxxx">
          <template #item-icon>
            <img src="~@/assets/images/MyIco/纸牌游戏.png" alt="" />
          </template>
          <template #item-text>
            <div>
              纸牌
            </div>
          </template>
        </MyDesktopIconitem>
      </MyDesktopIcon>
    </div>
    <!-- 开发中 -->
    <div class="doing-exe" v-if="doingShow">
      <span>正在开发中</span>
      <div @click="CloseDoingExe" class="doing-xx">X</div>
      <div class="doing-bd">
        <img src="~@/assets/images/MyIco/doing.jpg" alt="别催了,在敲了哇 T - T">
      </div>
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

    <!-- 贪吃蛇 -->
    <div class="RetroSnaker-exe" v-if="RetroSnakerShow">
      <div class="menu-bar">
        <span>贪吃蛇</span>
        <span @click="CloseRetroSnakerExe" class="RetroSnaker-xx">X</span>
      </div>
      <div class="RetroSnaker-bd"><RetroSnaker></RetroSnaker></div>
    </div>

    <!-- 天气 -->
    <div class="Weather-exe" v-if="WeatherShow">
      <div class="menu-bar">
        <span>今日天气</span>
        <span @click="CloseWeatherExe" class="Weather-xx">X</span>
      </div>
      <div class="Weather-bd"><Weather></Weather></div>
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
import RetroSnaker from './EXE/RetroSnaker/RetroSnaker.vue'
import Weather from './EXE/weather/Weather.vue'
export default {
  name: 'MainDesktop',
  components: {
    MyDesktopIcon,
    MyDesktopIconitem,
    Music,
    SelfStudyTxt,
    Resume,
    AndroidSimulator,
    RetroSnaker,
    Weather
  },
  data () {
    return {
      doingShow: false,
      musicShow: false,
      TxtShow: false,
      ResumeShow: false,
      AndroidSimulatorShow: false,
      RetroSnakerShow: false,
      WeatherShow: false
    }
  },
  methods: {
    // 开发中
    openxxx () {
      this.doingShow = true
    },
    CloseDoingExe () {
      this.doingShow = false
    },
    // 音乐
    openMusic () {
      this.musicShow = true
    },
    CloseMusicExe () {
      this.musicShow = false
    },
    // 笔记
    openTxt () {
      this.TxtShow = true
    },
    CloseTxtExe () {
      this.TxtShow = false
      window.location.href = ''
    },
    // 简历
    openResume () {
      this.ResumeShow = true
    },
    CloseResumeExe () {
      this.ResumeShow = false
    },
    // 模拟器
    openAndroidSimulator () {
      this.AndroidSimulatorShow = true
      window.location.href = '#/home/shome'
    },
    CloseAndroidSimulatorExe () {
      this.AndroidSimulatorShow = false
      window.location.href = ''
    },
    // 贪吃蛇
    openRetroSnaker () {
      this.RetroSnakerShow = true
    },
    CloseRetroSnakerExe () {
      this.RetroSnakerShow = false
    },
    // 天气
    openWeather () {
      this.WeatherShow = true
    },
    CloseWeatherExe () {
      this.WeatherShow = false
    }
  }
}
</script>
<style src="@/assets/css/home/MainDesktop/MainDesktop.css" scoped>
</style>
