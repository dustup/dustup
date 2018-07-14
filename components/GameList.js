import React from 'react';

import { FlatList } from 'react-native';

import { GameListItem } from 'dustup/components'

export default class GameList extends React.Component {
  render() {
    return (
      <FlatList
        button='true'
        data={ this.props.games }
        renderItem={ ({ item }) => <GameListItem game={ item } navigation={ this.props.navigation } /> }
        keyExtractor={ (item) => item.name }
      />
    );
  }
}
