
import { Colors,Fonts } from '../../comon';
import * as d from '../../comon/Transform'
const styles = {
  image:{
    width:60,
    height:60
  },
  input:{
    height:44,
    width:d.windowSize.width - 20,
    backgroundColor: Colors.greyBackGround,
   
    borderRadius: 5,
    paddingLeft: 10,
    color:Colors.text
   
  },
  overLay:{

  },
  signIn:{
    fontFamily: Fonts.bold,
    fontSize:30
  },
  remember:{
    marginTop:20,
  justifyContent:`space-between`,
  width:d.windowSize.width -20,
  alignItems: `center`,
 
 
  },
  emailIcon:{
    position: `absolute`,
    top: 10,
   
    left: 10,
    
    
  },
  eyeIcon:{
    position: `absolute`,
   bottom:15,
   
    right: 10,
    
    
  },
  button:{
    backgroundColor: 'rgba(69,90,237, 1.0)',
   width: d.windowSize.width - 20,
  marginTop:20,
  marginBottom:20
  },
  textButton:{
    color:Colors.white,
    fontFamily: Fonts.bold
  },
  footerText:{
    color:'#354052',
  
  },
  signup:{
  marginRight: 10,
   alignSelf: `flex-end`
  },
  textInput:{
    color:Colors.white
  },
  
};
export default styles;
