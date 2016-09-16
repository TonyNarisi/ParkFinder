import React, { Component } from 'react';
import {   AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator} from 'react-native';

export default class ParkDetails extends Component {
  state = {
    parkDetails: {}
  }

  componentDidMount() {
    fetch(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${this.props.id}&key=AIzaSyCdqkbjcltUsvJOn2aaIjjB0cKMOCZE6Os`)
    .then((response) => response.json())
    .then((json) => 
      this.setState({
        parkDetails: json.result
      })
    )
  }

  render() {
    return (
      <View>
        <Text style={{padding: 40}}>{this.state.parkDetails.name}</Text>
        <Text style={{padding: 40}}>{this.state.parkDetails.formatted_address}</Text>
        <Text style={{padding: 45}}>{this.state.parkDetails.international_phone_number}</Text>
      </View>

    )
  }
}