<template>
    <div class="top-title-bg">
        <h3 class="title">{{title}}</h3>
        <div class="bg">
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
  .title {
    font-size: 16px;
    font-weight: normal;
    color: #fff;
    line-height: 1;

    &::after {
      content: '';
      position: relative;
      top: 1.5px;
      left: 10px;
      display: inline-block;
      width: 259px;
      height: 14px;
      background: url('~Assets/line_block.png') no-repeat;
    }
  }

  .bg {
    height: calc(~'100% - 16px');
    background: -webkit-linear-gradient(top, rgba(19, 50, 121, 0), rgba(19, 50, 121, 0.1), rgba(19, 50, 121, 0.1)); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(bottom, rgba(19, 50, 121, 0), rgba(19, 50, 121, 0.1), rgba(19, 50, 121, 0.1)); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(bottom, rgba(19, 50, 121, 0), rgba(19, 50, 121, 0.1), rgba(19, 50, 121, 0.1)); /* Firefox 3.6 - 15 */
    background: linear-gradient(to top, rgba(19, 50, 121, 0), rgba(19, 50, 121, 0.1), rgba(19, 50, 121, 0.1)); /* 标准的语法（必须放在最后） */
  }
}
</style>
