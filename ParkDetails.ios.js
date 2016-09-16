import React, { Component } from 'react';
import {   AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  MapView,
  Navigator} from 'react-native';

export default class ParkDetails extends Component {
  state = {
    parkDetails: {},
    directions: []
  }

  constructor() {
    super();
    this.regex = this.regex.bind(this);
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

  componentDidUpdate() {
    fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${this.props.originLat},${this.props.originLong}&destination=${this.state.parkDetails.geometry.location.lat},${this.state.parkDetails.geometry.location.lng}&mode=walking&key=AIzaSyCKQZmLU_zFEJ0aC8Fwz17sAsxJYmwvlzA`)
    .then((response) => response.json())
    .then((json) => {
      this.setState({
        directions: json.routes[0].legs[0].steps
      })
    })
  }

  regex(directions){
    directions = directions.replace(/<[^>]*>/g, "")
    return directions
  }

  render() {
    return (
      <View>
        <Text style={{padding: 40}}>{this.state.parkDetails.name}</Text>
        <Text style={{padding: 45}}>{this.state.parkDetails.formatted_address}</Text>
        <Text style={{padding: 55}}>{this.state.parkDetails.international_phone_number}</Text>
        <View>
          {this.state.directions.map((direction, i)=>{
            return (
              <Text key={i}>In {direction.distance.text} {this.regex(direction.html_instructions)}</Text>
            )
          })}
        </View>
        <MapView
          style={{height: 200, margin: 40}}
          showsUserLocation={true}
          maxDelta={1.500}
        />
      </View>
    )
  }
}