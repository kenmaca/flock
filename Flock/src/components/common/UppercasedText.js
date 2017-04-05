import React, {
  Component
} from 'react';
import {
  Text
} from 'react-native';

export default class UppercasedText extends Component {
  render() {
    return (
      <Text {...this.props}>
        {this.props.children.toUpperCase()}
      </Text>
    )
  }
}
