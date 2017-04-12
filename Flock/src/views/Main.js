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
import Tracker from '../utils/Tracker';
import Firebase from '../utils/Firebase';

// components
import * as Animatable from 'react-native-animatable';
import Header from '../components/common/Header';
import HeaderText from '../components/common/HeaderText';
import RestaurantList from '../components/restaurants/RestaurantList';
import UserCard from '../components/users/UserCard';
import FollowUserCard from '../components/users/FollowUserCard';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      following: {}
    };
  }

  componentDidMount() {
    this.tracker = new Tracker();

    // profile
    this._userRef = Firebase.database().ref(
      `users/${Firebase.auth().currentUser.uid}`
    );
    this._userListener = this._userRef.on(
      'value', user => user.exists() && this.setState(user.val())
    );
  }

  componentWillUnmount() {
    this.tracker.off();
    this._userListener && this._userRef.off('value', this._userListener);
  }

  renderUserItem({item, index}) {
    return (
      <UserCard
        uid={item}
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
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.userScroll}>
            <FollowUserCard
              key='user-search' />
            <FlatList
              horizontal
              keyExtractor={(item, index) => `user-${index}`}
              data={
                Object.keys(this.state.following)
                  .filter(uid => this.state.following[uid])
              }
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
