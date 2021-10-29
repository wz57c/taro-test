import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import './index.less'

const myPluginInterface = Taro.requirePlugin('myPlugin')

export default class Index extends Component {
  componentDidMount () {
    myPluginInterface.sayHello()
    const answer = myPluginInterface.answer
    console.log('answer: ', answer)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <div>
        <span>page span：Hello world!</span>
        <avatar />
      </div>
    )
  }
}
  