module.exports = {
  version: '1.0.0',
  env: 'jingning',
  // 上传配置
  ssh: {
    host: '',
    port: 22,
    username: '',
    password: ''
  },
  remoteDir: ``,
  commands: [
    // 删除现有文件
    `rm -rf /static`,
    `rm -f /index.html`
  ]
}
