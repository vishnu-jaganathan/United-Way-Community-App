import React, { Component } from 'react';
import { View, ImageBackground,StyleSheet, Text,TouchableOpacity,TextInput,KeyboardAvoidingView} from 'react-native';
import {StackNavigator} from 'react-navigation'

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Password Screen~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
//creating the page PasswordScreen
export default class PasswordScreen extends Component {

  //just backspace to type over it
   constructor() {
    super();
    this.state = {
      textPassword: '',
      ButtonStateHolder: true,};
  }
  
  render() {
    //this tells the page to navigate to another page
    const {navigate} = this.props.navigation;

    return (
      <ImageBackground 

        source = {require('./Images/watermark.png')}
        style = {styles.container}>
      <KeyboardAvoidingView style={{flex:1}} behavior={"height"} KeyboardVerticalOffset={0} enabled>
      <View style={styles.whiteContainer}>

        {/*creating the text that instructs the user to type in the event password*/}
        <Text style = {styles.textScreen}>Enter Today's Event Code: </Text>

      {/*Creating the ghost text*/}
        <TextInput
            style={styles.inputText}
            placeholder="<Password>"
            value={this.state.textPassword}
            onChangeText={textPassword => this.setState({ 
              ButtonStateHolder: false,
              textPassword})}
            secureTextEntry={true}
          />
      
        </View>
        {/*!!!!!NEED TO LINK THE SUBMIT BUTTON TO THE NEXT PAGE!!!!*/}
        {/*Creation of the Submit Button */}
        {/*Creating the button styleSheet required for the Submit button*/}
        <View style={styles.buttonContainer}>
        {/*allows the background to be seen through while the user is pressing down on the Submit button*/}
        <TouchableOpacity 
        style={[
                styles.button,
                {
                  backgroundColor: this.state.ButtonStateHolder
                    ? '#607D8B'
                    : '#F57814',
                },
              ]}
        disabled={this.state.ButtonStateHolder}
        onPress={() => navigate('Interviewer')}
        >
        {/*Creating the button styleSheet responsible for the Submit button color and button text*/}
        <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
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
  },
  //adding a mute gray overlay on the background image
//TextInput
  inputText: {
    fontSize: 24,
    fontFamily: 'Roboto',
    color: 'black',
    padding: 20
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
  fontSize:32,
  color: 'black',
  fontWeight: 'bold',
  paddingBottom: 10
},

whiteContainer:{
  backgroundColor: 'white',
},
});