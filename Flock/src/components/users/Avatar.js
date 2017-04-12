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
  Avatar
} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

// defaults
const SIZE = 34;

export default class CustomAvatar extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => Actions.profile({
          uid: this.props.uid
        })}>
        <Animatable.View
          ref='avatar'
          style={[
            {
              width: this.props.size || SIZE,
              height: this.props.size || SIZE,
              borderRadius: (this.props.size || SIZE) / 2,
              backgroundColor: this.props.outlineColor || Colors.Foreground,
              alignItems: 'center',
              justifyContent: 'center'
            }, this.props.style
          ]}>
          <Avatar
            rounded
            width={(this.props.size || SIZE) * (this.props.outline ? 0.9: 1)}
            height={(this.props.size || SIZE) * (this.props.outline ? 0.9: 1)}
            source={{
              uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
            }}
            containerStyle={{
              marginRight: (
                (this.props.size || SIZE) * (this.props.outline ? 0.9: 1)
              ) - 10,
              marginBottom: (
                (this.props.size || SIZE) * (this.props.outline ? 0.9: 1)
              ) - 20
            }}
            {...this.props} />
        </Animatable.View>
      </TouchableOpacity>
    );
  }
}
