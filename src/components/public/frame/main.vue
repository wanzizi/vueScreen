<template>
    <div
      class="common-frame"
      :style="{width:width+'px',height:height+'px',backgroundImage:'url('+bg+')'}"
    >
      <div
          v-for="t in list"
          :key="t.name"
          class="module"
          :value="t.url"
          :style="{
              transform:`scale(${scaleX},${scaleY})`,
              width:t.size.width+'px',
              height:t.size.height+'px',
              left:width*t.size.left/size.col-(dev?0:t.size.width*(1-scaleX)/2)+'px',
              top:height*t.size.top/size.row-(dev?0:t.size.height*(1-scaleY)/2)+'px'
          }"
      >
        <slot :propName="t.name" :propStatus="t.isMount"></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: 'commonFrame',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      dev: process.env.NODE_ENV === 'development',
      width: 0,
      height: 0,
      bg: (this.$base.generalConfig && this.$base.generalConfig.backgroundImage) || '',
      size: {
        row: (this.$base.generalConfig && this.$base.generalConfig.height) || 0,
        col: (this.$base.generalConfig && this.$base.generalConfig.width) || 0
      }
    }
  },
  computed: {
    scaleX () {
      return this.width / this.size.col
    },
    scaleY () {
      return this.height / this.size.row
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      if (this.dev) {
        this.width = this.size.col
        this.height = this.size.row

        window.onresize = this.throttle(() => {
          this.width = this.size.col
          this.height = this.size.row
        }, 100)
      } else {
        this.width = window.innerWidth
        this.height = window.innerHeight
        window.onresize = this.throttle(() => {
          this.width = window.innerWidth
          this.height = window.innerHeight
        }, 100)
      }
    },
    throttle (fn, delay) {
      var timer = null
      return () => {
        let context = this
        let args = arguments
        clearTimeout(timer)
        timer = setTimeout(function () {
          fn.apply(context, args)
        }, delay)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.common-frame{
  position: relative;
  overflow: hidden;
  .module{
    position: absolute;
  }
}
</style>
