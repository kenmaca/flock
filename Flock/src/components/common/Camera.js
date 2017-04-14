import React, {
  Component
} from 'react';
import {
  View, StyleSheet, TouchableOpacity, Image
} from 'react-native';

import CameraX from 'react-native-camera';
import {
  Icon
} from 'react-native-elements';
import {
  Sizes
} from '../../Const';

// components
import Avatar from '../users/Avatar';
import NavBarHolder from './NavBarHolder';

export default class Camera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPhoto: false,
      camera: {
        aspect: CameraX.constants.Aspect.fill,
        captureTarget: CameraX.constants.CaptureTarget.disk,
        type: 'back',
        orientation: CameraX.constants.Orientation.auto,
        flashMode: 'auto',
      },
    }
    this.takePicture = this.takePicture.bind(this);
    this.switchCameraType = this.switchCameraType.bind(this);
    this.switchFlashType = this.switchFlashType.bind(this);

  }

  ComponentWillMount() {
    StatusBar.setHidden(true);
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
    .then((data) => this.setState({
      isPhoto: true,
      image: data
    }))
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

  switchFlashType() {
    const type = {'auto': 'on', 'on': 'off', 'off': 'auto'};
    console.log(this.state.camera)
    this.setState({
      camera: {
        ...this.state.camera,
        flashMode: type[this.state.camera.flashMode],
      },
    });
  }

  render() {
    return (
      <NavBarHolder
        renderView={
          <View style={styles.container}>
            {
              this.state.isPhoto
              ?
              (
                <Image
                  style={styles.preview}
                  source={{ uri: this.state.image.path.toString() }}/>
              )
              :
              (
                <CameraX
                  ref={(cam) => {
                    this.camera = cam;
                  }}
                  style={styles.preview}
                  type={this.state.camera.type}
                  captureTarget={this.state.camera.captureTarget}
                  flashMode={this.state.camera.flashMode}
                  orientation={this.state.camera.orientation}
                  aspect={CameraX.constants.Aspect.fill}>
                  <View style={styles.row}>
                    <Icon
                      name='sync'
                      size={20}
                      color='white'
                      containerStyle={styles.switchCameraType}
                      onPress={() => this.switchCameraType()}/>
                    <Icon
                      name='flash'
                      type='font-awesome'
                      size={20}
                      color='white'
                      containerStyle={styles.switchFlash}
                      onPress={() => this.switchFlashType()}/>
                  </View>
                </CameraX>
              )
            }

            <View style={{height: Sizes.Height*0.4, width: Sizes.Width, backgroundColor: '#F5F5F5', alignItems: 'center', justifyContent: 'center'}}>
              {
                this.state.isPhoto
                ?
                (
                  <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Avatar
                    source={{uri: this.state.image.path.toString()}}
                    size={100}
                    style={{margin: 20}} />
                  <Avatar
                  source={{uri: this.state.image.path.toString()}}
                  size={70}
                  style={{margin: 20}} />
                <Avatar
                source={{uri: this.state.image.path.toString()}}
                size={50}
                style={{margin: 20}} />
            </View>
          )
          :
          (
            <TouchableOpacity
              onPress={() => this.takePicture()}>
              <View style={styles.capture}/>
            </TouchableOpacity>
          )
        }
      </View>
    </View>}
  />
);
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  capture: {
    alignSelf: 'center',
    backgroundColor: 'grey',
    borderRadius: 28,
    padding: 28,
    margin: 40
  },
  switchCameraType: {
    position: 'absolute',
    alignSelf: 'center',
    left: 40,
    bottom: 15,
  },
  switchFlash: {
    position: 'absolute',
    alignSelf: 'center',
    right: 40,
    bottom: 15
  }
});
