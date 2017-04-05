import React, {
  Component
} from 'react';
import {
  View, StyleSheet, Text, Image, ScrollView, RefreshControl
} from 'react-native';
import {
  Colors, Sizes, Styles
} from '../../Const';
import {
  Actions
} from 'react-native-router-flux';

// components
import UppercasedText from './UppercasedText';
import * as Animatable from 'react-native-animatable';
const AnimatedScrollView = Animatable.createAnimatableComponent(ScrollView);
import {
  Icon
} from 'react-native-elements';

export default class ContentCoverSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      y: 0
    };

    // bindings
    this.onScroll = this.onScroll.bind(this);
  }

  onScroll(event) {
    const y = event.nativeEvent.contentOffset.y;
    (y > -150) ? this.setState({y: y}): Actions.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.statusBar, {
            opacity: this.state.y / 80
          }]}>
          <View style={styles.statusBarContent}>
            <View style={styles.statusBarTitle}>
              <UppercasedText style={[Styles.Text, Styles.Title, Styles.Alternate]}>
                {this.props.title || ''}
              </UppercasedText>
            </View>
            <Icon
              name='arrow-back'
              color={Colors.AlternateText}
              onPress={Actions.pop}
              underlayColor={Colors.Transparent} />
          </View>
        </View>
        <Image
          style={[
            styles.cover,
            {
              opacity: (100 - this.state.y) / 100
            }
          ]}
          source={{
            uri: 'https://s3-media1.fl.yelpcdn.com/bphoto/hnYrthLBd-vZ4GZLleOXcA/o.jpg'
          }} />
        <AnimatedScrollView
          scrollEventThrottle={16}
          onScroll={this.onScroll}
          animation='bounceInUp'
          style={styles.content}>
          {this.props.children}
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

  statusBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: Colors.MenuBackground,
    zIndex: 2
  },

  statusBarContent: {
    flexDirection: 'row',
    marginTop: Sizes.InnerFrame,
    padding: Sizes.InnerFrame,
    alignItems: 'center'
  },

  statusBarTitle: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center'
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
  }
});
