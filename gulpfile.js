// var combiner = require('stream-combiner2')
// var uglify = require('gulp-uglify')
var gulp = require('gulp')
// var del = require('del')
var minimist = require('minimist')
var GulpSSH = require('gulp-ssh')
// 获取通过命令行传进来的值
var knownOptions = {
  string: 'env',
  default: {
    env: process.env.NODE_ENV || 'production'
  }
}

var options = minimist(process.argv.slice(2), knownOptions)
var env = options.env
console.log(env)
// 载入配置文件

const configFile = {
  s1: require(`./config.upload.js`)
}

for (let attr in configFile) {
  let sshConfig = configFile[attr].ssh
  // 打开ssh通道
  let gulpSSH = new GulpSSH({
    ignoreErrors: false,
    sshConfig: sshConfig
  })

  gulp.task('default', [attr], function () {
    // 将你的默认的任务代码放在这
  })
  gulp.task(attr, [(attr + 'execSSH')], () => {
    console.log('上传...')
    setTimeout(() => {
      return gulp
        .src(['./dist/**', '!**/node_modules/**'])
        .pipe(gulpSSH.dest(configFile[attr].remoteDir))
    }, 3000)
  })
  gulp.task((attr + 'execSSH'), () => {
    console.log('删除...')
    return gulpSSH.shell(configFile[attr].commands, {
      filePath: 'commands.log'
    })
      .pipe(gulp.dest('logs'))
  })
}
