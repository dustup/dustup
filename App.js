import React from 'react';
import {Font} from 'expo';

import {RootStackNavigator} from 'dustup/navigators';
import {FullScreenSpinner} from 'dustup/components';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
      SourceCodePro: require('dustup/fonts/SourceCodePro-Regular.ttf'),
    });
    this.setState({isReady: true});
  }

  render() {
    if (!this.state.isReady) {
      return (
        <FullScreenSpinner/>
      );
    }
    return (
      <RootStackNavigator/>
    );
  }
}
