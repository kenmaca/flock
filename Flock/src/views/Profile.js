import React, {
  Component
} from 'react';
import {
  View, StyleSheet, Text, ScrollView, Image
} from 'react-native';
import {
  Colors, Sizes, Styles
} from '../Const';
import Firebase from '../utils/Firebase';

// components
import {
  Button, Icon
} from 'react-native-elements';
import Avatar from '../components/users/Avatar';
import ContentCoverSlider from '../components/common/ContentCoverSlider';
import UppercasedText from '../components/common/UppercasedText';
import RestaurantList from '../components/restaurants/RestaurantList';
import MapView from 'react-native-maps';

// animations
import * as Animatable from 'react-native-animatable';
const AnimatedAvatar = Animatable.createAnimatableComponent(Avatar);

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      _restaurants: {},
      checkins: {},
      isFollowing: false
    };

    // bindings
    this.follow = this.follow.bind(this);
  }

  componentDidMount() {

    // start on center page
    this.refs.pages.scrollTo({
      x: 0, y: 0, animated: true
    });

    // grab user based on uid
    this._userRef = this.props.uid && Firebase.database().ref(
      `users/${this.props.uid}`
    );
    this._userListener = this._userRef && this._userRef.on(
      'value', user => user.exists() && this.setState(user.val())
    );

    // grab following status
    this._followingRef = this.props.uid && Firebase.database().ref(
      `users/${Firebase.auth().currentUser.uid}/following/${this.props.uid}`
    );
    this._followingListener = this._followingRef && this._followingRef.on(
      'value', following => this.setState({
        isFollowing: following.exists() && following.val()
      })
    );

    // visits, delayed to smooth load transition
    // TODO: pretty hacky
    this._visitRef = this.props.uid && Firebase.database().ref(
      `visits/${this.props.uid}`
    );
    setTimeout(() => {
      this._visitListener = this._visitRef && this._visitRef.on(
        'value', visits => visits.exists() && this.setState({
          restaurants: Object.keys(visits.val()),
          _restaurants: visits.val()
        })
      );
    }, 500);
  }

  componentWillUnmount() {
    this._userRef && this._userRef.off('value', this._userListener);
    this._visitRef && this._visitRef.off('value', this._visitListener);
    this._followingRef && this._followingRef.off('value', this._followingListener);
  }

  follow() {
    Firebase.database().ref(
      `users/${Firebase.auth().currentUser.uid}/following/${this.props.uid}`
    ).set(!this.state.isFollowing);
  }

  groupByDay(checkins) {
    return Object
      .keys(checkins)
      .sort()
      .map(date => ({
        date: date,
        coords: checkins[date]
      }))
      .reduce((acc, val) => Object.assign(acc, {
        [Math.round(val.date / (3600 * 1000 * 24))]: (
          acc[Math.round(val.date / (3600 * 1000 * 24))]
          ? acc[Math.round(val.date / (3600 * 1000 * 24))].concat([val])
          : [val]
        )
      }), {});
  }

  groupsToPolylines(groups) {
    return Object
      .values(groups)
      .map((group, i) => (
        <MapView.Polyline
          key={`line-${i}`}
          coordinates={group.map(checkin => checkin.coords)}
          strokeWidth={4}
          strokeColor={`#${(Math.random() * 0xFFFFFF << 0).toString(16)}`} />
      ));
  }

  restaurantsToMarkers(restaurants, checkins) {
    return Object
      .values(restaurants)
      .map(restaurant => Object
        .keys(restaurant)

        // only use visits matching a checkin (for location data)
        .filter(date => checkins[date])
        .reduce((acc, val) => Object.assign(acc, {
          frequency: acc.frequency + 1,
          lastCheckin: val
        }), {frequency: 0})

      // only show restaurants with a corresponding checkin
      ).filter(checkin => checkin.frequency > 0)
      .map((checkin, i) => (
        <MapView.Marker
          key={`marker-${i}`}
          coordinate={checkins[checkin.lastCheckin].coords} />
      ));
  }

  render() {
    return (
      <View style={styles.container}>
        <ContentCoverSlider
          ref='container'
          title={this.state.fullName || this.state.screenName}>
          <ScrollView
            horizontal
            pagingEnabled
            ref='pages'
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll}>
            <ScrollView
              scrollEventThrottle={16}
              onScroll={event => this.refs.container.onScroll(event)}
              style={[styles.page, styles.timeline]}>
              <View style={[
                  Styles.Card, styles.card, styles.header
                ]}>
                <Avatar size={100} />
                <View style={styles.info}>
                  <UppercasedText style={[
                      Styles.Text, Styles.Emphasized, Styles.Title
                    ]}>
                    {this.state.fullName || ''}
                  </UppercasedText>
                  <Text style={[Styles.Text, Styles.Subtitle, Styles.BottomSpacing]}>
                    {this.state.screenName && `@${this.state.screenName}`}
                  </Text>
                  <Button
                    title={this.state.isFollowing ? 'Remove from my Flock': 'Add to my Flock'}
                    onPress={this.follow}
                    fontSize={Sizes.Text}
                    backgroundColor={this.state.isFollowing ? Colors.NegativeButton: Colors.PositiveButton}
                    buttonStyle={styles.addFlockButton}
                    icon={{
                      name: this.state.isFollowing ? 'clear': 'add',
                      size: Sizes.Text
                    }} />
                </View>
              </View>
              <View style={styles.stats}>
                <View style={styles.trophyCase}>
                  <Button
                    title='0 Influenced'
                    fontSize={Sizes.SmallText}
                    backgroundColor={Colors.Transparent}
                    color={Colors.SubduedText}
                    buttonStyle={styles.follow}
                    icon={{
                      name: 'twitter',
                      type: 'entypo',
                      size: Sizes.SmallText,
                      color: Colors.SubduedText
                    }} />
                    <Button
                      title='0 In Flock'
                      fontSize={Sizes.SmallText}
                      backgroundColor={Colors.Transparent}
                      color={Colors.SubduedText}
                      buttonStyle={styles.follow}
                      icon={{
                        name: 'users',
                        type: 'entypo',
                        size: Sizes.SmallText,
                        color: Colors.SubduedText
                      }} />
                    <Button
                      title={`${
                        this.state.restaurants.length
                      } Restaurants`}
                      fontSize={Sizes.SmallText}
                      backgroundColor={Colors.Transparent}
                      color={Colors.SubduedText}
                      buttonStyle={styles.follow}
                      icon={{
                        name: 'shop',
                        type: 'entypo',
                        size: Sizes.SmallText,
                        color: Colors.SubduedText
                      }} />
                </View>
              </View>
              <View style={styles.card}>
                <RestaurantList
                  scrollEnabled={false}
                  restaurants={this.state.restaurants} />
              </View>
            </ScrollView>
            <View style={styles.page}>
              <MapView
                style={styles.map}
                region={{
                  latitude: 43.70011,
                  longitude: -79.4163,
                  latitudeDelta: 0.5,
                  longitudeDelta: 0.5,
                }}>
                {
                  this.groupsToPolylines(
                    this.groupByDay(this.state.checkins)
                  ).concat(this.restaurantsToMarkers(
                    this.state._restaurants, this.state.checkins
                  ))
                }
              </MapView>
            </View>
          </ScrollView>
        </ContentCoverSlider>
        <View style={styles.footer}>
          <Icon
            name='face'
            color={Colors.AlternateText}
            underlayColor={Colors.Transparent}
            onPress={() => this.refs.pages.scrollTo({
              x: 0, y: 0, animated: true
            })} />
          <Icon
            name='map'
            color={Colors.AlternateText}
            underlayColor={Colors.Transparent}
            onPress={() => this.refs.pages.scrollTo({
              x: Sizes.Width, y: 0, animated: true
            })} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background
  },

  horizontalScroll: {
    flex: 1,
    height: Sizes.Height - 40
  },

  page: {
    width: Sizes.Width
  },

  card: {
    margin: Sizes.InnerFrame,
    marginTop: 0
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 125
  },

  info: {
    flex: 2,
    marginLeft: Sizes.InnerFrame
  },

  addFlockButton: {
    marginLeft: 0,
    alignSelf: 'flex-start'
  },

  stats: {
    margin: Sizes.OuterFrame,
    marginTop: 0,
    marginBottom: Sizes.InnerFrame,
    backgroundColor: Colors.Transparent
  },

  trophyCase: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  follow: {
    marginRight: 0,
    marginLeft: 0,
    padding: Sizes.InnerFrame / 2
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Sizes.InnerFrame,
    paddingLeft: Sizes.OuterFrame * 2,
    paddingRight: Sizes.OuterFrame * 2,
    justifyContent: 'space-between',
    backgroundColor: Colors.PositiveButton
  },

  frequented: {
    marginBottom: 0
  },

  map: {
    flex: 1
  }
});
