<template>
  <div class="w fff">
    <div class="left_box">
      <h2 class="resume">RESUME</h2>
      <div class="my_photo">
        <!-- <img src="~@/assets/images/resume/1寸照小.jpg"> -->
      </div>
      <h2 class="resume">虞 辉</h2>
      <div class="my_job">求职意向 : 初级前端开发</div>
      <h2 class="my_message">基本信息</h2>
      <h6>出生年月: 1996. 05</h6>
      <h6>联系电话: 155-5815-1096</h6>
      <h6>现居地址: 浙江·杭州</h6>
      <h6>邮箱: 15558151096@163.com</h6>
      <h2 class="my_message">我的微信</h2>
      <div class="my_weixin">
        <img src="~@/assets/images/resume/my_weixin.jpg">
      </div>
    </div>
    <!-- 右边的模块 -->
    <div class="right_box">
        <!-- 教育背景 -->
        <div class="nav">
          <h3>教育背景</h3>
        </div>
        <ul class="ul1">
          <li class="li1">2017.09~2018.06 陆军航空兵学院</li>
          <li class="li1">2014.09~2017.06 杭州职业技术学院</li>
        </ul>
        <!-- 个人开发的项目 -->
        <div class="nav">
          <h3>个人开发的项目</h3>
        </div>
        <ul class="ul1">
          <li class="li1">
            <a href="https://ay049.github.io/ShowMyProject">
              ⭐个人项目展示地址: https://ay049.github.io/ShowMyProject
            </a><br>
            <a href="https://github.com/Ay049/Ay_SelfStudy">
              ⭐个人项目源码地址: https://github.com/Ay049/Ay_SelfStudy
            </a>
          </li>
          <li class="li3">上述链接,建议科学上网后访问</li>
          <li class="li2">
            持续更新的个人电脑模拟项目,包含音乐🎵,手机商城模拟📱,今日天气🌤,贪吃蛇,笔记等模块
          </li>
        </ul>
        <!-- 技能特长 -->
        <div class="nav">
          <h3>个人评价</h3>
        </div>
        <ul class="ul2">
          <li>
            熟练掌握HTML、CSS、JavaScript
          </li>
          <li>
            能够使用Vue框架进行模块化开发
          </li>
          <li>
            能够使用Node.js、Webpack、GitHub、Bootstrap、Swiper、Windows PowerShell
          </li>
          <li>
            了解JQuery、MongoDB
          </li>
          <li>
            对 Postman、PhotoShop、Typora等软件能够进行满足日常开发的使用
          </li>
          <li>
            对程序技术充满热情,较好的自学能力,能够解决自己开发过程中遇到的bug,喜欢通过学习来不断充实自己,较好的抗压和自律能力.
          </li>
        </ul>
        <!-- 工作经历 -->
        <div class="nav">
          <h3>工作经历</h3>
        </div>
        <ul class="ul1">
          <li class="li1">自学前端 2021.02~至今</li>
          <li class="li2">工作描述: 学习</li>
          <li class="li1">进厂打工 2020.04~2021.02</li>
          <li class="li2">职位: 设备工程师 &nbsp;&nbsp;&nbsp;&nbsp; 工作描述: 负责公司设备日常维护</li>
          <li class="li1">创业&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2019.09~2020.04</li>
          <li class="li2">工作描述: 烧烤摊</li>
          <li class="li1">服兵役&nbsp;&nbsp;&nbsp;&nbsp;2018.06~2019.09</li>
          <li class="li2">工作描述: 修飞机</li>
        </ul>
    </div>
  </div>
</template>

<style src="@/assets/css/resume/resume.css" scoped>
/* 引入外部css需要这种方式,不然会污染全局 */
</style>
<style scoped>
 .w {
   overflow: auto;
   border: 1px solid #ccc;
 }
</style>
