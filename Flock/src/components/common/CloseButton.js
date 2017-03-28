import React, {
  Component
} from 'react';
import {
  StyleSheet, TouchableOpacity, View
} from 'react-native';
import {
  Sizes, Colors
} from '../../Const';
import {
  Actions
} from 'react-native-router-flux';

// components
import {
  Icon
} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

export default class CloseButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[
        styles.container,
        this.props.style
      ]}>
        <TouchableOpacity
          onPress={this.props.action || Actions.pop}>
          <Animatable.View
            animation='zoomIn'
            delay={250}
            duration={300}>
            <Icon
              name='arrow-left'
              type='simple-line-icon'
              color={Colors.AlternateText}
              size={16} />
          </Animatable.View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    top: -50,
    left: 0,
    padding: Sizes.InnerFrame,
    position: 'absolute'
  }
});
