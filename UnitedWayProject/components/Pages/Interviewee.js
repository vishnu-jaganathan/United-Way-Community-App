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
  Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Camera, Permissions, Constants } from 'expo';
import {
  Recorder,
  Player,
} from 'react-native-audio-player-recorder-no-linking';
import * as firebase from 'firebase';
import * as lodash from 'lodash';

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

export default class Interviewee extends Component {
  constructor() {
    super();
    this.state = {
      textName2: '',
      textEmail2: '',
      textPhone2: '',
      textNeighborhood2: '',
      ButtonTitle: 'Picture',
      modalVisible: false,
      soundFileInfo: '',
    };
  }

  /* Name: onSubmit
   * Description: testing text input function to identify text being submitted upon button press
   * Returns:'Input Submitted' into the log
   */
  onSubmit() {
    console.log('Input Submitted...');
  }

  /* Name: setModalVisible
   * Description: called once audio has been renderd, to then close recording screen
   * Returns:action that closes recording screeen
   */
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  /* Name: openAudioRecording
   * Description: opens audio recording page once mic button is pressed
   * Returns:action that opens audio recording page
   */
  openAudioRecording = () => {
    this.setModalVisible(true);
  };

  /* Name: sendUserInfo
   * Description: Uploads interviewer & interviewee's name, neighborhood, email, and phone
   * to the firebase server through a json file while also navigating to the
   * recordings page
   * Parameters: Name, neighborhood, email, and phone as strings
   * Returns: none
   */
  sendUserInfo(
    name1,
    company1,
    email1,
    phone1,
    name2,
    neighborhood2,
    email2,
    phone2
  ) {
    // Create a root reference
    var storageRef = firebase.storage().ref();

    // Create a reference to 'interviewinfo.json'
    var interviewRef = storageRef.child('interviewinfo.json');

    // Create a reference to 'stories/(name of interview)/interviewinfo.json
    var interviewStoriesRef = storageRef.child(
      'Stories/' + name1 + '-' + name2 + '/interviewinfo.json'
    );

    //construct a blob for text
    var info = {
      Interviewer_Info: {
        name: name1,
        company: company1,
        email: email1,
        phone: phone1,
        //allows_publish_info: publish,
      },
      Interviewee_Info: {
        name: name2,
        neighborhood: neighborhood2,
        email: email2,
        phone: phone2,
      },
    };
    var blob = new Blob([JSON.stringify(info, null, 2)], {
      type: 'application/json',
    });

    var file = blob; // use the Blob or File API
    interviewStoriesRef.put(file).then(function(snapshot) {
      console.log('Uploaded a blob or file!');
    });

    //Used to send interviewer/interviewee information to Recordings Page
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    const hostName = navigation.getParam('hostName', 'NO NAME');
    this.props.navigation.navigate('Recordings', {
      subject: this.state.textName2,
      hostName: name1,
    });
  }

  /* Name: recorderComplete
   * Description: creates audio file that can be used for playback within the app
   * Returns: playable audio clip
   */
  recorderComplete = soundFileInfo => {
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
    this.setModalVisible(!this.state.modalVisible);
  };

  /* Name: uploadSound
   * Description: Uploads created audio file onto Firebase
   * Parameters: uri, name of file
   * Returns: audio file onto Firebase storage
   */
  uploadSound = async (uri, name) => {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    const hostName = navigation.getParam('hostName', 'NO NAME');
    const response = await fetch(uri);
    const blob = await response.blob();
    var ref = firebase
      .storage()
      .ref()
      .child(
        'Stories/' +
          hostName +
          '-' +
          this.state.textName2 +
          '/' +
          this.state.textName2 +
          ' IntroClip'
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
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    const hostName = navigation.getParam('hostName', 'NO NAME');
    const hostCompany = navigation.getParam('hostCompany', 'NO COMPANY');
    const hostEmail = navigation.getParam('hostEmail', 'NO EMAIL');
    const hostPhone = navigation.getParam('hostPhone', 'NO PHONE');
    const hostPublish = navigation.getParam('hostPublish', 'FALSE');

    var saveDirectory;

    return (
      <ImageBackground
        style={styles.BackgroundContainer}
        source={require('./Images/watermark.png')}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={'padding'}
          KeyboardVerticalOffset={-5}
          enabled>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}>
            <View style={styles.container}>
              <Text>{this.state.soundFileInfo}</Text>
              <View style={styles.backgroundModal}>
                <Text style={styles.titleModal}>
                  Please Record The Following Statement:
                </Text>
                <Text style={styles.textModal}>
                  "Hello my name is {this.state.textName2} and I live in the{' '}
                  {this.state.textNeighborhood2} neighborhood"
                </Text>

                <Recorder
                  style={{ flex: 5 }}
                  onComplete={this.recorderComplete.bind(this)}
                  maxDurationMillis={150000}
                  completeButtonText={'Finished'}
                  showDebug={false}
                  showBackButton={true}
                />
              </View>
            </View>
          </Modal>

          <View style={styles.whiteContainer}>
            <Text style={styles.title1}>Interviewee Information</Text>
            <TextInput
              style={styles.textInput2}
              placeholder="<Name>"
              value={this.state.textName2}
              onChangeText={textName2 => this.setState({ textName2 })}
              onSubmitEditing={this.onSubmit}
            />
            <TextInput
              style={styles.textInput2}
              placeholder="<Neighborhood Name>"
              value={this.state.textNeighborhood2}
              onChangeText={textNeighborhood2 =>
                this.setState({ textNeighborhood2 })
              }
              onSubmitEditing={this.onSubmit}
            />
            <TextInput
              style={styles.textInput2}
              placeholder="<Email>"
              value={this.state.textEmail2}
              onChangeText={textEmail2 => this.setState({ textEmail2 })}
              onSubmitEditing={this.onSubmit}
            />
            <TextInput
              style={styles.textInput2}
              placeholder="<Phone>"
              value={this.state.textPhone2}
              onChangeText={textPhone2 => this.setState({ textPhone2 })}
              onSubmitEditing={this.onSubmit}
            />
          </View>

          <View style={styles.MainContainer}>
            <TouchableOpacity
              style={styles.ButtonStyle}
              activeOpacity={0.5}
              onPress={this.openAudioRecording}>
              <Image
                source={require('./Images/mic_icon.png')}
                style={{ width: 100, height: 100 }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.ButtonStyle}
              activeOpacity={0.5}
              onPress={() =>
                navigate('CameraRules', {
                  subject: this.state.textName2,
                  hostName: hostName,
                })
              }>
              <Image
                source={require('./Images/camera-icon.png')}
                style={{ width: 100, height: 100 }}
              />
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center'}}>
          <View style={{ backgroundColor: '#F57814', width:200,}}>
              <TouchableOpacity
                onPress={() =>
                  this.sendUserInfo(
                    hostName,
                    hostCompany,
                    hostEmail,
                    hostPhone,
                    this.state.textName2,
                    this.state.textNeighborhood2,
                    this.state.textEmail2,
                    this.state.textPhone2
                  )
                }
                
                style={[styles.button]}>
                <Text style={styles.submitButtonTwo}> SUBMIT </Text>
              </TouchableOpacity>
        </View>
        </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  BackgroundContainer: {
    flex: 1,
  },
  title1: {
    color: 'black',
    fontFamily: 'Roboto',
    fontSize: 35,
    paddingBottom: 10,
    justifyContent: 'center',
  },
  textInput2: {
    color: 'black',
    fontFamily: 'Roboto',
    fontSize: 20,
    paddingBottom: 20,
  },
  submitButtonTwo: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 28,
    fontWeight: 'bold',
  },
  ButtonStyle: {
    borderRadius: 20,
    padding: 25,
  },
  MainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 2,
  },
  titleModal: {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: 28,
  },
  textModal: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 22,
    paddingTop: 25,
    fontFamily: 'Roboto',
    paddingBottom: 25,
  },
  backgroundModal: {
    flex: 1,
    backgroundColor: 'white',
  },
  whiteContainer: {
    backgroundColor: 'white',
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white',
  },
  button: {
    alignItems: 'center',
    padding: 15,
  },
});
