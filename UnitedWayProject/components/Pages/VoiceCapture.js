import React from 'react';
import {StyleSheet, Text, View, Image, Alert, Button, TouchableOpacity, ImageBackground,} from 'react-native';
import {createStackNavigator, } from 'react-navigation';

export default class VoiceCapture extends React.Component {
    _onPressButton() {Alert.alert('button works')}
    render() {
      return (
        
         
         
         <ImageBackground
            style= {styles.container}
            source={require('./Images/watermark.png')} >
           <View style={{justifyContent:'center', width:400, height: 300, backgroundColor: 'white', paddingTop:50}}>
      
          <Text style={styles.text}>{this.props.navigation.state.params.question}</Text>
          
        
          <View style={{alignSelf: 'stretch', flexDirection:'row', justifyContent: 'space-between', flex:1}}>
        <TouchableOpacity style={{width:80, height: 80 }} onPress={this._onPressButton}>
            <Image
           style= {styles.playButton}
           source={require('./Images/play.png')} />
           </TouchableOpacity>
           
           <TouchableOpacity style={{width:80, height: 80  }} onPress={this._onPressButton}>
           <Image
           style= {styles.recordButton}
           source={require('./Images/record.png')} />
           </TouchableOpacity>
          
            <TouchableOpacity style={{width:80, height: 80 }} onPress={this._onPressButton}>
           <Image
           style= {styles.stopButton}
           source={require('./Images/stop.png')} />
           </TouchableOpacity>
           </View>
           </View>
    
          </ImageBackground>
         
      );
    }
  }

  const styles = StyleSheet.create({
    container:{
      flex:1,
  
    },
    text:{
      textAlign: 'center',
      fontSize: 22,
      color: 'black',
      fontFamily: 'Roboto',
      paddingBottom: 23
      
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
