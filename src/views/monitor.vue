<template>
    <common-frame :list="list">
      <div
        class="common-module-set"
        slot-scope="slotProps"
        :is="slotProps.propName"
        :data="baseConfig.children"
      ></div>
  </common-frame>
</template>

<script>
import mixins from 'Mixins/config.js'

import header from 'Components/commonModules/public/header.vue'
import INOROUT from 'Components/commonModules/monitor/inOrOut.vue'
import INCOUNTY from 'Components/commonModules/monitor/inCounty.vue'

export default {
  mixins: [mixins],
  components: {
    'my-header': header,
    INOROUT,
    INCOUNTY
  },
  data () {
    return {
      baseConfig: this.$base.generalConfig.children[0],
      list: []
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.baseConfig.children.forEach(t => {
        this.list.push(
          {
            name: t.code,
            size: {
              width: t.width,
              height: t.height,
              left: t.positionLeft,
              top: t.positionTop
            }
          }
        )
      })
      this.list.unshift({
        name: 'my-header',
        size: {
          width: 1920,
          height: 100,
          left: 0,
          top: 10
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>

</style>
