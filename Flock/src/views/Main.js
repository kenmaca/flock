import React, {
  Component
} from 'react';
import {
  View, StyleSheet, Text, FlatList
} from 'react-native';
import {
  Colors, Sizes
} from '../Const';
import {
  Actions
} from 'react-native-router-flux';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Flock</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background
  }
});
