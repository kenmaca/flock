import React, {
  Component
} from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity, Image
} from 'react-native';
import {
  Sizes, Colors, Styles
} from '../../Const';
import {
  Actions
} from 'react-native-router-flux';

// components
import {
  Card, Icon
} from 'react-native-elements';
import Logo from '../common/Logo';

export default class FollowUserCard extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={Actions.search}>
        <Card
          containerStyle={styles.container}>
          <Logo />
          <Text style={[
              Styles.Text, Styles.SmallText, Styles.Emphasized,
              Styles.Alternate, Styles.Center, Styles.TopSpacing
            ]}>
            ADD NEW
          </Text>
        </Card>
      </TouchableOpacity>
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
