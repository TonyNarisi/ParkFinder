/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import ParkList from './parkList';
import ParkDetails from './ParkDetails';


class ParkFinder extends Component {

  render() {
    return (
      <Navigator
        initialRoute={{name: "Home", index: 0}}
        renderScene={(route, navigator) => {
          if (route.name === "Home") {
            return <ParkList navigator={navigator} />
          }
          if (route.name === "ParkDetails") {
            return <ParkDetails navigator={navigator} {...route.passProps}/>
          }
        }}
        />
    );
  }
}

AppRegistry.registerComponent('ParkFinder', () => ParkFinder);
