import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default class MyScene extends Component {

  render() {
    console.log('home props::', this.props)
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 30}}>Home</Text>
        <Text>Current scene: {this.props.title}</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={this.props.onForward}>
          <Text style={{fontSize: 15}}>New</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={this.props.onBack}>
          <Text>Edit</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    width: 70,
    height: 70,
    margin: 20,
    backgroundColor: 'red'
  }
});
