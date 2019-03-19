<template>
    <div class="top-title-bg">
        <div class="bg">
            <h3 class="title">{{title}}</h3>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.top-title-bg {
    .bg {
        position: relative;
        width: 500px;
        height: 426px;
        background: url("~Assets/bgtitle.png") no-repeat;
        .title {
            position: absolute;
            top: 10px;
            left: 25px;
            font-size: 16px;
            font-family: normal;
            color: #fff;
            line-height: 1;
        }
    }
}
</style>
