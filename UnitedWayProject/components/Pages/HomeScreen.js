import React, { Component } from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Modal,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends Component {
  //creating the state for the welcome message
  constructor() {
    super();
    this.state = {
      modalVisible: true,
    };
  }

  //making the modal, pop-up, visible
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    //give it the ability to navigate to the next page
    const { navigate } = this.props.navigation;
    return (
      //uploading the front page image, creating a styleSheet for the front page image,
      //and creating a filter to place over the front page
      <ImageBackground
        source={require('./Images/UnitedWayFrontPage.png')}
        style={styles.container}>


        {/* creating the modal */}
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}>
          <View style={styles.backgroundModal}>
            <View style={styles.homeContainer}>
              <Text style={styles.titleModal}>
                THANK YOU FOR HELPING TO INTERVIEW YOUR NEIGHBORS AS PART OF
                UNITED WAY OF METRO CHICAGO’S LEND AN EAR STORYTELLING PROJECT.
                YOU’RE HELPING US COLLECT STORIES AND INSIGHTS TO LEARN MORE
                ABOUT OUR NEIGHBORS.
              </Text>


              {/*The button for the modal*/}
              {/*TouchableOpacity will allow the background to be seen through while the user is pressing down*/}
              <TouchableOpacity
                style={styles.ButtonStyleModal}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                {/*creating the styleSheets responsible for the button size and button text */}
                <View style={styles.homeButton}>
                  <Text style={styles.homeText}>LET'S BEGIN</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/*Creating the button styleSheet responsible for button position*/}
        <View style={styles.homeContainer1}>
          {/*TouchableOpacity will allow the background to be seen through while the user is pressing down*/}
          <TouchableOpacity onPress={() => navigate('PasswordScreen')}>
            {/*creating the styleSheets responsible for the button size and button text */}
            <View style={styles.homeButton}>
              <Text style={styles.homeText}>SHARE YOUR STORY</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

//responsible for the aesthetic of the app
const styles = StyleSheet.create({
  //ImageBackground
  container: {
    flex: 1,
  },
  //button location on the HomeScreen
  homeContainer: {
    alignItems: 'center',
  },
  //button size and color for the HomeScreen
  homeButton: {
    alignItems: 'center',
    backgroundColor: '#F57814',
    justifyContent: 'center',
  },
  //button text for the HomeScreen
  homeText: {
    padding: 20,
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 28,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  //text style for the modal 
  titleModal: {
    color: 'black',
    fontFamily: 'Roboto',
    fontSize: 25,
    padding: 40,
    alignContent: 'center',
  },
   //background colors and fit for the modal
  backgroundModal: {
    flex: 1,
    backgroundColor: 'white',
  },
  //button position for the homescreen button
  homeContainer1: {
    alignItems: 'center',
    paddingTop: 380,
    justifyContent: 'center',
  },
  //button location for the model
  ButtonStyleModal: {
    borderRadius: 5,
    alignContent: 'center',
    alignItems: 'center',
  },
});
