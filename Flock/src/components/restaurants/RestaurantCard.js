import React, {
  Component
} from 'react';
import {
  StyleSheet, View, Text
} from 'react-native';
import {
  Sizes, Colors
} from '../../Const';

export default class RestaurantCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Hello
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: Sizes.OuterFrame,
    backgroundColor: Colors.Foreground
  }
});
