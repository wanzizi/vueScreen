<template>
  <div class="title-box">
    <p class="systemTitle">{{$base.generalConfig.title}}</p>
    <div>
      <p class="subjectTitle">{{subjectTitle}}</p>
      <my-menu></my-menu>
    </div>
  </div>
</template>

<script>
import menu from './menu.vue'

export default {
  components: { 'my-menu': menu },
  data () {
    return {
      subjectTitle: ''
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.$base.generalConfig.children.forEach(element => {
        if (this.$route.name === element.code) {
          this.subjectTitle = element.title
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.title-box{
  text-align: center;
  color: #ffffff;
  font-size: 32px;
  background: url('~Assets/top_bg.png') center no-repeat;
  .systemTitle{
    padding-top: 20px;
  }
  .subjectTitle{
    font-size: 14px;
  }
}
</style>
