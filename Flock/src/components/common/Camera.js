import React, {
  Component
} from 'react';
import {
  View, StyleSheet, Text
} from 'react-native';
import CameraX from 'react-native-camera';

export default class Camera extends Component {

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
    .then((data) => console.log(data))
    .catch(err => console.error(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <CameraX
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={CameraX.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
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
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});
