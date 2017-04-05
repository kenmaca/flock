import React, {
  Component
} from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity
} from 'react-native';
import {
  Sizes, Colors, Styles
} from '../../Const';
import {
  Actions
} from 'react-native-router-flux';

// components
import {
  Card
} from 'react-native-elements';
import AvatarGroup from '../users/AvatarGroup';
import Question from '../comments/Question';

export default class RestaurantCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={Actions.restaurant}>
          <Card
            containerStyle={styles.card}
            image={{
              uri: 'https://s3-media2.fl.yelpcdn.com/bphoto/YWhgTgKx2t-0uZ1W6We6NQ/o.jpg'
            }}>
            <View style={styles.header}>
              <View style={styles.headerInfo}>
                <Text style={[Styles.Text, Styles.Emphasized, Styles.Title]}>
                  BORALIA
                </Text>
                <Text style={[Styles.Subtitle, styles.subtitle]}>
                  Canadian, Heritage, and Cute
                </Text>
              </View>
              <AvatarGroup
                users={[1, 2, 3]} />
            </View>
          </Card>
        </TouchableOpacity>
        <Question />
        <Question />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},

  card: {
    borderWidth: 0,
    padding: 0,
    shadowColor: Colors.Transparent,
    backgroundColor: Colors.Foreground
  },

  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Sizes.InnerFrame
  },

  headerInfo: {
    flex: 1
  }
});
