// const cvs = document.getElementById('cvs')
// const ctx = cvs.getContext('2d')

// const display = document.getElementById('display')
// const displayCtx = display.getContext('2d')

// const screenImage = document.getElementById('screenImage')
// const screenImageCtx = screenImage.getContext('2d')

// const rili = document.getElementById('rili')
// const riliCtx = rili.getContext('2d')

// function drawRili () {
  // riliCtx.clearRect(0, 0, 600, 600)
  // const date = new Date()
  // const year = date.getYear()
  // const mouth = date.getMonth()
  // const today = date.getDate()
  // const week = date.getDay()

  // const cardSize = 40

  // const arrayThree = [4, 6, 9, 11]
  // const arrayThreeone = [1, 3, 5, 7, 8, 10, 12]
  // const arrayWeek = ['SUN', 'MON', 'TUES', 'WED', 'THUR', 'FRI', 'SAT']

  // let firstDraw = null // 每月1号绘制位置
  // const wIdx = today % 7

  // if (week >= wIdx) {
  //   firstDraw = week - wIdx + 1
  // } else {
  //   firstDraw = week - wIdx + 8
  // }

  // let dayIndex = 1
  // let countDay = 30

  // if (arrayThree.indexOf(mouth + 1) > -1) {
  //   countDay = 30
  // } else if (arrayThreeone.indexOf(mouth + 1) > -1) {
  //   countDay = 31
  // } else {
  //   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  //     countDay = 29
  //   } else {
  //     countDay = 28
  //   }
  // }

  // let row = 6
  // if (7 - firstDraw + 7 * 4 < countDay) { // 确定表格行数，防止日期绘制不全
  //   row = 7
  // }

  // function drawTodaybg (i, j) {
  //   riliCtx.save()

  //   riliCtx.beginPath()
  //   riliCtx.strokeStyle = '#900'
  //   riliCtx.arc(45 + i * cardSize * 1.7 + cardSize / 1.18, 50 + j * cardSize + cardSize / 2, cardSize / 2 - 10, -Math.PI, Math.PI * 1)
  //   riliCtx.stroke()
  //   riliCtx.closePath()

  //   riliCtx.beginPath()
  //   riliCtx.arc(45 + i * cardSize * 1.7 + cardSize / 1.18, 50 + j * cardSize + cardSize / 2, cardSize / 2 - 9, -Math.PI, Math.PI * 0.9)
  //   riliCtx.stroke()
  //   riliCtx.closePath()

  //   riliCtx.beginPath()
  //   riliCtx.arc(45 + i * cardSize * 1.7 + cardSize / 1.18, 50 + j * cardSize + cardSize / 2, cardSize / 2 - 8, -Math.PI, Math.PI * 0.8)
  //   riliCtx.stroke()
  //   riliCtx.closePath()

  //   riliCtx.beginPath()
  //   riliCtx.arc(45 + i * cardSize * 1.7 + cardSize / 1.18, 50 + j * cardSize + cardSize / 2, cardSize / 2 - 7, -Math.PI, Math.PI * 0.7)
  //   riliCtx.stroke()
  //   riliCtx.closePath()

  //   riliCtx.beginPath()
  //   riliCtx.arc(45 + i * cardSize * 1.7 + cardSize / 1.18, 50 + j * cardSize + cardSize / 2, cardSize / 2 - 6, -Math.PI, Math.PI * 0.6)
  //   riliCtx.stroke()
  //   riliCtx.closePath()

  //   riliCtx.restore()
  // }

  // const isNum = /^\d+(\d+)?$/

  // function drawDate (txt, i, j) {
  //   riliCtx.textAlign = 'center'
  //   riliCtx.fillStyle = 'rgb(69,68,84)'
  //   riliCtx.font = (cardSize / 1.5) + 'px Impact'
  //   const yOffest = 3

  //   if ((j === 0 || j === 6) && isNum.test(txt)) {
  //     riliCtx.fillStyle = '#900'
  //   }

  //   riliCtx.fillText(txt.toString(), 45 + j * cardSize * 1.7 + cardSize / 1.18, 50 + i * cardSize + cardSize / 3 * 2 + yOffest)

  //   if (txt === today) {
  //     drawTodaybg(j, i)
  //   }
  // }

  // riliCtx.fillStyle = 'rgb(69,68,84)'
  // riliCtx.font = '900 26pt SimHei'
  // riliCtx.textAlign = 'center'
  // const monthCN = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
  // riliCtx.scale(1.1, 1)
  // riliCtx.fillText(monthCN[mouth] + '月', 260, 32)
  // riliCtx.resetTransform()

  // riliCtx.font = '20pt SimHei'
  // riliCtx.textAlign = 'end'
  // riliCtx.fillText(today + '日', 520, 38)

  // for (let i = 0; i < row; i++) {
  //   for (let j = 0; j < 7; j++) {
  //     riliCtx.strokeRect(45 + j * cardSize * 1.70, 50 + i * cardSize, cardSize * 1.70, cardSize)
  //   }
  // }

  // dayIndex = 1

  // for (let i = 0; i < row; i++) { // 开始绘制日期数
  //   for (let j = 0; j < 7; j++) {
  //     if (i === 0) { // 表格第一行绘制星期
  //       drawDate(arrayWeek[j], i, j)
  //       continue
  //     }
  //     if (i === 1 && j < firstDraw) { // 确定1号绘制位置
  //       continue
  //     }
  //     if (dayIndex > countDay) { // 只绘制月份的天数
  //       break
  //     }
  //     drawDate(dayIndex++, i, j)
  //   }
  // }
// }
// -------------------------------------------------------------
// let riliInterval = setInterval(drawRili, 3600000)
// drawRili()

// Canvas奇妙的剪切蒙版实现
// const screenMask = new Image()
// screenMask.src = '~@/assets/images/CalendarBg/Screenmask.png'

// const screen = new Image()
// screen.src = '~@/assets/images/CalendarBg/screen.png'

// const iv = setInterval(() => {
//   if (screen.complete && screenMask.complete) {
//     screenImageCtx.drawImage(screen, -1041, -210, 1280, 720)
//     screenImageCtx.globalCompositeOperation = 'destination-atop'
//     screenImageCtx.drawImage(screenMask, 0, 0)
//     screenImageCtx.globalCompositeOperation = 'source-over'
//     clearInterval(iv)
//   }
// }, 14)

// 奇妙的屏幕大小自适应
// window.onresize = function () {
//   if (window.innerWidth / window.innerHeight > 1.8333333333333) {
//     display.width = window.innerWidth
//     display.height = window.innerWidth / 1980 * 1080

//     window.scrollTo(0, (window.innerHeight - 123) / 16)
//   } else {
//     display.width = window.innerHeight / 1080 * 1980
//     display.height = window.innerHeight
//   }
// }

// window.onresize()

// 加载图片
// const bg = new Image()
// bg.src = '~@/assets/images/CalendarBg/bg.png'

// const mask = new Image()
// mask.src = '~@/assets/images/CalendarBg/mask.png'

// const light = new Image()
// light.src = '~@/assets/images/CalendarBg/light.png'

// const caidai = new Image()
// caidai.src = '~@/assets/images/CalendarBg/caidai.png'

// const screenLight = new Image()
// screenLight.src = '~@/assets/images/CalendarBg/screenLight.png'

// const phoneLight = new Image()
// phoneLight.src = '~@/assets/images/CalendarBg/phoneLight.png'

// let phoneText = JSON.parse('[{"time":0,"text":"凌晨啦!"},{"time":6,"text":"早上好!"},{"time":8,"text":"上午好!"},{"time":11,"text":"你吃了吗"},{"time":13,"text":"下午好鸭!"},{"time":16,"text":"傍晚咯!"},{"time":19,"text":"晚安!"}]')

// let noRili = false
// let updateSongInfoHandler = -1
// 设置左上角的壁纸
// window.wallpaperPropertyListener = {
//   applyUserProperties: function (properties) {
//     if (properties.screenFile) {
//       if (properties.screenFile.value) {
//         screen.src = 'file:///' + properties.screenFile.value
//         const iv1 = setInterval(() => {
//           if (screen.complete && screenMask.complete) {
//             screenImageCtx.clearRect(0, 0, 1000, 1000)
//             screenImageCtx.drawImage(screen, -1041, -210, 1280, 720)
//             screenImageCtx.globalCompositeOperation = 'destination-atop'
//             screenImageCtx.drawImage(screenMask, 0, 0)
//             screenImageCtx.globalCompositeOperation = 'source-over'
//             clearInterval(iv1)
//           }
//         }, 14)
//       }
//     }

//     if (properties.phoneText) {
//       if (properties.phoneText.value) {
//         phoneText = JSON.parse(properties.phoneText.value)
//       }
//     }

//     if (properties.disableRili) {
//       if (properties.disableRili.value) {
//         clearInterval(riliInterval)
//         noRili = true
//       } else {
//         riliInterval = setInterval(drawRili, 3600000)
//         drawRili()
//         noRili = false
//       }
//     }
//   }
// }
// ....
// function min (a, b) {
//   return a > b ? b : a
// }

// function max (a, b) {
//   return a > b ? a : b
// }

// 奇妙的颜色变化
// let targetColor = {
//   r: 80,
//   g: 120,
//   b: 169
// }
// const currentColor = {
//   r: 80,
//   g: 120,
//   b: 169
// }
// const lightColor = {
//   r: 0,
//   g: 34,
//   b: 77,
//   a: 0
// }

// function colorToRgb (color) {
//   return ('rgb(' + color.r.toString() + ',' + color.g.toString() + ',' + color.b.toString() + ')')
// }

// function colorToRgba (colorWithA) {
//   return ('rgba(' + colorWithA.r.toString() + ',' + colorWithA.g.toString() + ',' + colorWithA.b.toString() + ',' + colorWithA.a.toString() + ')')
// }

// let night = false
// const debug = false

// Canvas的奇妙冒险!
function render () {
  currentColor.r += (targetColor.r - currentColor.r) * 0.01
  currentColor.r = min(currentColor.r, 255)
  currentColor.r = max(currentColor.r, 0)

  currentColor.g += (targetColor.g - currentColor.g) * 0.01
  currentColor.g = min(currentColor.g, 255)
  currentColor.g = max(currentColor.g, 0)

  currentColor.b += (targetColor.b - currentColor.b) * 0.01
  currentColor.b = min(currentColor.b, 255)
  currentColor.b = max(currentColor.b, 0)

  ctx.clearRect(0, 0, 1980, 1080)
  ctx.drawImage(bg, 0, 0)
  ctx.drawImage(mask, 954, 99)

  ctx.fillStyle = '#97adbb'
  ctx.font = '32pt Impact'

  ctx.transform(1, 2.05 * (Math.PI / 180), 0, 1, 0, 0)

  const time = new Date()
  ctx.fillText((time.getHours() < 10 ? '0' : '') + time.getHours().toString() + ':' + (time.getMinutes() < 10 ? '0' : '') + time.getMinutes() + ':' + (time.getSeconds() < 10 ? '0' : '') + time.getSeconds().toString(), 725, 318)
  ctx.resetTransform()

  // 日历本
  ctx.transform(0.9645, 0, 0 * (Math.PI / 180), 0.96, 967, 100)
  ctx.rotate(6 * (Math.PI / 180))

  if (!noRili) {
    ctx.drawImage(rili, 0, 0)

    ctx.resetTransform()

    ctx.transform(0.9645, 0, 9 * (Math.PI / 180), 1, 825, 160)
    ctx.rotate(7 * (Math.PI / 180))
  }

  targetColor = {
    r: 80,
    g: 120,
    b: 169
  }

  if (night) {
    targetColor = {
      r: 255,
      g: 75,
      b: 80
    }
  }

  if (!noRili) {
    ctx.fillStyle = 'rgba(0,0,0,0.5)'
    ctx.fillRect(-10, 320, 650, 2)
  }

  ctx.fillStyle = colorToRgb(currentColor)

  ctx.resetTransform()

  ctx.globalCompositeOperation = 'overlay'
  ctx.drawImage(light, 971, 197)
  ctx.globalCompositeOperation = 'source-over'

  ctx.drawImage(caidai, 949, 25)

  // 夜间光照
  if (night && lightColor.a < 0.7) {
    lightColor.a += 0.005
    lightColor.a = min(lightColor.a, 0.7)
  } else if (!night) {
    lightColor.a -= 0.005
    lightColor.a = max(lightColor.a, 0.0)
  }

  if (lightColor.a > 0) {
    ctx.globalCompositeOperation = 'hard-light'
    ctx.fillStyle = colorToRgba(lightColor)
    ctx.fillRect(0, 0, 1980, 1080)
    ctx.globalCompositeOperation = 'source-over'

    ctx.globalAlpha = lightColor.a / 0.7
    ctx.drawImage(phoneLight, 860, 437)
    ctx.globalAlpha = 1
  }

  // 屏幕
  ctx.drawImage(screenImage, 0, 0)
  if (lightColor.a > 0) {
    ctx.globalAlpha = lightColor.a / 0.7
    ctx.drawImage(screenLight, 0, 0)
    ctx.globalAlpha = 1
  }

  night = true
  let greeting = '凌晨啦!'

  phoneText.forEach((v) => {
    if (time.getHours() >= v.time) {
      greeting = v.text
    }
  })

  if (time.getHours() >= 6 && time.getHours() <= 18) {
    night = false
  }

  night = debug ? !night : night

  // 手机
  ctx.fillStyle = '#000'
  ctx.font = '31.02pt SimHei'

  ctx.transform(1.0911, -35 * (Math.PI / 180), 0, 0.5868, 1132.94, 564.07)
  ctx.rotate(56.5 * (Math.PI / 180))
  ctx.textAlign = 'center'
  ctx.fillStyle = '#fff'
  ctx.fillText(greeting, 135, 100)
  ctx.textAlign = 'start'
  ctx.resetTransform()
  displayCtx.drawImage(cvs, 0, 0, display.width, display.height)
  window.requestAnimationFrame(render)
}

window.requestAnimationFrame(render)
