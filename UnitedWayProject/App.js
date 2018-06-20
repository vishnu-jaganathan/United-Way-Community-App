import React from 'react';
import { Header, StyleSheet, Text, View, Image, Alert, Button, TouchableOpacity, ImageBackground } from 'react-native';

export default class App extends React.Component {
  _onPressButton() {Alert.alert('Recording...')}
  render() {
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
      <TouchableOpacity style={{width: 50, height: 50}} onPress={this._onPressButton}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});