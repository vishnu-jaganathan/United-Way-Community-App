import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Alert,
  Switch,
  Modal,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Interviewer from './components/Pages/Interviewer';
import Interviewee from './components/Pages/Interviewee';

export default class myapp extends Component {
  render() {
    return <NavigationApp />;
  }
}

<View> 
  <Interviewer />
  <Interviewee />
</View>



const NavigationApp = StackNavigator({
  Interviewer: { screen: Interviewer },
  Interviewee: { screen: Interviewee },
});



AppRegistry.registerComponent('myapp', () => myapp);
