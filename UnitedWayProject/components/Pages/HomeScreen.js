import React, { Component } from 'react';
import { View, ImageBackground,StyleSheet, Text,TouchableOpacity,TextInput,KeyboardAvoidingView} from 'react-native';
import {StackNavigator} from 'react-navigation'

export default class HomeScreen extends Component {
  render() {
    //give it the ability to navigate to the next page
    const {navigate} = this.props.navigation;
    return (
      //uploading the front page image, creating a styleSheet for the front page image,
      //and creating a filter to place over the front page
      <ImageBackground 
        source = {require('./Images/UnitedWayFrontPage.png')}
        style = {styles.container}>
            {/*Creating the button styleSheet responsible for button position*/}
            <View style={styles.homeContainer}>
            {/*TouchableOpacity will allow the background to be seen through while the user is pressing down*/}
            <TouchableOpacity onPress={() => navigate('PasswordScreen')}>
            {/*creating the styleSheets responsible for the button size and button text */}
            <View style={styles.homeButton}>
            <Text style={styles.homeText}>SHARE YOUR STORY</Text>
            </View>
            </TouchableOpacity>
            </View>
      </ImageBackground>
    );
  }
}

//responsible for the aesthetic of the app
const styles = StyleSheet.create({
  //ImageBackground
  container:{
    flex: 1,
  },
  //button location on the HomeScreen
  homeContainer: {
    paddingTop: 100,
    alignItems: 'center',
    position: 'absolute',
    bottom: -40,
    left: 30,
  },
  //button size and color for the HomeScreen
  homeButton: {
    marginBottom: 100,
    width: 350,
    alignItems: 'center',
    backgroundColor: '#F57814', 
    
  },
  //button text for the HomeScreen
  homeText: {
    padding: 20,
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 28,
    fontWeight:'bold',
  },
});