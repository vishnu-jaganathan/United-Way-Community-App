import React from 'react';
import {StyleSheet, Text, View, Image, Alert, Button, TouchableOpacity, ImageBackground,} from 'react-native';
import {createStackNavigator, } from 'react-navigation';
import Recordings from './components/Recordings'
import VoiceCapture from './components/VoiceCapture'


const NavigationApp = createStackNavigator({
  Recordings: { screen: Recordings },
  VoiceCapture: { screen: VoiceCapture },
});

export default class App extends React.Component {
  render() {
    return <NavigationApp />;
  }
}

<View>
  <Recordings/>
  <VoiceCapture/>
</View>

