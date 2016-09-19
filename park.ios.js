import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import styles from './Style.ios.js';

export default class Park extends Component {
  render() {
    return (
      <View style={styles.listView} >
        <TouchableHighlight onPress={this.props.press}>
          <Text style={styles.listText}>{this.props.park.name}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}