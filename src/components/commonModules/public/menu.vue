<template>
    <div class="dynamic-menu">
        <p class="active" @click="menuShow=!menuShow">{{activeName}}</p>

        <transition name="bounce">
            <div class="content" v-show="menuShow">
                <p class="index-box">{{activeIndex+1}}/{{renderedList.length}}</p>
                <i class="close" @click="menuShow=false"></i>
                <i class="arrow left" @click="changeActive(-1)"></i>
                <ul class="list">
                    <li
                        class="item" v-for="(t,i) in renderedList"
                        :key="t.id"
                        :style="t.style"
                    >
                        <router-link class="item-inner" :to="{path:t.link}">
                            <img :src="t.thumbnail" :style="t.imgStyle" alt="菜单图片">
                            <span class="name" :class="{highlight:activeIndex===i}">{{t.name}}</span>
                        </router-link>
                    </li>
                </ul>
                <i class="arrow right" @click="changeActive(1)"></i>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
  data () {
    return {
      menuShow: false,
      width: 1400, // content容器的宽度
      showSize: 3, // 一页展示的个数
      activeName: '',
      activeIndex: 0, // 当前高亮的索引
      scaleSplit: 0.1, // 缩放的基数单位，根据当前索引与高亮索引的差值来缩放
      opacitySplit: 0.15, // 透明度的基数单位，根据当前索引与高亮索引的差值来减少透明度
      list: []
    }
  },
  computed: {
    renderedList () {
      let singleWidth = this.width / this.showSize
      return this.list.map((t, i) => {
        let length = this.list.length
        let halfSize = Math.floor(this.showSize / 2)
        // 获取到高亮居中的位置
        let activeLoc = singleWidth * halfSize - singleWidth * (1 - Math.ceil(this.showSize / 2 - halfSize)) / 2

        // 获取元素相对于高亮元素的真实差值，不够要补位
        let trueDiff = i - this.activeIndex
        if ((this.activeIndex < halfSize) && (halfSize - this.activeIndex) >= (length - i)) {
          trueDiff = i - length - this.activeIndex
        }
        if ((length - this.activeIndex) <= halfSize && (i < halfSize)) {
          trueDiff = i + length - this.activeIndex
        }

        let translateX = (this.activeIndex === i) ? activeLoc : (activeLoc + trueDiff * singleWidth * 0.65)
        let scale = 1 - Math.abs(trueDiff) * this.scaleSplit
        let opacity = 1 - Math.abs(trueDiff) * this.opacitySplit
        let shapeChange = trueDiff * 45
        return {
          ...t,
          style: {
            width: `${singleWidth}px`,
            transform: `translateX(${translateX}px) scale(${scale}) rotateY(${shapeChange}deg)`,
            opacity: Math.abs(trueDiff) <= 1 ? opacity : 0,
            zIndex: trueDiff === 0 ? 999 : 9
          },
          imgStyle: {
            boxShadow: trueDiff === 0 ? `0px 0px 8px 1px rgba(20, 255, 247, 0.41)` : ''
          }
        }
      })
    }
  },
  mounted () {
    this.init()

    window.onresize = () => {
      this.width = window.innerWidth
    }
  },
  methods: {
    init () {
      this.list = this.$base.generalConfig.children.map((t, i) => {
        if (t.code === this.$route.name) {
          this.activeIndex = i
          this.activeName = t.title
        }
        return {
          ...t,
          link: `/${t.code.toLocaleLowerCase()}`,
          thumbnail: require(`Assets/menu/${t.code}.png`),
          thisIndex: i
        }
      })
    },
    changeActive (num) {
      if ((this.activeIndex + num) < this.list.length && (this.activeIndex + num) >= 0) {
        this.activeIndex += num
      } else if ((this.activeIndex + num) >= this.list.length) {
        this.activeIndex = 0
      } else {
        this.activeIndex = this.list.length - 1
      }
    }
  }
}
</script>

<style lang="less" scoped>
.bounce-enter-active {
  transition: all 0.3s ease;
}

.bounce-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.bounce-enter,
.bounce-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.dynamic-menu {
  width: 640px;
  margin: 16px auto;

  .active {
    font-size: 18px;
    color: #00ff2a;
    line-height: 1;
    font-weight: bold;
    cursor: pointer;

    &::before {
      content: '';
      position: relative;
      top: -1.5px;
      right: 10px;
      width: 15px;
      height: 15px;
      line-height: 18px;
      display: inline-block;
      vertical-align: bottom;
      background: url('~Assets/menu/active.png') no-repeat;
    }
  }

  .close {
    position: absolute;
    top: 35px;
    right: 200px;
    display: inline-block;
    width: 13px;
    height: 13px;
    cursor: pointer;
    background: url('~Assets/menu/x.png') no-repeat;
  }

  .content {
    position: absolute;
    z-index: 99;
    top: 118px;
    left: 50%;
    margin-left: -700px;
    width: 1400px;
    height: 318px;
    background: url('~Assets/menu/bg1.png') no-repeat;
    overflow: hidden;

    .index-box {
      position: absolute;
      top: 31px;
      width: 100%;
      text-align: center;
      font-size: 18px;
      color: #00ff2a;
    }

    &::after {
      content: '';
      display: inline-block;
      position: relative;
      top: 68px;
      margin: 0 auto;
      width: 1198px;
      height: 238px;
      background: url('~Assets/menu/circle1.png') no-repeat;
    }

    .arrow {
      position: absolute;
      z-index: 9;
      top: 143px;
      width: 43px;
      height: 35px;
      cursor: pointer;
    }

    .left {
      left: 160px;
      background: url('~Assets/menu/pre.png') no-repeat;
    }

    .right {
      right: 160px;
      background: url('~Assets/menu/next.png') no-repeat;
    }

    .list {
      position: relative;
      top: 65px;
      width: max-content;
      list-style: none;

      .item {
        position: absolute;
        list-style: none;
        transition: all 1s ease;
        line-height: 1;

        .item-inner {
          display: block;
          text-decoration: none;

          img {
            width: 100%;
          }

          .name {
            display: block;
            line-height: 2.3;
            font-size: 18px;
            font-weight: bold;
            color: #046e62;

            &.highlight {
              color: #00ff2a;
            }
          }
        }
      }
    }
  }
}
</style>
