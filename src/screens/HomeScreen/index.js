import React from 'react';
import { StyleSheet,Text,View, Dimensions, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { AuthContext } from '../../components/context';

const ContactsScreen = ({navigation}) => {

    const { signOut } = React.useContext(AuthContext)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Title</Text>

      <View style={styles.contentContainer}>
      <View style={styles.imgContainer}>
        <Text style={styles.textSign}>
            Image Here
        </Text>
        </View>
        <View style={styles.textView}>
         <Text>Text Here</Text>
        </View>

        <View style={styles.contactsBtn}>
        <TouchableOpacity
        onPress={() => navigation.navigate('contactsScreen')}
        >
          <Text style={styles.textSign}>
            Add Emergency Contacts
          </Text>
        </TouchableOpacity>
        </View>

        <View style={styles.btnView}>
        <TouchableOpacity
        onPress={() => {signOut()}}
        >
          <Text style={styles.textSign}>
            SignOut
          </Text>
        </TouchableOpacity>
        </View>
        </View>
        
    </View>
  );
}

export default ContactsScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    height: '100%', 
    backgroundColor: '#009387',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#fff',
      fontSize: 26,
      fontWeight: 'bold',
      alignSelf: 'center',
      paddingTop: 10,
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
  },

  imgContainer: {
   borderWidth: 1,
   borderColor: 'black',
   height: '40%',
   width: '70%',
   marginVertical: 15,
   marginTop: 40,
  },

  textView: {
    borderWidth: 1,
    borderColor: 'black',
    height: '25%',
   width: '70%',
   marginVertical: 10,
  
  },

  contactsBtn: {
    
    backgroundColor: 'blue',
    color: '#fff',
    width: '80%',
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    
  },

  btnView: {
   alignSelf: 'flex-end',
   backgroundColor: 'blue',
   color: '#fff',
   width: '30%',
   height: 40,
   alignItems: 'center',
   justifyContent: 'center',
   marginTop: 20,
   borderRadius: 20,
  }
});