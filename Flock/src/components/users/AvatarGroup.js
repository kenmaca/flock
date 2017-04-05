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
import Avatar from './Avatar';

export default class AvatarGroup extends Component {
  render() {
    return (
      <View style={styles.container}>
        {
          (this.props.users || []).map((user, i) => (
            <Avatar
              style={styles.avatar}
              size={this.props.size || 28}
              outline
              key={i} />
          ))
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    marginRight: 5
  },

  avatar: {
    marginRight: -5
  }
});
