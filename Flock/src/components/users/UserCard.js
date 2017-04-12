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
import {
  Card
} from 'react-native-elements';
import Avatar from './Avatar';

export default class UserCard extends Component {
  render() {
    return (
      <Card
        containerStyle={styles.container}>
        <Avatar
          uid='RtaxYshaOtbxsrwAqqauxSH4tfw2'
          size={50} />
        <Text
          style={[
            Styles.Text, Styles.Center, Styles.SmallText,
            Styles.Emphasized, Styles.TopSpacing
          ]}>
          @lexygirl
        </Text>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
    margin: 0,
    padding: 0,
    shadowColor: Colors.Transparent,
    marginLeft: Sizes.InnerFrame / 2
  }
});
