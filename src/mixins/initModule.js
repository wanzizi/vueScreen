import header from 'Components/commonModules/public/header.vue'

export default {
  components: {
    'my-header': header
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.baseConfig.forEach(t => {
        this.list.push(
          {
            name: t.code,
            size: {
              width: t.width,
              height: t.height,
              left: t.positionLeft,
              top: t.positionTop
            },
            data: t
          }
        )
      })
      this.list.unshift({
        name: 'my-header',
        size: {
          width: 1920,
          height: 100,
          left: 0,
          top: 10
        }
      })
    }
  }
}
