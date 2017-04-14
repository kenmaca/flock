import React, {
  Component
} from 'react';
import {
  View,
  StyleSheet,
  Navigator,
  Text
} from 'react-native';
import {
  Sizes
} from '../Const';

import NavBarHolder from '../components/common/NavBarHolder'
import Camera from '../components/common/Camera';
import CameraRollLibrary from '../components/common/CameraRollLibrary';
import Swiper from 'react-native-swiper';

export default class Upload extends Component {
  render() {
    return (
      <NavBarHolder
        renderView={
          <View style={styles.container}>
            <Swiper
              loop={false}
              index={0}
              showsPagination={false}>
              <CameraRollLibrary />
              <Camera />
            </Swiper>
          </View>} />
        );
      }
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
