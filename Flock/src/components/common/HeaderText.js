import React, {
  Component
} from 'react';
import {
  StyleSheet, View, Text
} from 'react-native';
import {
  Sizes, Colors, Styles
} from '../../Const';

export default class HeaderText extends Component {
  render() {
    return (
      <Text style={[Styles.Text, Styles.Emphasized, Styles.SmallText]}>
        {this.props.text.toUpperCase()}
      </Text>
    );
  }
}
