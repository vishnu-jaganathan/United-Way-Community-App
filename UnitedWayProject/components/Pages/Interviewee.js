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
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Camera, Permissions } from 'expo';

export default class Interviewee extends Component {
  constructor() {
    super();
    this.state = {
      textName2: '',
      textAddress: '',
      textEmail2: '',
      textPhone2: '',
      textNeighborhood2: '',
      switchValueOne: false,
      switchValueTwo: false,
      ButtonStateHolder: true,
      ButtonTitle: 'Picture',
      modalVisible: false,
    };
  }

  onSubmit() {
    console.log('Input Submitted...');
  }

  onSwitchChangeOne(value) {
    this.setState({
      switchValueOne: value,
      ButtonStateHolder: !value,
    });
  }

  onSwitchChangeTwo(value) {
    this.setState({
      switchValueTwo: value,
    });
  }

  SampleButtonFunction = () => {
    Alert.alert('Move to Camera Roll');
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  SampleButtonFunctionTwo = () => {
    this.setModalVisible(true);
  };

  render() {
    const { navigate } = this.props.navigation;
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
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={styles.backgroundModal}>
              <Text style={styles.titleModal}>
                Please Record The Following Statement:
              </Text>
              <Text style={styles.textModal}>
                "Hello my name is {this.state.textName2} and I live in the{' '}
                {this.state.textNeighborhood2} neighborhood"
              </Text>
              <View style={styles.MainContainer}>
                <TouchableOpacity
                  style={styles.ButtonStyleModal}
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Text style={styles.submitButtonModal}>BACK</Text>
                </TouchableOpacity>
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
            placeholder="<Address>"
            value={this.state.textAddress}
            onChangeText={textAddress => this.setState({ textAddress })}
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
            value={this.state.textEmail}
            onChangeText={textEmail => this.setState({ textEmail })}
            onSubmitEditing={this.onSubmit}
          />
          <TextInput
            style={styles.textInput2}
            placeholder="<Phone>"
            value={this.state.textPhone}
            onChangeText={textPhone => this.setState({ textPhone })}
            onSubmitEditing={this.onSubmit}
          />
          
          </View>


          <View style={styles.MainContainer}>
            <TouchableOpacity
              style={styles.ButtonStyle}
              activeOpacity={0.5}
              onPress={this.SampleButtonFunctionTwo}>
            <Image source={require('./Images/mic_icon.png')} style={{width: 100, height: 100}}/>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.ButtonStyle}
              activeOpacity={0.5}
              //onPress={this.SampleButtonFunctionTwo}
              onPress={() => navigate('CameraScreen')}>
              <Image source={require('./Images/camera-icon.png')} style={{width: 100, height: 100}}/>
            </TouchableOpacity>
          </View>
          
            <View style={styles.buttonContainer}>
            <View style={styles.moveButton}>
            <TouchableOpacity
              onPress={() => navigate('Recordings')}>
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
    fontWeight: 'bold',
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
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: 38,
    padding: 10,
  },
  ButtonStyle: {
    borderRadius: 20,
    padding: 25,
    justifyContent: 'center',
  },
  MainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 100
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
  submitButtonModal: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: 32,
    padding: 10,
    backgroundColor: '#F57814',
  },
  ButtonStyleModal: {
    borderRadius: 5,
    paddingTop: 10,
  },
  whiteContainer:{
  backgroundColor: 'white',
},
buttonContainer:{
  paddingTop: 50,
    alignItems: 'center',
    position: 'absolute',
    bottom: -40,
    left: 30,
},
moveButton:{
  marginBottom: 100,
    width: 350,
    alignItems: 'center',
    backgroundColor: '#F57814',
},
});