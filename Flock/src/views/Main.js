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
import HeaderText from '../components/common/HeaderText';
import RestaurantCard from '../components/restaurants/RestaurantCard';
import UserCard from '../components/users/UserCard';
import FollowUserCard from '../components/users/FollowUserCard';

export default class Main extends Component {
  constructor(props) {
    super(props);

    // bindings
    this.renderRestaurantItem = this.renderRestaurantItem.bind(this);
  }

  renderRestaurantItem({item, index}) {
    return (
      <RestaurantCard
        key={item} />
    );
  }

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
          <Text
            style={styles.title}>
            FLOCK
          </Text>
        </View>
        <ScrollView>
          <HeaderText text='IN YOUR FLOCK' />
          <ScrollView
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
          <FlatList
            keyExtractor={(item, index) => `resto-${index}`}
            data={[1, 2, 3]}
            renderItem={this.renderRestaurantItem}
            style={styles.restoList} />
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

  searchContainer: {
    alignSelf: 'stretch',
    backgroundColor: Colors.MenuBackground,
    borderTopWidth: 0,
    borderBottomWidth: 0
  },

  searchInput: {
    fontWeight: '100'
  },

  // list
  userList: {
    alignSelf: 'stretch'
  },

  restoList: {
    flex: 1,
    alignSelf: 'stretch'
  }
});
