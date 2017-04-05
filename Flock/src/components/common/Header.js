import React, {
  Component
} from 'react';
import {
  StyleSheet, View
} from 'react-native';
import {
  Sizes, Colors, Styles
} from '../../Const';

// components
import * as Animatable from 'react-native-animatable';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Animatable.Text
          animation='fadeIn'
          style={[
            Styles.Text, Styles.Alternate, styles.title
          ]}>
          FLOCK
        </Animatable.Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  // header
  header: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: Colors.MenuBackground,
    padding: Sizes.InnerFrame,
    paddingTop: Sizes.OuterFrame * 2,
  },

  title: {
    fontSize: Sizes.H2,
    letterSpacing: 5,
    fontWeight: '200'
  }
});
