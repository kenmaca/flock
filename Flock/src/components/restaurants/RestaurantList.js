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
        spacing={index ? Sizes.InnerFrame: this.props.startSpacing || 0}
        restaurantId={item}
        key={item} />
    );
  }

  render() {
    return (
      <FlatList
        {...this.props}
        onScroll={this.props.onScroll}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `resto-${index}`}
        data={this.props.restaurants || []}
        renderItem={this.renderRestaurantItem}
        contentContainerStyle={styles.container} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: Sizes.InnerFrame
  }
});
