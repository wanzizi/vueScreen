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

import header from 'Components/commonModules/header.vue'
// import chartModule1 from 'Components/jingning/page2/chartModule1.vue'

export default {
  mixins: [mixins],
  data () {
    return {
      list: [
        {
          name: 'my-header',
          size: {
            width: 3200,
            height: 80,
            left: 0,
            top: 0
          }
        }
      ]
    }
  },
  components: {
    'my-header': header
  }
}
</script>

<style lang="less" scoped>

</style>
