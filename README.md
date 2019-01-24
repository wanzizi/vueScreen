# screen_cli

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### src下项目结构

- assets：需要打包压缩的静态资源文件，img，video等
- components：组件集合，public是脱离业务的全局通用组件，其余是页面内部的小组件
- font：存放字体文件
- mixins：mixins文件集合
- plugins：插件集合，包含了通用ajax，通用配置，字典方法集合，过滤器，日期格式化工具，全局注册文件，小工具方法集合等文件
- router：路由文件集合，index为入口文件
- styles：样式文件集合
- views：页面集合
- App.vue：vue入口组件
- main.js：入口js文件

### 配置文件说明
项目使用了webpack v4.0+，webpack的配置在vue.config.js中。
gulp等相关配置在gulpfile.js和config.upload.js中。

### 项目说明：

该项目是大屏项目的基础结构文件，大屏有最佳展示尺寸，其余尺寸变形适配，所有的页面走public文件中frame过滤，frame为页面内容根据不同尺寸提供形变




