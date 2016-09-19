import React, { Component } from 'react';
import {   AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Image,
  TouchableHighlight
} from 'react-native';

import Park from './park';
import styles from './Style.ios.js'

export default class ParkList extends Component {
  state = {
    latitude: 40.706659,
    longitude: -74.010127,
    nearbyParks: []
  }

  constructor() {
    super();
    this.navigate = this.navigate.bind(this);
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      (error) => alert(error),
      {enableHighAccuracy: true}
    );
  }

  componentDidUpdate() {
    fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.state.latitude},${this.state.longitude}&radius=1600&type=park&key=AIzaSyCdqkbjcltUsvJOn2aaIjjB0cKMOCZE6Os`)
    .then((response) => response.json())
    .then((json) => 
      this.setState({
        nearbyParks: json.results
      })
    )
  }

  navigate(park) {
    this.props.navigator.push({
      name: "ParkDetails", passProps: {id: park.place_id, originLat: this.state.latitude, originLong: this.state.longitude}
    })
  }

  render() {
    return (
      <Image style={styles.backgroundImage}
             source={require('./centralpark.png')}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.header}>
            <Text style={{color: 'white'}}>ParkFinder</Text>
          </View>
        </View>
        <View style={styles.parkListHolder}>
          {this.state.nearbyParks.map((park, i)=> {
            return(
              <Park key={i} press={() => this.navigate(park)} park={park}/>
            )
          })}
        </View>
      </Image>
    )
  }
}
