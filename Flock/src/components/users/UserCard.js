import React, {
  Component
} from 'react';
import {
  StyleSheet, View, Text
} from 'react-native';
import {
  Sizes, Colors
} from '../../Const';

// components
import {
  Card
} from 'react-native-elements';
import Avatar from './Avatar';

export default class UserCard extends Component {
  render() {
    return (
      <Card
        containerStyle={styles.container}>
        <Avatar size={50} />
        <Text style={styles.title}>
          LEXYGIRL
        </Text>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    padding: Sizes.InnerFrame / 2,
    marginRight: 0,
    shadowColor: Colors.Transparent
  },

  title: {
    textAlign: 'center',
    marginTop: Sizes.InnerFrame / 2,
    fontWeight: '500',
    fontSize: Sizes.SmallText,
    color: Colors.Text
  }
});
