<template>
  <div class="canvas_body">
    <canvas id="cvs" ref="cvs" class="hidden" width="1980" height="1080"></canvas>
    <canvas id="screenImage" ref="screenImage" class="hidden" width="234" height="357"></canvas>
    <canvas id="rili" ref="rili" class="hidden" width="600" height="600"></canvas>
    <canvas id="display" ref="display"></canvas>
  </div>
</template>
<script>
import screenPic from '@/assets/images/CalendarBg/screen.png'
import screenMaskPic from '@/assets/images/CalendarBg/Screenmask.png'
import bgPic from '@/assets/images/CalendarBg/bg.png'
import maskPic from '@/assets/images/CalendarBg/mask.png'
import lightPic from '@/assets/images/CalendarBg/light.png'
import caidaiPic from '@/assets/images/CalendarBg/caidai.png'
import screenLightPic from '@/assets/images/CalendarBg/screenLight.png'
import phoneLightPic from '@/assets/images/CalendarBg/phoneLight.png'
export default {
  name: 'CalendarBg',
  data () {
    return {
      screenPic,
      screenMaskPic,
      bgPic,
      maskPic,
      lightPic,
      caidaiPic,
      screenLightPic,
      phoneLightPic,
      // 获取canvas
      cvs: '',
      ctx: '',
      display: '',
      displayCtx: '',
      screenImage: '',
      screenImageCtx: '',
      rili: '',
      riliCtx: '',
      // 日历
      date: '',
      year: '',
      month: '',
      today: '',
      cardSize: 40,
      arrayThree: [4, 6, 9, 11],
      arrayThreeone: [1, 3, 5, 7, 8, 10, 12],
      arrayWeek: ['SUN', 'MON', 'TUES', 'WED', 'THUR', 'FRI', 'SAT'],
      firstDraw: null, // 每月1号绘制位置
      wIdx: '',
      dayIndex: '',
      countDay: 30,
      row: 6,
      monthCN: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
      riliInterval: null,
      screenMask: new Image(),
      screen: new Image(),
      iv: null,
      bg: new Image(),
      mask: new Image(),
      light: new Image(),
      caidai: new Image(),
      screenLight: new Image(),
      phoneLight: new Image(),
      phoneText: '',
      noRili: false,
      // 颜色变化
      targetColor: {
        r: 80,
        g: 120,
        b: 169
      },
      currentColor: {
        r: 80,
        g: 120,
        b: 169
      },
      lightColor: {
        r: 0,
        g: 34,
        b: 77,
        a: 0
      },
      night: false,
      debug: false,
      time: null
    }
  },
  mounted () {
    this.cvs = this.$refs.cvs
    this.ctx = this.$refs.cvs.getContext('2d')
    this.display = this.$refs.display
    this.displayCtx = this.$refs.display.getContext('2d')
    this.screenImage = this.$refs.screenImage
    this.screenImageCtx = this.$refs.screenImage.getContext('2d')
    this.rili = this.$refs.rili
    this.riliCtx = this.$refs.rili.getContext('2d')

    this.riliInterval = setInterval(this.drawRili, 3600000)
    this.drawRili()
    // Canvas剪切蒙版实现
    this.screenMask.src = this.screenMaskPic
    this.screen.src = this.screenPic
    // 左上角小电脑的桌面壁纸
    this.iv = setInterval(() => {
      if (this.screen.complete && this.screenMask.complete) {
        this.screenImageCtx.drawImage(this.screen, -1041, -210, 1280, 720)
        this.screenImageCtx.globalCompositeOperation = 'destination-atop'
        this.screenImageCtx.drawImage(this.screenMask, 0, 0)
        this.screenImageCtx.globalCompositeOperation = 'source-over'
        clearInterval(this.iv)
      }
    }, 14)

    this.bg.src = this.bgPic
    this.mask.src = this.maskPic
    this.light.src = this.lightPic
    this.caidai.src = this.caidaiPic
    this.screenLight.src = this.screenLightPic
    this.phoneLight.src = this.phoneLightPic
    this.phoneText = JSON.parse('[{"time":0,"text":"凌晨啦!"},{"time":6,"text":"早上好!"},{"time":8,"text":"上午好!"},{"time":11,"text":"你吃了吗"},{"time":13,"text":"下午好鸭!"},{"time":16,"text":"傍晚咯!"},{"time":19,"text":"晚安!"}]')
    this.noRili = false
    // 屏幕大小自适应
    window.onresize = function () {
      if (window.innerWidth / window.innerHeight > 1.8333333333333) {
        this.display.width = window.innerWidth
        this.display.height = window.innerWidth / 1980 * 1080

        window.scrollTo(0, (window.innerHeight - 123) / 16)
      } else {
        this.display.width = window.innerHeight / 1080 * 1980
        this.display.height = window.innerHeight
      }
    }
    window.onresize()

    window.requestAnimationFrame(this.render)
  },
  methods: {
    drawTodaybg (i, j) {
      this.riliCtx.save()
      this.riliCtx.beginPath()
      this.riliCtx.strokeStyle = '#900'
      this.riliCtx.arc(45 + i * this.cardSize * 1.7 + this.cardSize / 1.18, 50 + j * this.cardSize + this.cardSize / 2, this.cardSize / 2 - 10, -Math.PI, Math.PI * 1)
      this.riliCtx.stroke()
      this.riliCtx.closePath()
      this.riliCtx.beginPath()
      this.riliCtx.arc(45 + i * this.cardSize * 1.7 + this.cardSize / 1.18, 50 + j * this.cardSize + this.cardSize / 2, this.cardSize / 2 - 9, -Math.PI, Math.PI * 0.9)
      this.riliCtx.stroke()
      this.riliCtx.closePath()
      this.riliCtx.beginPath()
      this.riliCtx.arc(45 + i * this.cardSize * 1.7 + this.cardSize / 1.18, 50 + j * this.cardSize + this.cardSize / 2, this.cardSize / 2 - 8, -Math.PI, Math.PI * 0.8)
      this.riliCtx.stroke()
      this.riliCtx.closePath()
      this.riliCtx.beginPath()
      this.riliCtx.arc(45 + i * this.cardSize * 1.7 + this.cardSize / 1.18, 50 + j * this.cardSize + this.cardSize / 2, this.cardSize / 2 - 7, -Math.PI, Math.PI * 0.7)
      this.riliCtx.stroke()
      this.riliCtx.closePath()
      this.riliCtx.beginPath()
      this.riliCtx.arc(45 + i * this.cardSize * 1.7 + this.cardSize / 1.18, 50 + j * this.cardSize + this.cardSize / 2, this.cardSize / 2 - 6, -Math.PI, Math.PI * 0.6)
      this.riliCtx.stroke()
      this.riliCtx.closePath()
      this.riliCtx.restore()
    },
    drawDate (txt, i, j) {
      this.riliCtx.textAlign = 'center'
      this.riliCtx.fillStyle = 'rgb(69,68,84)'
      this.riliCtx.font = (this.cardSize / 1.5) + 'px Impact'
      const yOffest = 3
      const isNum = /^\d+(\d+)?$/
      if ((j === 0 || j === 6) && isNum.test(txt)) {
        this.riliCtx.fillStyle = '#900'
      }
      this.riliCtx.fillText(txt.toString(), 45 + j * this.cardSize * 1.7 + this.cardSize / 1.18, 50 + i * this.cardSize + this.cardSize / 3 * 2 + yOffest)
      if (txt === this.today) {
        this.drawTodaybg(j, i)
      }
    },
    drawRili () { // 画日历
      // console.log(this.riliCtx)
      this.riliCtx.clearRect(0, 0, 600, 600)
      this.date = new Date()
      this.year = this.date.getYear()
      this.month = this.date.getMonth()
      this.today = this.date.getDate()
      this.week = this.date.getDay()
      this.wIdx = this.today % 7

      if (this.week >= this.wIdx) {
        this.firstDraw = this.week - this.wIdx + 1
      } else {
        this.firstDraw = this.week - this.wIdx + 8
      }
      if (this.arrayThree.indexOf(this.month + 1) > -1) {
        this.countDay = 30
      } else if (this.arrayThreeone.indexOf(this.month + 1) > -1) {
        this.countDay = 31
      } else {
        if ((this.year % 4 === 0 && this.year % 100 !== 0) || this.year % 400 === 0) {
          this.countDay = 29
        } else {
          this.countDay = 28
        }
      }

      if (7 - this.firstDraw + 7 * 4 < this.countDay) { // 确定表格行数，防止日期绘制不全
        this.row = 7
      }

      this.riliCtx.fillStyle = 'rgb(69,68,84)'
      this.riliCtx.font = '900 26pt SimHei'
      this.riliCtx.textAlign = 'center'

      this.riliCtx.scale(1.1, 1)
      this.riliCtx.fillText(this.monthCN[this.month] + '月', 260, 32)
      this.riliCtx.resetTransform()

      this.riliCtx.font = '20pt SimHei'
      this.riliCtx.textAlign = 'end'
      this.riliCtx.fillText(this.today + '日', 520, 38)

      for (let i = 0; i < this.row; i++) {
        for (let j = 0; j < 7; j++) {
          this.riliCtx.strokeRect(45 + j * this.cardSize * 1.70, 50 + i * this.cardSize, this.cardSize * 1.70, this.cardSize)
        }
      }
      this.dayIndex = 1
      for (let i = 0; i < this.row; i++) { // 开始绘制日期数
        for (let j = 0; j < 7; j++) {
          if (i === 0) { // 表格第一行绘制星期
            this.drawDate(this.arrayWeek[j], i, j)
            continue
          }
          if (i === 1 && j < this.firstDraw) { // 确定1号绘制位置
            continue
          }
          if (this.dayIndex > this.countDay) { // 只绘制月份的天数
            break
          }
          this.drawDate(this.dayIndex++, i, j)
        }
      }
    },
    min (a, b) {
      return a > b ? b : a
    },
    max (a, b) {
      return a > b ? a : b
    },
    colorToRgb (color) {
      return ('rgb(' + color.r.toString() + ',' + color.g.toString() + ',' + color.b.toString() + ')')
    },
    colorToRgba (colorWithA) {
      return ('rgba(' + colorWithA.r.toString() + ',' + colorWithA.g.toString() + ',' + colorWithA.b.toString() + ',' + colorWithA.a.toString() + ')')
    },
    render () {
      this.currentColor.r += (this.targetColor.r - this.currentColor.r) * 0.01
      this.currentColor.r = this.min(this.currentColor.r, 255)
      this.currentColor.r = this.max(this.currentColor.r, 0)

      this.currentColor.g += (this.targetColor.g - this.currentColor.g) * 0.01
      this.currentColor.g = this.min(this.currentColor.g, 255)
      this.currentColor.g = this.max(this.currentColor.g, 0)

      this.currentColor.b += (this.targetColor.b - this.currentColor.b) * 0.01
      this.currentColor.b = this.min(this.currentColor.b, 255)
      this.currentColor.b = this.max(this.currentColor.b, 0)

      this.ctx.clearRect(0, 0, 1980, 1080)
      this.ctx.drawImage(this.bg, 0, 0)
      this.ctx.drawImage(this.mask, 954, 99)

      this.ctx.fillStyle = '#97adbb'
      this.ctx.font = '32pt Impact'

      this.ctx.transform(1, 2.05 * (Math.PI / 180), 0, 1, 0, 0)

      const time = new Date()
      this.ctx.fillText((time.getHours() < 10 ? '0' : '') + time.getHours().toString() + ':' + (time.getMinutes() < 10 ? '0' : '') + time.getMinutes() + ':' + (time.getSeconds() < 10 ? '0' : '') + time.getSeconds().toString(), 725, 318)
      this.ctx.resetTransform()

      // 日历本
      this.ctx.transform(0.9645, 0, 0 * (Math.PI / 180), 0.96, 967, 100)
      this.ctx.rotate(6 * (Math.PI / 180))

      if (!this.noRili) {
        this.ctx.drawImage(this.rili, 0, 0)

        this.ctx.resetTransform()

        this.ctx.transform(0.9645, 0, 9 * (Math.PI / 180), 1, 825, 160)
        this.ctx.rotate(7 * (Math.PI / 180))
      }

      this.targetColor = {
        r: 80,
        g: 120,
        b: 169
      }

      if (this.night) {
        this.targetColor = {
          r: 255,
          g: 75,
          b: 80
        }
      }

      if (!this.noRili) {
        this.ctx.fillStyle = 'rgba(0,0,0,0.5)'
        this.ctx.fillRect(-10, 320, 650, 2)
      }

      this.ctx.fillStyle = this.colorToRgb(this.currentColor)

      this.ctx.resetTransform()

      this.ctx.globalCompositeOperation = 'overlay'
      this.ctx.drawImage(this.light, 971, 197)
      this.ctx.globalCompositeOperation = 'source-over'

      this.ctx.drawImage(this.caidai, 949, 25)

      // 夜间光照
      if (this.night && this.lightColor.a < 0.7) {
        this.lightColor.a += 0.005
        this.lightColor.a = this.min(this.lightColor.a, 0.7)
      } else if (!this.night) {
        this.lightColor.a -= 0.005
        this.lightColor.a = this.max(this.lightColor.a, 0.0)
      }

      if (this.lightColor.a > 0) {
        this.ctx.globalCompositeOperation = 'hard-light'
        this.ctx.fillStyle = this.colorToRgba(this.lightColor)
        this.ctx.fillRect(0, 0, 1980, 1080)
        this.ctx.globalCompositeOperation = 'source-over'

        this.ctx.globalAlpha = this.lightColor.a / 0.7
        this.ctx.drawImage(this.phoneLight, 860, 437)
        this.ctx.globalAlpha = 1
      }

      // 屏幕
      this.ctx.drawImage(this.screenImage, 0, 0)
      if (this.lightColor.a > 0) {
        this.ctx.globalAlpha = this.lightColor.a / 0.7
        this.ctx.drawImage(this.screenLight, 0, 0)
        this.ctx.globalAlpha = 1
      }

      this.night = true
      let greeting = '凌晨啦!'

      this.phoneText.forEach((v) => {
        if (time.getHours() >= v.time) {
          greeting = v.text
        }
      })

      if (time.getHours() >= 6 && time.getHours() <= 18) {
        this.night = false
      }

      this.night = this.debug ? !this.night : this.night

      // 手机
      this.ctx.fillStyle = '#000'
      this.ctx.font = '31.02pt SimHei'
      this.ctx.transform(1.0911, -35 * (Math.PI / 180), 0, 0.5868, 1132.94, 564.07)
      this.ctx.rotate(56.5 * (Math.PI / 180))
      this.ctx.textAlign = 'center'
      this.ctx.fillStyle = '#fff'
      this.ctx.fillText(greeting, 135, 100)
      this.ctx.textAlign = 'start'
      this.ctx.resetTransform()
      this.displayCtx.drawImage(this.$refs.cvs, 0, 0, this.display.width, this.display.height)
      window.requestAnimationFrame(this.render)
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.canvas_body {
  text-align: center;
}
.hidden {
  display: none;
}

#display {
  margin: auto;
}
</style>
