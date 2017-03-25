import React, {
  Component
} from 'react';
import {
  AppRegistry, View
} from 'react-native';

// components
import Index from './src/Index';

export default class Flock extends Component {
  render() {
    return (
      <Index />
    );
  }
}

AppRegistry.registerComponent('Flock', () => Flock);
