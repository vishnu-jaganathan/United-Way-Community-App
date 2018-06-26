import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import  HomeScreen  from './components/HomeScreen';
import PasswordScreen  from './components/PasswordScreen';
import View from 'react-native';

const NavigationApp = StackNavigator({
  HomeScreen: {screen: HomeScreen},
  PasswordScreen: {screen: PasswordScreen},
});

export default class App extends Component{
  render(){
    return <NavigationApp />;
  }  
}

<View>
  <HomeScreen/>
  <PasswordScreen/>
</View>

