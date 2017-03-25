import React, {
  Component
} from 'react';
import {
  StyleSheet, View, ListView
} from 'react-native';
import {
  Sizes, Colors
} from '../../Const';

// components
import RestaurantCard from './RestaurantCard';

export default class RestaurantList extends Component {
  constructor(props) {
    super(props);
    this.componentWillReceiveProps(props);

    // bindings
    this.renderRow = this.renderRow.bind(this);
  }

  componentWillReceiveProps(props) {

    // update restaurant list
    this.rows = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    }).cloneWithRows(props.restaurants);
  }

  renderRow(restaurantId) {
    return (
      <RestaurantCard id={restaurantId} />
    );
  }

  render() {
    return (
      <ListView
        enableEmptySections
        style={styles.container}
        dataSource={this.rows}
        renderRow={this.renderRow} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
