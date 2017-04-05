import React, {
  Component
} from 'react';
import {
  View, StyleSheet, Text
} from 'react-native';
import {
  Router, Scene, Actions
} from 'react-native-router-flux';
import {
  Colors, Sizes
} from './Const';

// views
import Main from './views/Main';
import Search from './views/Search';
import Profile from './views/Profile';
import Restaurant from './views/Restaurant';
import Web from './views/Web';

export default class Index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Router>
          <Scene
            hideNavBar
            key='root'>
              <Scene
                initial
                key='main'
                component={Main}
                type='replace' />
              <Scene
                key='search'
                component={Search}
                animation='fade' />
              <Scene
                key='profile'
                component={Profile}
                direction='left' />
              <Scene
                key='restaurant'
                component={Restaurant}
                direction='fade' />
              <Scene
                key='web'
                component={Web} />
          </Scene>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.MenuBackground
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
});
