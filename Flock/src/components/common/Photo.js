import React, {
  Component
} from 'react';
import {
  View, StyleSheet, Image, Text
} from 'react-native';
import {
  Actions
} from 'react-native-router-flux';

export default class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.image
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{height: 100, width: 100}}
          source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
