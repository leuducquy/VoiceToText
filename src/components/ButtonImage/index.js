import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './style'
// create a component
export default class ButtonImage extends Component {
  render() {
    const {
     
      containerStyle,
      onPress,
     
      disabled = false,
      imageStyle,
      source
    } = this.props
    return (
      <TouchableOpacity
        disabled={disabled}
        style={[styles.container, containerStyle]}
        onPress={() => onPress()}
      >
       <Image
       resizeMode={'contain'}
       style={[styles.image,imageStyle]}
        source={source}/>
      </TouchableOpacity>
    )
  }
}
