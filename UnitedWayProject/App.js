import React, { Component } from 'react';
import {AppRegistry, View, ImageBackground, StyleSheet, Text, Image, Button, ImageButton, Alert, TouchableOpacity  } from 'react-native';



export default class DisplayAnImage extends Component {
  _onPressButton() {Alert.alert('button works')}
  render() {
    return (
      
       
       
       <ImageBackground
          style= {styles.container}
          source={require('./watermark.png')} >
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
