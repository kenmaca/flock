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
import {
  Card
} from 'react-native-elements';
import AvatarGroup from '../users/AvatarGroup';

export default class RestaurantCard extends Component {
  render() {
    return (
      <Card
        containerStyle={styles.container}
        image={{
          uri: 'https://s3-media2.fl.yelpcdn.com/bphoto/YWhgTgKx2t-0uZ1W6We6NQ/o.jpg'
        }}>
        <View style={styles.header}>
          <View style={styles.headerInfo}>
            <Text style={styles.title}>
              BORALIA
            </Text>
            <Text style={styles.genres}>
              Canadian, Heritage, and Cute
            </Text>
          </View>
          <AvatarGroup
            users={[1, 2, 3]} />
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    padding: 0,
    shadowColor: Colors.Transparent
  },

  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Sizes.InnerFrame
  },

  headerInfo: {
    flex: 1
  },

  title: {
    fontWeight: '500',
    fontSize: Sizes.Text,
    color: Colors.Text
  },

  genres: {
    fontWeight: '100',
    fontSize: Sizes.SmallText,
    fontStyle: 'italic',
    color: Colors.SubduedText
  }
});
