import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';

import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCU1cix2Zi-4rCtx0_TYJOG-8DNJS1-_6U',
  authDomain: 'uwstory-ad41a.firebaseapp.com',
  databaseURL: 'https://uwstory-ad41a.firebaseio.com',
  projectId: 'uwstory-ad41a',
  storageBucket: 'uwstory-ad41a.appspot.com',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default class PasswordScreen extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
      ButtonStateHolder: true,
      dataSource: null,
      isAuthenticated: false,
    };
  }
  //The function does not take any input but as soon as the password page is open
  //function is fetching, or returning, information from the API. It does that because  the componentDidMount
  //has that built in capability to run without being called in the render
  //more information can be found here: https://facebook.github.io/react-native/docs/network
  componentDidMount() {
    return fetch('https://uwstory-ad41a.firebaseio.com/.json')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            dataSource: responseJson,
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  //Function that is called in the render. The function does not have input and it does not return anything either
  //It puts the information fetched from the componentDidMount Function into an array
  //then a for loop goes through the array to see if what was typed in matches any of the access codes
  // if it does match, the user is navigated to the next page
  //otherwise, the user gets a message saying that the password they typed in is invalid
  onPress = input => {
    const { navigate } = this.props.navigation;
    var correctInput = false;
    var passList = this.state.dataSource;
    var i;
    for (i = 0; i < passList.length; i++) {
      if (this.state.password == passList[i].access_code) {
        correctInput = true;
      }
    }
    /* You can now access the anonymous users details using the auth#currentUser property.

If the user closes and re-opens the app, Firebase will automatically sign them back in to the anonymous account they've already been assigned if available.

For more informaiton follow this link: https://rnfirebase.io/docs/v4.3.x/auth/getting-started*/
    if (correctInput) {
      firebase
        .auth()
        .signInAnonymously()
        .then(() => {
          this.setState({
            isAuthenticated: true,
          });
        });

      console.log('Authentication Succesfull');
      navigate('Interviewer');
    } else {
      alert('Invalid Password');
    }
  };

  render() {
    return (
      //uploading the front page image, creating a styleSheet for the front page image
      <ImageBackground
        source={require('./Images/watermark.png')}
        style={styles.container}>
        <View style={styles.containerView}>
          <Text style={styles.loginText}>Enter Event Password</Text>
      {/* creating the password box */}
      {/* saving the password typed in and turning the button orange when anything is typed in*/}
          <TextInput
            name="password"
            style={styles.inputText}
            placeholder="<Password>"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={text =>
              this.setState({ password: text, ButtonStateHolder: false })
            }
          />

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
            //calling the onPress function
            onPress={() => this.onPress(this.state.password)}>
            {/*Creating the button styleSheet responsible for the Submit button color and button text*/}
            <Text style={styles.buttonText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

//responsible for the aesthetic of the app
const styles = StyleSheet.create({
  //for the placement of the enter event password text
  containerView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 30,
  },
//for the background image
  container: {
    flex: 1,
  },
// responsible for the text: Enter Event Password
  loginText: {
    fontFamily: 'Roboto',
    fontSize: 30,
    color: 'black',
  },
//responsible for the ghost text password
  inputText: {
    height: 50,
    width: 150,
    fontSize: 24,
  },
  //Submit button color
  button: {
    alignItems: 'center',
    padding: 15,
  },
  //button text for the submit button
  buttonText: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 28,
    fontWeight: 'bold',
  },
});
