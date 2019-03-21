<template>
    <circleCardBg>
      <span class="circle-img" slot="cirleImg"></span>

      <div class="card-content common-circle-card-bg">
        <h4>{{title}}</h4>
        <p class="number">{{num|changeToEnglishFormat}}</p>
      </div>
    </circleCardBg>
</template>

<script>
import circleCardBg from '../public/circleCardBg.vue'
// import { getLastMonth } from 'Plugins/util.js'
export default {
  data () {
    return {
      num: '',
      title: ''
    }
  },
  components: { circleCardBg },
  async mounted () {
    // this.queryData()
    // this.title = `${await getLastMonth(this)}月累计客流量（人次）`
  },
  methods: {
    queryData () {
      this.$ajax({
        methods: 'get',
        url: '/api/screen/statistics/sumTourist'
      }).then(res => {
        this.num = res.data.realNum
      })
    }
  }
}
</script>

<style lang="less" scoped>
// @import '~@/style/circleCardBg.less';
.circle-img{
  position: relative;
  top: 10px;
  display: inline-block;
  width: 33px;
  height: 29px;
  background: url('~Assets/icon/multi_people.png') no-repeat;
}
.card-content{
  .number{
    font-size: 54px;
    line-height:  54px;
    color: #00ffe4;
  }
}
</style>
