

import React from 'react';
import { StyleSheet,Text,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './src/navigation/RootStackScreen';

function App() {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
}

export default App;
