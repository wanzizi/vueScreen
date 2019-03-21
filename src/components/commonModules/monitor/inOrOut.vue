<template>
    <left-title-bg :title="data.title">
      <div class="chart" id="chartOne"></div>
    </left-title-bg>
</template>

<script>
import ehcarts from 'echarts'
import leftTitleBg from '../public/leftTitleBg.vue'

export default {
  components: { leftTitleBg },
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {}
  },
  mounted () {
    this.initChart()
  },
  methods: {
    initChart () {
      let color = JSON.parse(this.data.colors)
      let myChart = ehcarts.init(document.getElementById('chartOne'))
      let opt = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        grid: {
          bottom: 40
        },
        xAxis: {
          axisLine: {
            lineStyle: {
              color: '#808080'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#808080'
            }
          },
          axisTick: { show: false },
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: '#808080'
            }
          },
          splitLine: {
            // show: true ,
            lineStyle: {
              color: '#808080'
            }
          },
          axisTick: { show: false }
        },
        series: [{
          name: '销量',
          type: 'bar',
          itemStyle: {
            color: color[1]
          },
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
      myChart.setOption(opt)
    }
  }
}
</script>

<style lang="less" scoped>
.chart{
  width: 100%;
  height: 335px;
}
</style>
