import React, { Component } from 'react'
import { View, Image ,TouchableOpacity} from 'react-native'
import { images } from '../../boot/image'
import ImageComponent from '../ImageComponent'
import RowComponent from '../RowComponent'
import ButtonImage from '../ButtonImage'

import styles from './style'
// create a component
export default class AvatarComponent extends Component {
  render() {
    const {onPress } = this.props
    return <TouchableOpacity 
    onPress={onPress}
    style={[styles.container]}>
    <View>
    <ButtonImage
    onPress={onPress}
    containerStyle={styles.image}
    imageStyle={styles.image}
      source={images.avatarIcon}
    />
    <Image
    style={styles.photoImage}
      source={images.photoButton}
    />
    </View>
  
  </TouchableOpacity>
  }
}
