import React, {
  Component
} from 'react';
import {
  View, StyleSheet, Text, FlatList
} from 'react-native';
import {
  Colors, Sizes, Styles
} from '../Const';
import {
  Actions
} from 'react-native-router-flux';

// components
import * as Animatable from 'react-native-animatable';
import {
  SearchBar, ListItem
} from 'react-native-elements';

export default class Search extends Component {
  renderItem({item, index}) {
    return (
      <ListItem
        key={index}
        roundAvatar
        title='Alexandra Lee'
        titleStyle={[Styles.Text, Styles.Emphasized]}
        subtitle='lexigirl'
        subtitleStyle={Styles.Text}
        avatar={{
          uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
        }}
        avatarStyle={styles.avatar} />
    );
  }

  render() {
    return (
      <Animatable.View
        animation='slideInDown'
        duration={300}
        style={styles.container}>
        <View style={styles.header}>
          <SearchBar
            noIcon
            autoFocus
            containerStyle={styles.searchContainer}
            inputStyle={styles.searchInput}
            placeholder='Search people' />
        </View>
        <FlatList
          keyExtractor={(item, index) => index}
          data={[1, 2, 3, 4]}
          renderItem={this.renderItem}
          style={styles.list} />
      </Animatable.View>
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
    padding: Sizes.InnerFrame,
    backgroundColor: Colors.MenuBackground
  },

  searchContainer: {
    backgroundColor: Colors.Transparent
  },

  searchInput: {
    backgroundColor: Colors.Background,
    color: Colors.Text,
    fontWeight: '100',
    fontSize: Sizes.Text,
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
