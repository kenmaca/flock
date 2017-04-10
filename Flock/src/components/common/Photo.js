import React, {
  Component
} from 'react';
import {
  View, StyleSheet, Image, Text
} from 'react-native';
import {
  Actions
} from 'react-native-router-flux';

import {
  Sizes
} from '../../Const';

export default class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.image
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: this.state.image.path.toString() }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: Sizes.Height,
    width: Sizes.Width
  }
});
