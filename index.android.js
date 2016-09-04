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

import Nav from './app/components/Nav';

class ReactNativeRouter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Navigator
          initialRoute={{title: 'Awesome Scene', index: 0}}
          renderScene={(route, navigator) =>
            <Text style={styles.welcome}>Hello {route.title}!</Text>
          }
          navigationBar={
            <Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) =>
              {return (<Text>Cancel</Text>);},
              RightButton: (route, navigator, index, navState) =>
              {return (<Text>Done</Text>);},
              Title: (route, navigator, index, navState) =>
              {return (<Text>Awesome Nav Bar</Text>);}
            }}
            style={{backgroundColor: 'gray'}}
            />
          }
          style={{padding: 175, backgroundColor: 'red'}}
        />
        <Text>Hi page 1</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

AppRegistry.registerComponent('ReactNativeRouter', () => ReactNativeRouter);
