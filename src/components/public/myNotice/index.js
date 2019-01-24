import Vue from 'vue'
import Notice from './main.vue'
import { getUuid } from 'Plugins/util.js'

let noticeInstance
let defaultDuration = 3
let notify = null

function newInstance (_props) {
  const Instance = new Vue({
    render (h) {
      return h(Notice, {
        props: _props
      })
    }
  })

  const component = Instance.$mount()
  document.body.appendChild(component.$el)
  notify = Instance.$children[0]

  return {
    notice (noticeProps) {
      notify.add(noticeProps)
    }
  }
}

function getNoticeInstance () {
  noticeInstance = noticeInstance || newInstance()

  return noticeInstance
}

export default {
  open (options) {
    let instance = getNoticeInstance()

    instance.notice({
      name: options.name || getUuid(),
      duration: options.duration || defaultDuration,
      styles: {},
      transitionName: 'move-notice',
      content: options.desc,
      // render: render,
      title: options.title,
      onClose: options.onClose,
      closable: true,
      type: 'notice'
    })
  }
}
