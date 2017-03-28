import React, {
  Component
} from 'react';
import {
  View, StyleSheet, Text, ScrollView, Image
} from 'react-native';
import {
  Colors, Sizes, Styles
} from '../Const';

// components
import {
  Button, ButtonGroup
} from 'react-native-elements';
import Avatar from '../components/users/Avatar';
import UserCard from '../components/users/UserCard';
import RestaurantList from '../components/restaurants/RestaurantList';

// animations
import * as Animatable from 'react-native-animatable';
const AnimatedAvatar = Animatable.createAnimatableComponent(Avatar);

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.profile}>
            <AnimatedAvatar
              animation='bounceIn'
              delay={300}
              duration={500}
              size={50} />
            <View style={styles.bio}>
              <Text style={styles.title}>
                Alexandra Lee
              </Text>
              <Text style={[Styles.Text, Styles.Emphasized, styles.username]}>
                @LEXYGIRL
              </Text>
            </View>
            <Button
              title='FOLLOW'
              fontSize={Sizes.SmallText}
              backgroundColor={Colors.PositiveButton}
              buttonStyle={styles.follow}
              icon={{
                name: 'users',
                type: 'entypo',
                size: Sizes.SmallText
              }} />
          </View>
          <View style={styles.trophyCase}>
            <Button
              title='23 Influenced'
              fontSize={Sizes.SmallText}
              backgroundColor={Colors.Transparent}
              buttonStyle={styles.follow}
              icon={{
                name: 'twitter',
                type: 'entypo',
                size: Sizes.SmallText,
                color: Colors.PositiveButton
              }} />
              <Button
                title='Following 38'
                fontSize={Sizes.SmallText}
                backgroundColor={Colors.Transparent}
                buttonStyle={styles.follow}
                icon={{
                  name: 'users',
                  type: 'entypo',
                  size: Sizes.SmallText,
                  color: Colors.PositiveButton
                }} />
              <Button
                title='129 Restaurants'
                fontSize={Sizes.SmallText}
                backgroundColor={Colors.Transparent}
                buttonStyle={styles.follow}
                icon={{
                  name: 'shop',
                  type: 'entypo',
                  size: Sizes.SmallText,
                  color: Colors.PositiveButton
                }} />
          </View>
        </View>
        <ButtonGroup
          selectedIndex={1}
          onPress={() => {}}
          buttons={['Frequented', 'Possibly Interested']}
          textStyle={Styles.Text}
          containerStyle={styles.buttons} />
        <RestaurantList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.Background
  },

  header: {
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    padding: Sizes.InnerFrame,
    backgroundColor: Colors.MenuBackground
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  bio: {
    flex: 1,
    marginLeft: Sizes.InnerFrame
  },

  title: {
    fontWeight: '200',
    fontSize: Sizes.H1,
    color: Colors.AlternateText
  },

  username: {
    color: Colors.AlternateText
  },

  follow: {
    marginRight: 0,
    marginLeft: 0,
    padding: Sizes.InnerFrame / 2
  },

  trophyCase: {
    marginTop: Sizes.InnerFrame,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  buttons: {
    marginTop: Sizes.InnerFrame,
    marginLeft: Sizes.InnerFrame,
    marginRight: Sizes.InnerFrame,
    height: 25
  }
});
