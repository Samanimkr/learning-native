/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    var imageInfo = {
      uri: 'https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg',
      description: 'cat photo'
    }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to My RN App!</Text>
        {/* <Image
          style={{width: 100, height: 100}}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        /> */}
        <Image style={styles.cat} source={imageInfo} ></Image>
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
  },
  cat: {
    width: 100,
    height: 100
  },
});
