import React, {
  Component
} from 'react';
import {
  StyleSheet, View, Image
} from 'react-native';
import {
  Sizes, Colors
} from '../../Const';

export default class Logo extends Component {
  render() {
    return (
      <Image
        {...this.props}
        source={require('../../../res/img/logo_512.png')}
        style={[
          styles.container,
          this.props.styles,
          this.props.size && {
            width: this.props.size,
            height: this.props.size
          }
        ]} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50
  }
});
