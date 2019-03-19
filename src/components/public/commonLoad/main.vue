
<template>
    <div class="common-loading">
        <span class="spinner" v-if="showSpin"></span>
        <p class="tip" v-else>加载中...</p>
    </div>
</template>

<script>
export default {
  name: 'commonLoad',
  props: {
    showSpin: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
@loadWidth:40px;
.common-loading{
    z-index: 9999;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    // background: rgba(255, 255, 255, 0.3);
    .spinner{
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        border-radius: 50%;
        background-color: #2d8cf0;
        width: @loadWidth;
        height: @loadWidth;
        margin-left: -(@loadWidth/2);
        margin-top: -(@loadWidth/2);
        animation: ani-spin-bounce 1s 0s ease-in-out infinite;
    }
    .tip{
        position: absolute;
        top: 50%;
        width: 100%;
        text-align: center;
        color: #2d8cf0;
        font-size: 12px;
    }
}
@keyframes ani-spin-bounce{
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
    opacity: 0;
  }
}
@-moz-keyframes ani-spin-bounce{
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
    opacity: 0;
  }
}
@-webkit-keyframes ani-spin-bounce{
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
    opacity: 0;
  }
}
@-o-keyframes ani-spin-bounce{
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
