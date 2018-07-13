import React from 'react';
import {
  Alert,
  FlatList,
  Text,
  ScrollView
} from 'react-native';

import { GameListItem } from 'dustup/components/GameListItem';
import { ggxrd } from 'dustup/data/games';
import { styles } from 'dustup/styles';

export class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [ ggxrd ]
    };
  }

  render() {
    return (
      <ScrollView styles={ styles.container }>
        <FlatList
          data={ this.state.games }
          renderItem={ ({ item }) => <GameListItem game={ item }/> }
          keyExtractor={ (item) => item.name }
        />
      </ScrollView>
    );
  }
}
