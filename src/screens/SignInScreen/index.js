import React from 'react';
import { StyleSheet,Text,View, Dimensions, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import CustomTextInput from '../../ui/CustomTextInput';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            {/* <Image
            source={require('../../assests/BalloonIcon.png')}
            style={styles.logo}
            resizeMode='stretch'
            /> */}
            <Text>Header</Text>
        </View>
        <Animatable.View 
        style={styles.footer}
        animation='fadeInUpBig'
        >
            <CustomTextInput />
            <CustomTextInput />
            <CustomTextInput />
            
        </Animatable.View>
        
    </View>
  );
}

export default SignInScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FAF5E4'
  },
  header: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 3,
      backgroundColor: '#F76E11',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#fff',
      fontSize: 26,
      fontWeight: 'bold'
  },
  text: {
      color: '#fff',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});