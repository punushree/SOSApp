import React from 'react';
import { StyleSheet,Text,View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ContactsScreen from '../screens/ContactsScreen/index';

const MainStack = createNativeStackNavigator();
const MainStackScreen = () => {
  return (
    <MainStack.Navigator screenOptions={
      {
        headerShown: false
      }
    }>
        
        <MainStack.Screen name='HomeScreen' component={HomeScreen} />
        <MainStack.Screen name='contactsScreen' component={ContactsScreen} />

    </MainStack.Navigator>
  );
}
export default MainStackScreen;