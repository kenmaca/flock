import React, {
  Component
} from 'react';
import {
  View, StyleSheet, Text
} from 'react-native';
import {
  Colors, Sizes, Styles
} from '../Const';
import {
  Actions
} from 'react-native-router-flux';

export default class Restaurant extends Component {
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.PositiveButton
  }
});
