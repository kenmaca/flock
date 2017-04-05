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
import UppercasedText from '../common/UppercasedText';

export default class RestaurantCard extends Component {
  render() {
    return (
      <View style={[
          styles.container,
          this.props.spacing && {
            marginTop: this.props.spacing
          }
        ]}>
        <TouchableOpacity
          onPress={Actions.restaurant}>
          <Card
            containerStyle={styles.card}
            image={{
              uri: 'https://s3-media2.fl.yelpcdn.com/bphoto/YWhgTgKx2t-0uZ1W6We6NQ/o.jpg'
            }}>
            <View style={styles.content}>
              <View style={styles.header}>
                <UppercasedText style={[
                    Styles.Text, Styles.Emphasized, Styles.Title,
                    Styles.BottomSpacing
                  ]}>
                  Boralia
                </UppercasedText>
                <AvatarGroup
                  size={23}
                  users={[1, 2, 3]} />
              </View>
              <Text style={[
                  Styles.Text, Styles.Subtitle, Styles.BottomSpacing
                ]}>
                Boralia celebrates the historic origins of Canadian cuisine. Our menu draws inspiration from traditional Aboriginal dishes, as well as the recipes of early settlers and immigrants of the 18th and 19th centuries.
              </Text>
              <View style={Styles.EqualColumns}>
                <UppercasedText style={Styles.Text, Styles.SmallText}>
                  Canadian, Heritage, and Cute
                </UppercasedText>
              </View>
            </View>
          </Card>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},

  card: {
    borderWidth: 0,
    padding: 0,
    margin: 0,
    shadowColor: Colors.Transparent,
    backgroundColor: Colors.Foreground
  },

  content: {
    padding: Sizes.OuterFrame - Sizes.InnerFrame
  },

  header: {
    flex: 1,
    flexDirection: 'row',
  }
});
