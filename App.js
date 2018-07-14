import React from 'react';
import {
  createStackNavigator
} from 'react-navigation';

import { GameListScreen } from 'dustup/components/GameListScreen';
import { CharacterListScreen } from 'dustup/components/CharacterListScreen';
import { MoveListScreen } from 'dustup/components/MoveListScreen';

const RootStack = createStackNavigator(
  {
    GameList: { screen: GameListScreen },
    CharacterList: { screen: CharacterListScreen },
    MoveList: { screen: MoveListScreen }
  },
  { initialRouteName: 'GameList' }
);

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}
