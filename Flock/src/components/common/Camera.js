import React, {
  Component
} from 'react';
import {
  View, StyleSheet, TouchableHighlight, Text
} from 'react-native';
import CameraX from 'react-native-camera';
import {
  Actions
} from 'react-native-router-flux';
import {
  Icon
} from 'react-native-elements';

export default class Camera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // states for camera
      // aspect -
      // capture target -
      // type -
      // orientation -
      // flash mode -
      camera: {
        // aspect: Camera.constants.Aspect.fill,
        // captureTarget: Camera.constants.CaptureTarget.cameraRoll,
        type: 'back',
        // orientation: Camera.constants.Orientation.auto,
        // flashMode: Camera.constants.FlashMode.auto,
      },
    }
    this.takePicture = this.takePicture.bind(this);
    this.switchCameraType = this.switchCameraType.bind(this);

  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
    .then((data) => Actions.photo({image: data}))
    .catch(err => console.error(err));
  }

  switchCameraType() {
    const type = {'front': 'back', 'back': 'front'};

    this.setState({
      camera: {
        ...this.state.camera,
        type: type[this.state.camera.type],
      },
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <CameraX
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          type={this.state.camera.type}
          aspect={CameraX.constants.Aspect.fill}>
          <View style={styles.row}>
            <Text style={styles.exitCamera}>
              Cancel
            </Text>
            <TouchableHighlight
              onPress={() => this.takePicture()}>
              <View style={styles.black}/>
            </TouchableHighlight>
            <Icon
              name='flash'
              type='font-awesome'
              size={30}
              color='white'
              containerStyle={styles.switchFlash}
              onPress={() => this.switchCameraType()}/>
          </View>
          <View style={styles.row}>
            <Icon
              name='sync'
              size={30}
              color='white'
              containerStyle={styles.switchCameraType}
              onPress={() => this.switchCameraType()}/>
            <TouchableHighlight
              onPress={() => this.takePicture()}>
              <View style={styles.capture}/>
            </TouchableHighlight>
          </View>
      </CameraX>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  capture: {
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    padding: 28,
    margin: 40
  },
  switchCameraType: {
    position: 'absolute',
    alignSelf: 'center',
    left: 40
  },
  switchFlash: {
    position: 'absolute',
    alignSelf: 'center',
    right: 40
  },
  exitCamera: {
    position: 'absolute',
    alignSelf: 'center',
    left: 40,
    color: 'white',
    fontSize: 20,
    backgroundColor: 'black'
  },
  black: {
    alignSelf: 'center',
    borderRadius: 28,
    padding: 28,
    margin: 40
  }
});
