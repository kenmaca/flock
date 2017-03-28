import React, {
  Component
} from 'react';
import {
  StyleSheet, View, FlatList
} from 'react-native';
import {
  Sizes, Colors
} from '../../Const';

// components
import RestaurantCard from './RestaurantCard';
import HeaderText from '../common/HeaderText';

export default class RestaurantList extends Component {
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

  render() {
    return (
      <View style={styles.container}>
        <HeaderText text='RESTAURANTS FREQUENTED' />
        <FlatList
          keyExtractor={(item, index) => `resto-${index}`}
          data={[1, 2, 3]}
          renderItem={this.renderRestaurantItem}
          style={styles.list} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  list: {
    flex: 1,
    alignSelf: 'stretch'
  }
});
