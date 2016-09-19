import React, { Component } from 'react';
import {   AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  MapView,
  Image,
  ScrollView,
  Navigator} from 'react-native';
import styles from './Style.ios.js'

export default class ParkDetails extends Component {
  state = {
    parkDetails: {},
    directions: []
  }

  constructor() {
    super();
    this.goBack = this.goBack.bind(this);
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
    return directions.replace(/<[^>]*>/g, "")
  }

  goBack() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <Image style={styles.backgroundImage} source={require('./centralpark.png')}>
        <TouchableHighlight onPress={this.goBack}>
          <View style={styles.backButton}>
            <Text style={{color: 'white', fontSize: 10}}>Back to Home</Text>
          </View>
        </TouchableHighlight>
        <View style={[styles.parkListHolder, styles.parkDetailsHolder]}>
          <View style={[styles.listView, styles.titleHolder]}>
            <Text style={styles.listText}>{this.state.parkDetails.name}</Text>
          </View>
          <View style={styles.listView}>
            <Text style={{fontSize: 7, textAlign: 'center'}}>{this.state.parkDetails.formatted_address}</Text>
          </View>
          { this.state.parkDetails.international_phone_number ? 
              <View style={styles.listView}>
                <Text style={styles.listText}>{this.state.parkDetails.international_phone_number}</Text>
              </View>
            :
              null
          }
          <View style={{alignItems: 'center'}}>
            <View style={[styles.listView, styles.directionHolder]}>
              <Text style={styles.listText}>Directions</Text>
            </View>
            {this.state.directions.map((direction, i)=>{
              return (
                <View style={styles.listView} key={i}>
                  <Text style={[styles.listText, styles.directionText]}>In {direction.distance.text} {this.regex(direction.html_instructions)}</Text>
                </View>
              )
            })}
          </View>
        </View>
      </Image>
    )
  }
}