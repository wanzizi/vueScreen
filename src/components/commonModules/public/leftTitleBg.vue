<template>
    <!-- 标题在左边的背景组件 -->
    <div class="left-title-bg">
        <h3 class="title"><span class="number">{{number}}</span>{{title}}</h3>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    number: {
      type: [String, Number],
      default: ''
    },
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
.left-title-bg {
  .title {
    float: left;
    width: 45px;
    height: 341px;
    background: url('~Assets/left_bg.png') no-repeat;
    padding: 10px;
    color: #fff;
    font-size: 16px;
    font-weight: normal;
    writing-mode: vertical-lr;
    padding: 20px 14px;

    .number {
      writing-mode: horizontal-tb;
    }
  }

  .content {
    position: relative;
    height: 100%;
    margin-left: 60px;

    &::before,
    &::after {
      content: '';
      position: absolute;
      display: inline-block;
      width: 100%;
      height: 4px;
      background: url('~Assets/line.png') no-repeat;
      background-size: 100% 100%;
    }

    &::before {
      top: 0;
    }

    &::after {
      bottom: 0;
    }
  }
}
</style>
