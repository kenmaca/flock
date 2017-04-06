import React, {
  Component
} from 'react';
import {
  View, StyleSheet, Alert
} from 'react-native';
import {
  Actions
} from 'react-native-router-flux';
import {
  Colors, Strings
} from '../Const';
import Firebase from '../utils/Firebase';

// components
import Logo from '../components/common/Logo';
import * as Animatable from 'react-native-animatable';

/**
 * Handles logging in and redirection to an appropriate View
 * either on app launch or after a login/registration was processed.
 */
export default class Loader extends Component {
  componentDidMount() {

    // handle version check before anything else
    Firebase.database().ref('config').once('value', config => {
      config = config.val();

      // unsupported client, so prompt user to update
      if (!config || config.minimumVersion > Strings.ClientVersion) {
        Alert.alert(
          `Please update ${Strings.AppName}`,
          `You are currently running an older version of ${Strings.AppName} `
            + 'that is no longer supported'
        );
      } else {

        // register anonymously or resume
        this.authListener = Firebase.auth().onAuthStateChanged(user => {
          if (user) {

            // logged in, but check if user profile was created
            this._usChR = Firebase.database().ref(`users/${user.uid}`);
            this._usChL = this._usChR.on(
              'value',
              snap => snap.exists() ? Actions.main(): Actions.register()
            );
          } else {

            // not registered
            Actions.login();
          }
        });
      }
    });
  }

  componentWillUnmount() {
    this._usChR && this._usChR.off('value', this._usChL);
  }

  render() {
    return (
      <View style={styles.container}>
        <Animatable.View
          animation='pulse'
          iterationCount='infinite'>
          <Logo size={60} />
        </Animatable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.MenuBackground
  }
});
