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

// imports for testing photo Component and camera Component
import Camera from '../components/common/Camera';
import CameraRollLibrary from '../components/common/CameraRollLibrary';

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      mainView: this.props.mainView || (<View style={styles.mainView}/>)
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text>
            Cancel
          </Text>
          <Text>
            Title
          </Text>
          <Text>
            Next
          </Text>
        </View>
        <View style={styles.mainView}>
          <CameraRollLibrary/>
        </View>
        <View style={styles.botBar}>
          <Text>
            Library
          </Text>
          <Text>
            Photo
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  topBar: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    height: Sizes.Height / 10,
    backgroundColor: 'red'
  },
  botBar: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    height: Sizes.Height / 10,
    backgroundColor: 'blue'
  },
  mainView: {
    flex: 1,
    alignSelf: 'stretch',
    // backgroundColor: 'black'
  }
});
