/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */
import React, { PureComponent } from 'react'

import {
  View,
  Alert,
  Image, ImageBackground,
  TextInput,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  RefreshControl

} from 'react-native'
import { connect } from 'react-redux'
import { getPoints, login } from '../../services/jpassport'
import styles from './style'
import { loginSuccess } from '../../actions'
import { CommonActions } from "@react-navigation/native";
import ButtonTextCommon from '../../components/ButtonTextCommon'
import TextComponent from '../../components/TextComponent'
import CameraRoll from "@react-native-community/cameraroll";
import { images } from '../../boot/image'
import BaseScreen from '../BaseScreen'
import HeaderBack from '../../components/HeaderBack';
import ContainerView from '../../components/ContainerView';
import AvatarComponent from '../../components/AvatarComponent';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../comon'

class SignUp extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      id: '',
      password: '',
      confirmPassword: '',
      name:'',
    
      modalVisible: false,
      photoList: [],
      newAvatarUrl: '',
      isLoading: false,
      page: 0,
      hasNextPage: false,
      refreshing:false
      
     
    }
  }







  onChangeText = text => {
    this.setState({
      email: text
    })
  }

  onChangePassText = text => {
    this.setState({
      password: text
    })
  }




  componentDidMount() {


  }
  signUp = async () => {
    // let email = 'leuducquy@gmail.com'
    // let password = 'Pimpim123@'



    console.log('hello')
    try {
      console.tron.display({
      name: `aa`,
       preview :``,
      value: {
        email: this.state.email,
      password: this.state.password,
     
      }
      })
      
      const res = await login(this.state.email, this.state.password)

      if (res && res.data && res.data.data.token) {

        const objecLogin = Object.assign({saveLogin:this.state.isChecked},res.data.data)
        console.tron.display({
          name: `objecLoginlogin`,
          preview: ``,
          value: {
            state: objecLogin
          }
        })
        this.props.loginSuccess(objecLogin)


      } else {
        Alert.alert('User name or password is not corrects')
      }


    } catch (error) {
      Alert.alert('User name or password is not correct')
      console.tron.display({
        name: `res error login`,
        preview: ``,
        value: {
          state: error
        }
      })
    }
  }
  getPhoto = async () => {
    const { page } = this.state;
    try {
      const result = await CameraRoll.getPhotos({ first: 18 * (page + 1), assetType: 'Photos'});
      console.tron.display({
      name: `getPhoto`,
       preview :``,
      value: {
      state: result
      }
      })
      

      this.setState({
        modalVisible: true,
        photoList: result.edges,
        page: page + 1,
        hasNextPage: result.page_info.has_next_page,
        refreshing: false
      });
    } catch (error) {
      console.tron.display({
        name: `getPhoto error `,
         preview :``,
        value: {
        state: error
        }
      
        })
    }
  };
  changeAvatar=()=>{

  }
  closeModal = () => {
    this.setState({ modalVisible: false });
  }
  render() {
    const { email, password ,refreshing,modalVisible,photoList} = this.state

    return (
      <BaseScreen>
     
      <HeaderBack
        text={`Sign Up`}
      />
      <ContainerView>

      
    
        
         
          <View>
          <AvatarComponent
            onPress={this.getPhoto}
          />
            <TextInput
             autoCapitalize={'none'}
              value={this.state.email}
              onChangeText={(email) => this.setState({ email })}
              placeholder={'Please enter your ID'}
              style={[styles.input, {
                marginBottom: 10
              }]}
              placeholderTextColor={Colors.placeholderTextColor}
            />
          
          </View>
          <View>
            <TextInput
          
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
              placeholder={'Please enter your password'}
              secureTextEntry={!this.state.showPass}

              style={styles.input}
              placeholderTextColor={Colors.placeholderTextColor}
            />
           
           
           
          </View>
          
          <ButtonTextCommon
            onPress={() => {
              this.login()
            }}
            textStyle={styles.textButton}
            containerStyle={styles.button}
            text={'Login'}
          />
          <TextComponent
          containerStyle={styles.signup}
          underline={true}
          text={`SIGN UP`} textStyle={styles.footerText}/>
          <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            this.setState({ modalVisible: false });
          }}
        >
          <View style={{ flex: 1 }}>
            <View style={styles.headerContainer}>
              <TouchableOpacity style={styles.leftHeaderContainer} onPress={this.closeModal}>
                <Icon name="ios-close" size={35} />
              </TouchableOpacity>
              <View style={styles.centerHeaderContainer}>
                <Text style={styles.centerHeaderStyle}>
                  {`Your library`}
                </Text>
              </View>
            </View>
            <FlatList
              data={photoList}
              style={{ flex: 1 }}
              columnWrapperStyle={{ justifyContent: 'space-evenly' }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.photoContainer}
                  onPress={() => this.onChoosePhoto(item.node.image.uri)}
                >
                  <Image source={{ uri: item.node.image.uri }} style={styles.photoStyle} />
                </TouchableOpacity>
              )}
              keyExtractor={item => `${item.node.timestamp}`}
              numColumns={3}
             
              refreshing={refreshing}
              onEndReached={this.loadmore}
              onEndReachedThreshold={
                // eslint-disable-next-line
                photoList && photoList.length > 18 && photoList.length % 18 === 0 ? 0.1 : null
              }
              onScrollBeginDrag={() => {
                this.onEndReachedCalledDuringMomentum = true;
              }}
              refreshControl={(
                <RefreshControl
                  refreshing={refreshing}
                  tintColor={Colors.theme}
                  colors={[Colors.theme]}
                  onRefresh={() => {
                    this.setState({ page: 0 }, () => {
                      this.getPhoto();
                    });
                  }}
                />
)}
            />
          </View>
        </Modal>
          </ContainerView>
      </BaseScreen>

    )
  }
}
const mapStateToProps = state => ({
  site: state.site,
  auth: state.auth
})
const mapDispatchToProps = dispatch => ({
  loginSuccess: data => dispatch(loginSuccess(data)),
  dispatch
})
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
