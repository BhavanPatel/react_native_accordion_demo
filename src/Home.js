import React, { Component } from 'react';
import { StyleSheet, Image, View, ScrollView, Text, TouchableHighlight } from 'react-native';
import PixAccordion from 'react-native-pixfactory-accordion';
import { Actions, Router } from 'react-native-router-flux';
import Data from './Data';

class Home extends Component {

  _handleChange(id, text) {
    console.log('Changed happened on Item:', id);
  }

  _setHeader(text) {
    return (<View style={styles.headerView}>
      <Text style={styles.header}>{text}</Text></View>);
  }

  _changePage(imageName) {
    var _data = {
      _data: imageName,
    };
    Actions.ImageDetail(_data);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {Data.dataObject.map((list) =>
            <PixAccordion
              key={list.id}
              renderHeader={() => this._setHeader(list.text)}
              easing={list.easing}
              onChange={() => this._handleChange(list.id, list.text)}
              collapsed={list.collapsed}
            >

              <TouchableHighlight
                onPress={() => this._changePage('image1')}>
                <Image style={{ width: 100, height: 50, margin: 5 }}
                  source={require('./images/sample1.jpg')}/>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => this._changePage('image2')}>
                <Image style={{ width: 100, height: 50, margin: 5 }}
                  source={require('./images/sample1.jpg')}/>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => this._changePage('image3')}>
                <Image style={{ width: 100, height: 50, margin: 5 }}
                  source={require('./images/sample1.jpg')}/>
              </TouchableHighlight>
            </PixAccordion>
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
  },
  headerView: {
    backgroundColor: '#F9B219',
    margin: 1,
  },
});

export default Home;
