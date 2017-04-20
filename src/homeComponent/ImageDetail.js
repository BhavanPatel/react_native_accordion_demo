import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

class ImageDetail extends Component {
  constructor(props) {
    super(props);
    console.log(this.props._dataPath);
    this.state = {
      data: this.props._data,
      image: this.props._dataPath,
    };
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <Text>{this.state.data}</Text>
        <Image style={{ width: 300, height: 300, margin: 5 }}
          source={require('../images/image1.jpg')}/>
      </View>
    );
  }
}

export default ImageDetail;
