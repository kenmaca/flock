import React, {
  Component
} from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import {
  Sizes
} from '../Const';

import Camera from '../components/common/Camera';
import CameraRollLibrary from '../components/common/CameraRollLibrary';
import Swiper from 'react-native-swiper';


const num = 0;

export default class Upload extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: num
    }
  }

  onMomentumScrollEnd(e, s, c) {
    num = s.index;
    console.log(num)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.row, {height: Sizes.Height * 0.1}]}>
          <Text style={[styles.sideButton, {left: 10}]}>
            cancel
          </Text>
          <Text>
            {
              this.state.index == 0
              ?
              'Camera Roll'
              :
              'Photo'
            }
          </Text>
          <Text style={[styles.sideButton, {right: 10}]}>
            next
          </Text>
        </View>
        <Swiper
          title='yiyiiyiyi'
          loop={false}
          height={Sizes.Height * 0.8}
          index={0}
          showsPagination={false}
          onMomentumScrollEnd={this.onMomentumScrollEnd}>
          <CameraRollLibrary />
          <Camera height={Sizes.Height * 0.5}/>
        </Swiper>
        <View style={[styles.row, {height: Sizes.Height * 0.1, backgroundColor: '#F5F5F5'}]}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sideButton: {
    position: 'absolute'
  }
});
