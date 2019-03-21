<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
@import 'Styles/font.less';

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
ul,li{
  list-style: none;
}
// 所有内部模块通用样式设置
.common-module-set{
  position: relative;
  height: 100%;
}
</style>
