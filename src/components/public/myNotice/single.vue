<template>
    <transition name="move-notice" @enter="handleEnter" @leave="handleLeave">
      <div class="single-notice-modal">
        <a class="close" @click="close()"></a>
        <div class="body">
          <h5 class="title" v-if="options.title">{{options.title}}</h5>
          <div class="content" v-html="options.content"></div>
        </div>
      </div>
    </transition>
</template>

<script>
export default {
  name: 'noticeSingle',
  props: {
    options: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      count: 0,
      timer: null
    }
  },
  mounted () {
    this.init()
  },
  destroyed () {
    this.clearTimer()
  },
  methods: {
    init () {
      this.clearTimer()
      if (this.options.duration !== 0) {
        this.timer = setTimeout(() => {
          this.close()
        }, this.options.duration * 1000)
      }
    },
    close () {
      this.$emit('trigger-close', this.options.name)
    },
    clearTimer () {
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = null
      }
    },
    handleEnter (el) {
      if (this.type === 'message') {
        el.style.height = el.scrollHeight + 'px'
      }
    },
    handleLeave (el) {
      // 优化一下，如果当前只有一个 Message，则不使用 js 过渡动画，这样更优美
      // if (document.getElementsByClassName('single-notice-modal').length !== 1) {
      //   el.style.height = 0
      //   el.style.paddingTop = 0
      //   el.style.paddingBottom = 0
      // }
    }
  }
}
</script>

<style lang="less" scoped>
.move-notice-enter-active {
  animation: move-notice 0.5s ease;
}

.move-notice-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}

.move-notice-enter,
.move-notice-leave-to {
  transform: translateX(30px);
  opacity: 0;
}

@keyframes move-notice {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(-60px);
  }

  100% {
    transform: translateX(0);
  }
}

.single-notice-modal {
  position: relative;
  padding: 14px 25px 10px 16px;
  border-radius: 4px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.8);
  line-height: 1;
  overflow: hidden;
  border-left: 4px solid #2d8cf0;
  margin-bottom: 15px;

  .close {
    position: absolute;
    top: 7px;
    right: 7px;
    font-size: 20px;

    &::after {
      display: inline-block;
      content: '\00d7';
      cursor: pointer;
    }
  }

  .body {
    .title {
      font-size: 14px;
      color: #17233d;
      padding-right: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 4px;
    }

    .content {
      font-size: 12px;
      color: #515a6e;
      text-align: justify;
      line-height: 1.5;
    }
  }
}
</style>
