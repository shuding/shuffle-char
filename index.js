'use strict'

var React = require('react')

Object.defineProperty(exports, '__esModule', {
  value: true
})

var Shuffler = React.createClass({
  displayName: 'Shuffler',
  getInitialState: function() {
    return {
      content: ' ' // this.props.children
    }
  },
  componentDidMount: function() {
    this.setTimer()
  },
  componentWillUnmount: function() {
    this.clearTimer()
  },
  componentWillReceiveProps: function(nextProps) {
    this.clearTimer()
    this.setTimer(nextProps)
  },
  setTimer: function(props) {
    var p = props || this.props
    var esc = (!p.escape && p.escape !== '') ? ' ' : p.escape

    if (p.on && esc.indexOf(this.props.children) === -1) {
      var idle = (p.idle || 100) * (Math.random() * 0.3 + 0.7)
      this.timer = setInterval(this.updateContent, idle)
    } else {
      this.restoreContent()
    }
  },
  clearTimer: function() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  restoreContent: function() {
    this.state.content = this.props.children
    this.forceUpdate()
  },
  updateContent: function() {
    var charset = this.props.charset || '0-9a-zA-Z_$#?-+|('
    var chars = ''
    charset = charset.replace(/0-9/g, function () {
      chars += '0123456789'
      return ''
    })
    charset = charset.replace(/a-z/g, function () {
      chars += 'abcdefghijklmnopqrstuvwxyz'
      return ''
    })
    charset = charset.replace(/A-Z/g, function () {
      chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      return ''
    })
    chars += charset

    var len = chars.length
    this.state.content = chars[~~(Math.random() * len)]

    this.forceUpdate()
  },
  render: function () {
    return React.createElement('span', null, this.state.content)
  }
})

module.exports = exports.default = React.createClass({
  displayName: 'ShuffleChar',
  getInitialState: function() {
    if (!this.props.children || typeof this.props.children !== 'string') {
      throw new Error('content must be string!')
    }

    return {
      content: this.props.children
    }
  },
  render: function () {
    var props = this.props

    return React.createElement('span', null, [].map.call(
        props.children, function (c, index) {
          return React.createElement(Shuffler, {
            charset: props.charset,
            escape: props.escape,
            idle: props.idle,
            on: props.on,
            key: 'shuffle-' + index
          }, c)
        }
      )
    )
  }
})
