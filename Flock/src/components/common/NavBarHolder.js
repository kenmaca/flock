import React, {
  Component
} from 'react';
import {
  View,
  StyleSheet,
  Navigator,
  Text
} from 'react-native';
import {
  Sizes
} from '../../Const';

export default class NavBarHolder extends Component {

  render() {
    return (
      <Navigator
        initialRoute={{ title: ''}}
        renderScene={(route, navigator) =>
          this.props.renderView
        }
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) =>
              {
                return (
                  <Text style={{marginLeft: 10}}
                    onPress={() => navigator.pop()}>
                    Cancel
                  </Text>
                      )},
              RightButton: (route, navigator, index, navState) =>
              {
                return (
                  <Text style={{marginRight: 10}}
                    onPress={() => this.props.nextAction || null}>
                    Next
                  </Text>
                )},
              Title: (route, navigator, index, navState) =>
              {
                return (
                  <Text style={{fontWeight: 'bold', fontSize: 15}}
                    onPress={() => this.props.titleAction}>
                    {this.props.title || 'Photo'}
                  </Text>
                )},
            }}
            style={{backgroundColor: '#F5F5F5', height: Sizes.Height*0.08}}
            />
        }
      />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
