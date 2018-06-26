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
        source={require('./watermark.png')}>
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
                  <Text style={styles.submitButtonModal}>Hide Modal</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <Text style={styles.title1}>Interviewee Information</Text>
          <TextInput
            style={styles.textInput2}
            placeholder="Enter Your Name"
            value={this.state.textName2}
            onChangeText={textName2 => this.setState({ textName2 })}
            onSubmitEditing={this.onSubmit}
          />
          <TextInput
            style={styles.textInput2}
            placeholder="Enter Your Address"
            value={this.state.textAddress}
            onChangeText={textAddress => this.setState({ textAddress })}
            onSubmitEditing={this.onSubmit}
          />
          <TextInput
            style={styles.textInput2}
            placeholder="Enter Your Neighborhood Name"
            value={this.state.textNeighborhood2}
            onChangeText={textNeighborhood2 =>
              this.setState({ textNeighborhood2 })
            }
            onSubmitEditing={this.onSubmit}
          />
          <TextInput
            style={styles.textInput2}
            placeholder="Enter Your Email"
            value={this.state.textEmail}
            onChangeText={textEmail => this.setState({ textEmail })}
            onSubmitEditing={this.onSubmit}
          />
          <TextInput
            style={styles.textInput2}
            placeholder="Enter Your Phone"
            value={this.state.textPhone}
            onChangeText={textPhone => this.setState({ textPhone })}
            onSubmitEditing={this.onSubmit}
          />

          <View style={styles.MainContainer}>
            <TouchableOpacity
              style={styles.ButtonStyle}
              activeOpacity={0.5}
              onPress={this.SampleButtonFunction}>
              <Text style={styles.submitButtonInterviewee}>
                {' '}
                {this.state.ButtonTitle}{' '}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.ButtonStyle}
              activeOpacity={0.5}
              onPress={this.SampleButtonFunctionTwo}>
              <Text style={styles.submitButtonTwo}> Introduction </Text>
            </TouchableOpacity>
          </View>
          
            <View style={styles.MainContainer}>
 
            <TouchableOpacity
              style={styles.ButtonStyle}
              activeOpacity={0.5}
              onPress={() => navigate('Recordings')}>
              <Text style={styles.submitButtonTwo}> Submit </Text>
            </TouchableOpacity>
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
    fontWeight: 'bold',
    fontSize: 35,
    paddingBottom: 10,
    justifyContent: 'center',
  },
  textInput2: {
    color: 'black',
    fontSize: 20,
    paddingBottom: 20,
  },
  submitButtonInterviewee: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 34,
    padding: 4,
    backgroundColor: 'blue',
  },
  submitButtonTwo: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 34,
    padding: 4,
    backgroundColor: 'red',
  },
  ButtonStyle: {
    borderRadius: 5,
    padding: 10,
  },
  MainContainer: {
    flexDirection: 'row',
    paddingTop: 50,
  },
  titleModal: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 28,
  },
  textModal: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 22,
    paddingTop: 25,
    paddingBottom: 25,
  },
  backgroundModal: {
    flex: 1,
    backgroundColor: '#FFB351',
  },
  submitButtonModal: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: '#969696',
  },
  ButtonStyleModal: {
    borderRadius: 5,
    paddingTop: 10,
  },
});