import React, { Component } from 'react';
import { StyleSheet, Image, View, ScrollView, Text, TouchableHighlight } from 'react-native';
import { Icon, Container, Left, Right, Body } from 'native-base';
import PixAccordion from 'react-native-pixfactory-accordion';
import { Actions, Router } from 'react-native-router-flux';
import Data from './Data';

let lastObj = {
  index: 0,
  value: '',
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconName: 'ios-arrow-up',
    };
  }

  _handleChange(id, text) {

    if (lastObj.value !== '') {
      Data.dataObject[lastObj.index].iconName = lastObj.value;
    }

    if (Data.dataObject[id].iconName === 'ios-arrow-down') {
      Data.dataObject[id].iconName = 'ios-arrow-up';
      Data.dataObject[id].rightMenu = null;
    }else {
      Data.dataObject[id].iconName = 'ios-arrow-down';
      Data.dataObject[id].rightMenu = <View style={styles.headerView}>
        <Icon name='ios-create' style={{paddingLeft:10,}}/>
        <Icon name='ios-camera' style={{paddingLeft:10,}}/>
      <Icon name='ios-close-circle' style={{paddingLeft:10,paddingRight:5,}}/>
      </View>
    }

    lastObj.value = '';
    lastObj.index = 0;
    if (Data.dataObject[id]) {
      lastObj.index = id;
      lastObj.value = Data.dataObject[id].iconName;
    }
  }

  _setHeader(text, iconName, rightMenu) {
    return (<View style={styles.headerView}>
              <Left>
                <View style={styles.headerView}>
                  <Icon name={iconName} style={{paddingLeft:10,}}/>
                  <Text style={styles.header}>{text}</Text>
              </View>
              </Left>
              <Body/>
              <Right>
                  {rightMenu}
              </Right>
            </View>);
  }

  _changePage(imageName,imagePath) {
    var _data = {
      _data: imageName,
      _dataPath: imagePath,
    };
    Actions.ImageDetail(_data);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {/* <Container> */}
            {Data.dataObject.map((list) =>
              <PixAccordion
                key={list.id}
                renderHeader={() => this._setHeader(list.text, list.iconName, list.rightMenu)}
                easing={list.easing}
                onChange={() => this._handleChange(list.id, list.text)}
                collapsed={list.collapsed}
              >
              <View style={styles.content}>
                <TouchableHighlight
                  onPress={() => this._changePage('image1','../images/image1.jpg')}>
                  <Image style={{ width: 100, height: 50, margin: 5 }}
                    source={require('../images/image1.jpg')}/>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => this._changePage('image2','../images/image2.jpg')}>
                  <Image style={{ width: 100, height: 50, margin: 5 }}
                    source={require('../images/image2.jpg')}/>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => this._changePage('image3','../images/image3.jpg')}>
                  <Image style={{ width: 100, height: 50, margin: 5 }}
                    source={require('../images/image3.jpg')}/>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => this._changePage('image4','../images/image4.jpg')}>
                  <Image style={{ width: 100, height: 50, margin: 5 }}
                    source={require('../images/image4.jpg')}/>
                </TouchableHighlight>
                </View>
              </PixAccordion>
            )}
          {/* </Container> */}
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
    flexDirection: 'row',
    backgroundColor: '#F9B219',
    margin: 1,
    justifyContent: 'space-between',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowcontent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconState: {
    padding:30,
  },
});

export default Home;
