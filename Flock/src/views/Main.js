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
import Header from '../components/common/Header';
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
        <Header />
        <ScrollView>
          <View style={[
              styles.section
            ]}>
            <HeaderText text='In your flock' />
          </View>
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
          <View style={styles.section}>
            <HeaderText text='Restaurants Frequented' />
            <RestaurantList />
          </View>
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

  // list
  section: {
    margin: Sizes.InnerFrame
  },

  flock: {
    marginLeft: 0,
    marginRight: 0
  },

  userScroll: {
    paddingLeft: Sizes.InnerFrame,
    paddingRight: Sizes.InnerFrame
  },

  userList: {
    alignSelf: 'stretch'
  }
});
