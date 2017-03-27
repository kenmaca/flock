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
  Card, Icon
} from 'react-native-elements';

export default class FollowUserCard extends Component {
  render() {
    return (
      <Card
        containerStyle={styles.container}>
        <Icon
          name='group-add'
          color={Colors.AlternateText}
          size={50} />
        <Text style={styles.title}>
          FOLLOW
        </Text>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    padding: Sizes.InnerFrame / 2,
    paddingLeft: Sizes.InnerFrame,
    paddingRight: Sizes.InnerFrame,
    marginRight: 0,
    shadowColor: Colors.Transparent,
    backgroundColor: Colors.MenuBackground
  },

  title: {
    textAlign: 'center',
    marginTop: Sizes.InnerFrame / 2,
    fontWeight: '500',
    fontSize: Sizes.SmallText,
    color: Colors.AlternateText
  }
});
