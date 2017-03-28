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
import Avatar from '../users/Avatar';

export default class Question extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Avatar size={30} />
        <View style={styles.content}>
          <Text style={styles.question}>
            What did you get?
          </Text>
          <Text style={styles.answer}>
            I got the Whelk, Pigeon Pie, and you really need to try the Oak Steamed Mussels!
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: Sizes.InnerFrame,
    marginTop: 1,
    marginBottom: 0,
    padding: Sizes.InnerFrame,
    flexDirection: 'row',
    backgroundColor: Colors.SubduedForeground
  },

  content: {
    paddingLeft: Sizes.InnerFrame,
    marginRight: Sizes.OuterFrame
  },

  question: {
    fontWeight: '500',
    fontSize: Sizes.SmallText,
    color: Colors.Text
  },

  answer: {
    fontWeight: '100',
    fontSize: Sizes.SmallText,
    color: Colors.Text
  }
});
