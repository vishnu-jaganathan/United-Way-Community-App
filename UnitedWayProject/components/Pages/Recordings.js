import React from 'react';
import {StyleSheet, Text, View, Image, Alert, Button, TouchableOpacity, ImageBackground,} from 'react-native';
import {createStackNavigator, } from 'react-navigation';

export default class Recordings extends React.Component {
    _onPressButton() {Alert.alert('Submitted- return to home page')}
  
    render() {
      const { navigate } = this.props.navigation;
      return (
  
      <ImageBackground
      style={styles.container}
      source={require('./Images/watermark.png')} >
        <View style={{backgroundColor: 'white', justifyContent: 'center'}}>
        <Text style={{fontFamily: 'Roboto', fontSize: 31, paddingBottom: 10, fontWeight: 'bold', justifyContent: 'center'}}>Record Inteview Questions</Text>
        </View>
        <View style={{justifyContent: 'space-between', height: 620, paddingBottom: 150}}>
        <View style={{justifyContent: 'space-between', alignSelf: 'stretch', height: 50, backgroundColor: '#FFB351', 
        flexDirection: 'row'}}>
        <Text style={{fontSize: 20}}>Question 1</Text>
        <TouchableOpacity style={{width: 50, height: 50}} onPress={ ()=> navigate('VoiceCapture', 
        {question: 'Question 1: Tell me a little about yourself. This can include information about your job, your hobbies, your family, or anything else you choose.'}) }>
          <Image source ={require('./Images/mic_icon.png')} style={{width: 50, height: 50}}/>
        </TouchableOpacity>
        </View>
  
        <View style={{justifyContent: 'space-between', alignSelf: 'stretch', height: 50, backgroundColor: '#FFB351', 
        flexDirection: 'row'}}>
        <Text style={{fontSize: 20}}>Question 2</Text>
        <TouchableOpacity style={{width: 50, height: 50}} onPress={ ()=> navigate('VoiceCapture', 
        {question: 'Question 2: How long have you lived in your neighborhood, and what do you like best about living here?'}) }>
          <Image source={require('./Images/mic_icon.png')} style={{width: 50, height: 50}}/>
        </TouchableOpacity>
        </View>
  
        <View style={{justifyContent: 'space-between', alignSelf: 'stretch', height: 50, backgroundColor: '#FFB351', 
        flexDirection: 'row'}}>
        <Text style={{fontSize: 20}}>Question 3</Text>
        <TouchableOpacity style={{width: 50, height: 50}} onPress={ ()=> navigate('VoiceCapture', 
        {question: 'Question 3: What do you think are the biggest challenges facing your neighborhood today, and what do you think are the best solutions to those challenges?'}) }>
          <Image source={require('./Images/mic_icon.png')} style={{width: 50, height: 50}}/>
        </TouchableOpacity>
        </View>
  
        <View style={{justifyContent: 'space-between', alignSelf: 'stretch', height: 50, backgroundColor: '#FFB351', 
        flexDirection: 'row'}}>
        <Text style={{fontSize: 20}}>Question 4</Text>
        <TouchableOpacity style={{width: 50, height: 50}} onPress={ ()=> navigate('VoiceCapture', 
        {question: 'Question 4: What do you believe makes a community great?'}) }>
          <Image source={require('./Images/mic_icon.png')} style={{width: 50, height: 50}}/>
        </TouchableOpacity>
        </View>
  
        <View style={{justifyContent: 'space-between', alignSelf: 'stretch', height: 50, backgroundColor: '#FFB351', 
        flexDirection: 'row'}}>
        <Text style={{fontSize: 20}}>Question 5</Text>
        <TouchableOpacity style={{width: 50, height: 50}} onPress={ ()=> navigate('VoiceCapture', 
        {question: 'Question5: What are you most proud of?'}) }>
          <Image source={require('./Images/mic_icon.png')} style={{width: 50, height: 50}}/>
        </TouchableOpacity>
        </View>
  
        <View style={{justifyContent: 'space-between', alignSelf: 'stretch', height: 50, backgroundColor: '#FFB351', 
        flexDirection: 'row'}}>
        <Text style={{fontSize: 20}}>Question 6</Text>
        <TouchableOpacity style={{width: 50, height: 50}} onPress={ ()=> navigate('VoiceCapture', 
        {question: 'Quesiton 6: What are your hopes for yourself and for your community?'}) }>
         <Image source={require('./Images/mic_icon.png')} style={{width: 50, height: 50}}/>
        </TouchableOpacity>
        </View>
  
        <View style={{justifyContent: 'space-between', alignSelf: 'stretch', height: 50, backgroundColor: '#FFB351', 
        flexDirection: 'row'}}>
        <Text style={{fontSize: 20}}>Question 7</Text>
        <TouchableOpacity style={{width: 50, height: 50}} onPress={ ()=> navigate('VoiceCapture', 
        {question: 'Question 7: Is there anything else you’d like to tell me?'}) }>
          <Image source={require('./Images/mic_icon.png')} style={{width: 50, height: 50}}/>
        </TouchableOpacity>
        </View>
        
        <Button
          onPress={() => navigate('HomeScreen')}
          title="SUBMIT"
          color="#F57814"
        />
  
        </View>
  
        </ImageBackground>
      );
    }
  }

  const styles = StyleSheet.create({
    container:{
      flex:1,
    },
  
  });