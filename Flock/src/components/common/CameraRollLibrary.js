import React, {
  Component
} from 'react';
import {
  View, ScrollView, StyleSheet, Image, NativeModules
} from 'react-native';
import {
  Actions
} from 'react-native-router-flux';

import CameraRollPicker from 'react-native-camera-roll-picker';
import {
  Sizes, Colors
} from '../../Const';
const ReadImageData = NativeModules.ReadImageData;

export default class CameraRollLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    }
  }

  getSelectedImages(Images, Content) {
    const ReadImageData = NativeModules.ReadImageData;
    if (Images[0]) {
      ReadImageData.readImage(Images[0].uri, x => {
        this.setState({
          image: 'data:image/png;base64,' + x.toString()
        })
      })
    }
    console.log(Content)

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.selectedImage}>
          <Image
            style={{height: Sizes.Height/2,  width: Sizes.Width}}
            source={{ uri: this.state.image ||  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}/>
        </View>
        <CameraRollPicker
          imagesPerRow={4}
          imageMargin={1}
          maximum={1}
          callback={this.getSelectedImages.bind(this)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey'
  }
});
