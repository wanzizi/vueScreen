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
import initModule from 'Mixins/initModule.js'

import TITLE from 'Components/commonModules/traffic/titleModule1.vue'
// import chartModule1 from 'Components/jingning/page2/chartModule1.vue'

export default {
  mixins: [mixins, initModule],
  data () {
    return {
      baseConfig: this.$base.generalConfig.children[1],
      list: []
    }
  },
  components: {
    TITLE
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>

</style>
