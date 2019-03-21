<template>
    <div class="common-notice-box">
      <notice-single
          v-for="t in notices"
          :key="t.name"
          :options="t"
          v-on:trigger-close="close"
      ></notice-single>
    </div>
</template>

<script>
import noticeSingle from './single.vue'

export default {
  name: 'myNotice',
  data () {
    return {
      notices: []
    }
  },
  components: { noticeSingle },
  methods: {
    add (notice) {
      let _notice = Object.assign({
        content: '',
        duration: 1.5,
        closable: false,
        name: notice.name
      }, notice)

      this.notices.push(_notice)
    },
    close (name) {
      const notices = this.notices
      for (let i = 0; i < notices.length; i++) {
        if (notices[i].name === name) {
          this.notices.splice(i, 1)
          break
        }
      }
    },
    closeAll () {
      this.notices = []
    }
  }
}
</script>

<style lang="less" scoped>
.common-notice-box {
  z-index: 1078;
  position: fixed;
  top: 25px;
  right: 30px;
  width: 335px;
}
</style>
