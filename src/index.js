import React, { Component } from 'react';
import { View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import Main from './homeComponent';
import Splash from './splashscreen_component';

export default class Proto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentWillMount() {
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {
    this.setState({ isLoading: false });

  };

  render() {
    if (this.state.isLoading === true) {
      return (
            <Splash/>
        );
    } else {
        return (
            <Main/>
        );
    }
  }
}

// export default Proto;
