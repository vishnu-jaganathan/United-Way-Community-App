import React from 'react';
import {StyleSheet, Text, View, Image, Alert, Button, TouchableOpacity, ImageBackground,} from 'react-native';
import {createStackNavigator, } from 'react-navigation';

export default class Recordings extends React.Component {
    _onPressButton() {Alert.alert('Submitted- return to home page')}
  
    static navigationOptions = {
      title: 'Recordings',
    };
  
    render() {
      const { navigate } = this.props.navigation;
      return (
  
      <ImageBackground
      style= {styles.container}
      source={require('./watermark.png')} >
        <View style={{justifyContent: 'space-between', height: 500}}>
        <View style={{justifyContent: 'flex-end', alignSelf: 'stretch', height: 50}}>
        <Text style={{fontWeight:'bold', fontSize: 25}}>Record Interview Questions</Text>
        </View>
  
        <View style={{justifyContent: 'space-between', alignSelf: 'stretch', height: 50, backgroundColor: 'orange', 
        flexDirection: 'row'}}>
        <Text style={{fontSize: 20}}>Question 1</Text>
        <TouchableOpacity style={{width: 50, height: 50}} onPress={ ()=> navigate('VoiceCapture', 
        {question: 'Tell me a little about yourself. This can include information about your job, your hobbies, your family, or anything else you choose.'}) }>
          <Image source ={require('./mic_icon.png')} style={{width: 50, height: 50}}/>
        </TouchableOpacity>
        </View>
  
        <View style={{justifyContent: 'space-between', alignSelf: 'stretch', height: 50, backgroundColor: 'orange', 
        flexDirection: 'row'}}>
        <Text style={{fontSize: 20}}>Question 2</Text>
        <TouchableOpacity style={{width: 50, height: 50}} onPress={ ()=> navigate('VoiceCapture', 
        {question: 'How long have you lived in your neighborhood, and what do you like best about living here?'}) }>
          <Image source={require('./mic_icon.png')} style={{width: 50, height: 50}}/>
        </TouchableOpacity>
        </View>
  
        <View style={{justifyContent: 'space-between', alignSelf: 'stretch', height: 50, backgroundColor: 'orange', 
        flexDirection: 'row'}}>
        <Text style={{fontSize: 20}}>Question 3</Text>
        <TouchableOpacity style={{width: 50, height: 50}} onPress={ ()=> navigate('VoiceCapture', 
        {question: 'What do you think are the biggest challenges facing your neighborhood today, and what do you think are the best solutions to those challenges?'}) }>
          <Image source={require('./mic_icon.png')} style={{width: 50, height: 50}}/>
        </TouchableOpacity>
        </View>
  
        <View style={{justifyContent: 'space-between', alignSelf: 'stretch', height: 50, backgroundColor: 'orange', 
        flexDirection: 'row'}}>
        <Text style={{fontSize: 20}}>Question 4</Text>
        <TouchableOpacity style={{width: 50, height: 50}} onPress={ ()=> navigate('VoiceCapture', 
        {question: 'What do you believe makes a community great?'}) }>
          <Image source={require('./mic_icon.png')} style={{width: 50, height: 50}}/>
        </TouchableOpacity>
        </View>
  
        <View style={{justifyContent: 'space-between', alignSelf: 'stretch', height: 50, backgroundColor: 'orange', 
        flexDirection: 'row'}}>
        <Text style={{fontSize: 20}}>Question 5</Text>
        <TouchableOpacity style={{width: 50, height: 50}} onPress={ ()=> navigate('VoiceCapture', 
        {question: 'What are you most proud of?'}) }>
          <Image source={require('./mic_icon.png')} style={{width: 50, height: 50}}/>
        </TouchableOpacity>
        </View>
  
        <View style={{justifyContent: 'space-between', alignSelf: 'stretch', height: 50, backgroundColor: 'orange', 
        flexDirection: 'row'}}>
        <Text style={{fontSize: 20}}>Question 6</Text>
        <TouchableOpacity style={{width: 50, height: 50}} onPress={ ()=> navigate('VoiceCapture', 
        {question: 'What are your hopes for yourself and for your community?'}) }>
         <Image source={require('./mic_icon.png')} style={{width: 50, height: 50}}/>
        </TouchableOpacity>
        </View>
  
        <View style={{justifyContent: 'space-between', alignSelf: 'stretch', height: 50, backgroundColor: 'orange', 
        flexDirection: 'row'}}>
        <Text style={{fontSize: 20}}>Question 7</Text>
        <TouchableOpacity style={{width: 50, height: 50}} onPress={ ()=> navigate('VoiceCapture', 
        {question: 'Is there anything else you’d like to tell me?'}) }>
          <Image source={require('./mic_icon.png')} style={{width: 50, height: 50}}/>
        </TouchableOpacity>
        </View>
        
        <Button
          onPress={() => navigate('HomeScreen')}
          title="Submit"
          color="#841584"
        />
  
        </View>
  
        </ImageBackground>
      );
    }
  }

  const styles = StyleSheet.create({
    container:{
      flex:1,
      width: '100%',
      height:'100%',
      justifyContent: 'center',
  
    },
  
  });