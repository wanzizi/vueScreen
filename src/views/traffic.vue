<template>
    <common-frame :list="list">
      <div
        class="common-module-set"
        slot-scope="slotProps"
        :is="slotProps.propName"
      ></div>
  </common-frame>
</template>

<script>
import mixins from 'Mixins/config.js'

import header from 'Components/commonModules/public/header.vue'
// import chartModule1 from 'Components/jingning/page2/chartModule1.vue'

export default {
  mixins: [mixins],
  data () {
    return {
      baseConfig: this.$base.generalConfig.children[1],
      list: [
        {
          name: 'my-header',
          size: {
            width: 1920,
            height: 100,
            left: 0,
            top: 20
          }
        }
      ]
    }
  },
  components: {
    'my-header': header
  },
  mounted () {
    console.log(this.baseConfig)
  }
}
</script>

<style lang="less" scoped>

</style>
