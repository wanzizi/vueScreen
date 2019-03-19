<template>
    <div>
      <top-left-bg :title="data[1].title">
        <div class="content">
            <span style="color:#fff;">Content</span>
        </div>
      </top-left-bg>
    </div>
</template>

<script>
// import ehcarts from 'echarts'
import topLeftBg from '../public/topTitleBg.vue'

export default {
  components: { topLeftBg },
  props: {
    data: {
      type: Array,
      default () {
        return []
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
.chart{
  width: 100%;
  height: 100%;
}
</style>
