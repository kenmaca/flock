import React, {
  Component
} from 'react';
import {
  View, StyleSheet, Text, FlatList, ScrollView
} from 'react-native';
import {
  Colors, Sizes
} from '../Const';
import {
  Actions
} from 'react-native-router-flux';

// components
import * as Animatable from 'react-native-animatable';
import HeaderText from '../components/common/HeaderText';
import RestaurantList from '../components/restaurants/RestaurantList';
import UserCard from '../components/users/UserCard';
import FollowUserCard from '../components/users/FollowUserCard';

export default class Main extends Component {
  renderUserItem({item, index}) {
    return (
      <UserCard
        key={item} />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Animatable.Text
            animation='fadeIn'
            style={styles.title}>
            FLOCK
          </Animatable.Text>
        </View>
        <ScrollView>
          <HeaderText text='IN YOUR FLOCK' />
          <ScrollView
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.userScroll}
            horizontal>
            <FollowUserCard
              key='user-search' />
            <FlatList
              horizontal
              keyExtractor={(item, index) => `user-${index}`}
              data={[1, 2, 3, 4, 5, 6, 7, 8]}
              renderItem={this.renderUserItem}
              style={styles.userList} />
          </ScrollView>
          <HeaderText text='RESTAURANTS FREQUENTED' />
          <RestaurantList />
        </ScrollView>
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

  // header
  header: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: Colors.MenuBackground,
    padding: Sizes.InnerFrame,
    paddingTop: Sizes.OuterFrame * 2,
  },

  title: {
    color: Colors.AlternateText,
    fontSize: Sizes.H2,
    letterSpacing: 5,
    fontWeight: '200'
  },

  // list
  userScroll: {
    paddingRight: Sizes.InnerFrame
  },

  userList: {
    alignSelf: 'stretch'
  }
});
