import React, { Component } from 'react';
import {
  Button,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Alert,
  View,
  ImageBackground,
} from 'react-native';
import { ImagePicker, Permissions, Constants } from 'expo';
import * as firebase from 'firebase';
import { StackNavigator } from 'react-navigation';

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

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
    };
  }

  state = {
    result: null,
  };

  askPermissionsAsync = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    // you would probably do something to verify that permissions
    // are actually granted, but I'm skipping that for brevity
  };

  useCameraHandler = async () => {
    await this.askPermissionsAsync();
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [3, 4],
      base64: false,
    });
    this.setState({ result });

    if (!result.cancelled) {
      this.uploadImage(result.uri, this.state.userName)
        .then(() => {
          Alert.alert('Success');
        })
        .catch(error => {
          Alert.alert(error);
        });
    }
  };

  uploadImage = async (uri, imageName) => {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    const subject = navigation.getParam('subject', 'NO NAME');
    const hostName = navigation.getParam('hostName', 'NO COMPANY');
    const response = await fetch(uri);
    const blob = await response.blob();
    var ref = firebase
      .storage()
      .ref()
      .child('Stories/' + hostName + '-' + subject + '/' + subject + ' Image');

    return ref.put(blob);
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground style={styles.bcontainer}>
        <View style={styles.container}>
          <Button
            title="Take Picture"
            onPress={this.useCameraHandler}
            color="#F57814"
          />
          <Button
            title="Finished"
            onPress={() => navigate('Interviewee')}
            color="#FFB351"
          />
          <Text style={styles.paragraph}>
            {JSON.stringify(this.state.result)}
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 300,
  },
  bcontainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  paragraph: {
    marginHorizontal: 15,
    marginTop: 30,
    fontSize: 18,
    color: '#34495e',
  },
});
