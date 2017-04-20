import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, Dimensions } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
const logoImg = require('../images/sample1.jpg');

let deviceWidth = Dimensions.get('window').width - 25;

class Splash extends Component {
  render() {
    return (
          <View style={styles.splashView}>
            <Image style={styles.themeLogoImage} source={logoImg}/>
          <Text style={styles.splashLoadingText}>Loading...</Text>
          </View>
        );
  }
}

const styles = StyleSheet.create({
  splashView: {
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              padding: 10,
              alignItems: 'center',
              backgroundColor: '#fff',
            },
  splashLoadingText: {
              color: 'black',
              fontSize: 25,
            },
  themeLogoImage: {
              width: deviceWidth,
              height: 250,
              justifyContent: 'center',
              alignItems: 'center',
              resizeMode: 'contain',
            },
});

export default Splash;
