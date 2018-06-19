import React from 'react';
import { Header, StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{justifyContent: 'space-between', height: 500}}>

      <View style={{justifyContent: 'flex-end', width: 400, height: 50, backgroundColor: 'lightblue'}}>
      <Text style={{fontWeight:'bold', fontSize: 25}}>Record Interview Questions</Text>
      </View>

      <View style={{justifyContent: 'space-between', width: 360, height: 50, backgroundColor: 'orange', 
      flexDirection: 'row'}}>
      <Text style={{fontSize: 20}}>Question 1</Text>
      <Image source={require('./mic_icon.png')} style={{width: 50, height: 50}}/>
      </View>

      <View style={{justifyContent: 'space-between', width: 360, height: 50, backgroundColor: 'orange', 
      flexDirection: 'row'}}>
      <Text style={{fontSize: 20}}>Question 2</Text>
      <Image source={require('./mic_icon.png')} style={{width: 50, height: 50}}/>
      </View>

      <View style={{justifyContent: 'space-between', width: 360, height: 50, backgroundColor: 'orange', 
      flexDirection: 'row'}}>
      <Text style={{fontSize: 20}}>Question 3</Text>
      <Image source={require('./mic_icon.png')} style={{width: 50, height: 50}}/>
      </View>

      <View style={{justifyContent: 'space-between', width: 360, height: 50, backgroundColor: 'orange', 
      flexDirection: 'row'}}>
      <Text style={{fontSize: 20}}>Question 4</Text>
      <Image source={require('./mic_icon.png')} style={{width: 50, height: 50}}/>
      </View>

      <View style={{justifyContent: 'space-between', width: 360, height: 50, backgroundColor: 'orange', 
      flexDirection: 'row'}}>
      <Text style={{fontSize: 20}}>Question 5</Text>
      <Image source={require('./mic_icon.png')} style={{width: 50, height: 50}}/>
      </View>

      <View style={{justifyContent: 'space-between', width: 360, height: 50, backgroundColor: 'orange', 
      flexDirection: 'row'}}>
      <Text style={{fontSize: 20}}>Question 6</Text>
      <Image source={require('./mic_icon.png')} style={{width: 50, height: 50}}/>
      </View>

      <View style={{justifyContent: 'space-between', width: 360, height: 50, backgroundColor: 'orange', 
      flexDirection: 'row'}}>
      <Text style={{fontSize: 20}}>Question 7</Text>
      <Image source={require('./mic_icon.png')} style={{width: 50, height: 50}}/>
      </View>

      

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
