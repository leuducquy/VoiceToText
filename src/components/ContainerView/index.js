import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { images } from '../../boot/image'
import ImageComponent from '../ImageComponent'
import RowComponent from '../RowComponent'
import TextComponent from '../TextComponent'

import styles from './style'
// create a component
export default class ContainerView extends Component {
  render() {
    const {style } = this.props
    return <View style={[styles.container]}>
      {this.props.children}
    </View>
  }
}
