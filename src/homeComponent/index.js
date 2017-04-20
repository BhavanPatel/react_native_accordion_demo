import React, { Component } from 'react';
import { View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import Home from './Home';
import ImageDetail from './ImageDetail';

class Main extends Component {

  render() {
    return (
      <Router>
      <Scene key="root">
        <Scene key="Home" hideNavBar hideTabBar
          component={Home} title="Home"
        initial='true' panHandlers={null}/>
        <Scene key="ImageDetail" hideNavBar={false} hideTabBar={false}
          component={ImageDetail} title="ImageDetail"
        panHandlers={null}/>
      </Scene>
    </Router>
    );
  }
}

export default Main;
