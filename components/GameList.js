import React from 'react';

import {
  List,
} from 'native-base';

import { GameListItem } from 'dustup/components/GameListItem'

export class GameList extends React.Component {
  render() {
    return (
      <List
        dataArray={ this.props.games }
        renderRow={ (item) => ( <GameListItem game={ item } navigation={ this.props.navigation } /> )}
      />
    );
  }
}
