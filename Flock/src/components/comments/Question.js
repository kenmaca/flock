import React, {
  Component
} from 'react';
import {
  StyleSheet, View, Text
} from 'react-native';
import {
  Sizes, Colors, Styles
} from '../../Const';

// components
import HeaderText from '../common/HeaderText';

export default class Question extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderText text={this.props.children || 'A question?'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Sizes.InnerFrame,
    marginBottom: Sizes.InnerFrame
  }
});
