<template>
    <common-frame :list="list">
      <div
        class="common-module-set"
        slot-scope="slotProps"
        :is="slotProps.propName"
        :data="slotProps.propData"
      ></div>
  </common-frame>
</template>

<script>
import mixins from 'Mixins/config.js'
import initModule from 'Mixins/initModule.js'

import INOROUT from 'Components/commonModules/monitor/inOrOut.vue'
import INCOUNTY from 'Components/commonModules/monitor/inCounty.vue'

export default {
  mixins: [mixins, initModule],
  components: {
    INOROUT,
    INCOUNTY
  },
  data () {
    return {
      baseConfig: this.$base.generalConfig.children[0].children,
      list: []
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>

</style>
