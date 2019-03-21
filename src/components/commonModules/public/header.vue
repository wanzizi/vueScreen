<template>
  <header class="header">
    <div class="time">
          <span>{{nowTime}}</span>
    </div>
    <div class="title-box">
        <h1>{{title}}</h1>
        <my-menu></my-menu>
    </div>
    <div class="weather" v-html="weather"></div>
  </header>
</template>

<script>
import menu from './menu.vue'
import { getSystemTime } from 'Plugins/util.js'
import format from 'Plugins/format.js'
export default {
  data () {
    return {
      time: '2018年9月20日 周四  10:00 农历八月十一',
      title: '景宁畲族自治县旅游数据中心',
      weather: `多云&nbsp;&nbsp;&nbsp;
      北风1~2级&nbsp;&nbsp;&nbsp;
      气温25~32℃&nbsp;&nbsp;&nbsp;`,
      nowTime: '',
      timer: null
    }
  },
  components: { 'my-menu': menu },
  mounted () {
    this.initTime()
    this.queryWeather()
  },
  destroyed () {
    clearInterval(this.timer)
  },
  methods: {
    async initTime () {
      let startDate = (await getSystemTime()) || new Date().getTime()
      this.timer = setInterval(() => {
        startDate += 1000
        this.nowTime = format(startDate, 'YYYY年MM月DD日 HH:mm:ss')
      }, 1000)
    },
    queryWeather () {
      window.process = (data) => {
        let thisData = data.data.today
        this.weather = `
          天气：${thisData.weather}&nbsp;&nbsp;&nbsp;${thisData.wind}
          &nbsp;&nbsp;&nbsp;气温${thisData.temperature}
          &nbsp;&nbsp;&nbsp;紫外线强度：${thisData.uv_index}
          &nbsp;&nbsp;&nbsp;整体气候${thisData.dressing_index}
        `
      }
      var url = `http://service.lishicloud.com/weather/getTodayWeather?cityName=景宁&appid=7cc7f3a6aa72481697108215dc263ddb&sign=bf056e2847f96a4e0c61ca5b045839a2&callback=process`

      var script = document.createElement('script')
      script.src = url
      document.head.appendChild(script)
      // 及时删除，防止加载过多的JS
      document.head.removeChild(script)
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  padding-top: 8px;
  height: 115px;
  position: relative;

  .time {
    position: absolute;
    top: 16px;
    left: 60px;
    font-size: 18px;
    line-height: 18px;
    color: #08c4d5;
  }

  .title-box {
    width: 100%;
    height: 93px;
    background: url('~Assets/top_bg.png') center no-repeat;
    text-align: center;
    color: #08c4d5;

    h1 {
      padding-top: 20px;
      font-size: 24px;
      line-height: 24px;
      font-weight: normal;
    }

    .menu {
      font-size: 18px;
      line-height: 18px;
      margin-top: 14px;
    }
  }

  .weather {
    position: absolute;
    top: 16px;
    right: 60px;
    font-size: 18px;
    line-height: 18px;
    color: #08c4d5;
  }
}
</style>
