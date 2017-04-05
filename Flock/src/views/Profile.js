import React, {
  Component
} from 'react';
import {
  View, StyleSheet, Text, ScrollView, Image
} from 'react-native';
import {
  Colors, Sizes, Styles
} from '../Const';

// components
import {
  Button, Icon
} from 'react-native-elements';
import Avatar from '../components/users/Avatar';
import ContentCoverSlider from '../components/common/ContentCoverSlider';
import UppercasedText from '../components/common/UppercasedText';

// animations
import * as Animatable from 'react-native-animatable';
const AnimatedAvatar = Animatable.createAnimatableComponent(Avatar);

export default class Profile extends Component {
  componentDidMount() {

    // start on center page
    this.refs.pages.scrollTo({
      x: Sizes.Width, y: 0, animated: true
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ContentCoverSlider title='Alexandra Lee'>
          <ScrollView
            horizontal
            pagingEnabled
            ref='pages'
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll}>
            <View style={[styles.page, styles.frequented]}>
              <View style={[
                  Styles.Card, styles.card, styles.header
                ]}>
              </View>
            </View>
            <View style={[styles.page, styles.timeline]}>
              <View style={[
                  Styles.Card, styles.card, styles.header
                ]}>
                <Avatar size={100} />
                <View style={styles.info}>
                  <UppercasedText style={[
                      Styles.Text, Styles.Emphasized, Styles.Title
                    ]}>
                    Alexandra Lee
                  </UppercasedText>
                  <Text style={[Styles.Text, Styles.Subtitle, Styles.BottomSpacing]}>
                    @lexigirl
                  </Text>
                  <Button
                    title='Add to my Flock'
                    fontSize={Sizes.Text}
                    backgroundColor={Colors.PositiveButton}
                    buttonStyle={styles.addFlockButton}
                    icon={{
                      name: 'group-add',
                      size: Sizes.Text
                    }} />
                </View>
              </View>
              <View style={styles.stats}>
                <View style={styles.trophyCase}>
                  <Button
                    title='23 Influenced'
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
                      title='38 In Flock'
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
                      title='129 Restaurants'
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
              <View style={[
                  Styles.Card, styles.card
                ]}>
              </View>
            </View>
            <View style={[styles.page, styles.frequented]}>
              <View style={[
                  Styles.Card, styles.card, styles.header
                ]}>
              </View>
            </View>
          </ScrollView>
        </ContentCoverSlider>
        <View style={styles.footer}>
          <Icon
            name='favorite-border'
            color={Colors.AlternateText}
            underlayColor={Colors.Transparent}
            onPress={() => this.refs.pages.scrollTo({
              x: 0, y: 0, animated: true
            })} />
          <Icon
            name='face'
            color={Colors.AlternateText}
            underlayColor={Colors.Transparent}
            onPress={() => this.refs.pages.scrollTo({
              x: Sizes.Width, y: 0, animated: true
            })} />
          <Icon
            name='timeline'
            color={Colors.AlternateText}
            underlayColor={Colors.Transparent}
            onPress={() => this.refs.pages.scrollTo({
              x: Sizes.Width * 2, y: 0, animated: true
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
    height: Sizes.Height
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
  }
});
