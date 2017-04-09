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
import {
  LoginManager,
  GraphRequest,
  GraphRequestManager,
  AccessToken
} from 'react-native-fbsdk';

// components
import ContentCoverSlider from '../components/common/ContentCoverSlider';
import {
  FormLabel, FormInput, FormValidationMessage, Button
} from 'react-native-elements';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    // bindings
    this.loginWithEmail = this.loginWithEmail.bind(this);
    this.loginWithFacebook = this.loginWithFacebook.bind(this);
  }

  // returns
  loginWithEmail() {
    Firebase.auth().signInWithEmailAndPassword(
      this.state.email, this.state.password
    ).then(Actions.loader).catch(error => {
      switch(error.code) {

        // doesn't exist, so attempt to create it
        case 'auth/user-not-found':
          Firebase.auth().createUserWithEmailAndPassword(
            this.state.email, this.state.password
          ).then(Actions.loader).catch(error => {

            switch(error.code) {
              case 'auth/weak-password':
                this.setState({
                  errorEmail: null,
                  errorPassword: error.message
                });
                break;

              default:
                this.setState({
                  errorEmail: error.message,
                  errorPassword: null
                });
                break;
            }
          });
          break;

        case 'auth/invalid-email':
        case 'auth/user-disabled':
          this.setState({
            errorEmail: error.message,
            errorPassword: null
          });
          break;

        case 'auth/wrong-password':
          this.setState({
            errorEmail: null,
            errorPassword: error.message
          });
          break;
      }
    });
  }

  loginWithFacebook() {
    // user grants endpoints permissions
    LoginManager.logInWithReadPermissions([
      'public_profile',
      'email'
    ]).then(
      (result) => {
        if (result.isCancelled) {
          // do nothing
        } else {
          AccessToken.getCurrentAccessToken().then(
            user => {
              const infoRequest = new GraphRequest(
                `/me?fields=id,name,picture,first_name,last_name,email`,
                null,
                this._responseInfoCallback,
              )
              // start the graph request
              new GraphRequestManager().addRequest(infoRequest).start();
            }
          );
        }
      },
      (error) => {
        console.log('Login fail with error: ' + error);
      });
    }

    // response from Facebook GraphAPI
    _responseInfoCallback(error: ?Object, result: ?Object) {
      if (error) {
        alert('Error fetching data: ' + error.toString());
      } else {
        // TODO: save to Firebase
        console.log(result);
        alert('Success fetching data: ' + result.toString());
      }
    }

  render() {
    return (
      <ContentCoverSlider title='Your Flock Account'>
        <View style={[
            styles.card, styles.header
          ]}>
          <Text style={[
              Styles.Text, Styles.Emphasized, Styles.Title, Styles.Alternate
            ]}>
            Sign-in to your Flock account
          </Text>
        </View>
        <View style={[
            Styles.Card, styles.card
          ]}>
          <Button
            onPress={this.loginWithFacebook}
            icon={{
              name: 'facebook',
              type: 'entypo',
              size: Sizes.Text
            }}
            title='Sign in with Facebook'
            backgroundColor='#3B5998'
            textStyle={[Styles.Text, Styles.Emphasized, Styles.Alternate]}
            buttonStyle={styles.field} />
        </View>
        <View style={[styles.card]}>
          <Text style={[Styles.Text, Styles.Emphasized, Styles.SmallText, Styles.Center]}>
            OR
          </Text>
        </View>
        <View style={[
            Styles.Card, styles.card
          ]}>
          <FormLabel
            labelStyle={[
              Styles.Text,
              styles.field
            ]}>
            Email
          </FormLabel>
          <FormInput
            keyboardType='email-address'
            containerStyle={styles.field}
            inputStyle={Styles.Text}
            onChangeText={text => this.setState({
              email: text
            })}
            placeholder='The email associated with your Flock account' />
          {this.state.errorEmail && <FormValidationMessage labelStyle={[
              Styles.Text, Styles.SmallText, styles.field, styles.error
            ]}>
            {this.state.errorEmail}
          </FormValidationMessage>}
          <FormLabel labelStyle={[Styles.Text, styles.field, styles.fieldSpacing]}>
            Password
          </FormLabel>
          <FormInput
            secureTextEntry
            containerStyle={styles.field}
            inputStyle={Styles.Text}
            onChangeText={text => this.setState({
              password: text
            })}
            placeholder='An account will be created for you' />
          {this.state.errorPassword && <FormValidationMessage labelStyle={[
              Styles.Text, Styles.SmallText, styles.field, styles.error
            ]}>
            {this.state.errorPassword}
          </FormValidationMessage>}
          <Button
            disabled={!this.state.email || !this.state.password}
            icon={{
              name: 'login',
              type: 'entypo',
              size: Sizes.Text
            }}
            onPress={this.loginWithEmail}
            title='Sign in with Email'
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
    marginTop: 125
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
