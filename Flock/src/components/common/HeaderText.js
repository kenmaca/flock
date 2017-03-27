import React, {
  Component
} from 'react';
import {
  StyleSheet, View, Text
} from 'react-native';
import {
  Sizes, Colors
} from '../../Const';

export default class HeaderText extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          {this.props.text}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: Sizes.InnerFrame,
    marginTop: Sizes.OuterFrame,
    marginBottom: 0
  },

  header: {
    fontWeight: '500',
    fontSize: Sizes.SmallText,
    color: Colors.Text
  }
});
