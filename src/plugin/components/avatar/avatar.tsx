import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import './avatar.less'

export default class Avatar extends Component {
  render () {
    return (
      <View>
        <span>plugin span：Hello world!</span>
        <Image src='http://storage.360buyimg.com/taro-static/static/images/logo.png' />
      </View>
    )
  }
}
