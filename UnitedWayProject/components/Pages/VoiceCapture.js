import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Button,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import { Constants } from 'expo';
import {
  Recorder,
  Player,
} from 'react-native-audio-player-recorder-no-linking';
import * as firebase from 'firebase';
import * as lodash from 'lodash';
import Interviewee from './Interviewee';

//Init Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCU1cix2Zi-4rCtx0_TYJOG-8DNJS1-_6U',
  authDomain: 'uwstory-ad41a.firebaseapp.com',
  databaseURL: 'https://uwstory-ad41a.firebaseio.com',
  projectId: 'uwstory-ad41a',
  storageBucket: 'uwstory-ad41a.appspot.com',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default class VoiceCapture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      soundFileInfo: '',
      clipName: '',
      subject: this.props.navigation.state.params.subject,
    };
  }

  _onPressButton() {
    Alert.alert('button works');
  }

  recorderComplete = soundFileInfo => {
    const { navigate } = this.props.navigation;
    soundFileInfo =
      typeof soundFileInfo === 'object'
        ? JSON.stringify(soundFileInfo, undefined, 2)
        : soundFileInfo;
    var index = soundFileInfo.indexOf('uri');
    index = index + 7;
    var secondIndex = soundFileInfo.indexOf('isDirectory');
    secondIndex = secondIndex - 6;
    soundFileInfo = soundFileInfo.slice(index, secondIndex);
    this.setState({
      soundFileInfo: soundFileInfo,
    });
    this.uploadSound(soundFileInfo, 'test');
    navigate('Recordings');
  };

  uploadSound = async (uri, name) => {
    const subject = this.props.navigation.state.params.subject;
    const name1 = this.props.navigation.state.params.name1;
    //Alert.alert("hi");
    const response = await fetch(uri);
    const blob = await response.blob();
    var ref = firebase
      .storage()
      .ref()
      .child(
        'Stories/' +
          name1 +
          '-' +
          subject +
          '/' +
          subject +
          this.props.navigation.state.params.number
      );

    ref
      .put(blob)
      .then(() => {
        Alert.alert('Success');
      })
      .catch(error => {
        Alert.alert(error);
      });
  };
  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require('./Images/watermark.png')}>
        <View
          style={{
            justifyContent: 'center',
            backgroundColor: 'white',
          }}>
          <Text style={styles.text}>
            {this.props.navigation.state.params.question}
          </Text>
        </View>
        <View style={{ padding: 180 }}>
          <View style={styles.containerR}>
            <Text>{this.state.soundFileInfo}</Text>
            <Recorder
              style={{ flex: 1 }}
              onComplete={this.recorderComplete.bind(this)}
              maxDurationMillis={150000}
              completeButtonText={'Finished'}
              showDebug={false}
              showBackButton={true}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
    fontSize: 22,
    color: 'black',
    fontFamily: 'Roboto',
    paddingBottom: 23,
  },

  containerR: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white',
  },
});
