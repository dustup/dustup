import React from 'react';

import { GameList } from 'dustup/components/GameList';

export class GameListScreen extends React.Component {
  static navigationOptions = {
    title: 'Games'
  };

  render() {
    return (
      <GameList />
    )
  }
}
