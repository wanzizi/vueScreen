<template>
    <top-left-bg :title="data.title">
      <div class="content">
          <span style="color:#fff;">{{data}}</span>
      </div>
    </top-left-bg>
</template>

<script>
// import ehcarts from 'echarts'
import topLeftBg from '../public/topTitleBg.vue'

export default {
  components: { topLeftBg },
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

  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>
