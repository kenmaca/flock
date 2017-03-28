import React, {
  Component
} from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity
} from 'react-native';
import {
  Sizes, Colors
} from '../../Const';
import {
  Actions
} from 'react-native-router-flux';

// components
import {
  Card, Icon
} from 'react-native-elements';

export default class FollowUserCard extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={Actions.search}>
        <Card
          containerStyle={styles.container}>
          <Icon
            name='twitter'
            type='entypo'
            color={Colors.AlternateText}
            size={45} />
          <Text style={styles.title}>
            ADD NEW
          </Text>
        </Card>
      </TouchableOpacity>
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
    backgroundColor: Colors.PositiveButton
  },

  title: {
    textAlign: 'center',
    marginTop: Sizes.InnerFrame / 2,
    fontWeight: '500',
    fontSize: Sizes.SmallText,
    color: Colors.AlternateText
  }
});
