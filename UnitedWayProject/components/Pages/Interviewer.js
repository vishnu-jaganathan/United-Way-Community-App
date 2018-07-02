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

export default class Interviewer extends Component {
  constructor() {
    super();
    this.state = {
      textName1: '',
      textCompany1: '',
      textEmail1: '',
      textPhone1: '',
      switchValueOne: false,
      switchValueTwo: false,
      ButtonStateHolderInterviewer: true,
    };
  }

  onSubmit() {
    console.log('Input Submitted...');
  }

  onSwitchChangeOne(value) {
    this.setState({
      switchValueOne: value,
      ButtonStateHolderInterviewer: !value,
    });
  }

  onSwitchChangeTwo(value) {
    this.setState({
      switchValueTwo: value,
    });
  }

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
          <View style={styles.whiteContainer}>

          <Text style={styles.title1}>Interviewer Information</Text>
          <TextInput
            style={styles.text2}
            placeholder="<Name>"
            value={this.state.textName1}
            onChangeText={textName1 => this.setState({ textName1 })}
            onSubmitEditing={this.onSubmit}
          />
          <TextInput
            style={styles.text2}
            placeholder="<Company Name>"
            value={this.state.textCompany1}
            onChangeText={textCompany1 => this.setState({ textCompany1 })}
            onSubmitEditing={this.onSubmit}
          />
          <TextInput
            style={styles.text2}
            placeholder="<Email>"
            value={this.state.textEmail1}
            onChangeText={textEmail1 => this.setState({ textEmail1 })}
            onSubmitEditing={this.onSubmit}
          />
          <TextInput
            style={styles.text2}
            placeholder="<Phone>"
            value={this.state.textPhone1}
            onChangeText={textPhone1 => this.setState({ textPhone1 })}
            onSubmitEditing={this.onSubmit}
          />
          </View>

          <View style={styles.container}>
            <Text style={styles.text1}>
              Do you agree to keep confidential any name and personal
              information you may learn during this interview?
            </Text>
            <Switch
              style={styles.v1}
              value={this.state.switchValueOne}
              onValueChange={value => this.onSwitchChangeOne(value)}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.text1}>
              Will you allow United Way to credit your name and company should
              we choose to publish informaiton regarding this interview?
            </Text>
            <Switch
              style={styles.v1}
              value={this.state.switchValueTwo}
              onValueChange={value => this.onSwitchChangeTwo(value)}
            />
          </View>
          <View style={styles.MainContainerInterviewer}>
            <TouchableOpacity
              style={[
                styles.ButtonStyleInterviewer,
                {
                  backgroundColor: this.state.ButtonStateHolderInterviewer
                    ? '#607D8B'
                    : '#F57814',
                },
              ]}
              activeOpacity={0.5}
              disabled={this.state.ButtonStateHolderInterviewer}
              onPress={() => navigate('DisclaimerPage')}>
              <Text style={styles.submitButton}>
                SUBMIT
              </Text>
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
    fontFamily: 'Roboto',
    fontSize: 35,
    paddingBottom: 10,
    justifyContent: 'center',
  },
  submitButton: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: 28,
    padding: 20,
  },
  text1: {
    flex: 5,
    color: 'black',
    fontFamily: 'Roboto',
    fontSize: 15,
  },
  text2: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Roboto',
    paddingBottom: 20,
  },
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white'
  },
  v1: {
    flex: 1,
  },
  ButtonStyleInterviewer: {
    padding: 5,
  },
  MainContainerInterviewer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingTop: 40
  },
  whiteContainer:{
  backgroundColor: 'white',
},
});