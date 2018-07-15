import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {StyleProvider} from 'native-base';

import getTheme from 'dustup/native-base-theme/components';
import platform from 'dustup/native-base-theme/variables/platform';

import {
  GameListScreen,
  CharacterListScreen,
  MoveListScreen,
} from 'dustup/screens';

const RootStack = createStackNavigator(
  {
    GameList: {screen: GameListScreen},
    CharacterList: {screen: CharacterListScreen},
    MoveList: {screen: MoveListScreen},
  },
  {
    initialRouteName: 'GameList',
    headerMode: 'none',
  },
);

export default class RootStackNavigator extends React.Component {
  render() {
    return(
      <StyleProvider style={getTheme(platform)}>
        <RootStack/>
      </StyleProvider>
    );
  }
}
