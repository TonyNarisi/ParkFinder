import React, { Component } from 'react';
import { Text, TouchableHighlight } from 'react-native';


export default class Park extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.press}>
        <Text>{this.props.park.name}</Text>
      </TouchableHighlight>
    )
  }
}