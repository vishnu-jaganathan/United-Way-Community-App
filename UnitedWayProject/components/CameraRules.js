import React, { Component } from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {
  Ionicons,
  MaterialIcons,
  Foundation,
  MaterialCommunityIcons,
  Octicons,
} from '@expo/vector-icons';
export default class CameraRules extends Component {
  render() {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    const subject = navigation.getParam('subject', 'NO NAME');
    const hostName = navigation.getParam('hostName', 'NO COMPANY');
    return (
      //uploading the watermark image and creating the styleSheet for it
      <ImageBackground style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>

        <View style={styles.disclaimerContainer}>
          <Text style={styles.titleText}>Good Picture Guidelines:</Text>

          <Text style={styles.bodyText}>
            Try to get a good picture of your subject. Use natural light when
            possible, and consider the background surrounding the subject.
          </Text>
        </View>

        <View style={styles.disclaimerContainer}>
          <Text style={styles.titleText}>Picture Taking Instructions:</Text>

          <Text style={styles.bodyText}>1. Press "Continue" </Text>
          <Text style={styles.bodyText}>2. Press "Take Picture"</Text>
          <Text style={styles.bodyText}>3. Take Picture </Text>
          <Text style={styles.bodyText}>4. Review Image</Text>
          <Text style={styles.bodyText}>5. Crop Image and Save</Text>
          <Text style={styles.bodyText}>6. Confirm Successfull Upload</Text> 
          <Text style={styles.bodyText}>7. Press "Finished"</Text> 
    
        </View>

        <View style={styles.row}>
          {/*Creation of the Agree Button */}
          {/*Creating the button styleSheet required for the Agree button*/}

          {/*the users background will change to white when the agree button is pressed by using the TouchableHighlight*/}
          <TouchableOpacity
            onPress={() =>
              navigate('CameraScreen', {
                subject: subject,
                hostName: hostName,
              })
            }>
            {/*Creating the button styleSheet responsible for the agree button color and button text*/}
            <View style={styles.button}>
              <Text style={styles.buttonText}>CONTINUE</Text>
            </View>
          </TouchableOpacity>

          {/*Creation of the disagree Button */}
          {/*Creating the button styleSheet required for the disagree button*/}
          {/*the users background will change to white when the disagree button is pressed by using the TouchableHighlight*/}
          <TouchableOpacity onPress={() => navigate('Interviewee')}>
            {/*Creating the button styleSheet responsible for the disagree button color and button text*/}
            <View style={styles.disButton}>
              <Text style={styles.buttonText}>RETURN</Text>
            </View>
          </TouchableOpacity>
        </View>
       </ScrollView>

      </ImageBackground>
    );
  }
}

//responsible for the aesthetic of the app
const styles = StyleSheet.create({
  //ImageBackground
  row: {
    flexDirection: 'row',
    paddingTop: 30,
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  //bodyText
  bodyText: {
    fontFamily: 'Roboto',
    fontSize: 20,
    color: 'black',
    padding: 10,
  },
  //Title Text
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: 'black',
    padding: 10,
  },
  //Agree button color
  button: {
    width: 200,
    alignItems: 'center',
    backgroundColor: '#F57814',
  },
  //Disagree button color
  disButton: {
    marginBottom: 100,
    width: 200,
    alignItems: 'center',
    backgroundColor: '#969696',
  },
  //button text for both the agree and disagree button
  buttonText: {
    padding: 20,
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 28,
    fontWeight: 'bold',
  },
  disclaimerContainer: {
    backgroundColor: 'white',
  },
  contentContainer: {
    paddingVertical: 20
  }
});
