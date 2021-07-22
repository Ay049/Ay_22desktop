<template>
  <div class="retro_snaker_box">
    <div class="retro_snaker_window">
      <canvas ref="scvs"></canvas>
    </div>
    <div class="retro_snaker_score">
      <div>得分 {{ score }}</div>
      <div>{{gameover}}</div>
      <div @click="initClick">重新开始</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      score: 0,
      map: null,
      snakerCtx: null,
      isGameOver: false,
      fps: 20,
      gameSize: 450,
      grids: 50,
      x: 40,
      y: 25,
      direction: 'U',
      food: [],
      body: [],

      scvs: '',
      timer: '',
      gameover: '加油!'
    }
  },
  unmounted () {
    // destroyed 生命周期选项被重命名为 unmounted
    window.clearInterval(this.timer)
  },
  mounted () {
    this.timer = setInterval(() => {
      if (!this.isGameOver) {
        this.update()
      } else {
        clearInterval(this.timer)
      }
    }, 2000 / this.fps)
    window.addEventListener('keydown', function (e) {
      if (e.code === 'KeyW' || e.code === 'ArrowUp') { // 上
        this.direction = 'U'
      } else if (e.code === 'KeyS' || e.code === 'ArrowDown') { // 下
        this.direction = 'D'
      } else if (e.code === 'KeyA' || e.code === 'ArrowLeft') { // 左
        this.direction = 'L'
      } else if (e.code === 'KeyD' || e.code === 'ArrowRight') { // 右
        this.direction = 'R'
      }
    }, false)
    this.init()
  },
  methods: {
    initClick () {
      this.gameover = '加油!'
      this.score = 0
      this.map = null
      this.snakerCtx = null
      this.isGameOver = false
      this.fps = 20
      this.gameSize = 450
      this.grids = 50
      this.x = 40
      this.y = 25
      window.direction = ''
      this.food = []
      this.body = []
      this.scvs = ''
      this.timer = ''

      this.init()
    },
    init () {
      this.scvs = this.$refs.scvs
      this.scvs.width = this.gameSize
      this.scvs.height = this.gameSize
      this.snakerCtx = this.scvs.getContext('2d')

      this.map = new Array(this.grids)
      for (let i = 0; i < this.map.length; i++) {
        this.map[i] = new Array(this.grids)
      }

      this.body.push([this.x, this.y])
    },
    update () {
      this.snakerCtx.clearRect(0, 0, this.gameSize, this.gameSize)
      // 检测食物
      this.setFood()
      // 移动
      this.move()
      for (let i = 0; i < this.map.length; i++) {
        for (let j = 0; j < this.map[i].length; j++) {
          this.map[i][j] = 0
          for (let k = 0; k < this.body.length; k++) {
            if (i === this.body[k][0] && j === this.body[k][1]) {
              this.map[this.body[k][0]][this.body[k][1]] = 5
            }
          }
          if (i === this.food[0] && j === this.food[1]) {
            this.map[this.food[0]][this.food[1]] = 1
          }
        }
      }
      for (let i = 0; i < this.map.length; i++) {
        for (let j = 0; j < this.map[i].length; j++) {
          if (this.map[j][i] === 1) {
            this.snakerCtx.fillStyle = 'red'
          } else if (this.map[j][i] === 5) {
            this.snakerCtx.fillStyle = 'green'
          } else {
            this.snakerCtx.fillStyle = 'black'
          }
          this.snakerCtx.fillRect(j * (this.gameSize / this.grids), i * (this.gameSize / this.grids), this.gameSize / this.grids, this.gameSize / this.grids)
        }
      }
    },
    setFood () {
      if (this.food.length === 0) {
        this.food = [this.rand(0, this.grids - 1), this.rand(0, this.grids - 1)]
      }
    },
    move () {
      if (window.direction === 'U') {
        if (this.y - 1 >= 0) {
          this.y -= 1
        } else {
          this.gameover = '撞到上面的墙...'
          this.isGameOver = true
        }
      } else if (window.direction === 'D') {
        if (this.y + 1 <= this.grids - 1) {
          this.y += 1
        } else {
          this.gameover = '撞到下面的墙...'
          this.isGameOver = true
        }
      } else if (window.direction === 'L') {
        if (this.x - 1 >= 0) {
          this.x -= 1
        } else {
          this.gameover = '撞到左面的墙...'
          this.isGameOver = true
        }
      } else if (window.direction === 'R') {
        if (this.x + 1 <= this.grids - 1) {
          this.x += 1
        } else {
          this.gameover = '撞到右面的墙...'
          this.isGameOver = true
        }
      }
      // 是否吃到食物
      if (this.x === this.food[0] && this.y === this.food[1]) {
        this.food = []
        this.score++
        this.body.unshift([this.x, this.y])
      } else {
        this.body.pop()
        this.body.unshift([this.x, this.y])
      }
      // 检测是否碰到自己
      for (var k = 1; k < this.body.length; k++) {
        if (this.x === this.body[k][0] && this.y === this.body[k][1]) {
          this.gameover = '碰到自己了...'
          this.isGameOver = true
        }
      }
    },
    rand (min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
  }
}
</script>

<style scoped>
  .retro_snaker_box {
    display: flex;
    color: #fff;
  }
  .retro_snaker_window {
    width: 452px;
    height: 452px;
    border: 1px solid red;
  }
  .retro_snaker_score {
    text-align: center;
    width: 100%;
    height: 100%;
    margin-top: 100px;
  }
  .retro_snaker_score>div {
    padding: 20px;
  }
</style>
