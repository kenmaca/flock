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
import Firebase from '../../utils/Firebase';

// components
import {
  Card
} from 'react-native-elements';
import AvatarGroup from '../users/AvatarGroup';
import UppercasedText from '../common/UppercasedText';

export default class RestaurantCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this._restaurantRef = this.props.restaurantId && Firebase.database().ref(
      `restaurants/${this.props.restaurantId}`
    );

    this._restaurantListener = this._restaurantRef && this._restaurantRef.on(
      'value', restaurant => restaurant.exists() && this.setState(restaurant.val())
    );
  }

  componentWillUnmount() {
    this._restaurantRef && this._restaurantRef.off('value', this._restaurantListener);
  }

  render() {
    return (
      <View style={[
          styles.container,
          this.props.spacing && {
            marginTop: this.props.spacing
          }
        ]}>
        <TouchableOpacity
          onPress={() => Actions.restaurant({
            restaurantId: this.props.restaurantId
          })}>
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
                  {this.state.name || ''}
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
                  {this.state.address || ''}
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
