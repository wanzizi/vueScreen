<template>
  <!-- 带圆环的模块背景 -->
    <div class="circle-card-bg">
      <div class="circle">
        <span class="outside"></span>
        <span class="middle"></span>
        <span class="inner">
          <span class="table"></span>
          <slot name="cirleImg"></slot>
        </span>
      </div>
      <slot></slot>
    </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
@timeSplit:2s;

.circle-card-bg {
  position: relative;

  .circle {
    position: absolute;
    top: -11px;
    left: -45px;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    overflow: hidden;
    background: url('~Assets/card/outside.png') no-repeat;

    .outside {
      display: inline-block;
      width: 100%;
      height: 100%;

      &::before {
        content: '';
        display: inline-block;
        width: 100%;
        height: 100%;
        background: url('~Assets/card/outside_top.png') no-repeat;
        animation: forwardRotation @timeSplit ease 0.5s;
      }
    }

    .middle {
      position: absolute;
      top: 12px;
      left: 12px;
      width: 86px;
      height: 86px;
      background: url('~Assets/card/inner.png') no-repeat;

      &::before {
        content: '';
        position: relative;
        top: 0;
        left: 0;
        display: inline-block;
        width: 100%;
        height: 100%;
        background: url('~Assets/card/inner_thin.png') no-repeat;
        animation: reverseRotation @timeSplit ease 0.5s;
      }
    }

    .inner {
      position: absolute;
      top: 21px;
      left: 21px;
      width: 68px;
      height: 68px;
      text-align: center;

      &::before {
        content: '';
        display: inline-block;
        width: 100%;
        height: 100%;
        background: url('~Assets/card/inner_bot.png') no-repeat;
        animation: forwardRotation @timeSplit ease 0.5s;
      }

      .circle-img {
        position: relative;
        top: -55px;
        display: inline-block;
      }

      .table {
        position: absolute;
        top: 27px;
        left: -5px;
        display: inline-block;
        width: 80px;
        height: 53px;
        background: url('~Assets/card/table.png') no-repeat;
      }
    }
  }

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    display: inline-block;
    width: 100%;
    height: 139px;
    background: url('~Assets/card/cardBack.png') no-repeat;
    background-size: 100% 100%;
  }
}

@keyframes forwardRotation {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

@-moz-keyframes forwardRotation {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes forwardRotation {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

@-o-keyframes forwardRotation {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes reverseRotation {
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0);
  }
}

@-moz-keyframes reverseRotation {
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0);
  }
}

@-webkit-keyframes reverseRotation {
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0);
  }
}

@-o-keyframes reverseRotation {
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0);
  }
}
</style>
