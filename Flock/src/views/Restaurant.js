import React, {
  Component
} from 'react';
import {
  View, StyleSheet, Text, Image, ScrollView, RefreshControl
} from 'react-native';
import {
  Colors, Sizes, Styles
} from '../Const';
import {
  Actions
} from 'react-native-router-flux';

// components
import UppercasedText from '../components/common/UppercasedText';
import Question from '../components/comments/Question';
import Answer from '../components/comments/Answer';
import * as Animatable from 'react-native-animatable';
const AnimatedScrollView = Animatable.createAnimatableComponent(ScrollView);
import {
  Button
} from 'react-native-elements';

export default class Restaurant extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.cover}
          source={{
            uri: 'https://s3-media1.fl.yelpcdn.com/bphoto/hnYrthLBd-vZ4GZLleOXcA/o.jpg'
          }} />
        <AnimatedScrollView
          animation='bounceInUp'
          refreshControl={
            <RefreshControl
              refreshing={false}
              colors={[Colors.Transparent]}
              onRefresh={Actions.pop} />
          }
          style={styles.content}>
          <View style={[
              Styles.Card, styles.card, styles.header
            ]}>
            <UppercasedText style={[
                Styles.Text, Styles.Emphasized, Styles.Title, Styles.BottomSpacing
              ]}>
              BORALIA
            </UppercasedText>
            <Text style={[Styles.Text, Styles.Subtitle, Styles.BottomSpacing]}>
              Boralia celebrates the historic origins of Canadian cuisine. Our menu draws inspiration from traditional Aboriginal dishes, as well as the recipes of early settlers and immigrants of the 18th and 19th centuries.
            </Text>
            <View style={Styles.EqualColumns}>
              <UppercasedText style={Styles.Text, Styles.SmallText}>
                Canadian, Heritage, and Cute
              </UppercasedText>
            </View>
          </View>
          <View
            horizontal
            style={[Styles.Card, styles.card, styles.photos]}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Image
                style={styles.photo}
                source={{
                  uri: 'https://s3-media2.fl.yelpcdn.com/bphoto/YWhgTgKx2t-0uZ1W6We6NQ/o.jpg'
                }} />
              <Image
                style={styles.photo}
                source={{
                  uri: 'https://s3-media2.fl.yelpcdn.com/bphoto/9XHM_E5cBYY-UypYKrSfiA/o.jpg'
                }} />
              <Image
                style={styles.photo}
                source={{
                  uri: 'https://s3-media4.fl.yelpcdn.com/bphoto/bZ51B1Vf0fCbrYpn4eVHaw/o.jpg'
                }} />
              <Image
                style={styles.photo}
                source={{
                  uri: 'https://s3-media1.fl.yelpcdn.com/bphoto/ZYJuIq3JPPKMqXPAkeIcyQ/o.jpg'
                }} />
              <Image
                style={styles.photo}
                source={{
                  uri: 'https://s3-media1.fl.yelpcdn.com/bphoto/x0dXMXOLmjmIOtrFwbbBGA/o.jpg'
                }} />
            </ScrollView>
          </View>
          <Image
            source={{
              uri: 'https://c2.staticflickr.com/8/7585/26457494503_7f050b669f_o.png'
            }}
            style={[Styles.Card, styles.map]}>
            <Text style={[
                Styles.Text, Styles.Emphasized, Styles.Title,
                Styles.BottomSpacing, Styles.Alternate
              ]}>
              Location
            </Text>
            <Text style={[Styles.Text, Styles.Alternate]}>
              59 Ossington Avenue,
              Toronto, ON M6J 2Y9
            </Text>
            <Button
              title='Expand the map'
              fontSize={Sizes.Text}
              backgroundColor={Colors.PositiveButton}
              buttonStyle={styles.mapButton}
              icon={{
                name: 'map',
                type: 'entypo',
                size: Sizes.Text
              }} />
          </Image>
          <View style={[
              Styles.Card, styles.card, styles.hours
            ]}>
            <Text style={[
                Styles.Text, Styles.Emphasized, Styles.Title,
                Styles.BottomSpacing
              ]}>
              Business Hours
            </Text>
            <View style={Styles.EqualColumns}>
              <View>
                <Text style={[Styles.Text, Styles.Subtitle]}>
                  Tues - Friday
                </Text>
                <Text style={Styles.Text}>
                  5:00pm - 10:00pm
                </Text>
              </View>
              <View>
                <Text style={[Styles.Text, Styles.Subtitle]}>
                  Sat - Sun
                </Text>
                <Text style={Styles.Text}>
                  5:00pm - 9:00pm
                </Text>
              </View>
              <View>
                <Text style={[Styles.Text, Styles.Subtitle]}>
                  Monday
                </Text>
                <Text style={Styles.Text}>
                  Closed
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <Question>
              What did you order?
            </Question>
            <Answer />
            <Answer />
            <Answer />
            <Answer />
            <Question>
              Where did you park?
            </Question>
            <Answer />
            <Answer />
          </View>
        </AnimatedScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background
  },

  cover: {
    height: 200
  },

  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: Sizes.Height,
    width: Sizes.Width
  },

  card: {
    margin: Sizes.InnerFrame,
    marginTop: 0
  },

  header: {
    marginTop: 125
  },

  photos: {
    paddingLeft: 0,
    paddingRight: 0
  },

  photo: {
    marginLeft: Sizes.InnerFrame,
    borderRadius: Sizes.RoundedBorders,
    height: 100,
    width: 100
  },

  mapButton: {
    marginLeft: 0,
    marginTop: Sizes.InnerFrame,
    padding: Sizes.InnerFrame,
    alignSelf: 'flex-start'
  },

  hours: {
    marginTop: Sizes.InnerFrame
  }
});
