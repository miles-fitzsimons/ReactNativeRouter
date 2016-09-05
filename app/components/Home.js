import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class MyScene extends Component {

  render() {
    console.log('home props::', this.props)
    return (
      <View>
        <Text>Current scene: {this.props.title}</Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text>Tap me to go forward</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>Tap me to go back</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
