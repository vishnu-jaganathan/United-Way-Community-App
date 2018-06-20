import React from 'react';
import {StyleSheet, Text, View, Image, Alert, Button, TouchableOpacity, ImageBackground,} from 'react-native';
import {StackNavigator, } from 'react-navigation';

class Recordings extends React.Component {
  _onPressButton() {Alert.alert('Recording...')}

  static navigationOptions = {
    title: 'Recordings',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (

    <ImageBackground
    style= {styles.container}
    source={require('./background.png')} >
      <View style={{justifyContent: 'space-between', height: 500}}>

      <View style={{justifyContent: 'flex-end', alignSelf: 'stretch', height: 50}}>
      <Text style={{fontWeight:'bold', fontSize: 25}}>Record Interview Questions</Text>
      </View>

      <View style={{justifyContent: 'space-between', alignSelf: 'stretch', height: 50, backgroundColor: 'orange', 
      flexDirection: 'row'}}>
      <Text style={{fontSize: 20}}>Question 1</Text>
      <TouchableOpacity style={{width: 50, height: 50}} onPress={ ()=> navigate('VoiceCapture') }>
        <Image source ={require('./mic_icon.png')} style={{width: 50, height: 50}}/>
      </TouchableOpacity>
      </View>

      <View style={{justifyContent: 'space-between', alignSelf: 'stretch', height: 50, backgroundColor: 'orange', 
      flexDirection: 'row'}}>
      <Text style={{fontSize: 20}}>Question 2</Text>
      <TouchableOpacity style={{width: 50, height: 50}} onPress={this._onPressButton}>
        <Image source={require('./mic_icon.png')} style={{width: 50, height: 50}}/>
      </TouchableOpacity>
      </View>

      <View style={{justifyContent: 'space-between', alignSelf: 'stretch', height: 50, backgroundColor: 'orange', 
      flexDirection: 'row'}}>
      <Text style={{fontSize: 20}}>Question 3</Text>
      <TouchableOpacity style={{width: 50, height: 50}} onPress={this._onPressButton}>
        <Image source={require('./mic_icon.png')} style={{width: 50, height: 50}}/>
      </TouchableOpacity>
      </View>

      <View style={{justifyContent: 'space-between', alignSelf: 'stretch', height: 50, backgroundColor: 'orange', 
      flexDirection: 'row'}}>
      <Text style={{fontSize: 20}}>Question 4</Text>
      <TouchableOpacity style={{width: 50, height: 50}} onPress={this._onPressButton}>
        <Image source={require('./mic_icon.png')} style={{width: 50, height: 50}}/>
      </TouchableOpacity>
      </View>

      <View style={{justifyContent: 'space-between', alignSelf: 'stretch', height: 50, backgroundColor: 'orange', 
      flexDirection: 'row'}}>
      <Text style={{fontSize: 20}}>Question 5</Text>
      <TouchableOpacity style={{width: 50, height: 50}} onPress={this._onPressButton}>
        <Image source={require('./mic_icon.png')} style={{width: 50, height: 50}}/>
      </TouchableOpacity>
      </View>

      <View style={{justifyContent: 'space-between', alignSelf: 'stretch', height: 50, backgroundColor: 'orange', 
      flexDirection: 'row'}}>
      <Text style={{fontSize: 20}}>Question 6</Text>
      <TouchableOpacity style={{width: 50, height: 50}} onPress={this._onPressButton}>
       <Image source={require('./mic_icon.png')} style={{width: 50, height: 50}}/>
      </TouchableOpacity>
      </View>

      <View style={{justifyContent: 'space-between', alignSelf: 'stretch', height: 50, backgroundColor: 'orange', 
      flexDirection: 'row'}}>
      <Text style={{fontSize: 20}}>Question 7</Text>
      <TouchableOpacity style={{width: 50, height: 50}} onPress={this._onPressButton}>
        <Image source={require('./mic_icon.png')} style={{width: 50, height: 50}}/>
      </TouchableOpacity>
      </View>
      
      <Button
        onPress={this._onPressButton}
        title="Submit"
        color="#841584"
      />
      

      </View>

      </ImageBackground>
    );
  }
}

class VoiceCapture extends React.Component {
  _onPressButton() {Alert.alert('button works')}
  render() {
    return (
      
       
       
       <ImageBackground
          style= {styles.container}
          source={require('./background.png')} >
         <View style={{justifyContent:'center'}}>

        <Text style={styles.text}> Question goes here</Text>
        
      
        <View style={{alignSelf: 'stretch', flexDirection:'row', justifyContent: 'space-between', flex:1}}>
      <TouchableOpacity style={{width:80, height: 80 }} onPress={this._onPressButton}>
          <Image
         style= {styles.playButton}
         source={require('./play.png')} />
         </TouchableOpacity>
         
         <TouchableOpacity style={{width:80, height: 80  }} onPress={this._onPressButton}>
         <Image
         style= {styles.recordButton}
         source={require('./record.png')} />
         </TouchableOpacity>
        
          <TouchableOpacity style={{width:80, height: 80 }} onPress={this._onPressButton}>
         <Image
         style= {styles.stopButton}
         source={require('./stop.png')} />
         </TouchableOpacity>
         </View>
         </View>
  
        </ImageBackground>
       
    );
  }
}


const NavigationApp = StackNavigator({
  Recordings: { screen: Recordings },
  VoiceCapture: { screen: VoiceCapture },
});

export default class App extends React.Component {
  render() {
    return <NavigationApp />;
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    height:'100%',
    justifyContent: 'center',

  },
  text:{
    textAlign: 'center',
    fontSize: 40,
    color: 'black',
    fontFamily: 'Roboto',
    
  },
  playButton: {
     height: 80,
     width: 80, 
     
  }, 
  recordButton: {
    height: 80,
    width: 80,
 
  },
  stopButton: {
    height: 80,
     width: 80,
    
  }

});