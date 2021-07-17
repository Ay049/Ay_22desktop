<template>
  <div>
    <div class="calendar">
      <div class="top">
        <div class="top_date"> {{year}}年{{month}}月</div>
        <div class="btn_wrap">
          <ul>
            <li @click="handleShowNextMonth">下月</li>
            <li @click="handleShowToday">今天</li>
            <li @click="handleShowLastMonth">上月</li>
          </ul>
        </div>
      </div>
      <div class="date_wrap">
        <ul class="week">
          <li>日</li>
          <li>一</li>
          <li>二</li>
          <li>三</li>
          <li>四</li>
          <li>五</li>
          <li>六</li>
        </ul>
        <ul class="day">
          <li v-for="(item,index) in days" :key="index" :class="{now:nowLi==year.toString()+month.toString()+item}">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data () {
    return {
      year: '',
      mounth: '',
      days: [],
      nowLi: ''
    }
  },
  methods: {
    // 控制当前日期显示特殊样式
    handleShowDateStyle () {
      const now = new Date()
      this.nowLi = now.getFullYear().toString() + (now.getMonth() + 1).toString() + now.getDate().toString()
      console.log(this.nowLi)
    },
    // 得到当前年这个月分有多少天
    getDays (Y, M) {
      const day = new Date(Y, M, 0).getDate()
      return day
    },
    // 得到当前年，这个月的一号是周几
    getWeek (Y, M) {
      const now = new Date()
      now.setFullYear(this.year)
      now.setMonth(this.month - 1)
      now.setDate(1)
      const week = now.getDay()
      return week
    },
    pushDays () {
      // 将这个月多少天加入数组days
      for (let i = 1; i <= this.getDays(this.year, this.month); i++) {
        this.days.push(i)
      }
      // 将下个月要显示的天数加入days
      for (let i = 1; i <= 42 - this.getDays(this.year, this.month) - this.getWeek(this.year, this.month); i++) {
        this.days.push(i)
      }
      // 将上个月要显示的天数加入days
      for (let i = 0; i < this.getWeek(this.year, this.month); i++) {
        const lastMonthDays = this.getDays(this.year, this.month - 1)
        this.days.unshift(lastMonthDays - i)
      }
    },
    getDate () {
      const now = new Date()
      this.year = now.getFullYear()
      this.month = now.getMonth() + 1
      this.pushDays()
    },
    handleShowNextMonth () {
      this.days = []
      if (this.month < 12) {
        this.month = this.month + 1
        this.pushDays()
      } else {
        this.month = this.month = 1
        this.year = this.year + 1
        this.pushDays()
      }
    },
    handleShowToday () {
      this.days = []
      const now = new Date()
      this.year = now.getFullYear()
      this.month = now.getMonth() + 1
      this.pushDays()
    },
    handleShowLastMonth () {
      this.days = []
      if (this.month > 1) {
        this.month = this.month - 1
        this.pushDays()
      } else if (this.year > 1970) {
        this.month = 12
        this.year = this.year - 1
        this.pushDays()
      } else {
        alert('暂不支持查询1970年以前')
      }
    }
  },
  mounted () {
    this.getDate()
    this.handleShowDateStyle()
  }
}
</script>
<style scoped>
ul {
  list-style: none;
}
.calender {
  width: 600px;
  position: relative;
  margin: 0 auto;
  margin-top: 50px;
  border: 1px solid #ddd;
  padding: 20px;
}

.top{
  width: 100%;
  position: relative;
  display: flex;
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px;
}

.top_date{
  width: 100px;
  text-align: left;
  line-height: 42px;
}

.btn_wrap{
  flex: 1;
  text-align: right
}

.btn_wrap ul{
  display: flex;
  flex-direction: row-reverse
}

.btn_wrap ul li{
  padding: 10px 20px;
  border: 1px solid #ddd;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer
}

.btn_wrap ul li:first-child{
  border-left: none;
}

.btn_wrap ul li:last-child{
  border-right: none;
}

.date_wrap{
  position: relative;
}

.week{
  display: flex;
  flex-direction: row;
  padding: 20px;
  font-size: 16px;
}

.week li{
  width: 14.28%;
}

.day{
  display: flex;
  flex-direction: row;
  padding: 20px;
  font-size: 16px;
  flex-wrap: wrap;
}

.day li{
  width: 14.28%;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid #ddd
}

.day li:nth-child(n+8){
  border-top:none;
}

.day li:nth-child(n+1){
  border-right: none;
}

.day li:nth-child(7n) {
  border-right: 1px solid #ddd
}
.now{
  background: #f2f8fe;
  color:#1989fa;
}
</style>
