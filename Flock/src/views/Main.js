import React, {
  Component
} from 'react';
import {
  View, StyleSheet, Text, FlatList
} from 'react-native';
import {
  Colors, Sizes
} from '../Const';
import {
  Actions
} from 'react-native-router-flux';

// components
import RestaurantCard from '../components/restaurants/RestaurantCard';

export default class Main extends Component {
  constructor(props) {
    super(props);

    // bindings
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem({item, index}) {
    return (
      <RestaurantCard
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
        <FlatList
          keyExtractor={(item, index) => index}
          data={[1, 2, 3]}
          renderItem={this.renderItem}
          style={styles.list} />
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

  list: {
    flex: 1,
    alignSelf: 'stretch'
  }
});
