import React, {
  Component
} from 'react';
import {
  StyleSheet, View, Text
} from 'react-native';
import {
  Sizes, Colors, Styles
} from '../../Const';
import Firebase from '../../utils/Firebase';

// components
import {
  Card
} from 'react-native-elements';
import Avatar from './Avatar';

export default class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

    // user
    this._userRef = this.props.uid && Firebase.database().ref(
      `users/${this.props.uid}`
    );
    this._userListener = this._userRef && this._userRef.on(
      'value', user => user.exists() && this.setState(user.val())
    );
  }

  componentWillUnmount() {
    this._userListener && this._userRef.off('value', this._userListener);
  }

  render() {
    return (
      <Card
        containerStyle={styles.container}>
        <Avatar
          uid={this.props.uid}
          size={50} />
        <Text
          style={[
            Styles.Text, Styles.Center, Styles.SmallText,
            Styles.Emphasized, Styles.TopSpacing
          ]}>
          {`@${this.state.screenName}`}
        </Text>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
    margin: 0,
    padding: 0,
    shadowColor: Colors.Transparent,
    marginLeft: Sizes.InnerFrame / 2
  }
});
