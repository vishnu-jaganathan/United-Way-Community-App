import React, { Component } from 'react';
import { View, ImageBackground,StyleSheet, Text,TouchableOpacity,TextInput,KeyboardAvoidingView} from 'react-native';
import {StackNavigator} from 'react-navigation'

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Password Screen~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
//creating the page PasswordScreen
class PasswordScreen extends Component {
  static navigationOptions ={
    title: 'PasswordScreen',
  };


  //Ghost text that will appear on the screen
  //just backspace to type over it
  constructor(props) {
    super(props);
    this.state = { text: 'Event Password' };
  }


  render() {
    //this tells the page to navigate to another page
    const {navigate} = this.props.navigation;

    return (
      <ImageBackground 

        source = {require('./watermark.png')}
        style = {styles.container}>
      <KeyboardAvoidingView style={{flex:1}} behavior={"height"} KeyboardVerticalOffset={0} enabled>

        {/*creating the text that instructs the user to type in the event password*/}
        <Text style = {styles.textScreen}>Enter Today's Event Code: </Text>

      {/*Creating the ghost text*/}
        <TextInput
        style={styles.inputText}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />

        {/*!!!!!NEED TO LINK THE SUBMIT BUTTON TO THE NEXT PAGE!!!!*/}
        {/*Creation of the Submit Button */}
        {/*Creating the button styleSheet required for the Submit button*/}
        <View style={styles.buttonContainer}>
        {/*allows the background to be seen through while the user is pressing down on the Submit button*/}
        <TouchableOpacity onPress={this._onPressButton}>
        {/*Creating the button styleSheet responsible for the Submit button color and button text*/}
        <View style={styles.button}>
        <Text style={styles.buttonText}>SUBMIT</Text>
        </View>  
        </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
      </ImageBackground>

    );
  }
}



/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~HomeScreen~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
class HomeScreen extends Component {
  //creating the HomeScreen
    static navigationOptions ={
      title: 'HomeScreen'
    };


  render() {
    //give it the ability to navigate to the next page
    const {navigate} = this.props.navigation;


    return (
      //uploading the front page image, creating a styleSheet for the front page image,
      //and creating a filter to place over the front page
      <ImageBackground 
        source = {require('./UnitedWayFrontPage.png')}
        style = {styles.container}>
        <View style = {styles.overlayContainer}>

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
          </View>
      </ImageBackground>
    );
  }
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Style Sheet for all pages~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
//responsible for the aesthetic of the app
const styles = StyleSheet.create({
  //ImageBackground
  container:{
    flex: 1,
    width: '100%',
    height: '100%',
  },
  //adding a mute gray overlay on the background image
  overlayContainer: {
    flex: 1,
    backgroundColor: 'rgba(240,255,250,.20)'
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
    backgroundColor: '#969696',
    
  },
  //button text for the HomeScreen
  homeText: {
    padding: 20,
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 28,
    fontWeight:'bold',
  },

//TextInput
  inputText: {
    fontSize: 24,
    fontFamily: 'Roboto',
    color: '#969696',
    padding: 10,
  },
//Submit Button Position on the screen
  buttonContainer: {
    paddingTop: 150,
    alignItems: 'center',
    },
//Submit button color
  button: {
    marginBottom: 100,
    width: 200,
    alignItems: 'center',
    backgroundColor: '#F57814', 
  },
//button text for the submit button
buttonText: {
    padding: 20,
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 28,
    fontWeight:'bold',
},
// formatting the text on the screen
textScreen: {
  fontFamily: 'Roboto',
  fontSize:28,
  color: 'black',
  fontWeight: 'bold',
  padding: 30,
},

});

const NavigationApp = StackNavigator({
  HomeScreen: {screen: HomeScreen},
  PasswordScreen: {screen: PasswordScreen},
});

export default class App extends Component{
  render(){
    return <NavigationApp />;
  }
}

