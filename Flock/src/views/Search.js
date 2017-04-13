import React, {
  Component
} from 'react';
import {
  View, StyleSheet, Text, FlatList, ScrollView, TouchableOpacity
} from 'react-native';
import {
  Colors, Sizes, Styles
} from '../Const';
import {
  Actions
} from 'react-native-router-flux';
import Firebase from '../utils/Firebase';

// components
import Header from '../components/common/Header';
import HeaderText from '../components/common/HeaderText';
import * as Animatable from 'react-native-animatable';
import {
  SearchBar, ListItem
} from 'react-native-elements';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
    this._searchRef = Firebase.database().ref('search');

    // bindings
    this.search = this.search.bind(this);
  }

  search(term) {
    if (term) {

      // get rid of previous search task
      this._searchTask && clearTimeout(this._searchTask);
      this._searchTask = setTimeout(() => {

        // send the request and log the key to listen to
        this._responseKey = this._searchRef.child('request').push({

          // query
          type: 'user', index: 'firebase', q: `*${term}*`
        }).key;

        // keep track of key to display
        this._responseRef = this._searchRef.child(
          `response/${this._responseKey}`
        );
        this._responseListener = this._responseRef.on(
          'value', response => {
            if (response.exists()) {

              // state the matching hits
              response = response.val();
              this.setState({
                results: response.hits.total ? response.hits.hits: []
              });

              // and kill the listener + fb object
              this._responseRef.off('value', this._responseListener);
              this._responseRef.remove();
            }
          }
        )
      }, 200);
    } else {

      // clearing search removes results
      this.setState({results: []});
    }
  }

  componentWillUnmount() {
    this._responseListener && this._responseRef.off('value', this._responseListener);
  }

  renderItem({item, index}) {
    return (
      <TouchableOpacity
        onPress={() => Actions.profile({
          uid: item._id
        })}>
        <ListItem
          key={index}
          roundAvatar
          title={item._source.fullName}
          titleStyle={[Styles.Text, Styles.Emphasized]}
          subtitle={`@${item._source.screenName}`}
          subtitleStyle={Styles.Text}
          avatar={{
            uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
          }}
          avatarStyle={styles.avatar} />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Animatable.View
          animation='slideInDown'
          duration={300}
          style={styles.header}>
          <View style={styles.search}>
            <SearchBar
              noIcon
              autoFocus
              onChangeText={this.search}
              containerStyle={styles.searchContainer}
              inputStyle={styles.searchInput}
              placeholder='Search people' />
          </View>
          <TouchableOpacity
            onPress={Actions.pop}
            style={styles.cancelContainer}>
            <Text style={[
                Styles.Text, Styles.Center, Styles.Alternate
              ]}>
              Cancel
            </Text>
          </TouchableOpacity>
        </Animatable.View>
        <ScrollView
          style={styles.scroll}>
          {
            this.state.results.length > 0 && (
              <View>
                <View style={styles.section}>
                  <HeaderText text='Results' />
                </View>
                <FlatList
                  keyExtractor={(item, index) => index}
                  data={this.state.results}
                  renderItem={this.renderItem}
                  style={styles.list} />
              </View>
            )
          }
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

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    padding: Sizes.InnerFrame,
    backgroundColor: Colors.MenuBackground
  },

  searchContainer: {
    alignSelf: 'stretch',
    backgroundColor: Colors.Transparent
  },

  search: {
    flex: 1
  },

  searchInput: {
    backgroundColor: Colors.Background,
    color: Colors.Text,
    fontWeight: '100',
    fontSize: Sizes.Text,
  },

  cancelContainer: {
    paddingLeft: Sizes.InnerFrame / 2,
    paddingRight: Sizes.InnerFrame / 2
  },

  scroll: {
    flex: 1,
    alignSelf: 'stretch'
  },

  // list
  section: {
    margin: Sizes.InnerFrame,
    marginBottom: 0
  },

  list: {
    flex: 1,
    alignSelf: 'stretch'
  },

  avatar: {
    height: 30,
    width: 30,
    borderRadius: 15
  }
});
