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
import {
  SearchBar, Card
} from 'react-native-elements';

export default class Main extends Component {
  constructor(props) {
    super(props);

    // bindings
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem({item, index}) {
    return (
      <Card
        key={item}
        title='BORALIA'
        image={{
          uri: 'https://s3-media2.fl.yelpcdn.com/bphoto/YWhgTgKx2t-0uZ1W6We6NQ/o.jpg'
        }}>
        <Text>
          Boralia celebrates the historic origins of Canadian cuisine. Our menu draws inspiration from traditional Aboriginal dishes, as well as the recipes of early settlers and immigrants of the 18th and 19th centuries.
        </Text>
      </Card>
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
          <SearchBar
            containerStyle={styles.searchContainer}
            inputStyle={styles.searchInput}
            placeholder='Johnny Appleseed' />
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
    backgroundColor: Colors.Background
  },

  header: {
    alignItems: 'center',
    backgroundColor: Colors.Foreground,
    padding: Sizes.InnerFrame / 2,
    paddingTop: Sizes.OuterFrame * 2,
  },

  title: {
    color: Colors.Text,
    fontSize: Sizes.H2,
    letterSpacing: 5,
    fontWeight: '200'
  },

  searchContainer: {
    alignSelf: 'stretch',
    backgroundColor: Colors.Foreground,
    borderTopColor: Colors.Foreground,
    borderBottomColor: Colors.Foreground
  },

  searchInput: {
    fontWeight: '100'
  },

  list: {
    flex: 1
  }
});
