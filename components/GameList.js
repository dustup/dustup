import React from 'react';
import {FlatList} from 'react-native';

import {GameListItem} from 'dustup/components'

export default class GameList extends React.Component {
  render() {
    const {
      games,
      navigation
    } = this.props;

    return (
      <FlatList
        data={games}
        renderItem={({item}) => <GameListItem game={item} navigation={navigation}/>}
        keyExtractor={(game) => game.name}/>
    );
  }
}
