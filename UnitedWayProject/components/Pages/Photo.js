import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { FaceDetector } from 'expo';
import { Ionicons } from '@expo/vector-icons';

const pictureSize = 150;

export default class Photo extends React.Component {
  state = {
    selected: false,
    faces: [],
    image: null,
  };
  _mounted = false;

  componentDidMount() {
    this._mounted = true;
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  toggleSelection = () => {
    this.setState(
      { selected: !this.state.selected },
      () => this.props.onSelectionToggle(this.props.uri, this.state.selected)
    );
  }

  detectFace = () =>
    FaceDetector.detectFacesAsync(this.props.uri, {
      detectLandmarks: FaceDetector.Constants.Landmarks.none,
      runClassifications: FaceDetector.Constants.Classifications.all,
    })
      .then(this.facesDetected)
      .catch(this.handleFaceDetectionError);

  facesDetected = ({ image, faces }) => {
    this.setState({
      faces,
      image,
    });
  }

  getImageDimensions = ({ width, height }) => {
    if (width > height) {
      const scaledHeight = pictureSize * height / width;
      return {
        width: pictureSize,
        height: scaledHeight,

        scaleX: pictureSize / width,
        scaleY: scaledHeight / height,

        offsetX: 0,
        offsetY: (pictureSize - scaledHeight) / 2,
      };
    } else {
      const scaledWidth = pictureSize * width / height;
      return {
        width: scaledWidth,
        height: pictureSize,

        scaleX: scaledWidth / width,
        scaleY: pictureSize / height,

        offsetX: (pictureSize - scaledWidth) / 2,
        offsetY: 0,
      };
    }
  };

  handleFaceDetectionError = error => console.warn(error);

  renderFaces = () => this.state.image && this.state.faces && this.state.faces.map(this.renderFace);

  renderFace = (face, index) => {
    const { image } = this.state;
    const { scaleX, scaleY, offsetX, offsetY } = this.getImageDimensions(image);
    const layout = {
      top: offsetY + face.bounds.origin.y * scaleY,
      left: offsetX + face.bounds.origin.x * scaleX,
      width: face.bounds.size.width * scaleX,
      height: face.bounds.size.height * scaleY,
    };

    return (
      <View
        key={index}
        style={[styles.face, layout]}
        transform={[
          { perspective: 600 },
          { rotateZ: `${(face.rollAngle || 0).toFixed(0)}deg` },
          { rotateY: `${(face.yawAngle || 0).toFixed(0)}deg` },
        ]}>
        <Text style={styles.faceText}>😁 {(face.smilingProbability * 100).toFixed(0)}%</Text>
      </View>
    );
  };

  render() {
    const { uri } = this.props;
    return (
        <TouchableOpacity
          style={styles.pictureWrapper}
          onLongPress={this.detectFace}
          onPress={this.toggleSelection}
          activeOpacity={1}
        >
          <Image
            style={styles.picture}
            source={{ uri }}
          />
          {this.state.selected && <Ionicons name="md-checkmark-circle" size={30} color="#4630EB" />}
          <View style={styles.facesContainer}>
            {this.renderFaces()}
          </View>
        </TouchableOpacity>
      );
  }
}

const styles = StyleSheet.create({
  picture: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    resizeMode: 'contain',
  },
  pictureWrapper: {
    width: pictureSize,
    height: pictureSize,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  facesContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
  },
  face: {
    borderWidth: 2,
    borderRadius: 2,
    position: 'absolute',
    borderColor: '#FFD700',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  faceText: {
    color: '#FFD700',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 2,
    fontSize: 10,
    backgroundColor: 'transparent',
  }
});