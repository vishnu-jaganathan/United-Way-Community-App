import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Button,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class Recordings extends React.Component {
  constructor() {
    super();
    this.state = {
      questionNumber: '',
    };
  }
  onPressButton() {
    const { navigate } = this.props.navigation;
    navigate('HomeScreen');
    Alert.alert('File Sent');
    
  }

  render() {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    const subject = navigation.getParam('subject', 'NO NAME');
    const hostName = navigation.getParam('hostName', 'NO NAME');
    return (
      
      <ImageBackground
        style={styles.container}
        source={require('./Images/watermark.png')}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={{ backgroundColor: 'white', justifyContent: 'center' }}>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 28,
              paddingBottom: 10,
              justifyContent: 'center',
            }}>
            Record Inteview Questions
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            height: 620,
            paddingBottom: 150,
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              alignSelf: 'stretch',
              height: 50,
              backgroundColor: '#FFB351',
              flexDirection: 'row',
            }}>
            <Text style={{ fontSize: 20 }}>Question 1</Text>
            <TouchableOpacity
              style={{ width: 50, height: 50 }}
              onPress={() =>
                navigate('VoiceCapture', {
                  question: 'Question 1: Do you currently have a job? If so, what do you do for work?  ',
                  number: 'Question 1',
                  subject: subject,
                  name1: hostName,
                })
              }>
              <Image
                source={require('./Images/mic_icon.png')}
                style={{ width: 50, height: 50 }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              justifyContent: 'space-between',
              alignSelf: 'stretch',
              height: 50,
              backgroundColor: '#FFB351',
              flexDirection: 'row',
            }}>
            <Text style={{ fontSize: 20 }}>Question 2</Text>
            <TouchableOpacity
              style={{ width: 50, height: 50 }}
              onPress={() =>
                navigate('VoiceCapture', {
                  question: 'Question 2: How would you describe the makeup of your household?  ',
                  number: 'Question 2',
                  subject: subject,
                  name1: hostName,
                })
              }>
              <Image
                source={require('./Images/mic_icon.png')}
                style={{ width: 50, height: 50 }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              justifyContent: 'space-between',
              alignSelf: 'stretch',
              height: 50,
              backgroundColor: '#FFB351',
              flexDirection: 'row',
            }}>
            <Text style={{ fontSize: 20 }}>Question 3</Text>
            <TouchableOpacity
              style={{ width: 50, height: 50 }}
              onPress={() =>
                navigate('VoiceCapture', {
                  question: 'Question 3: What do you do for fun?',
                  number: 'Question 3',
                  subject: subject,
                  name1: hostName,
                })
              }>
              <Image
                source={require('./Images/mic_icon.png')}
                style={{ width: 50, height: 50 }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              justifyContent: 'space-between',
              alignSelf: 'stretch',
              height: 50,
              backgroundColor: '#FFB351',
              flexDirection: 'row',
            }}>
            <Text style={{ fontSize: 20 }}>Question 4</Text>
            <TouchableOpacity
              style={{ width: 50, height: 50 }}
              onPress={() =>
                navigate('VoiceCapture', {
                  question:
                    'Question 4: How are you connected with the organization where we are today? Have you utilized their programs or services in the past? ',
                  number: 'Question 4',
                  subject: subject,
                  name1: hostName,
                })
              }>
              <Image
                source={require('./Images/mic_icon.png')}
                style={{ width: 50, height: 50 }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              justifyContent: 'space-between',
              alignSelf: 'stretch',
              height: 50,
              backgroundColor: '#FFB351',
              flexDirection: 'row',
            }}>
            <Text style={{ fontSize: 20 }}>Question 5</Text>
            <TouchableOpacity
              style={{ width: 50, height: 50 }}
              onPress={() =>
                navigate('VoiceCapture', {
                  question:
                    'Question5: What neighborhood do you live in? How long have you lived in your neighborhood, and what do you like best about living there? ',
                  number: 'Question 5',
                  subject: subject,
                  name1: hostName,
                })
              }>
              <Image
                source={require('./Images/mic_icon.png')}
                style={{ width: 50, height: 50 }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              justifyContent: 'space-between',
              alignSelf: 'stretch',
              height: 50,
              backgroundColor: '#FFB351',
              flexDirection: 'row',
            }}>
            <Text style={{ fontSize: 20 }}>Question 6</Text>
            <TouchableOpacity
              style={{ width: 50, height: 50 }}
              onPress={() =>
                navigate('VoiceCapture', {
                  question:
                    'Quesiton 6: What do you think are the biggest challenges facing your neighborhood today, and what do you think are the best solutions to those challenges? ',
                  number: 'Question 6',
                  subject: subject,
                  name1: hostName,
                })
              }>
              <Image
                source={require('./Images/mic_icon.png')}
                style={{ width: 50, height: 50 }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              justifyContent: 'space-between',
              alignSelf: 'stretch',
              height: 50,
              backgroundColor: '#FFB351',
              flexDirection: 'row',
            }}>
            <Text style={{ fontSize: 20 }}>Question 7</Text>
            <TouchableOpacity
              style={{ width: 50, height: 50 }}
              onPress={() =>
                navigate('VoiceCapture', {
                  question:
                    'Question 7: What do you believe makes a community great?  ',
                  number: 'Question 7',
                  subject: subject,
                  name1: hostName,
                })
              }>
              <Image
                source={require('./Images/mic_icon.png')}
                style={{ width: 50, height: 50 }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              justifyContent: 'space-between',
              alignSelf: 'stretch',
              height: 50,
              backgroundColor: '#FFB351',
              flexDirection: 'row',
            }}>
            <Text style={{ fontSize: 20 }}>Question 8</Text>
            <TouchableOpacity
              style={{ width: 50, height: 50 }}
              onPress={() =>
                navigate('VoiceCapture', {
                  question:
                    'Question 8: What aspects of your community are you most proud of?',
                  number: 'Question 8',
                  subject: subject,
                  name1: hostName,
                })
              }>
              <Image
                source={require('./Images/mic_icon.png')}
                style={{ width: 50, height: 50 }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              justifyContent: 'space-between',
              alignSelf: 'stretch',
              height: 50,
              backgroundColor: '#FFB351',
              flexDirection: 'row',
            }}>
            <Text style={{ fontSize: 20 }}>Question 9</Text>
            <TouchableOpacity
              style={{ width: 50, height: 50 }}
              onPress={() =>
                navigate('VoiceCapture', {
                  question:
                    'Question 9: What are your hopes for yourself and for your community?',
                  number: 'Question 9',
                  subject: subject,
                  name1: hostName,
                })
              }>
              <Image
                source={require('./Images/mic_icon.png')}
                style={{ width: 50, height: 50 }}
              />
            </TouchableOpacity>
          </View>

		  <View
            style={{
              justifyContent: 'space-between',
              alignSelf: 'stretch',
              height: 50,
              backgroundColor: '#FFB351',
              flexDirection: 'row',
            }}>
            <Text style={{ fontSize: 20 }}>Question 10</Text>
            <TouchableOpacity
              style={{ width: 50, height: 50 }}
              onPress={() =>
                navigate('VoiceCapture', {
                  question:
                    'Question 10: Is there anything else you’d like to tell me? ',
                  number: 'Question 10',
                  subject: subject,
                  name1: hostName,
                })
              }>
              <Image
                source={require('./Images/mic_icon.png')}
                style={{ width: 50, height: 50 }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              justifyContent: 'space-between',
              alignSelf: 'stretch',
              height: 50,
              backgroundColor: '#FFB351',
              flexDirection: 'row',
            }}>
            <Text style={{ fontSize: 20 }}>Interviewer Reflection</Text>
            <TouchableOpacity
              style={{ width: 50, height: 50 }}
              onPress={() =>
                navigate('VoiceCapture', {
                  question:
                    'Optional Question: As the interviewer, what reflections do you have about the conversation you had today? ',
                  number: ' Inteviewer Reflection',
                  subject: subject,
                  name1: hostName,
                })
              }>
              <Image
                source={require('./Images/mic_icon.png')}
                style={{ width: 50, height: 50 }}
              />
            </TouchableOpacity>
          </View>
          <View style={{
              backgroundColor: 'white',
            }}>
          <Button
            onPress={() => this.onPressButton()}
            title="SUBMIT"
            color="#F57814"
            fontColor='white'
          />
        </View>
        </View>
        </ScrollView>
      </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
