import React, {
  Component
} from 'react';
import {
  StyleSheet, View, Text
} from 'react-native';
import {
  Styles, Sizes, Colors
} from '../Const';
import {
  Actions
} from 'react-native-router-flux';
import Firebase from '../utils/Firebase';

// components
import Avatar from '../components/users/Avatar';
import ContentCoverSlider from '../components/common/ContentCoverSlider';
import {
  FormLabel, FormInput, FormValidationMessage, Button
} from 'react-native-elements';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenName: '',
      fullName: ''
    };

    // bindings
    this.validateFullName = this.validateFullName.bind(this);
    this.checkScreenNameAvailability = this.checkScreenNameAvailability.bind(this);
    this.register = this.register.bind(this);
  }

  componentWillUnmount() {
    this._snAvR && this._snAvR.off('value', this._snAvL);
  }

  register() {

    // register the user info
    Firebase.database().ref(`users/${Firebase.auth().currentUser.uid}`).update({
      screenName: this.state.screenName,
      fullName: this.state.fullName
    });

    // and the screen name link
    Firebase.database().ref(`profiles/${this.state.screenName}`).set(
      Firebase.auth().currentUser.uid
    );

    // done and out
    Actions.loader();
  }

  validateFullName(name) {
    if (name.split(' ').length > 1) {
      this.setState({
        errorFullName: null,

        // conversion to title case
        fullName: name.replace(
          /\w\S*/g,
          text => text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()
        )
      });
    } else {
      this.setState({
        errorFullName: 'Invalid format.',
        fullName: ''
      });
    }
  }

  checkScreenNameAvailability(name) {
    if (name.length > 2) {
      this.componentWillUnmount();
      this._snAvR = Firebase.database().ref(`profiles/${name}`)
      this._snAvL = this._snAvR.on('value', snap => {
        this.setState(
          snap.exists()
          ? {
            errorScreenName: 'Screen name already exists.',
            screenName: ''
          }: {
            errorScreenName: null,
            screenName: name
          }
        );
      });
    } else {
      this.setState({
        errorScreenName: 'Screen name must be at least 3 characters.',
        screenName: ''
      });
    }
  }

  render() {
    return (
      <ContentCoverSlider backAction={false}>
        <View style={[
            Styles.Card, styles.card, styles.header
          ]}>
          <Avatar size={100} />
          <View style={styles.info}>
            <Text style={[Styles.Text, Styles.Emphasized, Styles.Title]}>
              Introduce yourself
            </Text>
            <FormLabel labelStyle={[
                Styles.Text, styles.field, styles.fieldSpacing
              ]}>
              Screen name
            </FormLabel>
            <FormInput
              containerStyle={styles.field}
              inputStyle={Styles.Text}
              onChangeText={this.checkScreenNameAvailability}
              placeholder='Your desired screen name' />
            {this.state.errorScreenName && <FormValidationMessage labelStyle={[
                Styles.Text, Styles.SmallText, styles.field, styles.error
              ]}>
              {this.state.errorScreenName}
            </FormValidationMessage>}
          </View>
        </View>
        <View style={[
            Styles.Card, styles.card
          ]}>
          <FormLabel labelStyle={[Styles.Text, styles.field]}>
            Full name
          </FormLabel>
          <FormInput
            autoCapitalize='words'
            containerStyle={styles.field}
            inputStyle={Styles.Text}
            onChangeText={this.validateFullName}
            placeholder='So your friends can find you' />
          {this.state.errorFullName && <FormValidationMessage labelStyle={[
              Styles.Text, Styles.SmallText, styles.field, styles.error
            ]}>
            {this.state.errorFullName}
          </FormValidationMessage>}
          <Button
            disabled={!this.state.screenName || !this.state.fullName}
            icon={{
              name: 'user',
              type: 'entypo',
              size: Sizes.Text
            }}
            onPress={this.register}
            title='Complete my Profile'
            backgroundColor={Colors.PositiveButton}
            textStyle={[Styles.Text, Styles.Emphasized, Styles.Alternate]}
            buttonStyle={[styles.field, styles.fieldSpacing]} />
        </View>
      </ContentCoverSlider>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    margin: Sizes.InnerFrame,
    marginTop: 0
  },

  header: {
    flexDirection: 'row',
    marginTop: 125,
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },

  info: {
    flex: 1,
    marginLeft: Sizes.InnerFrame
  },

  field: {
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0
  },

  error: {
    marginTop: Sizes.InnerFrame / 2,
    color: Colors.NegativeButton
  },

  fieldSpacing: {
    marginTop: Sizes.OuterFrame
  },

  button: {
    borderRadius: 0,
    shadowOpacity: 0,
    margin: 0
  }
});
